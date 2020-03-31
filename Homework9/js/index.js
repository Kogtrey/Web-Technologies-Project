var people = [];

$(document).ready(function() {
  $("button").click(function() {
    $(document).load("./data/spacepeople.json", function(responseTxt,statusTxt,xhr){
      json = JSON.parse(responseTxt);
      for (var i = 0; i < json.people; i++) {
        people.push(json.people[i].name)
      }
      console.log(people);
      $("#spacePeople").html()
    });
  });
});
