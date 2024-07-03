// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();
// Draw a red rectangle
graphics.beginFill(0xff0000); // Red fill color
graphics.drawRect(50, 50, 100, 100); // x, y, width, height
graphics.endFill();
// Draw a blue circle
graphics.beginFill(0x0000ff); // Blue fill color
graphics.drawCircle(200, 200, 50); // x, y, radius
graphics.endFill();
// Add the graphics to the stage
app.stage.addChild(graphics);
