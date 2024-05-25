/** @typedef {{pts: p5.Vector[], colour: string}} Splat */

/**
 * @returns {Splat}
 */
function createSplat({ radius, pos, colour }) {
    const pts = [];
    const numPoints = 32;
    const angleStep = TWO_PI / numPoints;
    for (let angle = 0; angle < TWO_PI; angle += angleStep) {
        const offset = polarToCartesian(angle, radius);
        pts.push(p5.Vector.add(offset, pos));
    }
    return {
        pts,
        colour,
    };
}

/**
 *
 * @param {Splat} splat
 */
function drawSplat(splat) {
    push();
    beginShape();
    noStroke();
    fill(splat.colour);
    for (let pt of splat.pts) {
        vertex(pt.x, pt.y);
    }
    endShape(CLOSE);
    pop();
}
