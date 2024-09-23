"use strict";
let input = document.createElement("input");
let isOpen = false; // A flag to track the open/close state
let cart = document.getElementsByClassName("cart");
let popup = document.querySelector(".popup");
let popCnt = document.querySelector(".popup-container");
const addBtn = document.querySelector(".add-value");
const subBtn = document.querySelector(".sub-value");
let countVal = document.getElementById("count");
let addImg = document.getElementsByClassName("fa-plus");

// Toggle the plus/check icon on click
for (const icon of addImg) {
  icon.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from reaching the cart click event

    if (icon.classList.contains("fa-plus")) {
      // return true and false result
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-check");
    } else {
      icon.classList.remove("fa-check");
      icon.classList.add("fa-plus");
    }
  });
}

// Search Bar functionality
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

const navLinks = document.getElementById("nav-links");
let bodyWidth = null;

const navbar = () => {
  if (navLinks.style.display == "") {
    navLinks.style.display = "initial";
    bodyWidth = document.body.clientWidth;
    return true;
  } else {
    navLinks.style.display = "";
    return false;
  }
};

// Cart item click to show popup
Array.from(cart).forEach((value) => {
  value.addEventListener("click", () => {
    popCnt.innerHTML = value.innerHTML;
    popup.style.display = "block";
  });
});

// Close popup box
function closePopup() {
  if (popup.style.display === "block") {
    popup.style.display = "";
    countVal.innerText = 0; // Reset the count value when popup closes
    count = 0;
  }
  return true;
}

// Close popup when clicking outside the popup
document.addEventListener("click", (event) => {
  if (
    !navLinks.contains(event.target) &&
    !document.querySelector(".fa-bars").contains(event.target)
  ) {
    navLinks.style.display = "";
  }

  if (!popup.contains(event.target) && !event.target.closest(".cart")) {
    popup.style.display = "none"; // This will close the popup only when clicking outside
    countVal.innerText = 0;
    count = 0;
  }
});

// Window resize logic to reset nav links
window.addEventListener("resize", () => {
  if (innerWidth !== bodyWidth && bodyWidth !== null) {
    navLinks.style.display = "";
  }
});

// Scroll event to close the popup box
window.addEventListener("scroll", () => {
  navLinks.style.display = "";
  closePopup();
});

// Increment/Decrement Counter Program
let count = 0;

function updateCount(increment) {
  return function () {
    if (increment) {
      count++;
    } else if (count > 0) {
      count--;
    }
    countVal.innerText = count;
  };
}

// Attach separate event listeners for add and subtract buttons
addBtn.addEventListener("click", updateCount(true));
subBtn.addEventListener("click", updateCount(false));

// ---------------------- rating button -----------------------
// Select all the stars
const stars = document.querySelectorAll(".stars i");
const rateNowBtn = document.querySelector(".rate-now");
const messageBox = document.getElementById("msg"); // The textarea field
const checkIcon = document.querySelector(".check-icon"); // Check icon beside the button

// Track the rating value (initial selected stars)
let ratingValue = 0;

// Add event listeners for hover and click
stars.forEach((star, index) => {
  // Hover effect: Highlight stars temporarily
  star.addEventListener("mouseover", () => {
    highlightStars(index);
  });

  // Reset stars back to the selected state when mouse leaves
  star.addEventListener("mouseout", () => {
    setStars(ratingValue); // Revert to the selected rating
  });

  // Click to select the rating permanently
  star.addEventListener("click", () => {
    ratingValue = index + 1; // Save the selected rating
    setStars(ratingValue); // Set the stars as selected
    checkButtonState(); // Check if the button should be activated
  });
});

// Function to highlight stars on hover
function highlightStars(index) {
  // Remove any previous highlights (both selected and hover)
  stars.forEach((star) => {
    star.classList.remove("selected");
    star.classList.remove("hover");
  });

  // Highlight the hovered stars
  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("hover");
  }
}

// Function to set the stars after selection
function setStars(rating) {
  // Reset all stars
  stars.forEach((star) => {
    star.classList.remove("hover");
    star.classList.remove("selected");
  });

  // Apply 'selected' class only to stars up to the rating value
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("selected");
  }
}

// Function to check if the "Rate now" button should be enabled
function checkButtonState() {
  if (ratingValue > 0 && messageBox.innerText.trim() !== "") {
    rateNowBtn.classList.add("active"); // Enable the button
    rateNowBtn.disabled = false;
  } else {
    rateNowBtn.classList.remove("active"); // Disable the button
    rateNowBtn.disabled = true;
  }
}

// Event listener to check message box input for button activation
messageBox.addEventListener("input", checkButtonState);

// // Event listener for "Rate now" button click
rateNowBtn.addEventListener("click", () => {
  if (rateNowBtn.classList.contains("active")) {
    checkIcon.style.display = "block"; // Show the check icon
    checkIcon.style.fontSize = "24px"; // Make the check icon larger
  }
});

// when click review button
let reviewBtn = document.getElementById("review-btn");
let reviewBox = document.querySelector(".review-box").style;

reviewBtn.addEventListener("click", () => {
  console.log(reviewBox.visibility);
  if (reviewBox.visibility === "") {
    reviewBox.visibility = "initial";
  } else {
    reviewBox.visibility = "";
  }
});
