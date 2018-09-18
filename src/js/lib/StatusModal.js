'use strict';

import { PIXEL_RATIO } from './utils';

export const StatusModal = {
  showDie: (w, h, left, top) => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#000';
    ctx.fillRect(canvas.width / 2, canvas.height / 2, w, h);

    ctx.lineWidth = 10;
    ctx.strokeStyle="#FF0000";
    ctx.strokeRect(left, top, w, h);

    ctx.font = "30px Arial";
    ctx.fillStyle = '#FFF';
    ctx.textAlign="center";
    ctx.fillText("Game Over!", canvas.width/PIXEL_RATIO/2, canvas.height/PIXEL_RATIO/2);
    ctx.font = "14px Arial";
    ctx.fillText("Click to start over...", canvas.width/PIXEL_RATIO/2, canvas.height/PIXEL_RATIO/2 + 20);
  }
}

export default StatusModal;
