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
  ctx.fillStyle = '#cdcdcd';
  ctx.fillRect(player.x + 20, player.y + 90, 60, 20);
  ctx.fillStyle = '#006d9f';
  ctx.fillRect(player.x, player.y - player.z, 100, 100);
}