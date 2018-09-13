/*
    /pattern/flags
    new RegExp(pattern[, flags])
*/
var regex1 = /\w+/;
var regex2 = new RegExp('\\w+');

console.log(regex1);
console.log(regex2);
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