var HINDEX = 0;
var IINDEX = 0;
var IN = false;
var HtextNodes = ["Cool Title!","Whoa! It's a header!?","Im on top of my world!"];
var imageSrcs = ["./imgs/dog.png","./imgs/cat.png","./imgs/person.png"]

$( document ).ready(function(){
  createHeader();
  createImagePane();
  fadeHeader();
  fadeImage();
  // Idea from https://stackoverflow.com/questions/18199457/jquery-fading-in-fading-out-continuously

});

function createHeader(){
  var header = document.getElementById('header');
  var h1e = document.createElement("h1");
  h1e.appendChild(document.createTextNode(HtextNodes[0]));
  header.appendChild(h1e);

}

function createImagePane() {
    var content = document.getElementById('content');
    var img = document.createElement("img");
    img.src = imageSrcs[0];
    content.appendChild(img);

}

function fadeHeader() {
  h1= $("h1")
  h1.fadeOut(3000, function() {
    HINDEX = (HINDEX+1)%HtextNodes.length;
    h1.text(HtextNodes[HINDEX])
    $(this).fadeIn(2000,fadeHeader());
    // Apply the callback to the one with the shortest combined animation time
    });
}

function fadeImage(){
  img= $("img");
  img.animate({left: '250px'},1000).animate({left: '0'},1000)
  img.fadeOut(3000, function() {
    IINDEX = (IINDEX+1)%imageSrcs.length;
    img.attr("src",imageSrcs[IINDEX]);
    $(this).fadeIn(2000,fadeImage());
    // Apply the callback to the one with the shortest combined animation time
    });
}
