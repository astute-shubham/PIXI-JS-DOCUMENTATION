const app = new PIXI.Application({
    resizeTo: window,
    transparent: false,
    resolution: 1,
});
document.body.appendChild(app.view);


const symbols = [
    '../assets/symbol_0.png',
    '../assets/symbol_1.png',
    '../assets/symbol_2.png',
    '../assets/symbol_3.png',
    '../assets/symbol_4.png',
    '../assets/symbol_5.png',
    '../assets/symbol_6.png',
    '../assets/symbol_7.png',
    '../assets/symbol_8.png'
];

const REEL_WIDTH = 200;
const SYMBOL_SIZE = 150;


app.loader.add('logo', '../assets/neon.png').add('logo2', '../assets/neon2.png')
    .load(setup);

function setup(loader, resources) {
    
    let logo = new PIXI.Sprite(resources.logo.texture);
    let logo2 = new PIXI.Sprite(resources.logo2.texture);

    
    logo2.y = 74;
    logo2.x = 1134;
    logo2.width = 300;
    logo2.height = 450;

    logo.y = 100;
    logo.x = 100;
    logo.width = 300;
    logo.height = 300;

    
    app.stage.addChild(logo, logo2);
}


const loader = PIXI.Loader.shared;
symbols.forEach(symbol => {
    loader.add(symbol, symbol);
});

loader.load((loader, resources) => {
    setupGame(resources);
});


function setupGame(resources) {
    const reels = [];
    const reelContainer = new PIXI.Container();
    app.stage.addChild(reelContainer);
    reelContainer.name = "reelContainer";

    
    for (let i = 0; i < 3; i++) { 
        const rc = new PIXI.Container();
        rc.x = i * REEL_WIDTH;
        reelContainer.addChild(rc);

        const reel = {
            container: rc,
            symbols: [],
            position: 0,
            previousPosition: 0,
            blur: new PIXI.filters.BlurFilter(),
        };

        reel.blur.blurX = 0;
        reel.blur.blurY = 0;
        rc.filters = [reel.blur];

        
        for (let j = 0; j < 4; j++) { 
            const idx = (j + i) % symbols.length; 
            const symbolName = symbols[idx];
            const symbol = new PIXI.Sprite(resources[symbolName].texture);
            symbol.y = j * SYMBOL_SIZE;
            symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
            symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
            reel.symbols.push(symbol);
            rc.addChild(symbol);
            symbol.name = `symbol${idx}`;
        }
        reels.push(reel);
    }

    
    reelContainer.x = (app.screen.width - REEL_WIDTH * 3) / 2;
    const margin = SYMBOL_SIZE / 2;
    reelContainer.y = margin;

    let border = new PIXI.Graphics();
    border.lineStyle(5, 0x39ff14); 
    border.drawRect(0, 0, reelContainer.width, 450);
    reelContainer.addChild(border);

    
    const top = new PIXI.Graphics().beginFill(0xcccccc).drawRect(0, 0, app.screen.width, margin);
    const bottom = new PIXI.Graphics().beginFill(0xcccccc).drawRect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin + 100);

    
    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ffdd','#FF0000'], 
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
    });

    
    const spinButton = new PIXI.Graphics();
    spinButton.beginFill(0x4CAF50);
    spinButton.drawRect(0, 0, 120, 40);
    spinButton.endFill();
    spinButton.interactive = true;
    spinButton.buttonMode = true;
    spinButton.on('pointerdown', startPlay);
    spinButton.x = app.screen.width / 2 - spinButton.width / 2 + 160;
    spinButton.y = app.screen.height - margin + (margin - spinButton.height) / 2 - 50;

    const helpButton = new PIXI.Graphics();
    helpButton.beginFill(0x4CAF50);
    helpButton.drawRect(0, 0, 120, 40);
    helpButton.endFill();
    helpButton.interactive = true;
    helpButton.buttonMode = true;
    helpButton.on('pointerdown', onHelp);
    helpButton.x = app.screen.width / 2 - helpButton.width / 2 - 200;
    helpButton.y = app.screen.height - margin + (margin - helpButton.height) / 2 - 50;

    const buttonText = new PIXI.Text('Spin', {
        fill: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        align: 'center'
    });
    buttonText.x = spinButton.width / 2 - buttonText.width / 2;
    buttonText.y = spinButton.height / 2 - buttonText.height / 2;
    spinButton.addChild(buttonText);
    bottom.addChild(spinButton);

    const helpText = new PIXI.Text('Help', {
        fill: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        align: 'center'
    });
    helpText.x = helpButton.width / 2 - helpText.width / 2;
    helpText.y = helpButton.height / 2 - helpText.height / 2;
    helpButton.addChild(helpText);
    bottom.addChild(helpButton);

    
    const helpOverlay = new PIXI.Container();
    helpOverlay.visible = false;
    const helpBg = new PIXI.Graphics();
    helpBg.beginFill(0x000000, 0.9);
    helpBg.drawRect(0, 0, 543, 445);
    helpBg.endFill();
    helpOverlay.addChild(helpBg);

    const helpText1 = new PIXI.Text('Game Rules:\n\n1. Spin the reels.\n2. Match symbols horizontally in the middle row \n to win.\n3. Use the Simulator on the top left corner drop\n down menu to test the winning Conditions. \nSelect Random to remove winning conditions\n4. Click on the Spin Button and Enjoy the game!!', {
        fill: '#ffffff',
        fontSize: 24,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 40
    });
    helpText1.x = 20;
    helpText1.y = 20;
    helpOverlay.addChild(helpText1);

    const closeButton = new PIXI.Graphics();
    closeButton.beginFill(0xFF0000);
    closeButton.drawRect(0, 0, 100, 40);
    closeButton.endFill();
    closeButton.interactive = true;
    closeButton.buttonMode = true;
    closeButton.on('pointerdown', hideHelp);
    closeButton.x = 219;
    closeButton.y = 381;

    const closeButtonText = new PIXI.Text('Close', {
        fill: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        align: 'center'
    });
    closeButtonText.x = closeButton.width / 2 - closeButtonText.width / 2;
    closeButtonText.y = closeButton.height / 2 - closeButtonText.height / 2;
    closeButton.addChild(closeButtonText);
    helpOverlay.addChild(closeButton);

    reelContainer.addChild(helpOverlay);

    function onHelp() {
        helpOverlay.visible = true;
        spinButton.interactive = false;
    }

    function hideHelp() {
        helpOverlay.visible = false;
        spinButton.interactive = true;
    }

    
    const headerText = new PIXI.Text('2D SLOT GAME', style);
    headerText.x = Math.round((top.width - headerText.width) / 2);
    headerText.y = Math.round((margin - headerText.height) / 2);
    top.addChild(headerText);

    app.stage.addChild(top, bottom);

    let running = false;

    
    function startPlay() {
        if (running) return;
        running = true;
        spinButton.interactive = false;
    
        const targetPositions = [];
        for (let i = 0; i < reels.length; i++) {
            const r = reels[i];
            const target = r.position + 20; 
            targetPositions.push(target);
        }
    
        
        const maxTime = 4000;
    
        for (let i = 0; i < reels.length; i++) {
            const r = reels[i];
            const target = targetPositions[i];
            tweenTo(r, 'position', target, maxTime, backout(0.5), null, i === reels.length - 1 ? reelsComplete : null);
        }
    }
    

 
function reelsComplete() {
    running = false;
    spinButton.interactive = true;

    
    const middleSymbols = [];
    for (let i = 0; i < reels.length; i++) {
        const middleSymbol = reels[i].symbols[2];
        middleSymbols.push(middleSymbol);
    }

    
    const allIdentical = middleSymbols.every((symbol, index, array) =>
        index === 0 || symbol.texture === array[index - 1].texture
    );

    if (allIdentical) {
        
        for (let i = 0; i < reels.length; i++) {
            const middleSymbol = reels[i].symbols[2];
            reels[i].container.removeChild(middleSymbol);
        }

        
        for (let i = 0; i < reels.length; i++) {
            const aboveSymbol = reels[i].symbols[1];
            aboveSymbol.y += SYMBOL_SIZE; 
            reels[i].symbols[2] = aboveSymbol; 
        }

        
        for (let i = 0; i < reels.length; i++) {
            const idx = Math.floor(Math.random() * symbols.length);
            const symbolName = symbols[idx];
            const newSymbol = new PIXI.Sprite(resources[symbolName].texture);
            newSymbol.y = 0; 
            newSymbol.scale.x = newSymbol.scale.y = Math.min(SYMBOL_SIZE / newSymbol.width, SYMBOL_SIZE / newSymbol.height);
            newSymbol.x = Math.round((SYMBOL_SIZE - newSymbol.width) / 2);
            reels[i].symbols[1] = newSymbol; 
            reels[i].container.addChild(newSymbol); 
        }
    }
}


    
    app.ticker.add(() => {
        
        for (let i = 0; i < reels.length; i++) {
            const r = reels[i];
            r.blur.blurY = (r.position - r.previousPosition) * 8;
            r.previousPosition = r.position;

            for (let j = 0; j < r.symbols.length; j++) {
                const s = r.symbols[j];
                const prevY = s.y;
                s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
                if (s.y < 0 && prevY > SYMBOL_SIZE) {
                    
                    const simulatorValue = document.getElementById('simulator').value;
                    if(simulatorValue === 'random')
                    s.texture = resources[symbols[Math.floor(Math.random() * symbols.length)]].texture;
                    else if(simulatorValue === '3 X Club')
                        {       let symbolName;
                            if(j===2) symbolName = symbols[0];
                            else{
                                  symbolName = symbols[Math.floor(Math.random() * symbols.length)];
                            } 
                    const texture = resources[symbolName].texture;
                    s.texture = texture;
                        }
                        else if(simulatorValue === '3 X Hearts')
                            {       let symbolName;
                                if(j===2) symbolName = symbols[1];
                                else{
                                      symbolName = symbols[Math.floor(Math.random() * symbols.length)];
                                } 
                        const texture = resources[symbolName].texture;
                        s.texture = texture;
                            }
                            else if(simulatorValue === '3 X Star')
                                {       let symbolName;
                                    if(j===2) symbolName = symbols[5];
                                    else{
                                          symbolName = symbols[Math.floor(Math.random() * symbols.length)];
                                    } 
                            const texture = resources[symbolName].texture;
                            s.texture = texture;
                                }
                                
                    s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
                    s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
                }
            }
        }
    });

    
    const tweening = [];
    function tweenTo(object, property, target, time, easing, onchange, oncomplete) {
        const tween = {
            object,
            property,
            propertyBeginValue: object[property],
            target,
            easing,
            time,
            change: onchange,
            complete: oncomplete,
            start: Date.now(),
        };

        tweening.push(tween);
        return tween;
    }

    
    app.ticker.add(() => {
        const now = Date.now();
        const remove = [];
        for (let i = 0; i < tweening.length; i++) {
            const t = tweening[i];
            const phase = Math.min(1, (now - t.start) / t.time);
            t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));
            if (t.change) t.change(t);
            if (phase === 1) {
                t.object[t.target];
                if (t.complete) t.complete(t);
                remove.push(t);
            }
        }
        for (let i = 0; i < remove.length; i++) {
            tweening.splice(tweening.indexOf(remove[i]), 1);
        }
    });

    
    function lerp(a1, a2, t) {
        return a1 * (1 - t) + a2 * t;
    }

    
    function backout(amount) {
        return (t) => --t * t * ((amount + 1) * t + amount) + 1;
    }
}
