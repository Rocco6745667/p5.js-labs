//Rocco Ali
//218008847

function setup() {
    createCanvas(600, 500);
    noLoop();
  }
  
  function draw() {
    background(220);
    
    // Defines circle objects with x, y, d (diameter), and c (color) properties.
    let myCircle = {x: 100, y: 100, d: 150, c: color(120)};
    let myCircle2 = {x: 300, y: 200, d: 100, c: color(255, 0, 0)};  // red
    let myCircle3 = {x: 500, y: 300, d: 80, c: color(0, 0, 255)};   // blue
    
    // Drawing the first circle with the properties of myCircle
    fill(myCircle.c);            // Set fill color for the first circle
    circle(myCircle.x, myCircle.y, myCircle.d);
  
    // Drawing the second circle with the properties of myCircle2
    fill(myCircle2.c);           // Set fill color for the second circle
    circle(myCircle2.x, myCircle2.y, myCircle2.d);
  
    // Drawing the third circle with the properties of myCircle3
    fill(myCircle3.c);           // Set fill color for the third circle
    circle(myCircle3.x, myCircle3.y, myCircle3.d);
  }
  