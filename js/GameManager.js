/**
 * Main script
 * @author ArseneBrosy
 * @since 2025-02-07
 */

const DEFAULT_FPS = 100;

let deltaTime = 1;
let frames = 0;

function tick() {
  movePlayer();
  render();
  frames++;
}

setInterval(() => {
  deltaTime = DEFAULT_FPS / frames;
  deltaTime = Math.min(deltaTime, 1); // if the windows is closed for a long time
  frames = 0;
}, 1000);

setInterval(tick, 0);