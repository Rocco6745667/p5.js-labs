// Drawing A Circle with Variables
// Rocco Ali 218008847
// 09/05/2024

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
      
    // Create constant variables based on canvas size
    const x = width / 2;
    const y = height / 2;
    
    // Create a variable for diameter
    let d = 50;
    
    //create a second circle
    let x1 = 200
    let y1 = 200
    
    //draw the circle at this postion
    circle(x1, y1, d);
    
    //create a second circle
    let x2 = 100
    let y2 = 100
    
    //draw the circle at this postion
    circle(x2, y2, d);
    
    //create a third circle
    let x3 = 150
    let y3 = 170
    
    //draw the circle at this postion
    circle(x3, y3, d);
    
      //create a fourth circle
    let x4 = 220
    let y4 = 270
    
    //draw the circle at this postion
    circle(x4, y4, d);
  }