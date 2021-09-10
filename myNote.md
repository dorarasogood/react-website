## webpack config
1. port 3000。node_modules\react-scripts\scripts\start.js
2. public/index.html。node_modules\react-scripts\config\paths.js
3. webpack config。node_modules\react-scripts\config\webpack.config.js

## others
* (Hex)&#x???;
  (Dec)&#???;
  &#x2600;
  ☀️
  &#x1F319;
  &#x1F31E;<br>
* url不分大小寫<br>
* <br>
* <br>


<HashRouter>
  <ul>
    <li><Link to="/">first</Link></li>
    <li><Link to="/second">second</Link></li>
  </ul>
  <Switch>
    <Route exact path="/">
      <I18nSelect
        selected = {this.state.i18n}
        onChange = {this.i18nChange}
      />
    </Route>
    <Route exact path="/second">
      <ThemeToggle 
        darkMode = {this.state.darkMode}
        onChange = {this.themeToggleChange}
      />
    </Route>
  </Switch>
</HashRouter>




使用名称className而不是class作为属性名,是因为"class" 在JavaScript中是个保留字.
      <div className="myColor" 
          web-theme={ this.state.darkMode ? "dark" : "light" }>