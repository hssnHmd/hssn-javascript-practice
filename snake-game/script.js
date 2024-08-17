import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  snakeInterSection,
  getSnakeHead,
} from './snake.js';
import { draw as drawFood, update as updateFood } from './food.js';
import { outsidGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector('.game_board');

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lose, press ok to restart')) {
      window.location = '/';
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

  //   console.log('first');
  lastRenderTime = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsidGrid(getSnakeHead()) || snakeInterSection();
}
