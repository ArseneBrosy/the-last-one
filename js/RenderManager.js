/**
 * Render the screen
 * @author ArseneBrosy
 * @since 2025-02-07
 */

//region Constants
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//endregion

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(player.x, player.y, 100, 100);
}