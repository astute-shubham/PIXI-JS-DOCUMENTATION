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
const texture = PIXI.Texture.from('../assets/boy.png');
const sprite = new PIXI.Sprite(texture);
// Position the sprite
sprite.x = 150;
sprite.y = 200;
// Add the sprite to the stage
app.stage.addChild(sprite);
