document.getElementById('dark-mode-btn').addEventListener('click', function (e) {
  const toggler = document.body;
  toggler.classList.toggle('dark-mode');
  const target = e.target;
  target.classList.toggle('fa-moon');
  target.classList.toggle('fa-sun');
});