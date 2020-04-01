class entity {
  constructor(x,y,height,width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

  }
}


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#0000FF"|;

var player = new entity(parseInt(canvas.width/2),parseInt(canvas.height/2),50,50)
var ai = new entity(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height),30,30)
var objs = [player,ai]
draw();
setInterval(update, 1000/10);

$(document).ready(function() {
  $(this).keypress(function() {
    switch (getKey(event)) {
      case 'w':
        if(!hasCollided(player,ai) && isInFrame(player)){
          move_up(player);

        }
        break;
      case 'a':
        if (!hasCollided(player,ai) && isInFrame(player)) {
          move_left(player);

        }
        break;
      case 's':
        if (!hasCollided(player,ai) && isInFrame(player)) {
          move_down(player);

        }
        break;
      case 'd':
        if (!hasCollided(player,ai) && isInFrame(player)) {
          move_right(player);

        }
        break;

      default:
    }
    draw();
  });
});

function getKey(event) {
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);
  return actualLetter;
}

function update(){
  direction = Math.floor(Math.random() * 4)
  switch (direction) {
    case 0:
      if(!hasCollided(player,ai)&&isInFrame(ai)){
        move_up(ai);

      }
      break;
    case 1:
      if (!hasCollided(player,ai)&&isInFrame(ai)) {
        move_left(ai);

      }
      break;
    case 2:
      if (!hasCollided(player,ai)&&isInFrame(ai)) {
        move_down(ai);

      }
      break;
    case 3:
      if (!hasCollided(player,ai)&&isInFrame(ai)) {
        move_right(ai);

      }
      break;
    default:

  }
  if (hasCollided(player,ai)) {
    canvas.style.background = "#ff00ff"
    player.height = 80;
    player.width = 80;
  }
  draw()
}

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.fillRect(player.x,player.y,player.height,player.width);
 ctx.fillRect(ai.x,ai.y,ai.height,ai.width);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function isInFrame(obj){
  return !(
      (obj.y < 0 ) ||
      ((obj.y + obj.height) > canvas.height) ||
      ((obj.x) < 0) ||
      ((obj.x + obj.width) > canvas.width)
    );
}

function move_up(obj){
    obj.y-=10;
}
function move_down(obj){
    obj.y+=10;
}
function move_left(obj){
    obj.x-=10;
}
function move_right(obj){
    obj.x+=10;
}
