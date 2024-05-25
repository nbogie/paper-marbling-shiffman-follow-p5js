//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

/** @type {Palette} */
let currentPalette;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    restart();
    noLoop();
}

/**
 *
 * @param {Palette} palette
 * @returns { {bgColour:string, otherColours: string[]}}
 */
function splitPalette(palette) {
    if (palette.background) {
        const otherColours = palette.colors.filter(
            (c) => c !== palette.background
        );
        return { bgColour: palette.background, otherColours };
    }

    const [bgColour, ...otherColours] = currentPalette.colors;
    return { bgColour, otherColours };
}

function draw() {
    const { bgColour, otherColours } = splitPalette(currentPalette);
    background(bgColour);
    drawGrid(otherColours);
    textSize(30);
    textAlign(RIGHT, CENTER);
    text(currentPalette.name, width - 30, height - 30);
}

function restart() {
    currentPalette = randomPalette();
    redraw();
}
function drawGrid(palette) {
    const cellSize = 150;
    let counter = 0;

    for (let y = 0; y <= height; y += cellSize) {
        for (let x = 0; x <= width; x += cellSize) {
            drawItem(x, y, cellSize * 0.66, shuffle(palette));
            counter++;
        }
    }
}
function mouseClicked() {
    restart();
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}
function drawItem(x, y, cellSize, palette) {
    push();
    translate(x, y);

    drawRings(cellSize, palette);
    drawPetals(cellSize, palette);
    pop();
}

function polarToCartesian(angle, radius) {
    const x = radius * cos(angle);
    const y = radius * sin(angle);
    return { x, y };
}
function repeat(numRepeats, fn) {
    for (let i = 0; i < numRepeats; i++) {
        fn(i);
    }
}
