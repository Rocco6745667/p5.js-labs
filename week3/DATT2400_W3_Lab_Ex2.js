// Drawing Circles with Arrays
// Rocco Ali 218008847
// 09/18/2024

// Array Use Case 1: declaring an empty array and append values later
let x = [];

// Array Use Case 2: declaring and initializing an array for y-coordinates, diameters, and colors
let y = [60, 200, 340]; // y coordinates for circles
let d = [50, 100, 150]; // diameters for circles
let c = [];             // colors array (will be filled with p5.Color objects later)

function setup() {
  createCanvas(500, 500);
  
  // Appends values to the array 'x'
  x.push(60);  // x[0]
  x.push(200); // x[1]
  x.push(340); // x[2]
  
  // Add colors to the colors array
  // Using color(r, g, b) to create p5.Color objects
  c.push(color(250, 0, 0));   // Red
  c.push(color(0, 250, 0));   // Green
  c.push(color(0, 0, 250));   // Blue
  
  // Ensure that the length of x, y, d, and c arrays are the same
}

function draw() {
  background(255);
  
  // Determine the number of circles to draw (all arrays should have the same length)
  let numCircles = x.length;
  
  // Draw circles by looping through the arrays
  for (let i = 0; i < numCircles; i++) {
    strokeWeight(4);
    stroke(0);
    
    // Use the arrays for x, y, d (diameter), and c (color)
    drawMyShape(x[i], y[i], d[i], c[i]);
  }
}

// Define a custom function to draw a shape
function drawMyShape(posX, posY, dia, c) { 
  fill(c);
  ellipse(posX, posY, dia, dia);
}
