var cars = new Array()

class RLCar {
  constructor(title, img, description, author, imgYear) {
    this.title = title;
    this.img = img;
    this.description = description;
    this.author = author;
    this.imgYear = imgYear;
  }
  toInnerHTML(){
    var div = document.getElementById('content');
    //Create the Title
    var h1  = document.createElement('h1');
    var t = document.createTextNode(this.title) ;
    h1.appendChild(t);
    //Create the image
    var img = document.createElement('img');
    img.src = this.img;
    //Create description
    var p = document.createElement('p');
    var t = document.createTextNode(this.description);
    p.appendChild(t);
    //Create author
    var h3 = document.createElement('h3');
    var t = document.createTextNode(this.author);
    h3.appendChild(t);
    //create img year
    var h5 = document.createElement('h5');
    var t = document.createTextNode(this.imgYear);
    h5.appendChild(t)

    div.appendChild(h1);
    div. appendChild(img);
    div.appendChild(p);
    div.appendChild(h3);
    div.appendChild(h5);
  }
}
function initializeArray(){
  var RLCar1 = new RLCar("Octane","./imgs/Octane.png","This is the defult car of rocket league","Psyonix","2020");
  var RLCar2 = new RLCar("Dominus","./imgs/Dominus.png","This is one of the most popular cars in rocket league. It is a DLC car","Psyonix","2020");
  var RLCar3 = new RLCar("Breakout","./imgs/Breakout.png","One of the flattest cars. Very good at precise shots","Psyonix","2020");
  var RLCar4 = new RLCar("Merc","./imgs/Merc.png","People only really use this car as a meme beacuse its not super usefull. Others swear by it","Psyonix","2020");
  var RLCar5 = new RLCar("Mantis","./imgs/Mantis.png","One of my favorites. Pretty accurate due to being thin and long. Not very good when challenged by somone directly.","Psyonix","2020");

  cars.push(RLCar1);
  cars.push(RLCar2);
  cars.push(RLCar3);
  cars.push(RLCar4);
  cars.push(RLCar5);

}
function AccessInformation(){
  var i = Math.floor(Math.random()*5);
  cars[i].toInnerHTML();
}
