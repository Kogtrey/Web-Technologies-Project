class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext('2d');
    this.objs = {};
  }

  appendObjs(objs){
    for(const obj in objs){
      this.objs[obj] = objs[obj];
    }
  }
}

drawObjs(){
  for(const obj in this.objs){
    if(obj.shape == 'rect'){
      this.context.fillStyle = obj.color;
      this.context.fillRect(obj.x,obj.y,obj.height,obj.width);
    }else if(obj.shape == "circ"){
      this.context.fillStyle = obj.color;
      this.context.arc(obj.x,obj.y,obj.height,obj.width);
    }
    this.context.fill();
  }
}

clear(){
  this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
}

var canvas = new Canvas();

$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: 'https://github.com/Kogtrey/Web-Technologies-Project/Homework11/data/Objects.json',

    success: function(response){
      canvas.appendObjs(response);
    },

    failue: function(){
      alert("Failed to Get JSON");
    }
  });

  $(this).keypress(function(event)){
    getKey(event);
  }

});

function update() {
  canvas.clear();
  canvas.drawObjs();
  setInterval(update,1000/60);
}
