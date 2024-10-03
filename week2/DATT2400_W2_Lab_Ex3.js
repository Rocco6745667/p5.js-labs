// Drawing with a for Loop and Custom Function
// Rocco Ali
// 09/12/2024

function setup() {
    createCanvas(500, 500);
  }
  
  function draw(){
    background(255);
    
    // Create and initialize variables
    let x = 40; // Position
    let y = height / 2; // y-coordinate
    let d = 70; // Diameter of circles
    
    let r = 0; // Red color component
    let strokeThick = 2; // Stroke thickness
    let strokeR = 0; // Stroke color red component
    let strokeG = 0; // Stroke color green component
    let strokeB = 0; // Stroke color blue component
    
    // With for loop to draw multiple shapes
    for (let i = 0; i < 3; i++) {
      // Use the custom function to draw each shape with different properties
      drawMyShape(x, y, d, r, 0, 0, strokeThick, strokeR, strokeG, strokeB);
      
      // Update variables for the next iteration
      x += (d * 2); // Move the next circle to the right
      r += 100; // Increase the red fill component
      strokeThick += 2; // Increase stroke thickness
      strokeR += 50; // Increase the red component of the stroke color
    }
  }
  
  // Modified custom function to accept stroke thickness and color parameters
  function drawMyShape(posX, posY, dia, r, g, b, strokeThick, strokeR, strokeG, strokeB) { 
    strokeWeight(strokeThick); // Set stroke weight
    stroke(strokeR, strokeG, strokeB); // Set stroke color
    fill(r, g, b); // Set fill color
    ellipse(posX, posY, dia, dia); // Draw the ellipse
  }
  