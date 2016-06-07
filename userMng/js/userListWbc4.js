!function(window, document, $, undefined) {

	var UserMng = {
		$loadingWp: $('.loading-wp'),
		init: function() {
			this.initUserList();
			this.initEvent();
		},
		initEvent: function() {
			// $('.del-btn').on('click', this.onDelBtnClick); // ？？？
			$('#userTable').on('click', '.del-btn', this.onDelBtnClick);
		},
		onDelBtnClick: function() {
			// var uid = this.getAttribute('uid');
			var $this = $(this),
				uid = $this.attr('uid'),
				url = 'server/ajaxDelUser.php';

			var r = confirm('确定要删除该用户吗？');

			if (!r) {
				return;
			}

			UserMng.$loadingWp.show();

			$.get(url, {id: uid}, function(response) {
				if (response.success) {
					UserMng.initUserList();
					UserMng.$loadingWp.hide();
					$('#myDlg').modal('show');
					setTimeout(function() {
						$('#myDlg').modal('hide');
					}, 2000);
				} 
			}, 'json');

		},
		initUserList: function() {
			var url = 'server/ajaxUserList.php';
			var trTpl = $('#trTpl').html();
			var param = {
				size: 10
			};

			this.$loadingWp.show();

			// 异步操作

			$.get(url, param, function(response) {

				var trs = [];
				var compiled = _.template(trTpl);

				_.each(response.data, function(obj) {
					trs.push(compiled(obj));
				});

				$('#userTable tbody').html(trs.join(''));
				// ??

				// $('.del-btn').on('click', UserMng.onDelBtnClick);

				UserMng.$loadingWp.hide();
				// console.log('bbb');
			}, 'json');
			// ?
			// console.log('aaa');
		}
	};

	UserMng.init();

}(window, document, jQuery);