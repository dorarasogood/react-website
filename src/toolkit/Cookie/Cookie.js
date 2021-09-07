class Cookie {
  setCookie(cookieName, cookieValue, expireDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expireDays*24*60*60*1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for(let i=0, length=cookieArray.length; i<length; i++){
      let cookie = cookieArray[i];
      while(cookie.charAt(0) === ' '){
        cookie = cookie.substring(1);
      }
      if(cookie.indexOf(name) === 0){
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
}

export { Cookie };