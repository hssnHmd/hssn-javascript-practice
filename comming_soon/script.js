const seconds = document.querySelector('.seconds .number');
const minutes = document.querySelector('.minutes .number');
const hours = document.querySelector('.hours .number');
const days = document.querySelector('.days .number');

let secValue = 60;
let minValue = 12;
let hrsValue = 6;
let daysValue = 4;

const timerFunction = setInterval(() => {
  secValue--;
  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hrsValue--;
    minValue = 60;
  }
  if (hrsValue === 0) {
    daysValue--;
    hrsValue = 60;
  }
  if (daysValue === 0) {
    clearInterval(timerFunction);
  }
  seconds.textContent = secValue < 10 ? `0 ${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0 ${minValue}` : minValue;
  hours.textContent = hrsValue < 10 ? `0 ${hrsValue}` : hrsValue;
  days.textContent = daysValue < 10 ? `0 ${daysValue}` : daysValue;
}, 10);
