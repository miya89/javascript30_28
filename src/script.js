const video = document.querySelector(".video");
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");

function speedControl(e) {
  console.log(e);
}

speed.addEventListener("mousemove", speedControl);
