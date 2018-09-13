// match Jack only when fo
var re = /Jack(?= Forest)/;
var str = "I'm Jack Forest, you know that";
var newstr = str.replace(re, "Tom");
console.log(newstr);

var str2 = "This Jack Neil, I don't know him.";
var newstr2 = str2.replace(re, "Tom");
console.log(newstr2);