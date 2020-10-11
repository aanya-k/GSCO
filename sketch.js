var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var speed1,speed2,speed3,speed4;
var weight1,weight2,weight3,weight4;

function setup() {
  createCanvas(1500,500);
  car1 = createSprite(75,100,25,25);
  car1.shapeColor = "white";
  car2 = createSprite(75,200,25,25);
  car2.shapeColor = "white";
  car3 = createSprite(75,300,25,25);
  car3.shapeColor = "white";
  car4 = createSprite(75,400,25,25);
  car4.shapeColor = "white";

  wall1 = createSprite(1425,100,25,50);
  wall1.shapeColor = "white";
  wall2 = createSprite(1425,200,25,50);
  wall2.shapeColor = "white";
  wall3 = createSprite(1425,300,25,50);
  wall3.shapeColor = "white";
  wall4 = createSprite(1425,400,25,50);
  wall4.shapeColor = "white";

  speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  speed4 = random(55,90);

  weight1 = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);
  weight4 = random(400,1500);
}

function draw() {
  background(0);

  if(keyDown("space")){
    car1.velocityX = speed1;
  }
  if(wall1.x - car1.x < (car1.width + wall1.width)/2){
    car1.velocityX = 0;
    var deformation1 = 0.5 * weight1 * speed1 * speed1/22500;
    if(deformation1<100){
      car1.shapeColor = color(0,255,0);
    }
    if(deformation1>180){
      car1.shapeColor = color(255,0,0);
    }
    if(deformation1<180 && deformation1>100){
      car1.shapeColor = color(230,230,0);
    }
    car2.velocityX = speed2;
  }
  if(wall2.x - car2.x < (car2.width + wall2.width)/2){
    car2.velocityX = 0;
    var deformation2 = 0.5 * weight2 * speed2 * speed2/22500;
    if(deformation2<100){
      car2.shapeColor = color(0,255,0);
    }
    if(deformation2>180){
      car2.shapeColor = color(255,0,0);
    }
    if(deformation2<180 && deformation2>100){
      car2.shapeColor = color(230,230,0);
    }
    car3.velocityX = speed3;
  }
  if(wall3.x - car3.x < (car3.width + wall3.width)/2){
    car3.velocityX = 0;
    var deformation3 = 0.5 * weight3 * speed3 * speed3/22500;
    if(deformation3<100){
      car3.shapeColor = color(0,255,0);
    }
    if(deformation3>180){
      car3.shapeColor = color(255,0,0);
    }
    if(deformation3<180 && deformation1>100){
      car3.shapeColor = color(230,230,0);
    }
    car4.velocityX = speed4;
  }
  if(wall4.x - car4.x < (car4.width + wall4.width)/2){
    car4.velocityX = 0;
    var deformation4 = 0.5 * weight4 * speed4 * speed4/22500;
    if(deformation4<100){
      car4.shapeColor = color(0,255,0);
    }
    if(deformation4>180){
      car4.shapeColor = color(255,0,0);
    }
    if(deformation4<180 && deformation1>100){
      car4.shapeColor = color(230,230,0);
    }
  }

  drawSprites();
}