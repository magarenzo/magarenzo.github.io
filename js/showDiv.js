/**
 * Hide or show div
 * @param {String} id 
 * @param {Boolean} changeText 
 */

function showDiv(id, changeText) {

    if (document.getElementById(id).style.display == "none") {

        document.getElementById(id).style.display = "block";

    } else {

        document.getElementById(id).style.display = "none";

    }

    location.href = "#" + id;
    var url = window.location.href;
    window.history.pushState("", "", url.split("#")[0]);

    if (changeText) {

        var button = document.getElementById(id + "-button");

        if ((button.innerText) == "Show") {

            button.innerText = "Hide";

        } else {

            button.innerText = "Show";

        }
    }

}