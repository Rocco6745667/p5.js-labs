//Rocco Ali 218008847
//09/12/2024

function setup() {
    createCanvas(600, 600);
    noLoop(); // To stop continuous redrawing
  }
  
  function draw() {
    background(230); // White background
  
    // Set the black stroke for lines
    stroke(0);
    strokeWeight(12); // Thick black lines
  
    // Draw the rectangles with primary colors
    noStroke(); // Disable stroke for the filled rectangles
  
    // Yellow rectangle (top left)
    fill(255, 255, 0);
    rect(20, 20, 200, 150);
  
    // Blue rectangle (bottom left)
    fill(0, 0, 255);
    rect(20, 200, 200, 250);
  
    // Red rectangle (right)
    fill(255, 0, 0);
    rect(240, 20, 330, 430);
  
    // Black rectangle (bottom right)
    fill(0);
    rect(240, 470, 330, 100);
  
    // Re-enable stroke for the black lines
    stroke(0);
    strokeWeight(12);
  
    // Vertical black lines
    line(20, 20, 20, 570); // Left border
    line(240, 20, 240, 570); // Mid vertical line
    line(570, 20, 570, 570); // Right border
  
    // Horizontal black lines
    line(20, 20, 570, 20); // Top border
    line(20, 200, 240, 200); // Horizontal between yellow and blue
    line(20, 470, 570, 470); // Horizontal under red
    line(20, 570, 570, 570); // Bottom border
  }
  