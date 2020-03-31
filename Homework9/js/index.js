var people = [];

$(document).ready(function() {
  $("button").click(function() {
    $(document).load("./data/spacepeople.json", function(responseTxt,statusTxt,xhr){
      json = JSON.parse(responseTxt);
      for (var p in json.people) {
        if (json.people.hasOwnProperty(p)) {
          people.push(p.name)
        }
      }
      console.log(people);
      $("#spacePeople").html()
    });
  });
});
