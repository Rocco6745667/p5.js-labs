// Drawing with a Simple Brush
// with the mouse and keyboard interaction
//
// Rocco Ali 218008847
// 09/19/2024

/**
 * Mouse and Key Mapping
 *
 * MOUSE
 * drag                : draw
 *
 * KEYS
 * 1-3                 : stroke color
 * =                   : increase the radius
 * -                   : decrease the radius
 * [                   : decrease the resolution
 * ]                   : increase the resolution
 * r                   : randomize radius
 * w                   : randomize stroke weight
 * del, backspace      : erase
 * s                   : save png
 */

let strokeColor;
let x = [];
let y = [];
let shapeRadius = 50;
let shapeResolution = 5;

let filled = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  strokeColor = color(0, 50);
  strokeWeight(0.75);
  background(255);
  
  setShape(shapeRadius, shapeResolution);
}

function setShape(radius, resolution) {
  let unitAngle = radians(360 / resolution);
  
  for (let i = 0; i < resolution; i++) {
    x[i] = cos(unitAngle * i) * radius;
    y[i] = sin(unitAngle * i) * radius;
  }  
}

function draw() {
  
  if (filled) {
    fill(random(255));  // Random fill color
  } else {
    noFill();
  }
  
  stroke(strokeColor);
  
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(mouseX, mouseY);

    beginShape();
    curveVertex(x[shapeResolution - 1], y[shapeResolution - 1]);

    for (let i = 0; i < shapeResolution; i++) {
      curveVertex(x[i], y[i]);
    }
    
    curveVertex(x[0], y[0]);
    
    curveVertex(x[1], y[1]);
    endShape();  
    
    pop();
  }
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) 
    background(255);
  
  if (key == 's' || key == 'S') {
    let fileName = 'image_' + year() + month() + day() + hour() + minute() + second();
    saveCanvas(fileName, 'png');
  }
  
  if (key == '=') {
    shapeRadius += 5;
    setShape(shapeRadius, shapeResolution);
  }
  
  if (key == '-') {
    shapeRadius -= 5;
    if (shapeRadius < 5) shapeRadius = 5;
    setShape(shapeRadius, shapeResolution);
  }
  
  // Randomize the shape's radius with the 'r' key
  if (key == 'r' || key == 'R') {
    shapeRadius = random(10, 150); // Random radius between 10 and 150
    setShape(shapeRadius, shapeResolution);
  }
  
  // Randomize the stroke weight with the 'w' key
  if (key == 'w' || key == 'W') {
    strokeWeight(random(0.5, 5)); // Random stroke weight between 0.5 and 5
  }
  
  if (key == 'f' || key == 'F') filled = !filled;
  
  if (key == '1') strokeColor = color(0, 10);         // Black
  if (key == '2') strokeColor = color(192, 100, 64, 10); // Red
  if (key == '3') strokeColor = color(52, 100, 71, 10);  // Blue
  
  // Decrease resolution with '['
  if (key == '[') {
    shapeResolution--;
    if (shapeResolution < 3) shapeResolution = 3; // Minimum 3 vertices
    setShape(shapeRadius, shapeResolution);
  }
  
  // Increase resolution with ']'
  if (key == ']') {
    shapeResolution++;
    if (shapeResolution > 20) shapeResolution = 20; // Maximum 20 vertices
    setShape(shapeRadius, shapeResolution);
  }
}
