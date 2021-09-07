import './App.css';
import { I18nSelect } from './components/I18nSelect/I18nSelect';
import { MainNavbar } from './components/MainNavbar/MainNavbar';
import { Cookie } from './toolkit/Cookie/Cookie';
import React from 'react';
import i18n from './i18n';// import i18n from 'i18next';這個也可以，但不太懂

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

class App extends React.Component {
  constructor(props){
    super(props);
    let language = i18nInit();
    this.state = {
      i18n: language
    };

    this.i18nChange = this.i18nChange.bind(this);
  }

  i18nChange(){
    let language = document.getElementById("i18nSelector").value;
    i18n.changeLanguage(language);
    let cookie = new Cookie();
    cookie.setCookie("i18n", language, 1);
    cookie = null;
    this.setState({i18n: language});
  }

  render(){
    return (
      // 使用名称className而不是class作为属性名,是因为"class" 在JavaScript中是个保留字.
      <div className="myColor">
        123
        <MainNavbar />
        <I18nSelect
          selected = {this.state.i18n}
          onChange = {this.i18nChange}
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
