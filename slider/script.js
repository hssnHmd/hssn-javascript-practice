const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const slider = document.querySelector('.slider_container');
const images = document.querySelectorAll('.image');
const slidecercle = document.querySelector('.slider_cercle');

console.log(images.length);

let sildeNum = 1;

for (let i = 0; i < images.length; i++) {
  const cercle = document.createElement('div');
  cercle.className = 'cercle';
  slidecercle.appendChild(cercle);
}

const cercles = document.querySelectorAll('.cercle');
cercles[0].style.backgroundColor = '#b44646';

const resetBcgColor = () => {
  cercles.forEach((btn) => {
    btn.style.backgroundColor = 'transparent';
  });
};

cercles.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    resetBcgColor();
    slider.style.transform = `translate(-${idx * 800}px)`;
    sildeNum = idx + 1;
    btn.style.backgroundColor = '#b44646';
  });
});

function nextSlide() {
  slider.style.transform = `translateX(-${sildeNum * 800}px)`;
  sildeNum++;
}

function firstSlide() {
  slider.style.transform = `translateX(-0px)`;
  sildeNum = 1;
}
function preveSlide() {
  slider.style.transform = `translateX(-${(sildeNum - 2) * 800}px)`;
  sildeNum--;
}

function lastSlide() {
  slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
  sildeNum = images.length;
}
right.addEventListener('click', () => {
  sildeNum < images.length ? nextSlide() : firstSlide();
  resetBcgColor();
  cercles[sildeNum - 1].style.backgroundColor = '#b44646';
});

left.addEventListener('click', () => {
  sildeNum > 1 ? preveSlide() : lastSlide();
  resetBcgColor();
  cercles[sildeNum - 1].style.backgroundColor = '#b44646';
});
