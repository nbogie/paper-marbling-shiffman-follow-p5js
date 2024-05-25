//This is a second javascript file containing functions to support the main one, "mySketch.js"
//It must also be loaded in index.html

/** @returns {string[]} a palette chosen at random,
 * as an array of strings each of which represents a colour (e.g. "#f04155")
 */
function randomPalette() {
    const allPalettes = [
        [
            "#69766f",
            "#9ed6cb",
            "#f7e5cc",
            "#9d8f7f",
            "#936454",
            "#bf5c32",
            "#efad57",
        ],
    ];
    return random(allPalettes);
}
