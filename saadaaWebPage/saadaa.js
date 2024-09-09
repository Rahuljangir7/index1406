let input = document.createElement("input");
let isOpen = false;  // A flag to track the open/close state 

function searchBar() {
    const magnifyingGlass = document.querySelector(".fa-magnifying-glass");
   
    // Set up the input field only once
    if(!input.parentElement){
      input.type = "text";
      input.placeholder = "search";
      input.classList.add("search");
      magnifyingGlass.appendChild(input);
      input.style.transition = "width 1s linear, opacity 1s linear";

      input.addEventListener("click", (event) => {
        event.stopPropagation();  // Stop the click event from bubbling up
    });
    }
    
    if (!isOpen) {
        setTimeout(() => {
      input.style.width = "170px";
      input.style.opacity = "1";
    }, 100);
    isOpen = true;
    input.style.zIndex = "-1";
  } else {
    setTimeout(() => {
      input.style.width = "0";
      input.style.opacity = "0";
      input.value = '';
      input.placeholder
    }, 100);
    isOpen = false;
  }
}



function servicePage(){
  return fetchApi();
}

const navLinks = document.getElementById("nav-links").style;
let bodyWidth = null;
const navbar = ()=>{
  if(navLinks.display == ''){
    navLinks.display = "initial";
    bodyWidth = document.body.clientWidth;
  }else{
    navLinks.display = "";
  }
}

window.addEventListener("resize",()=>{
  if(innerWidth !== bodyWidth && bodyWidth !== null){
    navLinks.display = "";
  }
});

window.addEventListener("scroll",()=>{
  if(navLinks.display != ''){
    navLinks.display = "";
  }
});

// card option container when click the image container
let cart = document.getElementsByClassName("cart");
let popup = document.querySelector(".popup");

Array.from(cart).forEach((value)=>{
  value.addEventListener("click",()=>{
    popup.innerHTML = value.innerHTML;
    popup.style.display = "block";
  });
  
})