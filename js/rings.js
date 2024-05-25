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
