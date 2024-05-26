//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded
//It includes some jsdoc typedefs and typings, which help to keep things type-safe and to document.
const config = { shouldAddText: false };

/** @type {Palette} */
let currentPalette;

/**
 * The non-background colours from the current palette
 * @type {string[]} */
let otherColours;

/**The background colour from the current palette
 * @type {string} */
let bgColour;

/** @type {Splat[]} */
let splats;
let font;

function preload() {
    font = loadFont("./Lobster-Regular.ttf");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    restart();
    noLoop();
}

function draw() {
    background(bgColour);
    drawSplats();
    textSize(30);
    textAlign(RIGHT, CENTER);
    text(currentPalette.name, width - 30, height - 30);
}

function restart() {
    currentPalette = randomPalette();
    const result = splitPalette(currentPalette);
    bgColour = result.bgColour;
    otherColours = result.otherColours;
    splats = [];
    if (config.shouldAddText) {
        addTextAsSplat({
            fontSize: 300,
            word: "Code",
            pos: createVector(width / 2, height / 2),
        });
    }
    createSplats();
    redraw();
}

function drawSplats() {
    splats.forEach(drawSplat);
}

function mouseClicked() {
    // restart();
    createAndAddOneSplat(createVector(mouseX, mouseY), random(50, 100));
    redraw();
}

function mousePos() {
    return createVector(mouseX, mouseY);
}
function mouseDragged() {
    const offset = p5.Vector.random2D().mult(random(5, 40));
    createAndAddOneSplat(mousePos().add(offset), random(10, 60));
    redraw();
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
    if (key === " ") {
        restart();
    }
}
function createSplats() {
    for (let i = 0; i < 5; i++) {
        const r = random(50, 200);
        createAndAddOneSplat(randomScreenPos(), r);
    }
}

function createAndAddOneSplat(pos, radius) {
    const newSplat = createSplat({
        radius,
        pos,
        colour: random(otherColours),
    });

    splats.forEach((mainSplat) => deformSplatBasedOn(mainSplat, newSplat));
    splats.push(newSplat);
}

function addTextAsSplat({ word, fontSize, pos }) {
    const options = {};
    textAlign(CENTER, CENTER);
    const fontPoints = font
        .textToPoints(word, pos.x, pos.y, fontSize, options)
        .map((pt) => createVector(pt.x, pt.y));

    const minX = min(fontPoints.map((p) => p.x));
    const maxX = max(fontPoints.map((p) => p.x));
    const minY = min(fontPoints.map((p) => p.y));
    const maxY = max(fontPoints.map((p) => p.y));

    const offset = createVector(-(maxX - minX) / 2, (maxY - minY) / 2);
    const finalPoints = fontPoints.map((p) => p5.Vector.add(p, offset));
    /** @type {Splat} */
    const textSplat = {
        centre: createVector(width / 2, height / 2),
        initialRadius: 100,
        colour: random(otherColours),
        pts: finalPoints,
        shouldFill: true,
        shouldClose: false,
        strokeWeight: 5,
    };

    splats.push(textSplat);
}
