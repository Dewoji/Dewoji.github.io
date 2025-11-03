const canvas = document.getElementById('game');

const context = canvas.getContext('2d');
const gridSize = 20;
let snake = ({x:290, y:250}, {x:310, y:250}, {x:330, y:250}, {x:350, y:250}, {x:370, y:250}, {x:390, y:250});
let food = {x:410, y:250};
let direction = {x:-gridSize, y:0};

let interval;
let isGameOver = false;
let isRunning = false;

function startGame() {
    isRunning = true;
    isGameOver = false;

    snake = ({x:290, y:250}, {x:310, y:250}, {x:330, y:250}, {x:350, y:250}, {x:370, y:250}, {x:390, y:250}, {x:410, y:250});
    food = {x:410, y:250};
    direction = {x:-gridSize, y:0};

    clearInterval(interval);
    interval = setInterval(gameLoop, 100);
    drawGame();
}

function endGame() {
    isRunning = false;
    isGameOver = true;
    clearInterval(interval);
    drawGame();
}

function changeDirection() {
    if(isGameOver) return;

    if (event.key === 'ArrowUp' && direction.y === 0) {
            direction = { x: 0, y: -gridSize };
        } else if (event.key === 'ArrowDown' && direction.y === 0) {
            direction = { x: 0, y: gridSize };
        } else if (event.key === 'ArrowLeft' && direction.x === 0) {
            direction = { x: -gridSize, y: 0 };
        } else if (event.key === 'ArrowRight' && direction.x === 0) {
            direction = { x: gridSize, y: 0 };
        }
}

function collisionCheck() {
    const head = snake [0];
    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) return true;
    return snake.slice(1).some(segment => head.x === segment.x && head.y === segment.y);
}

function eatFood() {
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
        snake.push({});
        food = {x: Math.floor(Math.random * (canvas.size/gridSize)) * gridSize, y: Math.floor(Math.random() * (canvas.size/gridSize)) * gridSize};
    }
}

function gameLoop() {
    if(collisionCheck()) {
        endGame();
        return;
    }

    const head = {x: snake.x + direction.x, y: snake.y + direction.y};
    snake.unshift(head);

    eatFood();

    if(!isGameOver) snake.pop();

    drawGame();
}

function drawGame() {
    snake.forEach((segment, indedx) => {
        context.font = 'bold 18px arial';
        context.fillStyle = 'white';
        if (index === 0) {
                context.fillText('D', segment.x, segment.y + gridSize);
            } else if (index === 1) {
            	context.fillText('e', segment.x, segment.y + gridSize);
            } else if (index === 2) {
            	context.fillText('w', segment.x, segment.y + gridSize);
            } else if (index === 3) {
            	context.fillText('o', segment.x, segment.y + gridSize);
            } else if (index === 4) {
            	context.fillText('j', segment.x, segment.y + gridSize);
            } else {
                context.fillText('i', segment.x, segment.y + gridSize);
            }
    });

        context.fillText('i', food.x, food.y + gridSize);
}

window.addEventListener('keydown' () => if(!isRunning) {startGame()} else changeDirection);

drawGame();