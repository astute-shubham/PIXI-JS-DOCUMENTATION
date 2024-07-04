// Create a new PIXI application
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);
// Create a sprite
const texture = PIXI.Texture.from('../assets/boy.png');
const sprite = new PIXI.Sprite(texture);
// Apply a blur filter
const blurFilter = new PIXI.filters.BlurFilter();
sprite.filters = [blurFilter];
// Add the sprite to the stage
sprite.x = 100;
sprite.y = 100;
app.stage.addChild(sprite);
const text = new PIXI.Text('This is Blur Filter', {
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