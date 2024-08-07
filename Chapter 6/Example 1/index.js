// Create a new PIXI application
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);
// Create a sprite
const texture = PIXI.Texture.from('../assets/boy.png');
const sprite = new PIXI.Sprite(texture);
// Enable interactivity
sprite.interactive = true;
sprite.buttonMode = true; // Shows a pointer cursor on hover
// Add event listeners
sprite.on('pointerdown', (event) => {
    sprite.tint = 0xff0000; 
});
sprite.on('pointerover', (event) => {
    sprite.tint = 0x00ff00; // Change tint on hover
});
sprite.on('pointerout', (event) => {
    sprite.tint = 0xffffff; // Reset tint when not hovered
});
// Position and add the sprite to the stage
sprite.x = 100;
sprite.y = 100;
app.stage.addChild(sprite);

const text = new PIXI.Text('Take your mouse over\n the boy and click it!!', {
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