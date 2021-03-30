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
   surface1 = createSprite(400,300,100,100);
   surface1.shapeColor = "green";
   surface2 = createSprite(400,300,100,100);
surface2.ShapeColor = "yellow"
   surface3 = createSprite(400,300,100,100);
surface3.ShapeColor = "blue"
   surface4 = createSprite(400,300,100,100);
surface4.ShapeColor = "red"
var box_options = {
    restitution = 1
}
    //create box sprite and give velocity
     box = createSprite(random(20,750),100,50,50,box_options);
     box.velocityX = 3;
box.shapeColor = "gray"
     

}

function draw() {
    background("black");

    

    //create edgeSprite
      createEdgeSprites();
      box.collide(edges)


    //add condition to check if box touching surface and make bounce.
    if(isTouching(box,surface1)){
      surface1.shapeColor = "green";
    box.shapeColor = surface1.shapeColor;
    music.play;
    }else{
      surface1.shapeColor = "green";
      box.shapeColor = "gray";
      music.stop;
    }

    if(isTouching(box,surface2)){
      surface.shapeColor = "yellow";
    box.shapeColor = surface2.shapeColor;
    music.play;
    }else{
      surface2.shapeColor = "yellow";
      box.shapeColor = "gray";
      music.stop;
    }

    if(isTouching(box,surface3)){
      surface3.shapeColor = "blue";
    box.shapeColor = surface3.shapeColor;
    music.play;
    }else{
      surface3.shapeColor = "blue";
      box.shapeColor = "gray";
      music.stop;
    }

    if(isTouching(box,surface4)){
      surface4.shapeColor = "red";
    box.shapeColor = surface4.shapeColor;
    music.play;
    }else{
      surface4.shapeColor = "red";
      box.shapeColor = "gray";
      music.stop
    }

    drawSprites();
}
