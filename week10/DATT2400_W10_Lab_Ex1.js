// Climate Stripes
// Rocco Ali 218008847
// 11/07/2024

// Based on the code example by Duncan Geere, https://editor.p5js.org/duncangeere/sketches/Oq28847x2
// Data source: NASA's Zonal Annual Means https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv
// Original credit: https://showyourstripes.info/

let table;

// Load the data
function preload() {
  table = loadTable('data/data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 400);
  noLoop();
}

function draw() {
  background(220);

  // Get the number of rows in the data
  let bars = table.getRowCount();
  let barWidth = width / bars;
  
  // Draw Northern Hemisphere data in the top half
  for (let i = 0; i < bars; i++) {
    const x = i * barWidth;
    const nhValue = parseFloat(table.get(i, 'NHem'));
    
    let nhColor;
    if (nhValue > 0) {
      nhColor = lerpColor(color('white'), color('red'), nhValue);
    } else {
      nhColor = lerpColor(color('white'), color('blue'), -nhValue);
    }
    
    fill(nhColor);
    noStroke();
    rect(x, 0, barWidth, height / 2); // Top half for Northern Hemisphere
  }

  // Draw Southern Hemisphere data in the bottom half
  for (let i = 0; i < bars; i++) {
    const x = i * barWidth;
    const shValue = parseFloat(table.get(i, 'SHem'));
    
    let shColor;
    if (shValue > 0) {
      shColor = lerpColor(color('white'), color('red'), shValue);
    } else {
      shColor = lerpColor(color('white'), color('blue'), -shValue);
    }
    
    fill(shColor);
    noStroke();
    rect(x, height / 2, barWidth, height / 2); // Bottom half for Southern Hemisphere
  }
}
