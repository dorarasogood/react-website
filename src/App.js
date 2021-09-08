import './App.css';
import { I18nSelect } from './components/I18nSelect/I18nSelect';
import { MainNavbar } from './components/MainNavbar/MainNavbar';
import { Cookie } from './toolkit/Cookie/Cookie';
import React from 'react';
import i18n from './i18n';// import i18n from 'i18next';這個也可以，但不太懂
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';

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
      <div className="myColor" web-theme="dark">
        123

        {/*(Hex)&#x???;*/}
        {/*(Dec)&#???;*/}
        &#x2600;
        ☀️
        &#x1F319;
        &#x1F31E;
        
        <MainNavbar />
        <I18nSelect
          selected = {this.state.i18n}
          onChange = {this.i18nChange}
        />
        <ThemeToggle 
          darkMode = {this.state.darkMode}
          onChange = {this.themeToggleChange}
        />
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
