// Import PixiJS

// Create the application
const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Create a particle container
const particleContainer = new PIXI.ParticleContainer();
// Create and add multiple sprites to the particle container
const texture = PIXI.Texture.from('../assets/maggot_tiny.png');
for (let i = 0; i < 1000; i++) {
    const particle = new PIXI.Sprite(texture);
    particle.x = Math.random() * app.screen.width;
    particle.y = Math.random() * app.screen.height;
    particleContainer.addChild(particle);
}
// Add the particle container to the stage
app.stage.addChild(particleContainer);