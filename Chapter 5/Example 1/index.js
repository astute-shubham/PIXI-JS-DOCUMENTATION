// Import PixiJS
// import * as PIXI from './pixi.js'

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);
const texture =  PIXI.Texture.from('../assets/bunny.png');
const sprite = new PIXI.Sprite(texture);
// Position the sprite
sprite.x = 100;
sprite.y = 100;
// Add the sprite to the stage
app.stage.addChild(sprite);
// Use GSAP to animate the sprite
gsap.to(sprite, { x: 600, y: 400, duration: 2, ease: 'power2.inOut' });
const text = new PIXI.Text('This is Tween Animation', {
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
