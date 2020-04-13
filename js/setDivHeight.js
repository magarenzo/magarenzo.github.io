/**
 * Set div height to divToCopy's height
 * @param {String} div 
 * @param {String} divToCopy 
 */

function setDivHeight(div, divToCopy) {
    document.getElementById(div).style.height = document.getElementById(divToCopy).clientHeight + "px";
}