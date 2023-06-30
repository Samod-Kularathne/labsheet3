//Q1
document.write("Q1" + "<br>");

function bothTrue(v1, v2){
    return v1 && v2;
}

document.write(bothTrue(true, true) + "<br>");
document.write(bothTrue(true, false) + "<br>");
document.write(bothTrue(false, true) + "<br>");
document.write(bothTrue(false, false) + "<br>");

document.write("<br>");

//Q2
document.write("Q2" + "<br>");

function type(number){
    return typeof number;
}

document.write(type(45) + "<br>");
document.write(type(7.3) + "<br>");

document.write("<br>");

//Q3
document.write("Q3" + "<br>");

function getDate(date){
    return typeof date;
}          

var d = new Date();

document.write(getDate(d)+ "<br>");

document.write("<br>");

//Q4
document.write("Q4" + "<br>");

let str = "OceanGate";
let length = str.length;

document.write(length)
