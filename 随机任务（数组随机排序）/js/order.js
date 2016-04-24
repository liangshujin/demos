/**
 * Created by Administrator on 2016/3/18 0018.
 */
!function(window, document, $, undefined) {

    var students = '魏先强 窦子龙 宋韶华 张亚娟 宋晓彦 郭永强 王乔熙'.split(' '),
        urls = [
            'http://www.mia.com/(密芽)',
            'http://www.mogujie.com/(蘑菇街)',
            'http://www.zhe800.com/(折800)',
            'http://www.mafengwo.cn/(马蜂窝)',
            'http://www.haibao.com/(海报时尚网)',
            'http://y.qq.com/#type=index(qq音乐)',
            'http://beijing.haodai.com/(好贷网)'
        ],
        timer;

    $('button.start').on('click', function() {

        $('.info').hide();

        timer = setInterval(function () {
            students = randomArray(students);
            urls = randomArray(urls);
            render(students, '姓名', 'students');
            render(urls, '地址', 'urls');
        }, 10);

    });

    $('button.stop').on('click', function() {

        clearInterval(timer);

    });

    var render = function(arr, label, renderId) {
        var html = [];
        $.each(arr, function(i, item) {
            html.push('<li>', label, '：', item, '</li>');
        });
        $('#' + renderId).html(html.join(''));
    };

    var randomArray = function(arr) {
        return arr.sort(function(){return Math.random() > 0.5});
    };

}(window, document, jQuery);