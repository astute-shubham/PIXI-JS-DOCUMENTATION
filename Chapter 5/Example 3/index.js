// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Create a graphics object
const graphics = new PIXI.Graphics();
// Draw a red rectangle
graphics.beginFill(0xff0000);
graphics.drawRect(0, 0, 100, 100);
graphics.endFill();
// Generate a texture from the graphics object
const texture = app.renderer.generateTexture(graphics);
// Create a sprite using the generated texture
const sprite = new PIXI.Sprite(texture);
// Position the sprite
sprite.x = 200;
sprite.y = 200;
// Add the sprite to the stage
app.stage.addChild(sprite);