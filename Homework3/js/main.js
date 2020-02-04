var userChoice = null;

var optionsList = document.getElementsByClassName('options')
var options = document.getElementsByClassName('option');
for(var i=0; i < options.length;i++){
  options[i].addEventListener("click",function(){
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active','');
    this.className += ' active';

    userChoice = this.id;
    if(userChoice == "Cave"){
      document.getElementById("cave").style.display = "block";
      document.getElementById("walk").style.display = "none";
      document.getElementById("die").style.display = "none";
    }else if (userChoice == "Walk") {
      document.getElementById("cave").style.display = "none";
      document.getElementById("walk").style.display = "block";
      document.getElementById("die").style.display = "none";
    }else if (userChoice == "Die") {
      document.getElementById("cave").style.display = "none";
      document.getElementById("walk").style.display = "none";
      document.getElementById("die").style.display = "block";
    }

    console.log(userChoice);
  })
}
