const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';

const quoteDisplay = document.getElementById('quoteDisplay');
const quoteInput = document.getElementById('quoteInput');
const quote =
  'all text contained by an element and all its children that are for formatting purposes';

const timer = document.querySelector('.timer');
// function getRandomQuote() {
//   return fetch(RANDOM_QUOTE_API_URL)
//     .then((res) => res.json())
//     .then((data) => data.content);
// }

let correct = true;
quoteInput.addEventListener('input', () => {
  const arrayQuote = quoteDisplay.querySelectorAll('span');
  const arrayValue = quoteInput.value.split('');
  arrayQuote.forEach((characterSpan, idx) => {
    const character = arrayValue[idx];
    if (character == null) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('inCorrect');
      correct = false;
    } else if (characterSpan.innerText === character) {
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('inCorrect');
    } else {
      characterSpan.classList.add('inCorrect');
      characterSpan.classList.remove('correct');
      correct = false;
    }
  });
  if (correct) renderNewQuote();
});

function renderNewQuote() {
  //   const quote = await getRandomQuote();
  //   quoteDisplay.innerText = quote;
  quote.split('').forEach((char) => {
    const spanChar = document.createElement('span');
    spanChar.innerText = char;
    quoteDisplay.appendChild(spanChar);
  });
  quoteInput.value = null;
  startTimer();
}

let startTime;
function startTimer() {
  timer.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}
renderNewQuote();
