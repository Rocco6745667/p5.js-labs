let song;
let fft;
let button;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  song = loadSound('data/Damscray_DancingTiger.mp3', loaded);
  song.amp(0.8);

  fft = new p5.FFT(0.8, 512);
}

function loaded() {
  print('Sound file loaded');
  button = createButton('Play');
  button.mousePressed(togglePlaying);
}

// Toggle playback
function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.loop();
    button.html('Pause');
  } else {
    song.stop();
    button.html('Play');
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2); // Move the origin to the center of the canvas

  let spectrum = fft.analyze();
  let angleStep = TWO_PI / spectrum.length;

  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let amplitude = spectrum[i];
    let angle = i * angleStep;
    let h = map(i, 0, spectrum.length, 0, 360);
    let radius = map(amplitude, 0, 255, 20, 150); // Map amplitude to radius

    fill(h, 255, 255);
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    ellipse(x, y, 4, 4); // Draw each point as a small ellipse
  }

  // Optionally, draw the audio waveform around the center
  let audioWaveform = fft.waveform(); // Renamed from `waveform` to `audioWaveform`
  noFill();
  stroke(255);
  beginShape();
  for (let i = 0; i < audioWaveform.length; i++) {
    let angle = i * angleStep;
    let radius = map(audioWaveform[i], -1, 1, 100, 200);
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    vertex(x, y);
  }
  endShape();
}
