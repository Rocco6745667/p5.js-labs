let table;
let data = [];

let startYear = 1880;
let endYear = 2000;
let region = 'Glob';

// Declare a variable for the GUI
let gui;

// Load the data
function preload() {
  table = loadTable('data/data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 400);
  noLoop();

  // Correctly initialize lil-gui
  gui = new dat.GUI();

  // Add dropdown menu for region selection
  gui.add(window, 'region', { 
    Global: 'Glob', 
    'Northern Hemisphere': 'NHem', 
    'Southern Hemisphere': 'SHem' 
  }).name('Region').onChange(updateData);

  // Add sliders for start and end years
  gui.add(window, 'startYear', 1880, 2023, 1).name('Start Year').onChange(updateYears);
  gui.add(window, 'endYear', 1880, 2023, 1).name('End Year').onChange(updateYears);

  updateData();
}

function updateYears() {
  // Ensure startYear and endYear remain valid
  startYear = Math.min(startYear, endYear); // Ensure startYear is not greater than endYear
  endYear = Math.max(startYear, endYear);   // Ensure endYear is not less than startYear
  updateData();
}

function updateData() {
  data = [];

  for (let year = startYear; year <= endYear; year++) {
    const row = table.findRow(year.toString(), 'Year');
    if (row) {
      let v = parseFloat(row.get(region));
      data.push({ year: year, value: v });
    }
  }

  redraw();
}

function draw() {
  background(220);

  let bars = endYear - startYear + 1;
  let barWidth = width / bars;

  for (let i = 0; i < bars; i++) {
    const x = i * barWidth;
    const y = 0;
    const v = data[i].value;

    let barColor;
    if (v > 0) {
      barColor = lerpColor(color('white'), color('red'), v);
    } else {
      barColor = lerpColor(color('white'), color('blue'), -v);
    }

    fill(barColor);
    noStroke();
    rect(x, y, barWidth, height);
  }
}
