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

const fetchApi = async () => {
    const baseURL = "https://fackApi. com";
    const response = await fetch(baseURL);
    const data = await response.json();
}
