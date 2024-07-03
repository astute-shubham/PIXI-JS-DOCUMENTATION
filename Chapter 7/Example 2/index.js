// Create a new PIXI application
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);
// Create a sprite
const texture = PIXI.Texture.from('../assets/boy2.png');
const sprite = new PIXI.Sprite(texture);
// Position the sprite
sprite.x = 300;
sprite.y = 300;
app.stage.addChild(sprite);
// Add keyboard event listeners
window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            sprite.y -= 10; // Move sprite up
            break;
        case 'ArrowDown':
            sprite.y += 10; // Move sprite down
            break;
        case 'ArrowLeft':
            sprite.x -= 10; // Move sprite left
            break;
        case 'ArrowRight':
            sprite.x += 10; // Move sprite right
            break;
    }
});