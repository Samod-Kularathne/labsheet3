function Q1(){
var s1 = "Programmo";
var s2 = "Phobia";
var s3 = s1.concat(s2);
document.write(s3);
}

function Q2(){
var s1 = "Programmo";
var s2 = "Phobia";
var s3 = s1.concat(s2);

var s4 = s3.toLowerCase();
document.write(s4);
document.write("<br>");


var s5 = s3.toUpperCase();
document.write(s5);
document.write("<br>");

const s6 = "Programmo,Phobia";
const arr = s6.split(' ');
document.write(arr);
document.write("<br>");

var n = s3.indexOf("Phobia");
document.write(n);
}
