function theme() {
  let change = document.body.style;
  let btnCh = document.getElementById("btn").style;
  let navLine = document.getElementById("btm-line").style;
  if (change.background == "") {
    change.background = "#000";
    change.color = "white";
    btnCh.color = "white";
    btnCh.borderColor = "white";
    navLine.borderColor = "gray";
  } else {
    change.background = "";
    change.color = "";
    btnCh.color = "";
    btnCh.borderColor = "";
    navLine.borderColor = "";
  }
}

let sideBar = document.getElementById("side-bar").style;
function menuOpen() {
  sideBar.right = "0";
}

function menuClose() {
  sideBar.right = "-200px";
}
