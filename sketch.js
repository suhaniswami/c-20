var movingrectangle
var fixedrectangle

function setup() {

  createCanvas(800,400);
  movingrectangle=createSprite(600,200,10,10);
  fixedrectangle=createSprite(200,200,20,20);

movingrectangle.shapeColor="green";
fixedrectangle.shapeColor="green";
movingrectangle.debug=true;
fixedrectangle.debug=true;


}

function draw() {
  background(0,0,0);  
movingrectangle.x=World.mouseX;
movingrectangle.y=World.mouseY;
console.log(movingrectangle.x-fixedrectangle.x)
console.log(movingrectangle.width/2+fixedrectangle.width/2)
if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
 movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2 
&&fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
  movingrectangle.shapeColor="red";
  fixedrectangle.shapeColor="red";

}
else{
  movingrectangle.shapeColor="green";

fixedrectangle.shapeColor="green";
}



  drawSprites();
}