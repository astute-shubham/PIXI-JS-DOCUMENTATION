// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

const texture = PIXI.Texture.from('../assets/boy2.png');
const sprite = new PIXI.Sprite(texture);
// Set alpha and tint
sprite.alpha = 0.5; // 50% transparent
sprite.tint = 0xff0000; // Red tint
// Add the sprite to the stage
app.stage.addChild(sprite);
