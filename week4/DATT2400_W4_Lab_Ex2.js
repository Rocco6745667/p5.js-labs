// Pixel Access and Update
// Rocco Ali 218008847
// 09/25/2024

let img;

function preload() {
  img = loadImage('data/image_100x100.jpg');  
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(200);
  
  // Gets image size
  let imgWidth = img.width;
  let imgHeight = img.height;
  
  strokeWeight(1);
  
  // Draw the original image using individual pixels (left)
  for (let y = 0; y < imgHeight; y++) {
    for (let x = 0; x < imgWidth; x++) {
      let c = img.get(x, y);
      stroke(c);
      point(x, y);
    }
  }
  
  // Draw the original image using loadPixels (center)
  img.loadPixels();
  for (let y = 0; y < imgHeight; y++) {
    for (let x = 0; x < imgWidth; x++) {
      let index = (x + y * imgWidth) * 4; 
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
          
      stroke(r, g, b, a);
      point(x + imgWidth, y);
    }
  }
  
  // Swap red and green components in the third image (right)
  img.loadPixels();
  for (let y = 0; y < imgHeight; y++) {
    for (let x = 0; x < imgWidth; x++) {
      let index = (x + y * imgWidth) * 4;
      
      let r = img.pixels[index]; // red component
      let g = img.pixels[index + 1]; // green component
      let b = img.pixels[index + 2]; // blue component
      let a = img.pixels[index + 3]; // alpha component
      
      // Swap red and green
      img.pixels[index] = g; // new red is the old green
      img.pixels[index + 1] = r; // new green is the old red
      img.pixels[index + 2] = b; // blue remains unchanged
      img.pixels[index + 3] = a; // alpha remains unchanged
    }
  }
  
  // Update and draw the modified image on the right
  img.updatePixels();
  image(img, imgWidth * 2, 0, imgWidth, imgHeight);
  
  noLoop();
}
