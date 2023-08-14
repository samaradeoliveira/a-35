var hypnoticBall;


function setup() {
  createCanvas(500, 500);

  hypnoticBall = createSprite(250, 250, 30, 30);
  hypnoticBall.shapeColor = "white";

}

function draw() {
  background("black");

  if (keyDown(LEFT_ARROW)) {
    changePosition(-1, 0);
  }
  else if (keyDown(RIGHT_ARROW)) {
    changePosition(1, 0);
  }
  else if (keyDown(UP_ARROW)) {
    changePosition(0, -1);
  }
  else if (keyDown(DOWN_ARROW)) {
    changePosition(0, +1);
  }


  //desenha os sprites
  drawSprites();

}

function changePosition(x, y) {
  hypnoticBall.x = hypnoticBall.x + x;
  hypnoticBall.y = hypnoticBall.y + y;

}


