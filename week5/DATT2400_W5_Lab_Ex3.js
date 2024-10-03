let cam;
let streamReady = false;

function preload() {
  cam = createCapture(VIDEO, camReady);
  cam.size(320, 240);
  cam.hide();
}

function camReady() {
  streamReady = true;
  console.log("Webcam is ready!");
}

function setup() {
  createCanvas(320, 240);
}

function draw() {
  // Use a transparent background to create a fading effect
  background(255, 10); // Lower alpha for more persistent circles

  if (streamReady == true) {
    cam.loadPixels();
    let totalCircles = 100; // Number of circles to draw each frame
    
    for (let i = 0; i < totalCircles; i++) {
      // Randomly select a pixel position
      let x = floor(random(cam.width));
      let y = floor(random(cam.height));

      // Get the pixel color
      let index = (y * cam.width + x) * 4;
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      // Calculate brightness (grayscale approximation)
      let brightness = (r * 0.2126 + g * 0.7152 + b * 0.0722);
      
      // Map brightness to circle size
      let circleSize = map(brightness, 0, 255, 2, 10);
      
      // Draw the circle at the corresponding location
      noStroke();
      fill(r, g, b, 150); // Circle color with some transparency
      ellipse(x, y, circleSize, circleSize); // Draw the circle
    }
  }
}
