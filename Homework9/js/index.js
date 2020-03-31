var people = [];

$(document).ready(function() {
  $("button").click(function() {
    $(document).load("./data/spacepeople.json", function(responseTxt,statusTxt,xhr){
      json = JSON.parse(responseTxt);
      people.push(json.people[0].name)
      people.push(json.people[1].name)
      people.push(json.people[2].name)
      console.log(people);

      var div = document.getElementById('content')
      for(var i=0; i < people.length; i++){
        var h2 = document.createElement("h2");
        h2.innerHTML = people[i];
        h2.classList.add("person")
        div.appendChild(h2)
      }

      div.innerHTML = "";
    });
  });
});
