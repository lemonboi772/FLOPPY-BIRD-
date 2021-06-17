function preload()
{
birdImg=loadImage("floppybird.png");
backgroundImg=loadImage("background.png");
}



function setup() {
  createCanvas(1500,700);
 
  bgImg = createSprite(750,350,1500,700);
  bgImg.addImage(backgroundImg);
  bgImg.velocityX= -2;
  bird = createSprite(400,200,20,70);
  bird.scale=0.6
  bird.addImage(birdImg);
}
function draw() {
  background(0);  
if(bgImg.x<500)
{
bgImg.x=750

}
  // jump/ move bird upwards
  if(keyDown("space"))
  {
    bird.velocityY = -10;
  }

  //gravity
  bird.velocityY = bird.velocityY + 0.5;

  Spawntoppipe();

  Spawnbottompipe();
  
  drawSprites();
}
function Spawntoppipe()
{
if(frameCount%120===0)
{
pipe=createSprite(1500,1,20,100);
pipe.velocityX=-2;

}
}

function Spawnbottompipe()
{
if(frameCount%120===0)
{
pipe=createSprite(1500,699,20,100);
pipe.velocityX=-2;

}
}