var car,wall;
var weight,speed;





function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, 60, height/2); 
  wall.shapeColor="yellow";
  car =createSprite(50, 200, 50, 50);
  speed=Math.round(random(50,90));
  weight=Math.round(random(400,1500));
  car.velocityX=speed;
  

}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor="red"  ;
     }
     if(deformation<180 && deformation>100){
      car.shapeColor="green";

     }
     if(deformation<100){
      car.shapeColor="maroon";
      
     }
     if(deformation=0.5*2260*60*60/22500){
      car.shapeColor="lavender";
      

     }
     if(deformation=0.5*1522*50*50/22500){
      car.shapeColor="blue";
     
     }
     if(deformation=0.5*3000*45*45/22500){
      car.shapeColor="orange";
      
     }
  } 
  drawSprites();
}