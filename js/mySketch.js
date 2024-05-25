//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let currentPalette;

function setup() {
    createCanvas(windowWidth, windowHeight);
    currentPalette = randomPalette();
    noStroke();
    background(currentPalette[2]);
}

function draw() {
    fill(random(currentPalette));
    // circle(mouseX, mouseY, 100);
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
