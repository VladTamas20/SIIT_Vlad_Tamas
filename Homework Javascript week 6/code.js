let player = document.querySelector(".player");
document.addEventListener("keydown", function (event) {
  console.log("event= ", event);
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top);
    let newTop = oldTop + 10;
    let left = parseInt(player.style.left);
    if (oldTop < 370 && checkCollision(newTop, left)) {
      player.style.top = `${newTop}px`;
    }
  }
  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left); // daca style.left nu exista avem NaN
    let top = parseInt(player.style.top);
    let newLeft = oldLeft + 10;
    if (oldLeft < 370 && checkCollision(top, newLeft)) {
      player.style.left = `${newLeft}px`; // NaN + 12 => NaN
    }
  }
  if (event.code === "ArrowLeft") {
    let oldLeft = parseInt(player.style.left);
    let newLeft = oldLeft - 10;
    let top = parseInt(player.style.top);
    if (oldLeft > 0 && checkCollision(top, oldLeft)) {
      player.style.left = `${newLeft}px`;
    }
  }
  if (event.code === "ArrowUp") {
    let oldTop = parseInt(player.style.top);
    let newTop = oldTop - 10;
    let left = parseInt(player.style.left);
    if (oldTop > 0 && checkCollision(newTop, left)) {
      player.style.top = `${newTop}px`;
    }
  }
});

function checkCollision(top, left) {
  console.log("checkCollision", top, left);

  return !(top >= 70 && top <= 110 && left >= 100 && left <= 220);
}

const obstacle = [{ top: 100, left: 120 }, { top: 200 }];

// function checkCollision(newTop, oldLeft) {
//   console.log("checkCollision", newTop, oldLeft);
//   return !(newTop >= -90 && newTop <= 90 && oldLeft >= 90 && oldLeft <= 220);
// }
