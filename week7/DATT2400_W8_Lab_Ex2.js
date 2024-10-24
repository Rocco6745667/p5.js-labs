// Multiple Walkers
// with 2D Perlin Noise
// Rocco Ali 218008847
// 10/24/2024
// based on a code example from The Nature of Code by Daniel Shiffman

let walkers = [];

function setup() {
  createCanvas(800, 800);

  // Create 100 walkers with random color and radius
  for (let i = 0; i < 200; i++) {
    let color = [random(255), random(255), random(255)]; // random RGB color
    let radius = random(10, 40); // random radius between 10 and 40
    walkers.push(new Walker(width / 2, height / 2, color, radius));
  }

  frameRate(30);
  background(255);
}

function draw() {
  // Remove background() to create a trailing effect or change the alpha value for motion blur
  background(255, 10);

  // Update and display all walkers
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].display();
  }
}

// Walker constructor function
function Walker(x, y, c, r) {
  this.x = x;
  this.y = y;
  this.tx = random(1000); // random noise offset for x
  this.ty = random(1000); // random noise offset for y
  this.color = c;         // color property
  this.radius = r;        // radius property

  // Method to update the walker's position using Perlin noise
  this.step = function() {
    let angle = noise(this.tx, this.ty) * TWO_PI;
    this.x += cos(angle) * 2;
    this.y += sin(angle) * 2;

    // Wrap around the canvas edges
    if (this.x < -20) this.x = width + 20;
    if (this.x > width + 20) this.x = -20;
    if (this.y < -20) this.y = height + 20;
    if (this.y > height + 20) this.y = -20;

    // Increment the noise offset
    this.tx += 0.01;
    this.ty += 0.01;
  };

  // Method to display the walker as a circle
  this.display = function() {
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    circle(this.x, this.y, this.radius);
  };
}
