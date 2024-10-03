let img;
let imgWidth, imgHeight;

function preload() {
  img = loadImage('data/pic_67x97.png'); // Load your image  
}

function setup() {
  createCanvas(600, 800);  // Set canvas size
  
  imgWidth = img.width;
  imgHeight = img.height;
  
  print(imgWidth, imgHeight); // Print dimensions of the image
}

function draw() {
  background(255); // Clear the canvas with a white background
  
  let tileWidth = width / imgWidth;   // Calculate tile width
  let tileHeight = height / imgHeight; // Calculate tile height
  
  // Loop through every pixel in the image
  for (let imgY = 0; imgY < imgHeight; imgY++) {
    for (let imgX = 0; imgX < imgWidth; imgX++) {
      
      let x = imgX * tileWidth;  // Calculate x position of the tile
      let y = imgY * tileHeight; // Calculate y position of the tile
      
      let c = img.get(imgX, imgY); // Get the color of the current pixel
      
      // Grayscale conversion (perceptual luminance-preserving)
      let grayscale = round(red(c) * 0.2126 + green(c) * 0.7152 + blue(c) * 0.0722);
      
      // Use squarePixel() to draw rounded squares for each pixel
      squarePixel(x, y, grayscale, tileWidth, tileHeight, c);
    }
  }
  
  noLoop();  // Prevent continuous looping
}

// Function to draw pixels as rounded squares
function squarePixel(x, y, grayscale, tileWidth, tileHeight, c) {
  // Map the grayscale value to the size of the square (smaller for lighter pixels)
  let size = map(grayscale, 0, 255, tileWidth, 1);
  
  // Map the grayscale value to the roundness of the corners
  let roundness = map(grayscale, 0, 255, 20, 0); // More round for darker pixels
  
  push();
  translate(x + tileWidth / 2, y + tileHeight / 2); // Move to the tile's center
  noStroke();
  
  // Set the fill color of the square based on the pixel color
  fill(c);
  
  // Draw a rounded square
  square(0, 0, size, roundness); // Fourth parameter controls corner rounding
  
  pop();
}
