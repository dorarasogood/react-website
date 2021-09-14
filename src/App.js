import './App.css';
import { MainNavbar } from './components/MainNavbar/MainNavbar';
import { Cookie } from './toolkit/Cookie/Cookie';
import React from 'react';
import i18n from './i18n';
import {HashRouter,Link,Route,Switch} from "react-router-dom";
import { TopBanner } from './components/TopBanner/TopBanner';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { HomePage } from './pages/HomePage/HomePage'

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
      <div className="myWeb" 
          web-theme={ this.state.darkMode ? "dark" : "light" }>
        <HashRouter>
          <TopBanner 
            darkMode = {this.state.darkMode}
            themeToggleChange = {this.themeToggleChange}
            i18n = {this.state.i18n}
            i18nChange = {this.i18nChange}
          />

          <Switch>
            <Route exact path="/signin">
              SignInSignInSignInSignInSignIn<br/>
              <Link to="/">home</Link>
            </Route>
            <Route exact path="/signup">
              SignUpSignUpSignUpSignUpSignUp<br/>
              <Link to="/">home</Link>
            </Route>
            <Route exact path="/">
              <MainNavbar 
                darkMode = {this.state.darkMode}
              />
              <HomePage 
                i18n = {this.state.i18n}
                darkMode = {this.state.darkMode}
              />
            </Route>
            <Route exact path="/news">
              <MainNavbar 
                darkMode = {this.state.darkMode}
              />
              newsnewsnewsnewsnewsnews
            </Route>
            <Route exact path="/products/fruit">
              <MainNavbar 
                darkMode = {this.state.darkMode}
              />
              <ProductsPage 
                i18n = {this.state.i18n}
                product = "fruit"
              />
            </Route>
            <Route exact path="/products/flower">
              <MainNavbar 
                darkMode = {this.state.darkMode}
              />
              <ProductsPage 
                i18n = {this.state.i18n}
                product = "flower"
              />
            </Route>
            <Route exact path="/posts">
              <MainNavbar 
                darkMode = {this.state.darkMode}
              />
              PostsPostsPostsPostsPostsPosts
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
