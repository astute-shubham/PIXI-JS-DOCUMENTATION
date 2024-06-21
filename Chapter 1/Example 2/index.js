// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Create a new Sprite from an image path
const sprite = PIXI.Sprite.from('../assets/logo.png');

// Center the sprite's anchor point
sprite.anchor.set(0.5);

// Move the sprite to the center of the screen
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

app.stage.addChild(sprite);
