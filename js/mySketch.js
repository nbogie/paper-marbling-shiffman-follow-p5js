//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

/** @type {Palette} */
let currentPalette;
/** @type {string[]} */
let otherColours;

/** @type {Splat[]} */
let splats;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    restart();
    noLoop();
}

function draw() {
    textSize(30);
    textAlign(RIGHT, CENTER);
    text(currentPalette.name, width - 30, height - 30);
    drawSplats();
}

function drawSplats() {
    splats.forEach(drawSplat);
}

function restart() {
    currentPalette = randomPalette();
    const result = splitPalette(currentPalette);
    background(result.bgColour);

    otherColours = result.otherColours;
    createSplats();

    redraw();
}
function mouseClicked() {
    restart();
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}
function createSplats() {
    splats = collect(10, (ix) => {
        return createSplat({
            radius: random(30, 200),
            pos: randomScreenPos(),
            colour: random(otherColours),
        });
    });
}
