var info = {
	'first':'',
	'last':'',
	'age':'',
	'attempts':0
}

function setInfo() {
	info['first'] = document.getElementsByName('firstName')[0].value;
	info['last'] = document.getElementsByName('lastName')[0].value;
	info['age'] = document.getElementsByName('age')[0].value;
	infoAsJSON = JSON.stringify(info);
	console.log(infoAsJSON);
	localStorage.setItem("information",JSON.stringify(info))
	window.location = './MemoryGame/'
}
