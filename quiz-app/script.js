const data = [
  {
    id: 1,
    question: 'Wich one of this fishs name is a fish ?',
    answers: [
      { answer: 'fish1', isCorrect: true },
      { answer: 'fish2', isCorrect: false },
      { answer: 'fish3', isCorrect: false },
      { answer: 'fish4', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'A flutter is a group ofh ?',
    answers: [
      { answer: 'butterflies', isCorrect: true },
      { answer: 'coat', isCorrect: false },
      { answer: 'camels', isCorrect: false },
      { answer: 'fish4', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'Wich one of this Coats name is a Coat?',
    answers: [
      { answer: 'coat1', isCorrect: false },
      { answer: 'coat2', isCorrect: true },
      { answer: 'coat3', isCorrect: false },
      { answer: 'coat4', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'Whow win the champions leages 2024 ?',
    answers: [
      { answer: 'Fc Bayren', isCorrect: false },
      { answer: 'Mun united', isCorrect: false },
      { answer: 'Real Madrid', isCorrect: true },
      { answer: 'Arsenal', isCorrect: false },
    ],
  },
  {
    id: 5,
    question: 'whitch one is a programmation language  ?',
    answers: [
      { answer: 'react js', isCorrect: false },
      { answer: 'laravel', isCorrect: false },
      { answer: 'PHP', isCorrect: true },
      { answer: 'flutter', isCorrect: false },
    ],
  },
  {
    id: 6,
    question: 'Who innovate nucleare pompe ?',
    answers: [
      { answer: 'Einstein', isCorrect: false },
      { answer: 'Hisemberge', isCorrect: false },
      { answer: 'Jhone wick', isCorrect: false },
      { answer: 'Oppenheimer', isCorrect: true },
    ],
  },
];

const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const game = document.querySelector('.game');
const result = document.querySelector('.result');
const submitButton = document.querySelector('.submit');
const playButton = document.querySelector('.play');

let qIdx = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;
/*
 * Result game
 */
const showResult = () => {
  game.style.display = 'none';
  result.style.display = 'flex';
  result.querySelector(
    '.correct'
  ).textContent = `Correct answers: ${correctCount}`;
  result.querySelector('.wrong').textContent = `Wrong answers: ${wrongCount}`;
  result.querySelector('.score').textContent = `Your score is : ${
    (correctCount - wrongCount) * 10
  }`;
};

/**
 * display question after aver submit
 */
const showQuestion = (qNum) => {
  if (qIdx === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNum].question;
  answersContainer.innerHTML = data[qNum].answers
    .map(
      (item, idx) =>
        `
        <div class="answer">
              <input type="radio" name="answer" id=${idx} value=${item.isCorrect} />
              <label for=${idx}>${item.answer}</label>
        </div>`
    )
    .join('');
  selectAnswer();
};

/**
 * Select answers
 */

const selectAnswer = () => {
  answersContainer.querySelectorAll('input').forEach((ele) => {
    ele.addEventListener('click', (e) => {
      selectedAnswer = e.target.value;
    });
  });
};
/**
 * Submit answer
 */

const submitAnswer = () => {
  submitButton.addEventListener('click', () => {
    if (selectedAnswer !== null) {
      selectedAnswer === 'true' ? correctCount++ : wrongCount++;
      qIdx++;
      showQuestion(qIdx);
    } else {
      alert('Please select an answer');
    }
  });
};

/**
 * replay again
 */

const playAgain = () => {
  qIdx = 0;
  correctCount = 0;
  wrongCount = 0;
  showQuestion(qIdx);
};
playButton.addEventListener('click', () => {
  game.style.display = 'block';
  result.style.display = 'none';
  playAgain();
});
showQuestion(qIdx);
submitAnswer();
