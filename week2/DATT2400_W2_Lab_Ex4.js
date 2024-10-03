//Redefine drawMyShape() 3
//Rocco Ali
//09/12/2024

function setup() {
    createCanvas(500, 500);
    background(255);
    
    // Define the size for all shapes
    let shapeSize = 70;
    
    // Call drawMyShape three times with the same size and different colors, all in a straight line
    drawMyShape(100, 250, shapeSize, 255, 0, 0, 10);  // Red X shape
    drawMyShape(250, 250, shapeSize, 0, 255, 0, 8);   // Green X shape
    drawMyShape(400, 250, shapeSize, 0, 0, 255, 6);   // Blue X shape
  }
  
  // Define drawMyShape to draw an X with circles at top and bottom
  function drawMyShape(posX, posY, size, r, g, b, strokeThick) {
    // Set stroke thickness and color
    strokeWeight(strokeThick);
    stroke(r, g, b);
    noFill();
    
    // Draw the X shape using two lines
    line(posX - size, posY - size, posX + size, posY + size); // Top-left to bottom-right
    line(posX - size, posY + size, posX + size, posY - size); // Bottom-left to top-right
    
    // Set the fill color for the circles
    fill(r, g, b);
    
    // Draw circles at the top and bottom of the X
    ellipse(posX, posY - size, size, size); // Top circle
    ellipse(posX, posY + size, size, size); // Bottom circle
  }
  