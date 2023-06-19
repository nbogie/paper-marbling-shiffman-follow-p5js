let walkerX;
let walkerY;

let palette;

const allPalettes = [
  ["#f04155", "#ff823a", "#f2f26f", "#fff7bd", "#95cfb7"],
  ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
  ["#aaff00", "#ffaa00", "#ff00aa", "#aa00ff", "#00aaff"],
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(20);
  restartWalker();
}

function draw() {
  drawWalker();
  moveWalker();
}

function restartWalker() {
  walkerX = width / 2;
  walkerY = height / 2;
  background("linen");
  palette = random(allPalettes);
}

function drawWalker() {
  let diam = random(10, 100);

  fill(random(palette));
  noStroke();
  rectMode(CENTER);

  square(walkerX, walkerY, diam, random(0, 200));

  fill(random(palette));
  square(walkerX, walkerY, diam / 2);
}

function moveWalker() {
  const step = 50;
  walkerX += random(-step, step);
  walkerY += random(-step, step);
  //if circle pos is off canvas then recentre pos and wipe
  if (walkerX > width || walkerX < 0 || walkerY > height || walkerY < 0) {
    restartWalker();
  }
}

function mouseClicked() {
  walkerX = mouseX;
  walkerY = mouseY;
}

function keyPressed() {
  if (key === "s") {
    save("sunset");
  }
  if (key === "w") {
    background("linen");
  }
}
