// Drop Down Function
let linksIcon;
let change_icon = document.getElementById("change-icon");
let bg_color = document.getElementById("bg-color");
let list = document.getElementById("list-items");

function clickIcon() {
  if (list.style.display === "none" || list.style.display === "") {
    bg_color.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    change_icon.classList.remove("fa-caret-up");
    change_icon.classList.add("fa-caret-down");
    list.style.display = "block";
    change_icon.style.borderRadius = "6px 6px 0 0";
    linksIcon = document.body.clientWidth;
  } else {
    change_icon.style.borderRadius = "6px";
    change_icon.classList.remove("fa-caret-down");
    change_icon.classList.add("fa-caret-up");
    list.style.display = "none";
    bg_color.style.backgroundColor = "transparent";
  }
}

function resetIcon() {
  change_icon.style.borderRadius = "6px";
  change_icon.classList.remove("fa-caret-down");
  change_icon.classList.add("fa-caret-up");
  list.style.display = "none";
  bg_color.style.backgroundColor = "transparent";
}

// Navigation bar Responsive By JavaScript in DOM

document.addEventListener("DOMContentLoaded", (event) => {
  const menuIcon = document.getElementById("hiddenIcon");
  const navLinks = document.getElementById("drop-down-menu");
  const navBar = document.querySelector("nav");
  // console.log(navBar);

  // Initial setup based on window width
  adjustMenuDisplay();

  // Toggle menu on menu icon click
  menuIcon.addEventListener("click", (event) => {
    event.stopPropagation(); //Prevent event bubbling
    navLinks.classList.toggle("show");
    if (navLinks.classList.contains("show")) {
      navBar.style.padding = "20px 10px"; //Restore original padding when menu is hidden
    } else {
      navBar.style.padding = "20px 10px"; //reduce padding when menu is shown
    }
    menuIcon.style.display = "none";
  });

  // Close menu if clicked outside menu or icon
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target)) {
      navLinks.classList.remove("show");
      navBar.style.padding = "20px 10px"; // Set padding to 20px top and bottom, 10px left and right
      adjustMenuDisplay(); //Adjust menu icon display after closing menu
    }
  });

  // Adjust display based on window resize
  window.addEventListener("resize", () => {
    adjustMenuDisplay();
    if (linksIcon !== undefined) {
      resetIcon();
    }
  });

  function adjustMenuDisplay() {
    if (window.innerWidth <= 1200) {
      menuIcon.style.display = "block";
      navLinks.classList.remove("show"); // Ensure menu is hidden initially
      navBar.style.padding = "20px 10px"; // Set initial padding for smaller screens
    } else {
      menuIcon.style.display = "none";
      navBar.style.padding = "60px 10px"; // Set initial padding for smaller screens
    }
  }
});
