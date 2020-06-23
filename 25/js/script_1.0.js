var today = new Date();

var datingDate = new Date("2014, 11, 1");
var datingSeconds = (today.getTime() - datingDate.getTime()) / 1000;
var datingDays = Math.floor(datingSeconds / (3600 * 24));
document.getElementById("dating").innerHTML = datingDays;

var engagedDate = new Date("2019, 11, 2");
var engagedSeconds = (today.getTime() - engagedDate.getTime()) / 1000;
var engagedDays = Math.floor(engagedSeconds / (3600 * 24));
document.getElementById("engaged").innerHTML = engagedDays;

function showDiv(id, changeText) {

    if (document.getElementById(id).style.display == "none") {

        document.getElementById(id).style.display = "block";

    } else {

        document.getElementById(id).style.display = "none";

    }

    if (changeText) {

        var button = document.getElementById(id + "-button");

        if ((button.innerText) == "Show") {

            button.innerText = "Hide";

        } else {

            button.innerText = "Show";

        }
    }

}