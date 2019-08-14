function changePage(event, page) {

  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(page).style.display = "block";

  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.backgroundColor = "#333333";
    pages[i].style.color = "#ffffff";
  }
  
  var link = document.getElementById(page + "-link");
  link.style.backgroundColor = "#ffffff";
  link.style.color = "#007BFF";

  if (screen.width <= 960) {
    document.getElementById("menu").style.display = "none";
  }

}

function toggleMenu() {

  var style = document.getElementById("menu").style.display;
  if (!style || style == "none") {
    document.getElementById("menu").style.display = "block";
  } else {
    document.getElementById("menu").style.display = "none";
  }

}