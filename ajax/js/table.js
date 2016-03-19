!function(window, document, $, undefined) {

    var $maskerWpId = $('#maskerWpId'),
        cache = {};

    var bindEvent = function() {
        $('.del-btn').off('click').on('click', onDelBtnClick);
        $('#newUserBtn').off('click').on('click', onNewUserBtnClick);
        $('#cancelBtn').off('click').on('click', function() {
            $maskerWpId.hide();
        });
        $('#submitBtn').off('click').on('click', onSubmitBtnClick);
        $('.update-btn').off('click').on('click', onUpdateBtnClick);
    };

    var onUpdateBtnClick = function() {
        var $this = $(this),
            uid = $this.attr('uid'),
            obj = cache[uid];

        $maskerWpId
            .find('[name=username]').val(obj.username)
            .end()
            .find('[name=password]').val(obj.password)
            .end()
            .find('[name=name]').val(obj.name)
            .end()
            .find('[id=submitBtn]').text('修改').attr('class', 'submit-update-btn')
            .end()
            .find('[name=id]').val(uid)
            .end()
            .show();
    };

    var onSubmitBtnClick = function() {
        var $this = $(this),
            url,
            param;

        if ($this.hasClass('submit-update-btn')) { // 修改
            url = 'http://dohtml5.duapp.com/php/wbc2/updateUser.php?callback=?';
            param = $('#maskerWpId form').serialize();
        } else { // 新增
            url = 'http://dohtml5.duapp.com/php/wbc2/reg.php?callback=?';
            param = $('#maskerWpId form').serialize();
        }    

        // TODO 输入验证

        $.get(url, param, function(response) {
            if (response.success) {
                renderTable();
                $maskerWpId.hide();
            } else {
                alert('操作失败，请重试!');
            }
        }, 'json');

        // console.log(param);
    };

    var onNewUserBtnClick = function() {
        $('#maskerWpId input').val('');
        $maskerWpId
            .find('[id=submitBtn]').text('新增').attr('class', 'new-btn')
            .end()
            .show();
    };

    var onDelBtnClick = function() {
        var $this = $(this),
            uid = $this.attr('uid'),
            uname = $this.attr('uname'),
            url = 'http://dohtml5.duapp.com/php/wbc2/delUser.php?callback=?',
            result;

        result = confirm('确定要删除"' + uname + '"吗？');

        if (result) {
            $.get(url, {id: uid}, function(response) {
                if (response.success) {
                    alert('删除成功');
                    // $this.parents('tr').remove();
                    // window.location.reload();
                    renderTable();
                } else {
                    alert('删除失败');
                }
            }, 'json');
        }

    };

    var renderTable = function() {
        var url = 'http://dohtml5.duapp.com/php/wbc2/userList.php?callback=?';
        $.get(url, function(response) {
            var data = response.data,
                trs = [];
            $.each(data, function(i, obj) {
                trs.push(
                    '<tr>',
                        '<td>', obj.id, '</td>',
                        '<td>', obj.username, '</td>',
                        '<td>', obj.password, '</td>',
                        '<td>', obj.name, '</td>',
                        '<td></td>',
                        '<td></td>',
                        '<td></td>',
                        '<td></td>',
                        '<td>',
                            '<button uname="', obj.name, '" uid="', obj.id, '" class="del-btn">删除</button>&nbsp;',
                            '<button uid="', obj.id, '" class="update-btn">修改</button>',
                        '</td>',
                    '</tr>'
                );
                // console.log(obj)
                
                cache[obj.id] = obj;
            });

            // console.log(cache);

            $('#userList').html(trs.join(''));
            bindEvent();
        }, 'json');

    };

    renderTable();

}(window, document, jQuery);