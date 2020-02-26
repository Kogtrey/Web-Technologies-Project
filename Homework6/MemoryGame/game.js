// Some Code was inspired by Cody Hill-Boss as we discussed strategies. Any similarities in Code is likely due to studying together

var images_blank = [];
var images_real = [];
const blank = "../imgs/blank.png"
var attempts = 0;

var content = document.getElementById("Content")
/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};
function none(){

}

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

for (var i = 0; i < 10; i++) {
  var div = document.createElement("div");
  div.classList.add("pane");
  var img = document.createElement("img");
  img.id = i;
  img.src = blank;
  img.width  = 200;
  img.height = 200;
  img.setAttribute("onclick", "flip(this.id)");
  div.appendChild(img);

  images_blank[i] = div;
}

shuffle(images_blank);
for (var i = 0; i < images_blank.length; i++) {
  content.appendChild(images_blank[i]);
}

for (var i = 0; i < 10; i++) {

  images_real[i] = "../imgs/" + ((i%5)+1) + ".png";

}


var flipped = []
function flip(id){
  if(!flipped.includes(id)){
      flipped.push(id);
  }

  updateImage(id);
  if(flipped.length==2){
    var img1 = document.getElementById(flipped[0]);
    var img2 = document.getElementById(flipped[1]);
    new Promise(resolve => setTimeout(changeImage,500,img1,img2));
    attempts++;
  }
}
function updateImage(id){
  var img = document.getElementById(id);
  img.src = images_real[id];
}
function changeImage(img1,img2) {
  if(flipped[0]%5 == flipped[1]%5){
    console.log("The same");
    img1.style.visibility = "hidden";
    img2.style.visibility = "hidden";
    flipped = [];
  }else{
    flipped =[];
    img1.src = blank;
    img2.src = blank;
  }
  if (checkWin()){
    var info = JSON.parse(localStorage.getItem("information"));
    info["attempts"] = attempts;
    localStorage.setItem("information",JSON.stringify(info));
    window.location = '../finalPage.html';
  }
}
function checkWin(){
  for (var i = 0; i < 10; i++) {
    img = document.getElementById(i);
    if(img.style.visibility != "hidden"){
      return false;
    }
  }
  return true;
}
