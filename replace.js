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

/*
    regexp.test(str)
    执行一个检索，检查正则表达式与指定字符串是否匹配。true 或 false
*/
var str = 'hello world!';
var result = /^hello/.test(str);
console.log(result);

/**
 * [@@match]() , retrives the matches when a matching a string
 * against a regular expression
 * regexp[Symbol.match](str)
 * return array contain entire match result
 * This method is called internally in String.prototype.match().
 */
var re = /\d+/g;
var str = '2016-01-02';
var result = re[Symbol.match](str);
console.log(result);

var result2 = str.match(re);
console.log(result2);

/**
 * The [@@replace]() method replaces some or all matches 
 * of a this pattern in a string by a replacement, 
 * and returns the result of the replacement as a new string. 
 * The replacement can be a string or a function to be called for each match.
 * 
 * regexp[Symbol.replace](str, newSubStr|function)
 */

var re = /-/g;
var str = '2018-09-14';
var newstr = str.replace(re, '.');
console.log(newstr);
var newstrr = str.replace(re, function(s) {
    return '$$' + s;
});
console.log(newstrr);
var newstr2 = re[Symbol.replace](str, '.');
console.log(newstr2);
var newstr3 = re[Symbol.replace](str, function(s) {
    return s + '!';
});
console.log(newstr3);