let vid;

function preload() {
  vid = createVideo('data/fingers.mov');
  vid.loop();
  // vid.hide();
}

function setup() {
  createCanvas(320, 240);
  textAlign(CENTER, CENTER);
  textSize(12); // Set the default text size
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  
  vid.loadPixels();
  let stepSize = 12; // Adjust the grid size (spacing between ASCII characters)
  
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      let vidX = floor(map(x, 0, width, 0, vid.width));
      let vidY = floor(map(y, 0, height, 0, vid.height));
      
      let i = (vidY * vid.width + vidX) * 4;
      
      let r = vid.pixels[i];
      let g = vid.pixels[i + 1];
      let b = vid.pixels[i + 2];
      
      let grayscale = round(r * 0.2126 + g * 0.7152 + b * 0.0722);
      
      // Call asciiPixel() to convert pixel to ASCII character and draw it
      asciiPixel(x, y, grayscale);
    }
  }
}

// Function to convert grayscale to an ASCII character and draw it
function asciiPixel(x, y, grayscale) {
  // ASCII characters from darkest to lightest
  let asciiChars = ['@', '#', '8', '&', 'o', ':', '*', '.', ' '];

  // Map grayscale value to an ASCII character index
  let charIndex = floor(map(grayscale, 0, 255, 0, asciiChars.length - 1));
  
  let asciiChar = asciiChars[charIndex];
  
  // Draw the ASCII character at the pixel's position
  fill(0); // Text color (black)
  text(asciiChar, x, y); // Draw ASCII character at (x, y)
}
