/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generic

Object.defineProperty(exports, "__esModule", {
    value: true
});
var merge = exports.merge = function merge() {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
        a[_key] = arguments[_key];
    }

    return Object.assign.apply(Object, [{}].concat(a));
};
var push = exports.push = function push(arr) {
    for (var _len2 = arguments.length, a = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        a[_key2 - 1] = arguments[_key2];
    }

    return [arr].concat(a);
};
//Point logic
var ptEqual = exports.ptEqual = function ptEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
};
var PtRandom = exports.PtRandom = function PtRandom(COL, ROW) {
    return { x: Math.floor(Math.random() * (COL - 1)), y: Math.floor(Math.random() * (ROW - 1)) };
};
var isValidMove = exports.isValidMove = function isValidMove(x, y) {
    return x === 0 && Math.abs(y) === 1 || y === 0 && Math.abs(x) === 1;
}; //making sure it's the allowed direction
var droppedHead = exports.droppedHead = function droppedHead(arr) {
    return arr.slice(1);
};
var droppedTail = exports.droppedTail = function droppedTail(arr) {
    return arr.slice(0, arr.length - 1);
};

//canvas retina
var PIXEL_RATIO = exports.PIXEL_RATIO = function (ratio) {
    if (ratio) return ratio;
    var ctx = document.createElement('canvas').getContext('2d'),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    return dpr / bsr;
}();

var createHiDPICanvas = exports.createHiDPICanvas = function createHiDPICanvas(w, h, ratio) {
    if (!ratio) {
        ratio = PIXEL_RATIO;
    }
    var canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas;
};

var cancelAniFrame = exports.cancelAniFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.msCancelAnimationFrame;

var requestAniFrame = exports.requestAniFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Game View

Object.defineProperty(exports, "__esModule", {
  value: true
});
var COL = exports.COL = 70;
var ROW = exports.ROW = 50;
var SCALE = exports.SCALE = 15;

// Game Controller
var NORTH = exports.NORTH = { x: 0, y: -1 };
var SOUTH = exports.SOUTH = { x: 0, y: 1 };
var WEST = exports.WEST = { x: -1, y: 0 };
var EAST = exports.EAST = { x: 1, y: 0 };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(4);

var _Game2 = _interopRequireDefault(_Game);

var _app = __webpack_require__(7);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _Game2.default();
app.init();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(1);

var _utils = __webpack_require__(0);

var _Snake = __webpack_require__(5);

var _Snake2 = _interopRequireDefault(_Snake);

var _StatusModal = __webpack_require__(6);

var _StatusModal2 = _interopRequireDefault(_StatusModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    // Building the grid that snake can travel on and where the food can be placed
    this.state = {
      col: _const.COL,
      row: _const.ROW,
      directions: [_const.WEST], // hold quened instructions
      snake: [], // holds point segments of snake
      food: (0, _utils.PtRandom)(_const.COL, _const.ROW),
      frameID: null,
      canvas: null
    };
    this.init = this.init.bind(this);
    this.stop = this.stop.bind(this);
    this.restart = this.restart.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    window.addEventListener('keyup', this.onKeyUp, false);
  }

  _createClass(Game, [{
    key: 'init',
    value: function init() {
      var _this = this;

      if (!this.state.canvas) {
        var canvas = (0, _utils.createHiDPICanvas)(_const.COL * _const.SCALE, _const.ROW * _const.SCALE, 2); // w, h, pixeldenstiy
        document.querySelectorAll('#snake-container')[0].appendChild(canvas);
        var boxW = canvas.width / _utils.PIXEL_RATIO / 2;
        var boxH = canvas.height / _utils.PIXEL_RATIO / 2;
        this.boxInfo = {
          w: boxW,
          h: boxH,
          left: (canvas.width / _utils.PIXEL_RATIO - boxW) / 2,
          top: (canvas.height / _utils.PIXEL_RATIO - boxH) / 2
        };
        this.state.canvas = canvas;
      }

      this.snake = new _Snake2.default(this.state);
      var then = window.mozAnimationStartTime || Date.now();
      var now = void 0;
      var delta = void 0;
      var interval = 55;
      var step = function step() {
        _this.frameID = (0, _utils.requestAniFrame)(step);
        now = window.mozAnimationStartTime || Date.now();
        delta = now - then;
        var prevState = _this.state;
        if (delta > interval) {
          then = now - delta % interval;
          _this.state = _this.snake.nextState(prevState);
          _this.snake.render(prevState);
          if (_this.snake.willDie(prevState)) {
            _this.stop();
            _this.state.canvas.addEventListener('click', _this.restart, false);
          }
        }
      };
      this.frameID = requestAnimationFrame(step);
    }
  }, {
    key: 'stop',
    value: function stop() {
      _StatusModal2.default.showDie(this.boxInfo.w, this.boxInfo.h, this.boxInfo.left, this.boxInfo.top);
      if (this.frameID) {
        (0, _utils.cancelAniFrame)(this.frameID);
        this.frameID = undefined;
      }
    }
  }, {
    key: 'restart',
    value: function restart(evt) {
      evt.preventDefault();
      var canvas = this.state.canvas;

      var rect = canvas.getBoundingClientRect();
      var boxW = this.boxInfo.w;
      var boxH = this.boxInfo.h;
      var boxLeft = this.boxInfo.left;
      var boxTop = this.boxInfo.top;
      var x = evt.clientX - rect.left - boxLeft,
          y = evt.clientY - rect.top - boxTop;
      if (y > 0 && y < boxH && x > 0 && x < boxW) {
        // RESTART THE GAME IF USER CLICK WITHIN RED STATUS BOX
        this.init();
        this.state.canvas.removeEventListener('click', this.restart);
      }
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(evt) {
      evt.preventDefault();
      var prevState = this.state;
      switch (evt.key) {
        case 'ArrowUp':
          this.state = this.snake.updateDirection(prevState, _const.NORTH);break;
        case 'ArrowDown':
          this.state = this.snake.updateDirection(prevState, _const.SOUTH);break;
        case 'ArrowLeft':
          this.state = this.snake.updateDirection(prevState, _const.WEST);break;
        case 'ArrowRight':
          this.state = this.snake.updateDirection(prevState, _const.EAST);break;
      }
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(1);

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
  function Snake(props) {
    _classCallCheck(this, Snake);

    this.state = props;
    this.updateDirection = this.updateDirection.bind(this);
  }

  _createClass(Snake, [{
    key: 'render',
    value: function render(prevState) {
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
      var snake = prevState.snake,
          food = prevState.food;


      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'red';
      snake.forEach(function (s) {
        ctx.fillRect(s.x * _const.SCALE, s.y * _const.SCALE, _const.SCALE, _const.SCALE);
      });

      ctx.fillStyle = 'green';
      ctx.fillRect(food.x * _const.SCALE, food.y * _const.SCALE, _const.SCALE, _const.SCALE);
    }
  }, {
    key: 'updateDirection',
    value: function updateDirection(prevState, dir) {
      var state = (0, _utils.isValidMove)(dir.x, dir.y) ? (0, _utils.merge)(prevState, { directions: prevState.directions.concat([dir]) }) : prevState.directions;
      return state;
    }
  }, {
    key: 'nextState',
    value: function nextState(prevState) {
      var nextState = (0, _utils.merge)(prevState, {
        directions: this.nextDirections(prevState),
        snake: this.nextSnake(prevState),
        food: this.nextFood(prevState)
      });
      return nextState;
    }
  }, {
    key: 'nextDirections',
    value: function nextDirections(prevState) {
      return prevState.directions.length > 1 ? (0, _utils.droppedHead)(prevState.directions) : prevState.directions;
    }
  }, {
    key: 'nextHead',
    value: function nextHead(prevState) {
      var head = prevState.snake.length === 0 ? (0, _utils.PtRandom)(_const.COL, _const.ROW) : { // if snake already appers on screen, then compute where the new head should be
        x: prevState.snake[0].x + prevState.directions[0].x,
        y: prevState.snake[0].y + prevState.directions[0].y
      };
      return head;
    }
  }, {
    key: 'nextSnake',
    value: function nextSnake(prevState) {
      var snake = this.willDie(prevState) ? [] : this.willEat(prevState) ? [this.nextHead(prevState)].concat(prevState.snake) // append the new head with right direction to the exsiting snake body
      : [this.nextHead(prevState)].concat((0, _utils.droppedTail)(prevState.snake)); // on the next frame, undraw the tail to maintain the right amount of segments to create the illustion of snake scrawling
      return snake;
    }
  }, {
    key: 'nextFood',
    value: function nextFood(prevState) {
      return this.willEat(prevState) ? (0, _utils.PtRandom)(_const.COL, _const.ROW) : prevState.food;
    }
  }, {
    key: 'willEat',
    value: function willEat(prevState) {
      return (0, _utils.ptEqual)(this.nextHead(prevState), prevState.food);
    }
  }, {
    key: 'willCrashSelf',
    value: function willCrashSelf(prevState) {
      var _this = this;

      return prevState.snake.find(function (pt) {
        return (0, _utils.ptEqual)(pt, _this.nextHead(state));
      });
    }
  }, {
    key: 'willDie',
    value: function willDie(prevState) {
      var snake = prevState.snake;

      if (snake.length >= 1) {
        var CRASH_BORDER = snake[0].x < 0 || snake[0].x >= _const.COL || snake[0].y < 0 || snake[0].y >= _const.ROW;
        if (CRASH_BORDER) return true;
      }
      return false;
    }
  }]);

  return Snake;
}();

exports.default = Snake;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusModal = undefined;

var _utils = __webpack_require__(0);

var StatusModal = exports.StatusModal = {
  showDie: function showDie(w, h, left, top) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = '#000';
    ctx.fillRect(canvas.width / 2, canvas.height / 2, w, h);

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(left, top, w, h);

    ctx.font = "30px Arial";
    ctx.fillStyle = '#FFF';
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", canvas.width / _utils.PIXEL_RATIO / 2, canvas.height / _utils.PIXEL_RATIO / 2);
    ctx.font = "14px Arial";
    ctx.fillText("Click to start over...", canvas.width / _utils.PIXEL_RATIO / 2, canvas.height / _utils.PIXEL_RATIO / 2 + 20);
  }
};

exports.default = StatusModal;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=snake.bundle.js.map