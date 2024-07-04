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
// Enable interactivity
sprite.interactive = true;
sprite.buttonMode = true;
// Add event listeners
sprite.on('pointerdown', () => {
    sprite.tint = 0x00ff00; // Change tint to green on click
});
// Add the sprite to the stage
app.stage.addChild(sprite);
const text = new PIXI.Text('Click the Boy to \n see the magic!!\n This is Interactivity \n Go to Chapter 7 to \nlearn more', {
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 0xffffff,
    align: 'center'
});
// Position the text
text.x = 350;
text.y = 250;
// Add the text to the stage
app.stage.addChild(text);
