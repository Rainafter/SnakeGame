'use strict';


import { COL, ROW, SCALE, BORDER_W } from './const';
import { merge, isValidMove, PtRandom, ptEqual, droppedHead, droppedTail } from './utils';

class Snake {
  constructor (props) {
    this.state = props;
    this.updateDirection = this.updateDirection.bind(this);
  }

  render (prevState) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const { snake, food } = prevState;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    snake.forEach(s => {
      ctx.fillRect(s.x * SCALE, s.y * SCALE, SCALE, SCALE);
     });

    ctx.fillStyle = 'green';
    ctx.fillRect(food.x * SCALE, food.y * SCALE, SCALE, SCALE);

  }

  updateDirection (prevState, dir) {
    const state = isValidMove(dir.x, dir.y)
    ? merge(prevState, { directions: prevState.directions.concat([dir]) })
    : prevState.directions;
    return state;
  }

  nextState (prevState) {
    const nextState = merge(prevState, {
      directions: this.nextDirections(prevState),
      snake: this.nextSnake(prevState),
      food: this.nextFood(prevState),
    });
    return nextState;
  }

  nextDirections (prevState) {
    return prevState.directions.length > 1 ? droppedHead(prevState.directions) : prevState.directions;
  }

  nextHead (prevState) {
    const head = (prevState.snake.length === 0)
    ? PtRandom(COL, ROW)
    : {  // if snake already appers on screen, then compute where the new head should be
      x: (prevState.snake[0].x + prevState.directions[0].x),
      y: (prevState.snake[0].y + prevState.directions[0].y),
    }
    return head;
  }

  nextSnake (prevState) {
    const snake = this.willDie(prevState)
    ? []
    : this.willEat(prevState)
      ? [this.nextHead(prevState)].concat(prevState.snake) // append the new head with right direction to the exsiting snake body
      : [this.nextHead(prevState)].concat(droppedTail(prevState.snake));  // on the next frame, undraw the tail to maintain the right amount of segments to create the illustion of snake scrawling
    return snake;
  }

  nextFood (prevState) {
    return this.willEat(prevState)
    ? PtRandom(COL, ROW)
    : prevState.food
  }

  willEat (prevState) {
     return ptEqual(this.nextHead(prevState), prevState.food);
  }

  willCrashSelf (prevState) {
    return prevState.snake.find(pt => ptEqual(pt, this.nextHead(state)));
  }

  willDie (prevState) {
    const { snake } = prevState;
    if (snake.length >= 1) {
      const CRASH_BORDER = snake[0].x < 0 || snake[0].x >= COL || snake[0].y < 0 || snake[0].y >= ROW;
      if (CRASH_BORDER) return true;
    }
    return false;
  }
}

export default Snake;
