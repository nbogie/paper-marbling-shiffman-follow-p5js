const NUM_POINTS_IN_SPLATS = 128;
/** @typedef {{pts: p5.Vector[],initialRadius:number, colour: string, centre: p5.Vector}} Splat */

/**
 * @returns {Splat}
 */
function createSplat({ radius, pos, colour }) {
    const pts = [];
    const numPoints = NUM_POINTS_IN_SPLATS;
    const angleStep = TWO_PI / numPoints;
    for (let angle = 0; angle < TWO_PI; angle += angleStep) {
        const offset = polarToCartesian(angle, radius);
        pts.push(p5.Vector.add(offset, pos));
    }
    return {
        pts,
        colour,
        centre: pos.copy(),
        initialRadius: radius,
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

/**
 * @param {Splat} mainSplat
 * @param {Splat} otherSplat
 */
function deformSplatBasedOn(mainSplat, otherSplat) {
    const c = otherSplat.centre;
    mainSplat.pts.forEach((p) => {
        const pMinusC = p5.Vector.sub(p, c);
        const r = otherSplat.initialRadius;
        const movement = p5.Vector.add(
            c,
            pMinusC.mult(sqrt(1 + (r * r) / pMinusC.magSq()))
        );
        p.set(movement);
    });
}
