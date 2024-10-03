function setup() {
    createCanvas(600, 500); 
  }
  
  function draw() {
    background(255);
    
    // Create and initialize variables
    let x = 80;
    let y = height / 2;
    let d = 70;
    
    // Create and initialize a variable for the red component
    let r = 0;
    
    // With for loop to draw five ellipses with different scales in different locations
    for (let i = 0; i < 5; i++) {
      let scaleFactor = 0.5 + i * 0.3; // Adjust scaling for each iteration
      drawMyShape(x, y, d, r, 0, 0, scaleFactor);
      
      // Update variables for next ellipse
      x += d * 1.5; // Move the ellipses to the right
      r += 50;      // Increase red component for color variation
    }
  }
  
  // Define the custom function with an additional scaling parameter
  function drawMyShape(posX, posY, dia, r, g, b, scaleFactor) {
    push(); // Save the current transformation state
    translate(posX, posY); // Move the origin to the position (posX, posY)
    scale(scaleFactor); // Scale the ellipse by the given factor
    
    // Set the fill color and stroke properties
    fill(r, g, b);
    strokeWeight(4);
    stroke(0);
    
    // Draw the ellipse at the translated origin (0, 0)
    ellipse(0, 0, dia, dia);
    
    pop(); // Restore the original transformation state
  }
  