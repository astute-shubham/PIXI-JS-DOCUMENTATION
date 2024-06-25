// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Create a container
const container = new PIXI.Container();
// Create and add sprites to the container
const texture1 = PIXI.Texture.from('../assets/boy.png');
const sprite1 = new PIXI.Sprite(texture1);
sprite1.x = 50;
const texture2 = PIXI.Texture.from('../assets/boy2.png');
const sprite2 = new PIXI.Sprite(texture2);
sprite2.x = 150;

container.addChild(sprite1);
container.addChild(sprite2);
// Add the container to the stage
app.stage.addChild(container);
// Position the container
container.x = 200;
container.y = 200;