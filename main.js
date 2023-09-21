document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('burger-btn').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('open');
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.header').classList.remove('open');
  }
});

document.getElementById('burger-menu').addEventListener('click', (event) => {
  event._isClickWithInMenu = true;
});
document.getElementById('burger-btn').addEventListener('click', (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', (event) => {
  if (event._isClickWithInMenu) return;
  document.querySelector('.header').classList.remove('open');
});
