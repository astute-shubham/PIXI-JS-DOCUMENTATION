import { autoDetectRenderer,Spine,Loader } from 'pixi.js'
       
        const app = await autoDetectRenderer({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb
        });
        document.body.appendChild(app.view.canvas);

        const loader = Loader.shared;

        const spineDataFile = '../assets/02/shine.json';
        const spineAtlasFile = '../assets/02/shine.atlas';

        loader.add('spineCharacter', spineDataFile, { crossOrigin: 'anonymous' })
            .add('spineAtlas', spineAtlasFile, { crossOrigin: 'anonymous' });

        loader.load((loader, resources) => {
            const spineAtlas = resources.spineAtlas.data;
            const spineData = resources.spineCharacter.spineData;

            // Create a Spine animation
            const spineCharacter = new Spine(spineData);

            // Position the spine character
            spineCharacter.x = app.renderer.width / 2;
            spineCharacter.y = app.renderer.height;
            spineCharacter.scale.set(0.5);

            // Play the animation
            spineCharacter.state.setAnimation(0, 'animation', true);

            app.stage.addChild(spineCharacter);
        });