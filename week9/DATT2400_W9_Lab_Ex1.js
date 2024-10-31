// Bar Chart Starter
// Rocco Ali 218008847
// 10/31/2024

let numbers = [19, 30, 62, 89, 52];

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 100);
  noStroke();
  
  // Find the maximum value in the array
  let maxVal = max(numbers);
  
  // Calculate the width of each bar to fit the canvas
  let barWidth = width / numbers.length;

  // Draw each bar, scaling heights to fit the canvas height
  for (let i = 0; i < numbers.length; i++) {
    let v = numbers[i];
    let barHeight = map(v, 0, maxVal, 0, height); // Scale height

    // Set color based on the value
    fill(map(v, 0, maxVal, 0, 360), 100, 100);
    
    // Draw bar with calculated dimensions
    rect(i * barWidth, height - barHeight, barWidth, barHeight);
  }
}
