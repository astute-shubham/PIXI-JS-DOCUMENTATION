// Create a new PIXI application
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);
// Create a sprite
const texture = PIXI.Texture.from('../assets/boy.png');
const sprite = new PIXI.Sprite(texture);
// Apply a color matrix filter
const colorMatrix = new PIXI.filters.ColorMatrixFilter();
colorMatrix.desaturate(); // Convert to grayscale
sprite.filters = [colorMatrix];
// Add the sprite to the stage
sprite.x = 300;
sprite.y = 100;
app.stage.addChild(sprite);

const text = new PIXI.Text('This is Color-Matrix Filter', {
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