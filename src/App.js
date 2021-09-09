import './App.css';
import { I18nSelect } from './components/I18nSelect/I18nSelect';
import { MainNavbar } from './components/MainNavbar/MainNavbar';
import { Cookie } from './toolkit/Cookie/Cookie';
import React from 'react';
import i18n from './i18n';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import {HashRouter,Link,Route,Switch} from "react-router-dom";
import Button from 'react-bootstrap/Button'

function i18nInit() {
  let cookie = new Cookie();
  let language = cookie.getCookie("i18n");
  cookie = null;//remove reference and delete
  if( language !== ""){
    i18n.changeLanguage(language);
    return language;
  }
  return "tw";
}

function themeInit() {
  let cookie = new Cookie();
  let darkMode = cookie.getCookie("darkMode");
  cookie = null;
  if( darkMode !== "")
    return (darkMode === 'true')
  return false;
}

class App extends React.Component {
  constructor(props){
    super(props);
    let language = i18nInit();
    let darkModeBoolean = themeInit();
    this.state = {
      i18n: language,
      darkMode: darkModeBoolean
    };

    this.i18nChange = this.i18nChange.bind(this);
    this.themeToggleChange = this.themeToggleChange.bind(this);
  }

  i18nChange(){
    let language = document.getElementById("i18nSelector").value;
    i18n.changeLanguage(language);
    let cookie = new Cookie();
    cookie.setCookie("i18n", language, 1);
    cookie = null;
    this.setState({i18n: language});
  }

  themeToggleChange(){
    // State 的更新可能是非同步的，所以要這樣寫
    this.setState(function(state) {
      let cookie = new Cookie();
      cookie.setCookie("darkMode", (!state.darkMode).toString(), 1);
      cookie = null;
      return {
        darkMode: !state.darkMode
      };
    });
  }

  render(){
    return (
      // 使用名称className而不是class作为属性名,是因为"class" 在JavaScript中是个保留字.
      <div className="myColor" 
          web-theme={ this.state.darkMode ? "dark" : "light" }>

        <div className="settingLocation">
          <div className="logoLocation">
            pic
          </div>

          <div>
            <div className="up">
              <div className="i18nLocation">
                <ThemeToggle 
                  darkMode = {this.state.darkMode}
                  onChange = {this.themeToggleChange}
                />
              </div>
              <div className="themeLocation">
                <I18nSelect
                  selected = {this.state.i18n}
                  onChange = {this.i18nChange}
                />
              </div>
            </div>
            <div align="right" className="down">
              <Button variant="success">Success</Button>{' '}
              <Button variant="outline-primary">Primary</Button>{' '}
            </div>
          </div>
          
        </div>

        
        
        
        
        <MainNavbar />

        
        {/* <HashRouter>
            <ul>
              <li><Link to="/">first</Link></li>
              <li><Link to="/second">second</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" render={(props) => (
                <I18nSelect
                  selected = {this.state.i18n}
                  onChange = {this.i18nChange}
                />
              )} />
              <Route exact path="/second">
                <ThemeToggle 
                  darkMode = {this.state.darkMode}
                  onChange = {this.themeToggleChange}
                />
              </Route>
            </Switch>
        </HashRouter> */}

        <div className="shopping">123</div>
        


        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
        123<br />
      </div>
    );
  }
}

export default App;
