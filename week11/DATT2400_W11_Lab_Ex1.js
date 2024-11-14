//Rocco Ali 218008847
//11/14/2024
//excerize 1 

let song;
let sliderRate, sliderPan, sliderVolume;
let rateLabel, panLabel, volumeLabel;
let toggleButton;
let isPlaying = true; // State to track if the song is playing

function setup() {
  createCanvas(200, 200);

  // Load the sound file and register the loaded callback
  song = loadSound('data/0.wav', loaded);
  song.setVolume(0.3); // Initial volume

  // Rate control
  let rateDiv = createDiv('Rate');
  rateDiv.position(0, height + 10);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderRate.parent(rateDiv);
  sliderRate.size(120);
  sliderRate.mouseMoved(updateRate);
  rateLabel = createSpan(sliderRate.value());
  rateLabel.parent(rateDiv);

  // Pan control
  let panDiv = createDiv('Pan');
  panDiv.position(0, height + 35);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  sliderPan.parent(panDiv);
  sliderPan.size(120);
  panLabel = createSpan(sliderPan.value());
  panLabel.parent(panDiv);

  // Volume control
  let volumeDiv = createDiv('Volume');
  volumeDiv.position(0, height + 60);
  sliderVolume = createSlider(0, 1, 0.3, 0.01); // Volume range from 0 to 1
  sliderVolume.parent(volumeDiv);
  sliderVolume.size(120);
  volumeLabel = createSpan(sliderVolume.value());
  volumeLabel.parent(volumeDiv);

  // Create a button to toggle playback
  toggleButton = createButton('Pause');
  toggleButton.position(0, height + 90);
  toggleButton.mousePressed(togglePlayback);
}

// Callback when the sound file is loaded
function loaded() {
  print('Sound file loaded');
  song.play();
  song.loop();
}

// Update rate when the slider changes
function updateRate() {
  let rateValue = sliderRate.value();
  song.rate(rateValue);
  rateLabel.html(rateValue);
}

function draw() {
  background(255);

  // Update pan
  let panValue = sliderPan.value();
  song.pan(panValue);
  panLabel.html(panValue);

  // Update volume
  let volumeValue = sliderVolume.value();
  song.setVolume(volumeValue);
  volumeLabel.html(volumeValue);
}

// Function to toggle playback
function togglePlayback() {
  if (isPlaying) {
    song.pause();
    toggleButton.html('Play');
  } else {
    song.play();
    toggleButton.html('Pause');
  }
  isPlaying = !isPlaying; // Toggle the state
}
