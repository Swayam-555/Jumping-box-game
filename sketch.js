var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1 = createSprite(315,580,200,20);
   surface1.shapeColor = "green";
   surface2 = createSprite(110,580,200,20);
surface2.shapeColor = "yellow"
   surface3 = createSprite(520,580,200,20);
surface3.shapeColor = "blue"
   surface4 = createSprite(725,580,200,20);
surface4.shapeColor = "red"


    //create box sprite and give velocity
     box = createSprite(random(20,750),100,50,50);
     box.velocityY = 8;
     box.velocityX = -1.8;
     

}

function draw() {
    background("black");

    

    //create edgeSprite
     edges = createEdgeSprites();
      
     box.bounceOff(edges);

    //add condition to check if box touching surface and make bounce.
    if(isTouching(box,surface1)&& box.bounceOff(surface1)){
      surface1.shapeColor = "green";
    box.shapeColor = "green";
   music.play();
    }else{
      surface1.shapeColor = "green";
      //box.shapeColor = "gray";
      music.stop();
    }

    if(isTouching(box,surface2)&& box.bounceOff(surface2)){
      surface2.shapeColor = "yellow";
    box.shapeColor = "yellow";
    music.play();
    }else{
      surface2.shapeColor = "yellow";
      //box.shapeColor = "gray";
      music.stop();
    }

    if(isTouching(box,surface3)&& box.bounceOff(surface3)){
      surface3.shapeColor = "blue";
    box.shapeColor = "blue";
    music.play();
    }else{
      surface3.shapeColor = "blue";
      //box.shapeColor = "gray";
      music.stop();
    }

    if(isTouching(box,surface4)&& box.bounceOff(surface4)){
      surface4.shapeColor = "red";
    box.shapeColor = "red";
    music.play();
    }else{
      surface4.shapeColor = "red";
     // box.shapeColor = "gray";
      music.stop();
    }

    drawSprites();
}
