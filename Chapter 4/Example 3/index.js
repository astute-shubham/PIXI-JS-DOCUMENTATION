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
// Draw a complex shape with bezier curves
graphics.lineStyle(2, 0x000000); // Black outline
graphics.beginFill(0xffff00); // Yellow fill color
graphics.moveTo(100, 100); // Start point
graphics.bezierCurveTo(150, 50, 200, 150, 250, 100); // Control points
graphics.bezierCurveTo(300, 50, 350, 150, 400, 100); // Control points
graphics.lineTo(400, 200); // Close the shape
graphics.lineTo(100, 200);
graphics.closePath();
graphics.endFill();
// Draw a complex polygon
graphics.lineStyle(2, 0x0000ff); // Blue outline
graphics.beginFill(0x00ffff); // Cyan fill color
graphics.drawPolygon([
    500, 100, // x, y
    550, 150,
    600, 100,
    650, 150,
    600, 200,
    550, 150,
    500, 200
]);
graphics.endFill();
// Add the graphics to the stage
app.stage.addChild(graphics);
const text = new PIXI.Text('These are how you\ncan make advanced\ngraphics!!', {
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 0xffffff,
    align: 'center'
});
// Position the text
text.x = 300;
text.y = 300;
// Add the text to the stage
app.stage.addChild(text);
