/**
 * Change page without reloading site
 * @param {Event} event 
 * @param {String} page 
 */
function changePage(event, page) {

    var sections = document.getElementsByClassName("section");

    for (var i = 0; i < sections.length; i++) {

        sections[i].style.display = "none";

    }

    document.getElementById(page).style.display = "block";

}