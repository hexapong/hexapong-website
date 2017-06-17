var button = document.getElementById('playnow');

button.onclick = function () {
  var nav = document.getElementById('nav');
  nav.classList.add('animated', 'fadeOut', 'zerodelay');

  var box = document.getElementById('box');
  box.classList.add('animated', 'fadeOut', 'zerodelay');

  var login = document.getElementById('loginbox');
  login.classList.add('loginshow');
}

var playbutton = document.getElementById('playbutton');
var guestbutton = document.getElementById('guest');

playbutton.onclick = function () {
    alert("You need an account");
    
}