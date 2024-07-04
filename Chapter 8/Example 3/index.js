// Create a new PIXI application
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);
// Create a sprite
app.stage.eventMode = 'static';

    const container = new PIXI.Container();

    app.stage.addChild(container);

   

    const flag = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/flag.png');
    container.addChild(flag);
    flag.x = 100;
    flag.y = 100;
    const displacementSprite = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/displacement_map_repeat.jpg');   // Make sure the sprite is wrapping.
    // displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    // Create a displacement filter
    const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    displacementFilter.padding = 10;

    displacementSprite.position = flag.position;

    app.stage.addChild(displacementSprite);

    // Apply the filter
    flag.filters = [displacementFilter];

    // Create a text object\
const text = new PIXI.Text('This is Displacement Filter', {
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

    app.ticker.add(() =>
    {
        // Offset the sprite position to make vFilterCoord update to larger value.
        // Repeat wrapping makes sure there's still pixels on the coordinates.
        displacementSprite.x++;
        // Reset x to 0 when it's over width to keep values from going to very huge numbers.
        if (displacementSprite.x > displacementSprite.width)
        {
            displacementSprite.x = 0;
        }
    });