// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Create a texture from an image URL
const texture = PIXI.Texture.from('../assets/bunny.png');
// Create a sprite using the texture
const sprite = new PIXI.Sprite(texture);
// Position the sprite
sprite.x = 150;
sprite.y = 150;
// Add the sprite to the stage
app.stage.addChild(sprite);
