var time = new Date().getTime();

var datingDate = new Date("2014, 11, 1");
var datingSeconds = (time - datingDate.getTime()) / 1000;
var datingDays = Math.floor(datingSeconds / (3600 * 24));
document.getElementById("dating").innerHTML = datingDays;

var engagedDate = new Date("2019, 11, 2");
var engagedSeconds = (time - engagedDate.getTime()) / 1000;
var engagedDays = Math.floor(engagedSeconds / (3600 * 24));
document.getElementById("engaged").innerHTML = engagedDays;

var lovedDate = new Date("2014, 11, 23");
var lovedSeconds = (time - lovedDate.getTime()) / 1000;
var lovedDays = Math.floor(lovedSeconds / (3600 * 24));
document.getElementById("loved").innerHTML = lovedDays;