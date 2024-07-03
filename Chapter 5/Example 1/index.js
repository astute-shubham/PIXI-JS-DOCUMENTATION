// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Create a loader instance
const loader = new PIXI.Loader();
// Add an image to the loader
loader.add('exampleImage', '../assets/bunny.png');
// Load the image
loader.load((loader, resources) => {
    // Create a sprite from the loaded texture
    const sprite = new PIXI.Sprite(resources.exampleImage.texture);

    // Position the sprite
    sprite.x = 100;
    sprite.y = 100;

    // Add the sprite to the stage
    app.stage.addChild(sprite);
});
