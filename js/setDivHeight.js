/**
 * Set div height to divToCopy's height
 * @param {String} id 
 * @param {String} idToCopy 
 */

function setDivHeight(id, idToCopy) {
    document.getElementById(id).style.height = document.getElementById(idToCopy).clientHeight + "px";
}