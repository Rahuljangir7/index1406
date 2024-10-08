// use DOM and YourSelf Button add some event

document.addEventListener("DOMContentLoaded", () => {
  const YourSelf = document.getElementById("yourself");
  const aboutMe = document.getElementById("aboutme");

  YourSelf.addEventListener("click", () => {
    // Add the highlight class
    aboutMe.classList.add("highlight");

    // Remove the highlight class after 2 seconds
    setTimeout(() => {
      aboutMe.classList.remove("highlight");
    }, 1500);
  });

  // toggle click and change bg color theme
  const toggle = document.getElementById("toggle");
  const p = document.querySelector("p.photo-links");
  const h1 = document.getElementsByTagName("h1");
  let DisplayWidth;
  // console.log(h1[0]);
  toggle.addEventListener("click", () => {
    if (toggle.className == "fa-solid fa-moon") {
      document.body.style.backgroundColor = "white";
      p.style.color = "black";
      aboutMe.style.color = "black";
      h1[0].style.color = "black";
      toggle.classList.remove("fa-moon");
      toggle.classList.add("fa-sun");
    } else {
      document.body.style.backgroundColor = "black";
      p.style.color = "white";
      aboutMe.style.color = "white";
      h1[0].style.color = "white";
      toggle.classList.remove("fa-sun");
      toggle.classList.add("fa-moon");
    }
    DisplayWidth = document.body.clientWidth;
  });

  
  window.addEventListener("resize",()=>{
    if(DisplayWidth != window.innerWidth &&  DisplayWidth != undefined){
      document.body.style.backgroundColor = "black";
      p.style.color = "white";
      aboutMe.style.color = "white";
      h1[0].style.color = "white";
      toggle.classList.remove("fa-sun");
      toggle.classList.add("fa-moon");
    }
  });

  });

