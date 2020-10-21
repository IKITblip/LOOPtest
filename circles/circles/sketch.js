function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(70);
  background(255, 255, 0);
 
}
let steps = 50;
let size = 50;
let speed = 5;
let sizeMax = 100;

function draw() {
  background(200, 0, 200);
  size = size + speed;
  for(let x = 5; x <= width; x += steps) { 
      for(let y = 0; y <= height; y += steps) {

        stroke(random(0,255));

        strokeWeight(random(0,10));
      ellipse(x,y,size,size);

  fill(200, 400, 0);
   
   if (size > sizeMax|| size < 1) {
     speed = -1 * speed;
   }
   else if (size < 1){
     speed = -speed;
   }
    
  }
}
 

 
  }

