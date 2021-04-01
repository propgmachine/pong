// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

//Ball position and velocity
let positionX = 100;
let positionY = 100;
let velocityX = 8;
let velocityY = 0;

// Get the ball DOM element
const ball = document.querySelector('.ball');


// Computer paddle variables
const computer = document.querySelector('.computer-paddle');
let computerPositionY =100;

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Player paddle variables
const player = document.querySelector('.player-paddle');
let playerPositionY = 100;



// Update the pong world
function update() {

    positionX += velocityX;
    positionY += velocityY;

    computerPositionY = positionY;

    // If we hit the bottom, make ball go in up direction
    if (positionY >= GAME_AREA_HEIGHT - BALL_SIZE) {
        velocityY = -velocityY;
    }

    // If the ball hits the left or the right, reset it
    if (
        positionX <= 0 ||
        positionY >= GAME_AREA_WIDTH - BALL_SIZE
    ) {
        positionX = 100;
        positionY = 100;
    }

    // If the ball hits the computer paddle, bounce it
    if (
        positionX >= GAME_AREA_WIDTH - BALL_SIZE - PADDLE_WIDTH &&
        positionY >= computerPositionY - BALL_SIZE &&
        positionY <= computerPositionY + PADDLE_HEIGHT
    ) {
        velocityX = -velocityX;
    }

    // If the ball hits the player paddle, bounce it
    if (
        positionX >= BALL_SIZE - PADDLE_WIDTH &&
        positionY >= computerPositionY - BALL_SIZE &&
        positionY <= computerPositionY + PADDLE_HEIGHT
    ) {
        velocityX = -velocityX;
    }
    
    ball.style.top = '${positionY}px';
    ball.style.left = '${positionX}px';

    computer.style.top = '${computerPositionY}px';
    player.style.top = '${playerPositionY}px';
    
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);