// Drawing A Circle
// Rocco Ali 218008847
// 09/05/2024

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    // See https://p5js.org/reference/p5/circle/
    // circle(x, y, d)
    // x: x-coordinate of the center of the circle
    // y: y-coordinate of the center of the circle
    // d: diameter of the circle
    // making 5 circles
    circle(200, 200, 50);
    circle(100, 100, 60);
    circle(130, 250, 100);
    circle(330, 150, 120);
    circle(330, 300, 100);
  }