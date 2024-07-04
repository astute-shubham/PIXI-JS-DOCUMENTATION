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
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();
// Draw a blue circle
graphics.beginFill(0x0000ff);
graphics.drawCircle(200, 200, 50);
graphics.endFill();
// Add the graphics to the stage
app.stage.addChild(graphics);
const text = new PIXI.Text('These are graphics\n Learn more in chapter 4', {
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