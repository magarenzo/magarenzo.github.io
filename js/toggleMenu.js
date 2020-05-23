/**
 * Toggle mobile menu button
 */

function toggleMenu() {

    var style = document.getElementById("menu").style.display;

    if (!style || style == "none") {

        document.getElementById("menu").style.display = "block";
        document.getElementById("menu-mobile").style.display = "none";
        document.getElementById("wrapper").style.display = "none";

    } else {

        document.getElementById("menu").style.display = "none";
        document.getElementById("menu-mobile").style.display = "block";
        document.getElementById("wrapper").style.display = "block";

    }

}