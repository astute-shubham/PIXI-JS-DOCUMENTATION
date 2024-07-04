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
// Set line style (thickness, color)
graphics.lineStyle(5, 0x00ff00); // 5px thick, green color
// Draw a line
graphics.moveTo(50, 50); // Start at (50, 50)
graphics.lineTo(200, 200); // Draw to (200, 200)
// Draw a curve
graphics.lineStyle(2, 0xff00ff); // 2px thick, magenta color
graphics.moveTo(200, 200); // Start at (200, 200)
graphics.arcTo(300, 100, 400, 300, 100); // Control points and radius
// Add the graphics to the stage
app.stage.addChild(graphics);
const text = new PIXI.Text('These are lines and curves!!', {
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 0xffffff,
    align: 'center'
});
// Position the text
text.x = 300;
text.y = 50;
// Add the text to the stage
app.stage.addChild(text);
