!function(window, document, $, undefined) {

    var bindEvent = function() {
        $('.del-btn').on('click', onDelBtnClick);
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
                        '<td><button uname="', obj.name, '" uid="', obj.id, '" class="del-btn">删除</button></td>',
                    '</tr>'
                );
                // console.log(obj)
            });
            // console.log(trs);
            $('#userList').html(trs.join(''));
            bindEvent();
        }, 'json');

    };

    renderTable();

}(window, document, jQuery);