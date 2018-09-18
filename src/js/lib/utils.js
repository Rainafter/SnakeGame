'use strict';

// Generic
export const merge = (...a) => Object.assign({}, ...a);
export const push = (arr, ...a) => [arr, ...a];
//Point logic
export const ptEqual = (p1, p2) => p1.x === p2.x && p1.y === p2.y;
export const PtRandom = (COL, ROW) => ({ x: Math.floor(Math.random() * (COL - 1)), y: Math.floor(Math.random() * (ROW - 1)) });
export const isValidMove = (x,y) => (x === 0 && Math.abs(y) === 1) || (y === 0 && Math.abs(x) === 1); //making sure it's the allowed direction
export const droppedHead = (arr) => arr.slice(1);
export const droppedTail = (arr) => arr.slice(0, arr.length - 1)

//canvas retina
export const PIXEL_RATIO = ((ratio) => {
  if (ratio) return ratio;
  const ctx = document.createElement('canvas').getContext('2d'),
      dpr = window.devicePixelRatio || 1,
      bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
  return dpr / bsr;
})();

export const createHiDPICanvas = (w, h, ratio) => {
    if (!ratio) { ratio = PIXEL_RATIO; }
    const canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas;
}

export const cancelAniFrame = window.cancelAnimationFrame
                                    || window.mozCancelAnimationFrame
                                    || window.mozCancelRequestAnimationFrame
                                    || window.mozCancelAnimationFrame
                                    || window.webkitCancelRequestAnimationFrame
                                    || window.msCancelRequestAnimationFrame
                                    || window.msCancelAnimationFrame;

export const requestAniFrame = window.requestAnimationFrame
                                     || window.mozRequestAnimationFrame
                                     || window.webkitRequestAnimationFrame
                                     || window.msRequestAnimationFrame;
