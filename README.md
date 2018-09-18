# Welcome to Snake Game
This demo project is intend to recreate the classic snake by using ES6 JS without any external framework

## Approach
I approached the game logic with OOP manner however the inner logic ( snake logic ) is written with functional programming manner.

## Game Logic
* The game is rendered in canvas and upon each user input we update the state.
* the nextstep is always what need to happen next when certain condition is met.
For example:  the head of snake needs to be calculated on each re-render. and the head needs to be shifting 1 to the direction of user input.
* In order to create the illusion of snake moving around. in addition to add the head to the exiting snake array, I also need to remove the tail otherwise it would keep drawing of the tail leaving a trace where it used to be.
* I created HD canvas with custom pixel density you can input because by default on retina display the text render is quite blurry



## Get started
* install node_modules: run `npm i` to install any node package
* run code in dev mode: `npm run dev` ( this will start the game in development mode in localhost)
* play the game: click arrows to move the snake around, you can restart the game by clicking the red box after you die

## run a hosted version
* Demo: [HERE](http://xingyistudio.com/project/snake/index.html)
* Help: [README](http://xingyistudio.com/project/snake/README.md)
* Contact: [My Email](mailto:kginteractive@gmail.com)
