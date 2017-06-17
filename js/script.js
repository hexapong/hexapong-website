var button = document.getElementById('playnow');

button.onclick = function () {
  var nav = document.getElementById('nav');
  nav.classList.add('navhidden');

  var box = document.getElementById('box');
  box.classList.add('animated', 'fadeOut');

  var login = document.getElementById('loginbox');
  login.classList.add('loginshow');
}

