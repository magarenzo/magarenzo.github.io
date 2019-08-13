function changePage(event, page) {
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(page).style.display = "block";

  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.backgroundColor = "#8c92ac";
  }
  document.getElementById(page + "-link").style.backgroundColor = "#ffffff";
}