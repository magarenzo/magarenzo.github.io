/**
 * Change page without reloading site
 * @param {Event} event 
 * @param {String} page 
 */
function changePage(event, page) {

    var sections = document.getElementsByClassName("section");
    for (var section = 0; section < sections.length; section++) {
        sections[section].style.display = "none";
    }

    var subSections = document.getElementsByClassName("sub-section");
    for (var subSection = 0; subSection < subSections.length; subSection++) {
        subSections[subSection].style.display = "none";
    }

    document.getElementById(page).style.display = "block";

    var pageSubSections = document.getElementsByClassName(page + "-sub-section");
    for (var pageSubSection = 0; pageSubSection < pageSubSections.length; pageSubSection++) {
        pageSubSections[pageSubSection].style.display = "block";
    }

    if (page == "home") {
        document.title = "magarenzo.com"
    } else {
        document.title = page.charAt(0).toUpperCase() + page.slice(1) + " | magarenzo.com";
    }

    window.scrollTo(0, 0);

    if (screen.width <= 960) {
        document.getElementById("button-toggle").click();
    }

}