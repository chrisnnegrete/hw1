var bubbles = [];

function setup() {
  createCanvas(500, 500);

  for (var i = 0; i < 50; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(5, 50)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255, 0, 0, 0); // Changed to CMYK; "ghosts" bubbles and leaves a trail behind in black

  for (var i = 1; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // deletes one bub at a time
      }
      fill(100, 100, 255, 255); // color changed to light blue
    } else {
      fill(0, 100, 100, 255); // color changed to dark , like the San Jose Sharks
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-1, 1);
    bubble.y += random(-1, 1);
  }
}
