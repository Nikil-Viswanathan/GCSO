var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  speed = random(55,90)
  weight=random(400,1500)
  wall=createSprite(1500,200,60,height/2)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(car.collide(wall)){
    deformation = (0.5*weight*speed*speed/22500);
  }
  console.log(deformation);
  if(deformation<100){
    car.shapeColor = "green";
  }
  if(deformation<180 && deformation>100){
    car.shapeColor = "yellow";
  }
  if(deformation>180){
    car.shapeColor ="red";
  }
  drawSprites();
}