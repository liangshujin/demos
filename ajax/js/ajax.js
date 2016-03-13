var url = 'http://dohtml5.duapp.com/php/wbc2/data.php?callback=?',
	param = {username: 'situ', age: 30};

$.get(url, param, onSuccess, 'json');

function onSuccess(data) {
	console.log(data.age);
}

//console.log(data);