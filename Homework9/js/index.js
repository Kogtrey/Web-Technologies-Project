var people = [];

$(document).ready(function() {
  $("button").click(function() {
    $(document).load("./data/spacepeople.json", function(responseTxt,statusTxt,xhr){
      json = JSON.parse(responseTxt);
      people.push(json.people[0].name)
      people.push(json.people[1].name)
      people.pusj(json.people[2].name)
      console.log(people);
      $("#spacePeople").html()
    });
  });
});
