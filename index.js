let btn = document.getElementById("moon_icoin");


let changeIcon = function (icon) {
  icon.classList.toggle("bi-sun");
  
};
btn.onclick = function () {
  const addClass = document.getElementById("darl_mode");
  document.body.classList.toggle("dark_theme");
};

function darkTheme (){

 document.getElementById('site-header').classList.toggle('dark')
}