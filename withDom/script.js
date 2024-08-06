function theme() {
  let change = document.body.style;
  let btnCh = document.getElementById("btn").style;
  let navLine = document.getElementById("btm-line").style;
  let anchor = document.querySelectorAll("a");
  if (change.background == "") {
    change.background = "#000";
    change.color = "white";
    btnCh.borderColor = "white";
    navLine.borderColor = "gray";
    anchor.forEach((val)=>val.style.color ='white');
  } else {
    change.background = "";
    change.color = "";
    btnCh.borderColor = "";
    navLine.borderColor = "";
    anchor.forEach((val)=>val.style.color ='');
  }
}

let sideBar = document.getElementById("side-bar").style;
function menuOpen() {
  sideBar.right = "0";
}

function menuClose() {
  sideBar.right = "-200px";
}
