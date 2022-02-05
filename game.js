import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

// @desc the game function, infinite loop.
// @params currentTime: in miliseconds
// from the first function call.
function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Press ok to restart.")) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  // repainting pase. do nothing unless we get to a threshhold.
  // 1 / SNAKE_SPEED number of seconds between the snake moves.
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

// start loop for the first time
window.requestAnimationFrame(main);

// @desc update function, is called infinitly by the main function.
// calls the functions that update the food and snake positions on the board.
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

// @desc draw function, is called infinitly by the main function.
// redraws the snake and food every time it's called
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

// @desc checks if the snake "hit a wall" or hit itself = lose game.
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
