//@ts-check
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

function drawPetals(cellSize, palette) {
    const numPetals = random([6, 12]);
    const [c1, c2, c3, c4, c5, c6, c7] = palette;
    fill(c1);
    const petalFunction = random([
        (sz) => circle(0, 0, sz),
        (sz) => {
            stroke(c2);
            strokeWeight(cellSize / 10);
            line(0, 0, sz, 0);
        },
        (sz) => {
            rectMode(CENTER);
            strokeWeight(cellSize / 10);
            stroke(c3);
            rect(-sz * 0.5, 0, sz * 4, 0);
        },
    ]);
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / numPetals) {
        push();
        rotate(angle);
        translate(cellSize * 0.3, 0);
        petalFunction(cellSize / 12);

        pop();
    }
}
function drawRings(cellSize, palette) {
    if (random() < 0.1) {
        return;
    }
    /** @type {("circle"|number)} */
    const numSides = random(["circle", 4, 5, 6, 8]);
    const numRings = random([1, 2, 3]);
    repeat(numRings, (ix) => {
        strokeWeight((random([1, 2, 3]) * cellSize) / 50);
        const sz = cellSize / (ix + 1);
        if (numSides === "circle") {
            drawCircleRing(sz, palette);
        } else {
            drawShapeRing(numSides, sz, palette);
        }
    });
}
function drawCircleRing(cellSize, palette) {
    push();
    strokeWeight(random([1, 2, 3, 4, 5, 20]));
    const diameter = (cellSize * 1) / random([1, 2, 3, 4]);
    stroke(palette[4]);
    noFill();
    circle(0, 0, diameter);
    pop();
}
/**
 *
 * @param {number} numSides
 * @param {number} cellSize
 * @param {string[]} palette
 */
function drawShapeRing(numSides, cellSize, palette) {
    push();
    rotate(PI / 2);
    beginShape();
    stroke(palette[0]);
    const radius = cellSize / 2;
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / numSides) {
        const { x, y } = polarToCartesian(angle, radius);
        vertex(x, y);
    }
    noFill();
    endShape(CLOSE);
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
