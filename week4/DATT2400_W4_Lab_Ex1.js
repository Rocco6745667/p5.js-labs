// Color of a Pixel
// Rocco Ali 218008847
// 09/25/2024

// based on a code example from Code as Creative Medium

let img;

// A function that's called once to load assets (e.g., images, sound files, data, fonts, etc.) before the sketch runs.
function preload() {
  // Load an image and create a p5.Image object.
  img = loadImage('data/image.png');  
}

function setup() {
  createCanvas(800, 800);
  background(255);
  // Remove noLoop() to allow continuous drawing
}

function draw() {
  // Draw the image on the whole canvas
  image(img, 0, 0, width, height);
  
  // Get the color of the pixel at the mouse position
  let x = mouseX;
  let y = mouseY;
  
  // Make sure the mouse coordinates are within the image bounds
  if (x >= 0 && x < width && y >= 0 && y < height) {
    let c = img.get(x, y); 
    print(c);
    
    // Visualize the location of the pixel
    noFill();
    ellipse(x, y, 10, 10);  // Larger ellipse to make it visible
    
    // Use the color of the pixel to fill a rectangle
    rectMode(CORNER);
    fill(c);
    rect(0, 0, 100, 100);  // Display color in the top-left corner
  }
}
