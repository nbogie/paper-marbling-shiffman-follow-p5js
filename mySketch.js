//see also myPalettes.js
let currentPalette;

function setup() {
    createCanvas(windowWidth, windowHeight / 2);
    currentPalette = randomPalette();
    noStroke();
    background("white");
}

function draw() {
    fill(random(currentPalette));
    const x = random(0, width);
    const y = random(0, height);
    circle(x, y, 100);
}

function mouseClicked() {
    background(255);
    currentPalette = randomPalette();
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}
