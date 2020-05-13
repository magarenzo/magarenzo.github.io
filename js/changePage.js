/**
 * Change page without reloading site 
 * @param {Event} event 
 * @param {String} page 
 */

function changePage(event, page) {

    var isMobile = window.matchMedia("only screen and (max-width: 960px)").matches;

    if (isMobile) {
        document.getElementById("menu-mobile").style.display = "block";
    }

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

    if (page == "home") {
        window.history.pushState("", "", "/");
        var referrer = document.referrer;
        if (referrer.match("/^(experience|projects|more)$/")) {
            window.location.reload();
        }
    } else {
        window.history.pushState("", "", page)
    }

    if (screen.width <= 960) {
        document.getElementById("menu").style.display = "none";
    }

}