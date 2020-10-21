function setup() {
  createCanvas(1000, 1000, WEBGL);
  frameRate(70);
}

function draw() {
  background(250, 300, 0);
  fill (0, 0 , 200);
  strokeWeight(20);
  stroke(0, 200, 0);

 

  
  translate(3, 40, 50);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(400, 500);
  pop();

 
}
