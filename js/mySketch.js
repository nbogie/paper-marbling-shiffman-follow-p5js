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
}
function createSplats() {
    splats = [];
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
