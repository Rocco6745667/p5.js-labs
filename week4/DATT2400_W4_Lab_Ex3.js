let img;
let imgWidth, imgHeight;
let tileWidth, tileHeight;
let numCols, numRows;
let scaleX, scaleY;

function preload() {
  // Replace the image path with your new image.
  img = loadImage('data/thejokester.jpeg');  
}

function setup() {
  createCanvas(500, 500); // You can adjust the canvas size here.
  
  imgWidth = img.width;
  imgHeight = img.height;
  
  // Adjust tile size for experimentation
  tileWidth = 20; 
  tileHeight = 20; 
  
  // Calculate the number of columns and rows based on canvas size and tile size
  numCols = floor(width / tileWidth);
  numRows = floor(height / tileHeight);
  
  // Calculate the scale between the image and canvas
  scaleX = imgWidth / width;
  scaleY = imgHeight / height;
}

function draw() {
  background(255);
  
  // Uncomment to display the image on the canvas
  // image(img, 0, 0, width, height);

  for (let row = 0; row < numRows; row++) {
    let centerY = row * tileHeight + tileHeight / 2;
    
    for (let col = 0; col < numCols; col++) {
      let centerX = col * tileWidth + tileWidth / 2;
      
      let imgX = centerX * scaleX;
      let imgY = centerY * scaleY;
      
      // Get the color from the image at the mapped location
      let c = img.get(imgX, imgY);
      let r = red(c);
      let g = green(c);
      let b = blue(c);
      let a = alpha(c);
      
      push();
      
      // Set fill color from image pixel color
      fill(r, g, b, a);
      
      // Translate to the center of each tile
      translate(centerX, centerY);
      
      // Randomly rotate the tile
      rotate(random(TWO_PI));
      
      // Randomly scale the tile size
      let randomScale = random(0.5, 1.5);
      
      // Draw rectangles or other shapes with random size and rotation
      rectMode(CENTER);
      rect(0, 0, tileWidth * randomScale, tileHeight * randomScale);
      
      // You could also experiment with other shapes like ellipses
      // ellipse(0, 0, tileWidth * randomScale, tileHeight * randomScale);
      
      pop();
    }
  }
  
  noLoop(); // Stop the loop once drawing is complete
}
