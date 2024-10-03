// Drawing Circles with A Function
// Rocco Ali 218008847
// 09/12/2024

function setup() {
    createCanvas(600, 600);
  }
  
  function draw(){
    background(255);
    
    let x = 150;
    let y = height / 2;
    let d = 70;
    
    // First circle with fixed stroke weight and color
    strokeWeight(4);
    stroke(0);
    fill(255, 0, 0); // Red fill
    circle(x, y, d);
    
    // Second circle with fixed stroke weight and color
    strokeWeight(4);
    stroke(0);
    fill(0, 0, 255); // Blue fill
    circle(width - x, y, d);
    
    // Circles using the custom function with varying stroke weights and colors
    drawMyShape(x + d, y, d, 205, 0, 0, 2, 100, 50, 0);  // Circle 1
    drawMyShape(x + d * 2, y, d, 155, 0, 0, 5, 50, 100, 0); // Circle 2
    drawMyShape(x + d * 3, y, d, 105, 0, 0, 8, 0, 0, 100);  // Circle 3
  }
  
  // Modified custom function to accept stroke weight and stroke color
  function drawMyShape(posX, posY, dia, r, g, b, sw, sr, sg, sb) { 
    strokeWeight(sw);  // Set custom stroke weight
    stroke(sr, sg, sb); // Set custom stroke color
    fill(r, g, b); // Set fill color
    circle(posX, posY, dia);
  }
  