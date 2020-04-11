/**
 * Change page without reloading site 
 * @param {Event} event 
 * @param {String} page 
 */

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

    var link = document.getElementById("link-" + page);
    link.style.color = "#17a2b8";

    if (screen.width <= 960) {
        document.getElementById("menu").style.display = "none";
    }

}