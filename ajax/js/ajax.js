/*var url = 'http://dohtml5.duapp.com/php/wbc2/data.php?callback=?',
	param = {username: 'situ', age: 30};

$.get(url, param, onSuccess, 'json');

function onSuccess(data) {
	console.log(data.age);
}*/

//console.log(data);

// jsonP

!function(window, document, $, undefined) {
	
	var renderSel = function() {
		var url = 'http://dohtml5.duapp.com/php/wbc2/getPlace.php?callback=?';
		$.get(url, function(data) {
			var arr = [];
			$.each(data, function(i, obj) {
				arr.push('<option value="', obj.id, '">', obj.province, '</option>');
			});
			
			$('#provinceSel').html(arr.join(''));
		}, 'json');
	};
	
	renderSel();
	
}(window, document, jQuery);
