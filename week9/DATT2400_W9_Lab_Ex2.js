// Climate Data
// Rocco Ali 218008847
// 10/31/2024

let table;
let years = [];
let deviations = [];

function preload() {
  // Load the data from the CSV
  table = loadTable('data/data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 400);
  noLoop();

  // Retrieve year and NHem data, convert to numbers
  years = table.getColumn('Year').map(Number);
  deviations = table.getColumn('NHem').map(Number);
  
  // Print some values for verification
  print(years[0], deviations[0]);
}

function draw() {
  background(255);

  // Calculate the range of the data and map it to the canvas
  let minDeviation = min(deviations);
  let maxDeviation = max(deviations);

  // Padding for visual space
  let padding = 50;
  
  // Draw center baseline at 0 deviation
  let baselineY = map(0, minDeviation, maxDeviation, height - padding, padding);
  stroke(150);
  line(padding, baselineY, width - padding, baselineY);

  // Draw vertical reference lines and labels for every decade
  textAlign(CENTER, CENTER);
  textSize(10);
  stroke(200);
  
  for (let i = 0; i < years.length; i++) {
    if (years[i] % 10 === 0) {
      let x = map(i, 0, years.length - 1, padding, width - padding);
      line(x, padding, x, height - padding);  // Vertical line
      noStroke();
      fill(0);
      text(years[i], x, height - padding + 15);  // Year label
      stroke(200);
    }
  }

  // Draw line chart for climate deviation
  stroke(0);
  noFill();
  beginShape();
  
  for (let i = 0; i < deviations.length; i++) {
    let x = map(i, 0, deviations.length - 1, padding, width - padding);
    let y = map(deviations[i], minDeviation, maxDeviation, height - padding, padding);
    vertex(x, y);
  }
  
  endShape();
  
  // Title and labels
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text("Northern Hemisphere Climate Data", width / 2, padding - 20);
}
