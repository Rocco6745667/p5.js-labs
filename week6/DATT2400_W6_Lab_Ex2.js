//Rocco Ali
//218008847

let walker;

function setup() {
  createCanvas(400, 400);
  
  // Adds a stepSize property to control movement speed.
  walker = {
    x: width / 2,
    y: height / 2,
    stepSize: 5  // Define the step size
  };
  
  print(walker);
  print(walker.x, walker.y);
  
  frameRate(30);
}

function draw() {
  background(255);
  
  displayWalker(walker);
  
  // Move the walker down and to the right by stepSize
  walker.x += walker.stepSize;
  walker.y += walker.stepSize;
  
  // Wrap around horizontally
  if (walker.x > width) {
    walker.x = 0;
  } else if (walker.x < 0) {
    walker.x = width;
  }
  
  // Wrap around vertically
  if (walker.y > height) {
    walker.y = 0;
  } else if (walker.y < 0) {
    walker.y = height;
  }
}

function displayWalker(w) {
  strokeWeight(10);
  stroke(0);
  point(w.x, w.y);
}
