var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  bigrect = createSprite(500,600,30,50);
  bigrect.shapeColor = "green";
  bigrect.debug = true;
  thinrect = createSprite(700,600,50,30);
  thinrect.shapeColor = "green";
  thinrect.debug  = true;
  objectrect = createSprite(1000,400,70,50);
  objectrect.shapeColor = "green";
  objectrect.debug = true;
  objectdosrect = createSprite(1000,700,50,70);
  objectdosrect.shapeColor = "green";
  objectdosrect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;


}

function draw() {
  background(0,0,0); 
  bigrect.x = World.mouseX; 
  bigrect.y = World.mouseY; 
if(isTouching(bigrect,thinrect)){
  bigrect.shapeColor = "red";
  thinrect.shapeColor = "red";
}
else {
  bigrect.shapeColor = "green";
  thinrect.shapeColor = "green";
}

bounceOff(movingRect,fixedRect)


  drawSprites();
}




