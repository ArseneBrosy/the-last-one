/**
 * Player movements
 * @author ArseneBrosy
 * @since 2025-02-07
 */

const ACCELERATION = 0.3;
const MAX_SPEED = 15;
const DECELERATION = 0.1;

let player = {
  x: 0,
  y: 0,
  velocityX: 0,
  velocityY: 0,
}
let directionX = 0;
let directionY = 0;

function movePlayer() {
  // acceleration
  player.velocityX += directionX * ACCELERATION * deltaTime;
  player.velocityY += directionY * ACCELERATION * deltaTime;

  // max speed
  const maxSpeed = MAX_SPEED * deltaTime;
  player.velocityX = Math.min(Math.max(player.velocityX, -maxSpeed), maxSpeed);
  player.velocityY = Math.min(Math.max(player.velocityY, -maxSpeed), maxSpeed);

  // deceleration
  player.velocityX += (directionX === 0 ? -player.velocityX * DECELERATION * deltaTime : 0);
  player.velocityY += (directionY === 0 ? -player.velocityY * DECELERATION * deltaTime : 0);

  // move player
  player.x += player.velocityX;
  player.y += player.velocityY;
}

document.addEventListener('keydown', (e) => {
  //region X
  if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
    directionX--;
  }
  if (e.code === 'KeyD' || e.code === 'ArrowRight') {
    directionX++;
  }
  directionX = Math.min(Math.max(directionX, -1), 1);
  //endregion

  //region Y
  if (e.code === 'KeyW' || e.code === 'ArrowUp') {
    directionY--;
  }
  if (e.code === 'KeyS' || e.code === 'ArrowDown') {
    directionY++;
  }
  directionY = Math.min(Math.max(directionY, -1), 1);
  //endregion
});

document.addEventListener('keyup', (e) => {
  //region X
  if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
    directionX++;
  }
  if (e.code === 'KeyD' || e.code === 'ArrowRight') {
    directionX--;
  }
  directionX = Math.min(Math.max(directionX, -1), 1);
  //endregion

  //region Y
  if (e.code === 'KeyW' || e.code === 'ArrowUp') {
    directionY++;
  }
  if (e.code === 'KeyS' || e.code === 'ArrowDown') {
    directionY--;
  }
  directionY = Math.min(Math.max(directionY, -1), 1);
  //endregion
});