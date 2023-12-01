//todo -------- responsive navbar design --------
let bar = document.querySelector(".bar");
let dropdown = document.querySelector(".responsive-navbar");

bar.addEventListener("click", () => {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "inline";
  } else {
    dropdown.style.display = "none";
  }
});

const cursorCanvas = document.getElementById("cursorCanvas");
const cursorCtx = cursorCanvas.getContext("2d");

// Resize cursor canvas to fit window
cursorCanvas.width = window.innerWidth;
cursorCanvas.height = window.innerHeight;

class Sparkle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 6 + 1;
    // Set speed based on the opposite direction of mouse movement
    const speedFactor = length * 0.05; // Adjust the 0.05 multiplier as needed
    this.speedX = -directionX * speedFactor * (Math.random() * 2 + 1); // Adjust the multiplier as needed for desired speed
    this.speedY = -directionY * speedFactor * (Math.random() * 2 + 1);
    this.alpha = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 0.03; // Decrease alpha over time, this will make the sparkle fade away
  }

  draw() {
    cursorCtx.beginPath();
    cursorCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    cursorCtx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    cursorCtx.fill();
    cursorCtx.closePath();
  }
}

let sparkles = [];

// Update and draw sparkles
function handleSparkles() {
  cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

  if (isMouseMoving) {
    // Only add a sparkle if the mouse is moving
    sparkles.push(new Sparkle(mouseX, mouseY));
  }

  // Loop over sparkles to update and draw each one
  for (let i = sparkles.length - 1; i >= 0; i--) {
    sparkles[i].update();
    sparkles[i].draw();

    // Remove the sparkle if its alpha has become less than or equal to 0
    if (sparkles[i].alpha <= 0) {
      sparkles.splice(i, 1);
    }
  }

  requestAnimationFrame(handleSparkles);
}

let mouseX = 0;
let mouseY = 0;
let prevMouseX = 0;
let prevMouseY = 0;
let isMouseMoving = false;
let mouseMoveTimeout;
let directionX = 0;
let directionY = 0;
let length = 1;

// Update mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  isMouseMoving = true;

  // Calculate direction of mouse movement
  const dx = mouseX - prevMouseX;
  const dy = mouseY - prevMouseY;

  // Normalize the direction (make its length equal to 1)
  length = Math.sqrt(dx * dx + dy * dy);
  directionX = length ? dx / length : 0;
  directionY = length ? dy / length : 0;

  prevMouseX = mouseX;
  prevMouseY = mouseY;

  // Reset the flag after a short delay
  clearTimeout(mouseMoveTimeout);
  mouseMoveTimeout = setTimeout(() => {
    isMouseMoving = false;
  }, 50);
});

handleSparkles();

// Optional: Resize canvas and redraw stars when the window is resized
window.addEventListener("resize", function () {
  cursorCanvas.width = window.innerWidth;
  cursorCanvas.height = window.innerHeight;
});
