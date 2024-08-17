const navbarEl = document.querySelector('.navbar');
const bottomContainerEl = document.querySelector('.bottom-container');

console.log(navbarEl.offsetHeight);
window.addEventListener('scroll', function () {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 20
  ) {
    navbarEl.classList.add('active');
  } else {
    navbarEl.classList.remove('active');
  }
});
