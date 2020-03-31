var people = [];

$(document).ready(function() {
  $("button").click(function() {
    $(document).load("./data/spacepeople.json", function(responseTxt,statusTxt,xhr){
      json = JSON.parse(responseTxt);
      for (var p in json.people) {
        if (object.hasOwnProperty(p)) {
          people.append(p.name)
        }
      }
      console.log(people);
      $("#spacePeople").html()
    });
  });
});
