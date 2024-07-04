  // Create a PIXI application
  let app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
  document.body.appendChild(app.view);

  // Circle
  let circle = new PIXI.Graphics();
  circle.beginFill(0xff0000);
  circle.drawCircle(100, 100, 50);
  circle.endFill();
  app.stage.addChild(circle);

  // Rectangle
  let rectangle = new PIXI.Graphics();
  rectangle.beginFill(0x00ff00);
  rectangle.drawRect(200, 75, 100, 50);
  rectangle.endFill();
  app.stage.addChild(rectangle);

  // Ellipse
  let ellipse = new PIXI.Graphics();
  ellipse.beginFill(0x0000ff);
  ellipse.drawEllipse(400, 100, 60, 30);
  ellipse.endFill();
  app.stage.addChild(ellipse);

  // Polygon
  let polygon = new PIXI.Graphics();
  polygon.beginFill(0xffff00);
  polygon.drawPolygon([
      550, 150,  // First point
      600, 100,  // Second point
      650, 150,  // Third point
      600, 200   // Fourth point
  ]);
  polygon.endFill();
  app.stage.addChild(polygon);
  const text = new PIXI.Text('Different Graphic Shapes', {
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