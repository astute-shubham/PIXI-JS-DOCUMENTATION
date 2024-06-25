// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

const texture = PIXI.Texture.from('../assets/boy.png');
const sprite = new PIXI.Sprite(texture);
// Scale the sprite
sprite.scale.x = 2; // Double the width
sprite.scale.y = 0.5; // Half the height
// Add the sprite to the stage
app.stage.addChild(sprite);
