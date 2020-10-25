module.exports = function toReadable (number) {
let str = "";
let num1 = 2;
let numberr=number;
if ((number >= 100)) {
num1=number.toString()[0];
num1=parseInt(num1);
switch (num1) {
case 1:
str += 'one hundred';
break;
case 2:
str += 'two hundred';
break;
case 3:
str += 'three hundred';
break;
case 4:
str += 'four hundred';
break;
case 5:
str += 'five hundred';
break;
case 6:
str += 'six hundred';
break;
case 7:
str += 'seven hundred';
break;
case 8:
str += 'eight hundred';
break;
case 9:
str += 'nine hundred';
break;
default:
str = str;
}
}
if (number>99){
number=parseInt(number.toString()[1]+number.toString()[2]);
}
if((number<100)&&(number>9)){
if ((parseInt(str.length)>1) && (str[str.length-1]!=' ')){
str+=' ';
}
num1 = number.toString()[0];
num1=parseInt(num1);
switch (num1) {
case 1:
num1=parseInt(number.toString()[1])
switch (num1) {
case 0:
str+='ten';
break;
case 1:
str+='eleven';
break;
case 2:
str+='twelve';
break;
case 3:
str+='thirteen';
break;
case 4:
str+='fourteen';
break;
case 5:
str+='fifteen';
break;
case 6:
str+='sixteen';
break;
case 7:
str+='seventeen';
break;
case 8:
str+='eighteen';
break;
case 9:
str+='nineteen';
break;
default:
str=str;
}
break;
case 2:
str += 'twenty';
break;
case 3:
str += 'thirty';
break;
case 4:
str += 'forty';
break;
case 5:
str += 'fifty';
break;
case 6:
str += 'sixty';
break;
case 7:
str += 'seventy';
break;
case 8:
str += 'eighty';
break;
case 9:
str += 'ninety';
break;
default:
str = str;
}
}
if ((number>19)&&(number<100)){
number=parseInt(number.toString()[1]);
}
if (number <10) {
num1=number.toString()[0];
num1=parseInt(num1);
if ((parseInt(str.length)>1) && (str[str.length-1]!==' ') && (parseInt(numberr.toString()[numberr.toString().length-1])!==0)){
str+=' ';
}
switch (num1) {
case 1:
str += 'one';
break;
case 2:
str += 'two';
break;
case 3:
str += 'three';
break;
case 4:
str += 'four';
break;
case 5:
str += 'five';
break;
case 6:
str += 'six';
break;
case 7:
str += 'seven';
break;
case 8:
str += 'eight';
break;
case 9:
str += 'nine';
break;
default:
str = str;
}
}
if (numberr==0){
str='zero';
}
return str;
}
