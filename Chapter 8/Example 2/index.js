// Load an audio file using Howler.js
const sound = new Howl({
    src: ['../assets/rain.mp3']
});
// Play the audio
sound.play();
// Pause the audio
sound.pause();
// Stop the audio
sound.stop();
// Adjust the volume (0.0 to 1.0)
sound.volume(0.5);
// Seek to a specific position (in seconds)
sound.seek(10);
// Example of adding controls to PIXI.js application
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);
// Create a play button
const playButton = new PIXI.Text('Play', { fill: 'white', fontSize: 24 });
playButton.interactive = true;
playButton.buttonMode = true;
playButton.x = 100;
playButton.y = 500;
playButton.on('pointerdown', () => {
    sound.play();
});
app.stage.addChild(playButton);
// Create a pause button
const pauseButton = new PIXI.Text('Pause', { fill: 'white', fontSize: 24 });
pauseButton.interactive = true;
pauseButton.buttonMode = true;
pauseButton.x = 200;
pauseButton.y = 500;
pauseButton.on('pointerdown', () => {
    sound.pause();
});
app.stage.addChild(pauseButton);
// Create a stop button
const stopButton = new PIXI.Text('Stop', { fill: 'white', fontSize: 24 });
stopButton.interactive = true;
stopButton.buttonMode = true;
stopButton.x = 300;
stopButton.y = 500;
stopButton.on('pointerdown', () => {
    sound.stop();
});
app.stage.addChild(stopButton);
