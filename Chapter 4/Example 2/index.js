  // Create a PIXI application
  let app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
  document.body.appendChild(app.view);

  // Create a Graphics object
  let shape = new PIXI.Graphics();
  shape.lineStyle(4, 0xff00ff, 1);

  // Draw a custom shape with lines and curves
  shape.moveTo(100, 100); // Start point
  shape.lineTo(200, 100); // Line to the right
  shape.quadraticCurveTo(250, 50, 300, 100); // Quadratic curve to the right
  shape.lineTo(400, 100); // Line to the right
  shape.bezierCurveTo(450, 150, 500, 50, 550, 100); // Bezier curve to the right
  shape.lineTo(650, 100); // Line to the right
  shape.lineTo(650, 200); // Line downwards
  shape.lineTo(100, 200); // Line to the left
  shape.lineTo(100, 100); // Line upwards to the start point

  // Fill the shape
  shape.beginFill(0x00ffff, 0.5);
  shape.endFill();

  // Add the shape to the stage
  app.stage.addChild(shape);

  const text = new PIXI.Text('Lines And Curves', {
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 0xffffff,
    align: 'center'
});
// Position the text
text.x = 300;
text.y = 400;
// Add the text to the stage
app.stage.addChild(text);