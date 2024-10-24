// Rain Catcher Ver. 2 with Object Methods and Constructor
// Rocco Ali 218008847
// 10/24/2024

// based on a code example from Code as Creative Medium

let catcher;
let cursorImg;
let rainDrops = [];
let totalDropsCaught;

function RainDrop(x, y, r, speed, c, size) {
  /*** properties for raindrop object ***/
  this.x = x;
  this.y = y;
  this.r = r;
  this.speed = speed;
  this.c = c;
  this.size = size;

  // Adding an offset for Perlin noise to make raindrop sway horizontally
  this.xOff = random(1000); // Start a random offset for each drop

  /*** methods for raindrop object ***/
  this.move = function() {
    // Update the horizontal position using Perlin noise
    this.x += map(noise(this.xOff), 0, 1, -1, 1); // Sway left or right
    this.xOff += 0.01; // Increment noise offset

    // Move downward continuously
    this.y += this.speed;

    // Reusing the drops: If the drop moved below the canvas, move it back to the top
    if (this.y > height + this.r) {
      this.y = -100;
      this.x = random(width); // Reset to a random x position at the top
    }
  };

  this.display = function() {
    fill(this.c);
    noStroke();
    push();
    translate(this.x, this.y);
    rotate(-PI / 8);
    
    // Raindrop shape
    bezier(this.size / 2, 0, 
           0, this.size, 
           0, this.size * 2, 
           this.size / 2, this.size * 2);
    bezier(this.size / 2, 0, 
           this.size, this.size, 
           this.size, this.size * 2, 
           this.size / 2, this.size * 2);

    pop();
  };

  this.caught = function() {
    // Set the raindrop off-screen when caught
    this.y = -100;
  };
}

function setup() {
  createCanvas(500, 500);
  
  catcher = {
    'x': 0,
    'y': 0,
    'c': color(255, 200, 200),
    'r': 60,
    
    setLocation: function(x, y) {
      this.x = x;
      this.y = y;
    },
    
    displayUpperPart: function() {
      stroke(0); 
      strokeWeight(8); 
      fill(this.c); 
      ellipse(this.x, this.y, this.r * 2, this.r);
    },
    
    displayLowerPart: function() {
      stroke(0); 
      strokeWeight(8); 
      fill(this.c); 
      beginShape();
      let n = 24; 
      for (let i = 0; i < n; i++) {
        let a = map(i, 0, n - 1, 0, PI); 
        let px = this.x + this.r * cos(a); 
        let py = this.y + this.r / 2 * sin(a); 
        vertex(px, py); 
      }
      vertex(this.x - this.r, this.y); 
      vertex(this.x - this.r, this.y + 80); 
      for (let i = 0; i < n; i++) {
        let a = map(i, 0, n - 1, PI, 0); 
        let px = this.x + this.r * cos(a); 
        let py = this.y + this.r / 2 * sin(a) + 80; 
        vertex(px, py); 
      }
      vertex(this.x + this.r, this.y + 80); 
      vertex(this.x + this.r, this.y);
      endShape();
    },
    
    intersect: function(rainDrop) {
      let dx = this.x - rainDrop.x;
      let dy = this.y - rainDrop.y;
      let distance = sqrt(dx * dx + dy * dy);
      if (distance < (this.r / 2 + rainDrop.r)) {
        return true;
      } else {
        return false;
      }
    }
  };

  for (let i = 0; i < 100; i++) {
    let rainDrop = new RainDrop(random(width), random(-500, 0), 8, random(2, 5), color(0), 30);
    rainDrops.push(rainDrop);
  }

  totalDropsCaught = 0;
  noCursor();
}

function draw() {
  background(220);

  catcher.setLocation(mouseX, mouseY);
  catcher.displayUpperPart();

  for (let i = 0; i < rainDrops.length; i++) {
    rainDrops[i].move();
    rainDrops[i].display();

    if (catcher.intersect(rainDrops[i])) {
      rainDrops[i].caught();
      totalDropsCaught++;
    }
  }

  catcher.displayLowerPart();

  textSize(14);
  fill(0);
  text('Raindrops caught: ' + totalDropsCaught, 10, 30);
}

