var navButton = document.querySelector('.nav--button');
var navDrawer = document.querySelector('.landing--drawer');
var headerLogo = document.querySelector('.header--logo');
var header = document.querySelector('.header--main');

navButton.addEventListener('click', function(event) {
  navButton.classList.toggle('active');
  header.classList.toggle('dark');
  header.classList.toggle('stuck');
  navDrawer.classList.toggle('visible');
  headerLogo.classList.toggle('visible');
});
