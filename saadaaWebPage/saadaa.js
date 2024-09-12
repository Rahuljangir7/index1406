let input = document.createElement("input");
let isOpen = false; // A flag to track the open/close state
let cart = document.getElementsByClassName("cart");
let popup = document.querySelector(".popup");
let popCnt = document.querySelector(".popup-container");
const addBtn = document.querySelector(".add-value");
const subBtn = document.querySelector(".sub-value");
let countVal = document.getElementById("count");
let addImg = document.getElementsByClassName("fa-plus");

for (const icon of addImg) {
  icon.addEventListener("click", () => {
    if (icon.className == "fa-solid fa-plus") {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-check");
    } else {
      icon.classList.remove("fa-check");
      icon.classList.add("fa-plus");
    }
  });
}

function searchBar() {
  const magnifyingGlass = document.querySelector(".fa-magnifying-glass");

  // Set up the input field only once
  if (!input.parentElement) {
    input.type = "text";
    input.placeholder = "search";
    input.classList.add("search");
    magnifyingGlass.appendChild(input);
    input.style.transition = "width 1s linear, opacity 1s linear";

    input.addEventListener("click", (event) => {
      event.stopPropagation(); // Stop the click event from bubbling up
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
      input.value = "";
      input.placeholder;
    }, 100);
    isOpen = false;
  }
}

const navLinks = document.getElementById("nav-links").style;
let bodyWidth = null;
const navbar = () => {
  if (navLinks.display == "") {
    navLinks.display = "initial";
    bodyWidth = document.body.clientWidth;
  } else {
    navLinks.display = "";
  }
};

// card option container when click the image container

Array.from(cart).forEach((value) => {
  value.addEventListener("click", () => {
    popCnt.innerHTML = value.innerHTML;
    popup.style.display = "block";
  });
});

function popupBox() {
  if (popup.style.display === "block") {
    popup.style.display = "";
    countVal.innerText = 0;
  }
  return true;
}

window.addEventListener("resize", () => {
  if (innerWidth !== bodyWidth && bodyWidth !== null) {
    navLinks.display = "";
  }
});

window.addEventListener("scroll", () => {
  popupBox();
});

// ordering programe

function clickBtn() {
  let count = 0;
  return function () {
    
    count++;
    return (countVal.innerText = count);
  };
}

addBtn.addEventListener("click", clickBtn());
subBtn.addEventListener("click",clickBtn());