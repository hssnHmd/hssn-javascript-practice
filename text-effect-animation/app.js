const containerEl = document.querySelector('.container');

let career = ['web Developer', 'Designer', 'Youtuber'];
let careerIdx = 0;
let charachterIdx = 0;

const animateChar = () => {
  charachterIdx++;
  containerEl.innerHTML = `
          <h1>I am a ${career[careerIdx].slice(0, charachterIdx)}</h1>
    `;
  if (charachterIdx === career[careerIdx].length) {
    careerIdx++;
    charachterIdx = 0;
  }
  if (careerIdx === career.length) {
    careerIdx = 0;
  }
  setTimeout(animateChar, 400);
};
animateChar();
