/*alert('Hello WBC!');

alert(2);*/

// ALERT(3);

// 标识符

// var x = 2;

// var X = 8;

// var y = 3;

// var z = x + y;

// // alert(z);

// alert(x);

// alert(X);

// var a;

// var aaa;

// var $abc;

// var _abc;

// var a2;

// // var 2a;

// var _2a;

// // var abc#;

// // var abc!;

// var abc;

/*var name = "张三"; // “”   ；

var name2 = 'bill';

var str = "abc!@#*%";

alert(str);*/

// var str;

// str = 'test'; // 赋值

// var str = 'test';

// var str = 'abc', name = "张三", age;

/*var str = 'abc';
var name = '张三';
var age;*/

/*var name = '张三';

console.log(name);

name = "李四";

console.log(name);*/

// var var = 3;

/*var x = 8;

x = 'test';*/

// var x = "ab\"c";
// var x = 'ab\'c';

// var x = 1.2;

/*var x = true;

var y = false;

console.log(x);*/

// var carname = 'bmw';

// var carname = new String('bmw2');

// console.log(carname.toString());

// var x = 5;

// var y = 7;

// x += 2; // x = x + 2;

// x -= 2;  // x = x - 2;

// x++; // x = x + 1;

// x--; // x = x - 1;

// x = 6;

// var y = 8;

// y++;

/*var x = 'abc';

var y = 'def';*/

// console.log(!(x <= y)); // ?
// console.log(x == y || y > 10);
// console.log(x == y && y < 10);


/*var x = 7;

if (x > 5) {
	console.log('OK');
}*/

/*var info;

var age = 32;

if (age < 18) {
	info = '未成年';
} else if (age < 35) {
	info = '青年';
} else if (age < 50) {
	info = '中年';
} else {
	info = '老年';
}
*/
/*if (age >= 18) {
	info = '成年人';
} else {
	info = '未成人';
}*/

// console.log(info);

var day = 5;

var info = '今天是：';

switch(day) {

	case 0:
		info += '星期日';
		break;

	case 1:
		info += '星期一';
		break;

	case 2:
		info += '星期二';
		break;

	case 3:
		info += '星期三'; // info = info + '星期三';
		break;

	case 4:
		info += '星期四';
		break;

	case 5:
		info += '星期五';
		break;

	case 6:
		info += '星期六';
		break;

	default: 
		info = '非法日期';

}

console.log(info);