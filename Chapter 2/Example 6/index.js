// Import PixiJS

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Create a tiling sprite
const texture = PIXI.Texture.from('../assets/p2.jpeg');
const tilingSprite = new PIXI.TilingSprite(texture, 800, 600);
// Add the tiling sprite to the stage
app.stage.addChild(tilingSprite);
const text = new PIXI.Text('This is Tiling Sprite', {
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