/*
    /pattern/flags
    new RegExp(pattern[, flags])
*/
var regex1 = /\w+/;
var regex2 = new RegExp('\\w+');
var regex3 = RegExp('\\w+');

console.log(regex1);
console.log(regex2);
console.log(regex3);
console.log(regex1 == regex2);

// match Jack only when follow by 'Forest'
var re = /Jack(?= Forest)/;
var str = "I'm Jack Forest, you know that";
var newstr = str.replace(re, "Tom");
console.log(newstr);

// match Tom only when NOT follow by 'Hanks'
re = /Tom(?!= Hanks)/;
str = "Tom More is a great player.";
newstr = str.replace(re, "Jim");
console.log(newstr);

// change data format use Regexp
re = /(\w+)\s(\w+)/;
str = "Jim Simth";
newstr = str.replace(re, '$2 $1');
console.log(newstr);

// use regexp split lines into array
var text = 'some text\nand more\r\nand yet\ryou know';
var lines = text.split(/\r\n|\n|\r/);
console.log(lines);

// use regexp on multiple lines
var s = 'please yes\nmake my day!';
var r = s.match(/yes.*day/);
console.log(r);

r = s.match(/yes[^]*day/);
console.log(r);

var text = 'first line\nsecond line';
var regex = /(\S+) line\n?/y;

var match = regex.exec(text);
console.log(match[1]);
console.log(regex.lastIndex);

match = regex.exec(text);
console.log(match[1]);
console.log(regex.lastIndex);

/*
reg.exec(str)
在指定字符串执行一个搜索匹配
*/
var reg = /foo*/g;
var str1 = 'table football, foosball';
var arr1;
while ((arr1 = reg.exec(str1)) !== null) {
    console.log(arr1[0]);
    console.log(reg.lastIndex);
} 

var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The lazy dog');
console.log(result);

var matches = /(hello \S+)/.exec('This is hello world!');
console.log(matches);