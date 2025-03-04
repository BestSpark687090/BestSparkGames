const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state variables
let playerX = 100;
let playerY = 100;
let playerSpeed = 5;
let enemyX = 300;
let enemyY = 200;
let enemySpeed = 3;
let score = 0;
let gameOver = false;

// Event listeners
document.addEventListener('keydown', handleKeyDown);

// Game loop
function update() {
  if (gameOver) {
    return;
  }

  // Player movement
  if (keys.left) {
    playerX -= playerSpeed;
  }
  if (keys.right) {
    playerX += playerSpeed;
  }
  if (keys.up) {
    playerY -= playerSpeed;
  }
  if (keys.down) {
    playerY += playerSpeed;
  }

  // Enemy movement
  enemyX += enemySpeed;
  if (enemyX > canvas.width || enemyX < 0) {
    enemySpeed *= -1;
  }

  // Collision detection
  if (
    playerX < enemyX + 50 &&
    playerX + 50 > enemyX &&
    playerY < enemyY + 50 &&
    playerY + 50 > enemyY
  ) {
    gameOver = true;
    ctx.fillStyle = 'red';
    ctx.font = '30px Arial';
    ctx.fillText('Game Over!', canvas.width / 2 - 100, canvas.height / 2);
  }

  // Score update
  if (enemyX > canvas.width) {
    score++;
    enemyX = 0;
  }

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  ctx.fillStyle = 'blue';
  ctx.fillRect(playerX, playerY, 50, 50);

  // Draw the enemy
  ctx.fillStyle = 'red';
  ctx.fillRect(enemyX, enemyY, 50, 50);

  // Draw the score
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 30);

  requestAnimationFrame(update);
}

// Handle key presses
const keys = {
  left: false,
  right: false,
  up: false,
  down: false,
};
function handleKeyDown(e) {
  switch (e.key) {
    case 'ArrowLeft':
      keys.left = true;
      break;
    case 'ArrowRight':
      keys.right = true;
      break;
    case 'ArrowUp':
      keys.up = true;
      break;
    case 'ArrowDown':
      keys.down = true;
      break;
  }
}
document.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      keys.left = false;
      break;
    case 'ArrowRight':
      keys.right = false;
      break;
    case 'ArrowUp':
      keys.up = false;
      break;
    case 'ArrowDown':
      keys.down = false;
      break;
  }
});

// Start the game
update();