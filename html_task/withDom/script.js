let bodyStyle = document.body.style;
let fontIcon = document.querySelector(".fa-moon, .fa-sun");
console.log(fontIcon);
let size = null;

function theme() {
  let btnStyle = document.getElementById("btn").style;
  let navLineStyle = document.getElementById("btm-line").style;
  let anchors = document.querySelectorAll("a");

  if (bodyStyle.background === "") {
    // Switch to dark mode
    bodyStyle.background = "#000";
    bodyStyle.color = "white";
    btnStyle.color = "white";
    btnStyle.borderColor = "white";
    if (fontIcon.classList.contains("fa-moon")) {
      fontIcon.classList.remove("fa-moon");
      fontIcon.classList.add("fa-sun");
    }
    navLineStyle.borderColor = "gray";
    anchors.forEach((anchor) => {
      anchor.style.color = "white";
    });
    size = document.body.clientWidth;
  } else {
    // Switch back to light mode
    function intialBody(){
      bodyStyle.background = "";
      bodyStyle.color = "";
      btnStyle.color = "";
      btnStyle.borderColor = "";
      if (fontIcon.classList.contains("fa-sun")) {
        fontIcon.classList.remove("fa-sun");
        fontIcon.classList.add("fa-moon");
      }
      navLineStyle.borderColor = "";
      anchors.forEach((anchor) => {
        anchor.style.color = "";
      });
    }
    return intialBody();
  }

}

let sideBar = document.getElementById("side-bar").style;
function menuOpen() {
  sideBar.right = "0";
}

function menuClose() {
  sideBar.right = "-200px";
}

window.addEventListener("resize",()=>{
  if(innerWidth != size && size != null){
    theme();
  }
  size = null;
});