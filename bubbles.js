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
  background(255, 0, 0, 0); // Changed to RGBA; "ghosts" bubbles and leaves a trail behind in black

  for (var i = 1; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // deletes one bub at a time
      }
      stroke(0, 0, 255, 100);
      strokeWeight(1);
      fill(100, 100, 255, 255); // colors changed to a light blue fill with dark blue stroke
    } else {
      stroke(255, 100, 0, 200)
      strokeWeight(2);
      fill(0, 100, 100, 255); // colors changed to a teal fill with orange stroke
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-2,2);
    bubble.y += random(-2, 2);
  }
}
