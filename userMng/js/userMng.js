$(document).ready(function() {

	var $maskerWp = $('.masker-wp');

	var init = function() {
		initTable();
		bindEvt();
	};

	var bindEvt = function() {
		$('#addUserBtn').on('click', onAddUserBtnClick);
		$('#closeBtn, #dlgCancelBtn').on('click', onCloseBtnClick);
		$('#dlgSaveBtn').on('click', onDlgSaveBtnClick);
		$('#userTable').on('click', '.del-btn', onDelBtnClick);
	};

	var onDelBtnClick = function() { 
		var $this = $(this),
			uid = $this.attr('uid'); // this.uid

		if (confirm('确定要删除该用户吗？')) {
			$.get('server/ajaxDelUser.php', {id: uid}, function(response) {
				initTable();
			}, 'json');
		}
		
	};

	var initTable = function() {
		var url = 'server/ajaxUserList.php';
		$.get(url, function(response) {
			if (response.success) {
				renderTable(response.data);
				// console.log($('.del-btn'))
			}
		}, 'json');
	};

	var renderTable = function(data) {
		var trs = [];

		// check data

		$.each(data, function(index, obj) {
			var hobbies = obj.hobbies;
			if (hobbies) {
				hobbies = hobbies.split('|');
				hobbies = '爱好：' + hobbies.join('；')
			} else {
				hobbies = '--';
			}

			trs.push(
				'<tr>',
					'<td>', obj.name, '</td>',
					'<td>', obj.age, '</td>',
					'<td>', obj.gender, '</td>',
					'<td>item4</td>',
					'<td>item5</td>',
					'<td>item6</td>',
					'<td>', hobbies, '</td>',
					'<td><button uid="', obj.id, '" class="btn del-btn">删除</button></td>',
				'</tr>'
			);
		});

		$('#userTable tbody').html(trs.join(''));
	}

	var onDlgSaveBtnClick = function() {
		var url = 'server/ajaxReg.php';
		var param = {
			name: $('input[name=name]').val(),
			age: $('input[name=age]').val(),
			gender: '男',
			edu: '本科',
			mobile: '15810520000',
			address: '北京市昌平区生命科学园',
			hobbies: '篮球|唱歌'
		};

		// check

		$.get(url, param, function(data) {
			if (data.success) {
				initTable();
				$maskerWp.hide();
			}
		}, 'json');

	};

	var onCloseBtnClick = function() {
		$maskerWp.hide();
	};

	var onAddUserBtnClick = function() {
		$('.dialog input').val('');
		$maskerWp.show();
	};

	init();

});