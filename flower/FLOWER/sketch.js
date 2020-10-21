let rad = 60; 
let xpos, ypos;

let xspeed = 0.8; 
let yspeed = 0.2; 

let xdirection = 10; 
let ydirection = 1; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 200, 0);
  frameRate(10);
  ellipseMode(RADIUS);

  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  drawFlower(random(width), random(height), random(10, 400));
}

function drawFlower(flowerX, flowerY, petalSize) {
  let petalDistance = petalSize / 2;
  background(0,302,0);

  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  fill(200, 400, 0);


  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);


  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);


  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize );

  fill(0, 0, 330);
  circle(flowerX, flowerY, petalSize);
}