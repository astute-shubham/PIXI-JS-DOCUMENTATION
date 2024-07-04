// Create a new PIXI application
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);
// Load an audio file using Howler.js
const sound = new Howl({
    src: ['../assets/audio.mp3'],
    onload: () => {
        console.log('Audio loaded!');
    },
    onplay: () => {
        console.log('Audio is playing!');
    }
});
// Play the audio once it is loaded
sound.once('load', () => {
    sound.play();
});
// Create a sprite to interact with audio
const texture = PIXI.Texture.from('../assets/bunny.png');
const sprite = new PIXI.Sprite(texture);
// Enable interactivity
sprite.interactive = true;
sprite.buttonMode = true;
// Add event listener to play audio on sprite click
sprite.on('pointerdown', () => {
    sound.play();
});
// Position and add the sprite to the stage
sprite.x = 100;
sprite.y = 100;
app.stage.addChild(sprite);
const text = new PIXI.Text('Click the bunny \nto hear something!!', {
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 0xffffff,
    align: 'center'
});
// Position the text
text.x = 300;
text.y = 50;
// Add the text to the stage
app.stage.addChild(text);