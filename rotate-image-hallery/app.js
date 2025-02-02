const containerEl = document.querySelector('.container'),
  prevBtn = document.querySelector('#prev'),
  nextBtn = document.querySelector('#next');

let x = 0;
let timer;
prevBtn.addEventListener('click', () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextBtn.addEventListener('click', () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  containerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 4000);
}

updateGallery();
