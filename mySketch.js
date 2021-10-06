let x;
let y;

let palette;

const allPalettes = [
  ["#f04155", "#ff823a", "#f2f26f", "#fff7bd", "#95cfb7"],
  ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
  ["#aaff00", "#ffaa00", "#ff00aa", "#aa00ff", "#00aaff"],
];

function setup() {
  createCanvas(600, 500);
  // frameRate(20);
  restartWalker();
}

function draw() {
  drawWalker();
  moveWalker();
}

function restartWalker() {
  x = 300;
  y = 250;
  background("linen");
  palette = random(allPalettes);
}

function drawWalker() {
  let diam = random(10, 100);

  fill(random(palette));
  noStroke();
  rectMode(CENTER);

  square(x, y, diam, random(0, 200));

  fill(random(palette));
  square(x, y, diam / 2);
}

function moveWalker() {
  const step = 50;
  x += random(-step, step);
  y += random(-step, step);
  //if circle pos is off canvas then recentre pos and wipe
  if (x > 600 || x < 0 || y > 500 || y < 0) {
    restartWalker();
  }
}

function mouseClicked() {
  x = mouseX;
  y = mouseY;
}

function keyPressed() {
  if (key === "s") {
    save("sunset");
  }
  if (key === "w") {
    background("linen");
  }
}
