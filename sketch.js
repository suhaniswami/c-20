var ground , ground1 ,ground2 
var car,car1,car2,car3
var go,go1,go2,go3

function setup() {
  createCanvas(800,400);
  ground=createSprite(200,100,1200,10);
  ground1=createSprite(200,200,1200,10);
  ground2=createSprite(200,300,1200,10);

   car=createSprite(750,50,50,20);
   car1=createSprite(750,150,50,20);
   car2=createSprite(750,250,50,20);
   car3=createSprite(750,350,50,20);

 go=createSprite(50,50,20,20)
 go.velocityX=4;
 go1=createSprite(50,150,20,20)
 go1.velocityX=4;
 go2=createSprite(50,250,20,20)
 go2.velocityX=4;
 go3=createSprite(50,350,20,20)
 go3.velocityX=4;

}

function draw() {
  background(0); 
  if( car.x - go.x < go.width/2 + car.width/2){
    go.shapeColor = "Red";
  }

  if( car1.x - go1.x < go1.width/2 + car1.width/2){
    go1.shapeColor = "Red";
  }
 
  if( car2.x - go2.x < go2.width/2 + car2.width/2){
    go2.shapeColor = "Red";
  }


  if( car3.x - go3.x < go3.width/2 + car3.width/2){
    go3.shapeColor = "Red";
  }



  drawSprites();
}