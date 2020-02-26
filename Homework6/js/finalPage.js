function getInfo(){
  var info = JSON.parse(localStorage.getItem("information"));
  console.log();
  showInfo(info);
}
function showInfo(info) {
  var div = document.getElementById('content');
  div.innerHTML = '<h4>' + info["first"] + ' ' + info['last'] + ', age ' + info['age'] + ', finished with ' + info['attempts'] + ' attempts</h4>';
}
