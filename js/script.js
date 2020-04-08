function changePage(event, page) {

    if (document.getElementById("wrapper").style.display == "none") {
        document.getElementById("wrapper").style.display = "block";
    }

    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";

    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.color = "white";
    }

    var link = document.getElementById(page + "-link");
    link.style.color = "#00AEFF";

    if (screen.width <= 960) {
        document.getElementById("menu").style.display = "none";
    }

}

function toggleMenu() {

    var style = document.getElementById("menu").style.display;
    if (!style || style == "none") {
        document.getElementById("menu").style.display = "block";
        document.getElementById("wrapper").style.display = "none";
    } else {
        document.getElementById("menu").style.display = "none";
        document.getElementById("wrapper").style.display = "block";
    }

}

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

$(".carousel").carousel({
    interval: 30000
});