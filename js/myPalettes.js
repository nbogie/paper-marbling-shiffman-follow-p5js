//This is a second javascript file containing functions to support the main one, "mySketch.js"
//It must also be loaded in index.html

/** @typedef {{
        colors: string[],
        name: string,
        background?: string,
        stroke?:string,
        size?: number
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
        {
            name: "present-correct",
            colors: [
                "#fd3741",
                "#fe4f11",
                "#ff6800",
                "#ffa61a",
                "#ffc219",
                "#ffd114",
                "#fcd82e",
                "#f4d730",
                "#ced562",
                "#8ac38f",
                "#79b7a0",
                "#72b5b1",
                "#5b9bae",
                "#6ba1b7",
                "#49619d",
                "#604791",
                "#721e7f",
                "#9b2b77",
                "#ab2562",
                "#ca2847",
            ],
            size: 20,
        },
        {
            name: "jung_bird",
            colors: ["#fc3032", "#fed530", "#33c3fb", "#ff7bac", "#fda929"],
            stroke: "#000000",
            background: "#ffffff",
            size: 5,
        },
        {
            name: "candy-wrap",
            colors: [
                "#f19797",
                "#f9b73e",
                "#ee5151",
                "#fb671f",
                "#6bbe3a",
                "#0c75b7",
                "#0b9e4e",
                "#763f68",
            ],
            stroke: "#302319",
            background: "#e7ded5",
        },
        {
            name: "slicks",
            colors: ["#e1decd", "#d95336", "#e6ac1d"],
            stroke: "#302319",
            background: "#e1decd",
        },
        {
            name: "circus",
            colors: [
                "#3eb79e",
                "#f4a910",
                "#f37377",
                "#207986",
                "#f26003",
                "#afce95",
            ],
            stroke: "#302319",
            background: "#eadcb6",
        },
        {
            name: "spotlight",
            colors: ["#f34312", "#00a49e", "#ef888f", "#f5b408", "#412432"],
            stroke: "#412432",
            background: "#dfdcd5",
        },
        {
            name: "five-stars",
            colors: [
                "#f5e8c7",
                "#d9dcad",
                "#cf3933",
                "#f3f4f4",
                "#74330d",
                "#8bb896",
                "#eba824",
                "#f05c03",
            ],
            stroke: "#380c05",
            background: "#ecd598",
        },
        {
            name: "full-moon",
            colors: ["#f7e8be", "#aa879f", "#f6634e"],
            stroke: "#2a1f39",
            background: "#f7e8be",
        },
        {
            name: "risograph",
            colors: ["#f56f64", "#f9cb1f", "#f0eace"],
            stroke: "#295042",
            background: "#f0eace",
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
