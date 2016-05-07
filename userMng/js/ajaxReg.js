$(document).ready(function() {

	var url = 'server/ajaxReg.php',
		param;

	$('#submitBtn').on('click', function() {

		// check

		param = {
			name: $('#name').val(),
			age: $('#age').val(),
			gender: $('input[name=gender]:checked').val(),
			edu: $('#edu').val(),
			mobile: $('#mobile').val(),
			address: $('#address').val(),
			hobbies: '篮球'
		}

		$.get(url, param, function(data) {
			if (data.success) {
				alert('成功');
			} else {
				alert('失败');
			}
			// console.log(typeof data);
		}, 'json');

	});

});