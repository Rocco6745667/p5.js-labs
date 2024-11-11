// Climate Data Visualization with Animation
// Rocco Ali 218008847
// 11/07/2024
// Last updated on 11/07/2024

// data source: NASA's Zonal Annual Means https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv

// static.mp3 sound source: 
// https://pixabay.com/sound-effects/search/static/

let table;
let lastRadius = 0;
let targetRadius = 0;
let index = 0;
let minTemp;
let maxTemp;
let temperatures = [];

let sound; // Variable to hold the sound file

// Load the data and the sound file
function preload() {
  table = loadTable('data/data.csv', 'csv', 'header');
  
  // Try loading the sound file and catch errors
  try {
    sound = loadSound('data/static.mp3', soundLoaded, soundError);
  } catch (e) {
    console.error("Error loading sound file:", e);
  }
}

// Callback when sound is successfully loaded
function soundLoaded() {
  console.log("Sound loaded successfully!");
}

// Callback when there's an error loading the sound
function soundError(err) {
  console.error("Error loading sound:", err);
}

function setup() {
  createCanvas(700, 700);
  background(0);
  
  temperatures = table.getColumn('NHem').map(Number);
  
  maxTemp = max(temperatures);
  minTemp = min(temperatures);
  
  // Set the sound to loop and start playback
  if (sound) {
    sound.setLoop(true);
    sound.setVolume(0); // Start with volume at 0
    sound.play();
  } else {
    console.warn("Sound file not loaded properly.");
  }
}

function draw() {
  background(0, 20);
  
  let frame = frameCount % 20;
  
  if (frame === 0) {
    lastRadius = targetRadius;
    const v = temperatures[index];
    targetRadius = map(v, minTemp, maxTemp, 5, height / 2);
    index++;
  }
  
  let lerpRatio = frame / 19.0;
  let radius = lerp(lastRadius, targetRadius, lerpRatio);
  
  stroke(255);
  noFill();
  circle(width / 2, height / 2, radius);
  
  push();
  textSize(24);
  noStroke();
  fill(255);
  text(`Year: ${index + 1880}, Avg. Temp: ${temperatures[index]}`, 10, 40);
  pop();
  
  if (sound) {
    const volume = map(temperatures[index], minTemp, maxTemp, 0, 1);
    sound.setVolume(volume);
  }

  if (index === temperatures.length) index = 0;
}

