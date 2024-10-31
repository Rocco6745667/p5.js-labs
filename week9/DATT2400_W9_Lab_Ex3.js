// Climate Data Line Chart with GUI (Template)
// Rocco Ali 218008847
// 10/31/2024

let table;
let data = [];

let startYear = 1880;
let endYear = 2022;
let region = 'Glob'; // default region

let regionSelect, startSlider, endSlider;

let maxVal = 0;
let minVal = 9999;

function preload() {
  table = loadTable('data/data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 400);
  
  // Region dropdown
  regionLabel = createDiv('Region: ');
  regionLabel.position(5, height + 5);
  regionSelect = createSelect();
  regionSelect.parent(regionLabel);
  regionSelect.size(150);
  regionSelect.option('Global', 'Glob');
  regionSelect.option('Northern Hemisphere', 'NHem');
  regionSelect.option('Southern Hemisphere', 'SHem');
  regionSelect.changed(updateRegion);

  // Start Year Slider
  createDiv('Start Year:').position(5, height + 50);
  startSlider = createSlider(1880, 2022, 1880, 1);
  startSlider.position(100, height + 50);
  startSlider.input(updateData);

  // End Year Slider
  createDiv('End Year:').position(5, height + 80);
  endSlider = createSlider(1880, 2022, 2022, 1);
  endSlider.position(100, height + 80);
  endSlider.input(updateData);

  updateData();
}

function updateRegion() {
  region = regionSelect.value();
  updateData();
}

function updateData() {
  data = [];
  startYear = startSlider.value();
  endYear = endSlider.value();
  
  // Ensure start year is less than end year
  if (startYear >= endYear) {
    endSlider.value(startYear + 1);
    endYear = endSlider.value();
  }

  maxVal = -Infinity;
  minVal = Infinity;

  // Filter data based on selected range
  for (let year = startYear; year <= endYear; year++) {
    const row = table.findRow(year.toString(), 'Year');
    if (row) {
      let v = Number(row.get(region));
      data.push({ year: year, value: v });
      if (v > maxVal) maxVal = v;
      if (v < minVal) minVal = v;
    }
  }

  if (maxVal > abs(minVal)) minVal = -maxVal;
  else maxVal = -minVal;

  redraw();
}

function draw() {
  background(255);

  let numYears = endYear - startYear + 1;
  for (let i = 0; i < numYears; i += 10) {
    let x = map(i, 0, numYears, 0, width);
    let year = data[i] ? data[i].year : startYear + i;
    stroke(200);
    line(x, 0, x, height);
    fill(0);
    textAlign(CENTER);
    text(year, x, height - 10);
  }

  noFill();
  beginShape();
  for (let i = 0; i < data.length; i++) {
    let x = map(i, 0, numYears - 1, 0, width);
    let y = map(data[i].value, minVal, maxVal, height, 0);
    vertex(x, y);
  }
  endShape();

  let baselineY = map(0, minVal, maxVal, height, 0);
  stroke(150);
  line(0, baselineY, width, baselineY);

  noLoop();
}
