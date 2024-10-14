let walkers = [];
let img;

function preload() {
  // Load the image (make sure to provide the correct path to your image)
  img = loadImage('data/briankanyewest.jpg');
}

function setup() {
  createCanvas(400, 400);
  
  // Add multiple walkers, starting at the center of the canvas with color set to 0
  for (let i = 0; i < 5; i++) {
    walkers.push({
      'x': width / 2,
      'y': height / 2,
      'stepSize': 2,
      'c': 0  // color will be updated based on image pixels
    });
  }
  
  print(walkers[0]);
}

function draw() {
  // Remove the background to see the gradual image creation
  // You can also try setting alpha for trailing effect like background(255, 10);
  // background(255);
  
  // Loop through all walkers and update their position and color
  for (let i = 0; i < walkers.length; i++) {
    let walker = walkers[i];
    
    // Make the walker pick a color from the image
    let imgX = floor(img.width * walker.x / width);
    let imgY = floor(img.height * walker.y / height);
    
    // Get the color from the image at the walker's current position
    let c = img.get(imgX, imgY);
    walker.c = color(c);  // Update the walker's color
    
    // Move the walker and display it
    step(walker);
    displayWalker(walker);
  }
}

function step(w) {
  // Random movement with step size
  let xStep = floor(random(3)) - 1;  // Random value: -1, 0, or 1
  let yStep = floor(random(3)) - 1;

  w.x += xStep * w.stepSize;  // Use stepSize to control movement speed
  w.y += yStep * w.stepSize;

  // Wrap the walker around the canvas if it goes off the edges
  if (w.x > width) w.x = 0;
  if (w.x < 0) w.x = width;
  if (w.y > height) w.y = 0;
  if (w.y < 0) w.y = height;
}

function displayWalker(w) {
  noStroke();
  fill(w.c);
  ellipse(w.x, w.y, 10);  // Draw each walker as a circle with color `w.c`
}

// Adds a new walker object when the mouse is pressed
function mousePressed() {
  walkers.push({
    'x': mouseX,
    'y': mouseY,
    'stepSize': 2,
    'c': color(0)  // Initialize with black color, will be updated later
  });
}
