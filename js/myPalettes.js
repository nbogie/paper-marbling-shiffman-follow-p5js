//This is a second javascript file containing functions to support the main one, "mySketch.js"
//It must also be loaded in index.html

/** @typedef {{
        colors: string[],
        name: string,
        background?: string,
        stroke?:string,
        size: number
    }} Palette */
/** @returns {Palette} a palette chosen at random,
 * as an array of strings each of which represents a colour (e.g. "#f04155")
 */
function randomPalette() {
    /** @type {Palette[]} */
    const allPalettes = [
        {
            name: "nowak",
            colors: [
                "#e85b30",
                "#ef9e28",
                "#c6ac71",
                "#e0c191",
                "#3f6279",
                "#ee854e",
                "#180305",
            ],
            stroke: "#180305",
            background: "#ede4cb",
            size: 7,
        },
        {
            name: "tundra3",
            colors: [
                "#87c3ca",
                "#7b7377",
                "#b2475d",
                "#7d3e3e",
                "#eb7f64",
                "#d9c67a",
                "#f3f2f2",
            ],
            size: 7,
        },
        {
            name: "jupiter",
            colors: [
                "#c03a53",
                "#edd09e",
                "#aab5af",
                "#023629",
                "#eba735",
                "#8e9380",
                "#6c4127",
            ],
            stroke: "#12110f",
            background: "#e6e2d6",
            size: 7,
        },
        {
            name: "retro",
            colors: [
                "#69766f",
                "#9ed6cb",
                "#f7e5cc",
                "#9d8f7f",
                "#936454",
                "#bf5c32",
                "#efad57",
            ],
            size: 7,
        },
        {
            name: "tsu_akasaka",
            colors: [
                "#687f72",
                "#cc7d6c",
                "#dec36f",
                "#dec7af",
                "#ad8470",
                "#424637",
            ],
            stroke: "#251c12",
            background: "#cfc7b9",
            size: 6,
        },

        {
            name: "tundra2",
            colors: [
                "#5f9e93",
                "#3d3638",
                "#733632",
                "#b66239",
                "#b0a1a4",
                "#e3dad2",
            ],
            size: 6,
        },
        {
            name: "tsu_arcade",
            colors: [
                "#4aad8b",
                "#e15147",
                "#f3b551",
                "#cec8b8",
                "#d1af84",
                "#544e47",
            ],
            stroke: "#251c12",
            background: "#cfc7b9",
            size: 6,
        },
    ];

    const p = random(allPalettes);
    return { ...p, colors: shuffle(p.colors) };
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
