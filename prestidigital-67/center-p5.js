// I used the following examples when building this: 
// https://p5js.org/examples/interaction-reach-2.html
// https://p5js.org/examples/input-mouse-1d.html
// Thank you!!!!!!!!!!!


// ALTERED

var canvas;

function windowResized () {
  resizeCanvas(windowWidth, windowHeight); 
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('position', 'fixed');
canvas.style('z-index', '-10');
// change: stroke color

stroke(130, 1, 145);

// stroke(0, 170, 77);
// stroke(200, 0, 82);
x[x.length - 1] = width/2 ; 
y[x.length - 1] = -200 ; 
} 


// change: numSegments
let numSegments = 120,
x = [],
y = [],
angle = [],
// change: segLength
segLength = 15,
targetX,
targetY;

for (let i = 0; i < numSegments; i++) {
x[i] = 0;
y[i] = 0;
angle[i] = 0;
}

function draw() {
reachSegment(0, mouseX, mouseY);

for (let i = 1; i < numSegments; i++) {
  reachSegment(i, targetX, targetY);
}

for (let j = x.length - 1; j >= 1; j--) {
  positionSegment(j, j - 1);
}

for (let k = 0; k < x.length; k++) {
  segment(x[k], y[k], angle[k], (k + 1) * 2);
}

let r1 = map(mouseX, 0, width, 0, height);
let r2 = height - r1;
let r3 = width - r1;

strokeWeight(1);

// change: first two values (x,y) of ellipses -- leave opacity and diameter
fill(255, 60);
ellipse(width / 2 , r2/2, r1);

fill(255, 150);
ellipse(width / 2 , r3/3 , r2);

fill(255, 6);
ellipse(width / 2, height/4 *3 , r3);

}

function positionSegment(a, b) {
x[b] = x[a] + cos(angle[a]) * segLength;
y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
const dx = xin - x[i];
const dy = yin - y[i];
angle[i] = atan2(dy, dx);
targetX = xin - cos(angle[i]) * segLength;
targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
strokeWeight(sw);
push();
translate(x, y);
rotate(a);
line(0, 0, segLength, 0);
pop();
}