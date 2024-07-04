// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Create a sprite
const texture = PIXI.Texture.from('../assets/boy2.png');
const sprite = new PIXI.Sprite(texture);
sprite.x = 150;
// Rotate the sprite
sprite.rotation = Math.PI / 4; // Rotate 45 degrees
// Add the sprite to the stage
app.stage.addChild(sprite);
const text = new PIXI.Text('I am Rotated now!!', {
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
