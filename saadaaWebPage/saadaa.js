let clickCount = 1;
let input = document.createElement("input");

function searchBar() {
    const magnifyingGlass = document.querySelector(".fa-magnifying-glass");
    magnifyingGlass.style.position = "relative";
    magnifyingGlass.style.zIndex = 999;
    
    input.type = "text";
    input.placeholder = "search";
    input.classList.add("search");
    
    if (clickCount == 1) {
        setTimeout(() => {
      input.style.width = "170px";
      input.style.opacity = "1";
      input.style.transition = "1s linear";
    }, 500);
    
    input.style.zIndex = "-1";
    clickCount++;
  } else {
    setTimeout(() => {
      input.style.width = "0";
      input.style.opacity = "0";
      input.style.transition = "1s linear";
    }, 500);
    clickCount--;
  }
  magnifyingGlass.appendChild(input);
}
