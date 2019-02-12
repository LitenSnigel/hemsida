function validate() {
  var un = document.loginform.un.value;
  var pw = document.loginform.pw.value;
  var username = "username";
  var password = "password";
  localStorage.setItem("loggedIn", "false");
  window.sessionStorage.setItem("loggedIn", "false");
  if ((un === username) && (pw === password)) {
    window.location = "index.html";
    window.sessionStorage["loggedIn"] = "true";
    return true;
  }
  else {
    alert ("Login was unsuccessful, please check your username and password");
    return false;
  }
}

function logOut() {
  window.sessionStorage["loggedIn"] = "false";
}
