var buttonShow = document.getElementById('playnow');
var buttonHide = document.querySelector('#hideLoginForm');

buttonShow.onclick = function () {
  var nav = document.getElementById('nav');
  nav.classList.add('animated', 'fadeOut', 'zerodelay');

  var box = document.getElementById('box');
  box.classList.add('animated', 'fadeOut', 'zerodelay');

  var login = document.getElementById('login');
  login.classList.add('loginshow', 'animated', 'fadeIn', 'zerodelay');
}
<<<<<<< HEAD

buttonHide.onclick = function () {
    
    document.querySelector('#nav', '#box').classList.remove('fadeOut');
    document.querySelector('#login').classList.remove('loginshow');
}
=======
>>>>>>> 461ccf82a40faeb33f39333edbf72bdff99aab43
