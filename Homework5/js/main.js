var images_blank = [];
var images_real = [];
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

for (var i = 0; i < 10; i++) {
  var div = document.createElement("div");
  div.classList.add("pane");
  var img = document.createElement("img");
  img.id = i;
  img.src = "./imgs/blank.png";
  img.width  = 200;
  img.height = 200;
  img.setAttribute("onclick", "ChangeImage(this.id)");
  div.appendChild(img);

  images_blank[i] = div;
}

shuffle(images_blank);
for (var i = 0; i < images_blank.length; i++) {
  content.appendChild(images_blank[i]);
}

for (var i = 0; i < 10; i++) {

  images_real[i] = "./imgs/" + ((i%5)+1) + ".png";

}


function ChangeImage(id){
  var img = document.getElementById(id);
  img.src = images_real[id];
}
