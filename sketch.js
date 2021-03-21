var canvas;
var music;
var surface1,surface2,surface3,surface4;

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
     box = createSprite(400,100,50,50,box_options);
     box.velocityX = -3;

     

}

function draw() {
    background("gray");
    //create edgeSprite
      createEdgeSprites();
      box.collide(edges)


    //add condition to check if box touching surface and make bounce.
}
