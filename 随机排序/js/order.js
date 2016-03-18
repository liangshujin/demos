/**
 * Created by Administrator on 2016/3/18 0018.
 */
!function(window, document, $, undefined) {

    var students = '阚鑫磊 魏先强 李晶 时刘韩 王珂 郇昌 杨天娇 詹时雨 张勃 张金洋 周振洋'.split(' '),
        urls = 'a b c d e f g h i j k'.split(' ');

    $('button.start').on('click', function() {
        console.log(students)
        console.log(urls)
    });

}(window, document, jQuery);