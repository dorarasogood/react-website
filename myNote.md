## webpack config
1. port 3000。node_modules\react-scripts\scripts\start.js
2. public/index.html。node_modules\react-scripts\config\paths.js
3. webpack config。node_modules\react-scripts\config\webpack.config.js
4. bootstrap css。node_modules\bootstrap\dist\css\bootstrap.css

## others
* (Hex)&#x???;
  (Dec)&#???;
  &#x2600;
  ☀️
  &#x1F319;
  &#x1F31E;<br>
* url不分大小寫<br>
* 設定背景顏色好方法 `min-height: 100vh;`<br>
* <br>
* <br>
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



有關按鈕css
.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}



function toDataUrl(src, callback, outputFormat) {
  var img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
    canvas = null;
  };

  img.src = src;
  if(img.complete || img.complete === undefined){
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    img.src = src;
  }
}

function urlCallback(dataUrl) {
  console.log("AAA001 = ", dataUrl);
  document.getElementById("abc123456").src= dataUrl;
}