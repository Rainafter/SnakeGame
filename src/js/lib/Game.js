'use strict';

import { COL, ROW, SCALE, NORTH, SOUTH, EAST, WEST } from './const';
import { PtRandom, PIXEL_RATIO, createHiDPICanvas, cancelAniFrame, requestAniFrame } from './utils';
import Snake from './Snake';
import StatusModal from './StatusModal';


class Game {
  constructor () {
    // Building the grid that snake can travel on and where the food can be placed
    this.state = {
      col: COL,
      row: ROW,
      directions: [WEST], // hold quened instructions
      snake: [],  // holds point segments of snake
      food: PtRandom(COL, ROW),
      frameID: null,
      canvas: null,
    };
    this.init = this.init.bind(this);
    this.stop = this.stop.bind(this);
    this.restart = this.restart.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    window.addEventListener('keyup', this.onKeyUp, false);
  }


  init () {
    if(!this.state.canvas) {
      const canvas = createHiDPICanvas(COL * SCALE, ROW * SCALE, 2); // w, h, pixeldenstiy
      document.querySelectorAll('#snake-container')[0].appendChild(canvas);
      const boxW = canvas.width / PIXEL_RATIO / 2;
      const boxH = canvas.height / PIXEL_RATIO / 2;
      this.boxInfo = {
        w: boxW,
        h: boxH,
        left: (canvas.width / PIXEL_RATIO - boxW) / 2,
        top: (canvas.height / PIXEL_RATIO - boxH) / 2,
      };
      this.state.canvas = canvas;
    }

    this.snake = new Snake(this.state);
    let then = window.mozAnimationStartTime || Date.now();
    let now;
    let delta;
    const interval = 55;
      const step = () => {
        this.frameID = requestAniFrame(step);
        now = window.mozAnimationStartTime || Date.now();
        delta = now - then;
        const prevState = this.state;
        if (delta > interval) {
          then = now - (delta % interval);
          this.state = this.snake.nextState(prevState);
          this.snake.render(prevState);
          if (this.snake.willDie(prevState)) {
            this.stop();
            this.state.canvas.addEventListener('click', this.restart, false);
          }
        }
      }
      this.frameID = requestAnimationFrame(step);
  }

  stop () {
    StatusModal.showDie(this.boxInfo.w, this.boxInfo.h, this.boxInfo.left, this.boxInfo.top);
    if (this.frameID) {
      cancelAniFrame(this.frameID);
      this.frameID = undefined;
    }
  }

  restart (evt) {
    evt.preventDefault();
    const { canvas } = this.state;
    const rect = canvas.getBoundingClientRect();
    const boxW = this.boxInfo.w;
    const boxH = this.boxInfo.h;
    const boxLeft = this.boxInfo.left;
    const boxTop = this.boxInfo.top;
    const x = evt.clientX - rect.left - boxLeft,
        y = evt.clientY - rect.top - boxTop;
    if (y > 0 && y < boxH && x > 0 && x < boxW) { // RESTART THE GAME IF USER CLICK WITHIN RED STATUS BOX
      this.init();
      this.state.canvas.removeEventListener('click', this.restart);
    }
  }


  onKeyUp (evt) {
    evt.preventDefault();
    let prevState = this.state;
    switch(evt.key) {
      case 'ArrowUp': this.state = this.snake.updateDirection(prevState, NORTH); break;
      case 'ArrowDown': this.state = this.snake.updateDirection(prevState, SOUTH); break;
      case 'ArrowLeft': this.state = this.snake.updateDirection(prevState, WEST); break;
      case 'ArrowRight': this.state = this.snake.updateDirection(prevState, EAST); break;
    }
  }
}

export default Game;
