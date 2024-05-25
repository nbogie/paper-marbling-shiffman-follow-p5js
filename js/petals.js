function drawPetals(cellSize, palette) {
    push();
    rotate(PI / 2);
    const numPetals = random([6, 12]);
    const [c1, c2, c3, c4, c5, c6, c7] = palette;
    fill(c1);
    const petalFunction = random([
        ({ size }) => circle(0, 0, size),
        ({ size }) => {
            stroke(c2);
            strokeWeight(cellSize / 10);
            line(0, 0, size, 0);
        },
        ({ size }) => {
            stroke(c2);
            strokeWeight(cellSize / 20);
            strokeCap(SQUARE);
            line(0, -size * 0.8, 0, size * 0.8);
        },
        ({ size }) => {
            const h = size;
            const w = size * 2 * (index % 2 === 0 ? 2 : 1);
            beginShape();
            fill(c2);
            noStroke();
            vertex(w, h);
            vertex(w, -h);
            vertex(0, 0);
            endShape(CLOSE);
        },

        ({ size, index }) => {
            const h = size;
            const w = size * 3 * (index % 2 === 0 ? 2 : 1);
            beginShape();
            fill(c2);
            noStroke();
            vertex(0, h);
            vertex(0, -h);
            vertex(w, 0);
            endShape(CLOSE);
        },
        ({ size }) => {
            rectMode(CENTER);
            strokeWeight(cellSize / 10);
            stroke(c3);
            rect(-size * 0.5, 0, size * 4, 0);
        },
    ]);

    let index = 0;
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / numPetals) {
        push();
        rotate(angle);
        translate(cellSize * 0.3, 0);
        petalFunction({ size: cellSize / 12, index });
        index++;
        pop();
    }
    pop();
}
