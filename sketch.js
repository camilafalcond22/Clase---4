var x = 0;
var y = 0;
var canvas; 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  frameRate (12);
  noStroke();

}

function draw() { //esto es un loop, hace que se repita muchas veces algo, en este caso el emoji//
   colorMode(HSB,359,100,100)
   background(map(mouseX, 0, windowWidth, 0, 359), 20, 147,map(mouseY,0,windowWidth,100,100));
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("white");
  textSize(random (100,200));
  text("🐛",x,y);
}

function windowResized() { //esto pone atencion a si la ventana cambia de tamaño, por lo tanto corrige el canvas//
  resizeCanvas(windowWidth, windowHeight);
}