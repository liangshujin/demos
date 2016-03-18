/**
 * Created by Administrator on 2016/3/18 0018.
 */
!function(window, document, $, undefined) {

    var students = '阚鑫磊 魏先强 李晶 时刘韩 王珂 郇昌 杨天娇 詹时雨 张勃 张金洋 周振洋'.split(' '),
        urls = [
            'http://bj.jumei.com/(聚美优品)',
            'http://caipiao.163.com/(网易彩票)',
            'http://baoxian.163.com/(网易保险)',
            'http://piao.163.com/(网易电影票)',
            'http://mall.163.com/(网易商城)',
            'http://www1.fang.com/(搜房网)',
            'https://ju.taobao.com/(聚划算)',
            'http://www.autohome.com.cn/(汽车之家)',
            'http://beijing.bitauto.com/(易车网)',
            'http://www.gome.com.cn/(国美在线)',
            'http://www.yhd.com/(一号店)'
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
        return arr.sort(function(){return Math.random () > 0.5});
    };

}(window, document, jQuery);