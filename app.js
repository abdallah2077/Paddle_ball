import Game from './game.js';

const canvas = document.getElementById('gamescreen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;

ctx.clearRect(0,0,600,500);

ctx.fillStyle = '#00F';

let game = new Game(GAME_WIDTH, GAME_HEIGHT);


let lastTime = 0;
let timestamp = +new Date();

function gameLoop(timestamp) {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;

	ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
	game.update(deltaTime);
	game.draw(ctx);


	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
