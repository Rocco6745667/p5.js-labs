// Perlin noise walker
// Rocco Ali 218008847
// 10/24/2024 
// based on a code example from The Nature of Code by Daniel Shiffman

let walker;

function setup() {
  createCanvas(800, 800);

  // Initialize the walker object with x, y, tx, ty properties
  // and the step and display methods
  walker = {
    'x': width / 2,
    'y': height / 2,
    'tx': 0,
    'ty': 1000,
    
    // Method to update the walker's position based on Perlin noise
    step: function() {
      let noiseX = noise(this.tx);
      let noiseY = noise(this.ty);
      this.x = map(noiseX, 0, 1, 0, width);
      this.y = map(noiseY, 0, 1, 0, height);
      
      // increment the offset values to move through over time
      this.tx += 0.01; 
      this.ty += 0.01;
    },
    
    // Method to display the walker on the canvas
    display: function() {
      strokeWeight(2);
      fill(127);
      stroke(0);
      circle(this.x, this.y, 40);
    }
  };
  
  print(walker);
  print(walker.x, walker.y);
  
  frameRate(30);
  background(255);
}

function draw() {
  // Remove the background call for motion blur or keep it for a clear display
  // background(255, 10);

  // Call the step and display methods of the walker object
  walker.step();
  walker.display();
}

