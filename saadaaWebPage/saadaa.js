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
// Select all necessary DOM elements
const stars = document.querySelectorAll(".stars i");
const rateNowBtn = document.querySelector(".rate-now");
const messageBox = document.getElementById("msg");
const checkIcon = document.querySelector(".check-icon");
const reviewBtn = document.getElementById("review-btn");
const reviewBox = document.querySelector(".review-box");
let ratingValue = 0; // Holds the current selected star rating

// Toggle review box visibility when the review button is clicked
reviewBtn.addEventListener("click", () => {
  if (reviewBox.style.visibility === "visible") {
    reviewBox.style.visibility = "hidden"; // Hide review box
  } else {
    reviewBox.style.visibility = "visible"; // Show review box
  }
});

// Add hover and click functionality to stars
stars.forEach((star, index) => {
  // Hover: highlight stars temporarily
  star.addEventListener("mouseover", () => highlightStars(index));

  // Mouse out: revert to selected stars
  star.addEventListener("mouseout", () => setStars(ratingValue));

  // Click: permanently select the rating
  star.addEventListener("click", () => {
    ratingValue = index + 1;
    setStars(ratingValue); // Save selected stars
    checkButtonState(); // Enable button if conditions met
  });
});

// first fill the message then stars clicked
messageBox.addEventListener("keyup", () => {
  if (messageBox.value.trim() !== "") {
    console.log(messageBox.value);
    checkButtonState(); // Enable button if conditions met
  }
});

// Highlight stars on hover
function highlightStars(index) {
  stars.forEach((star) => star.classList.remove("hover", "selected"));
  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("hover");
  }
}

// Set stars based on the selected rating
function setStars(rating) {
  stars.forEach((star) => star.classList.remove("hover", "selected"));
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("selected");
  }
}

// Check if button should be active (stars selected + message entered)
function checkButtonState() {
  if (ratingValue > 0 && messageBox.value.trim() !== "") {
    rateNowBtn.classList.add("active");
    rateNowBtn.disabled = false;
    rateNowBtn.style.cursor = "pointer"; // Ensure cursor changes to pointer
  } else {
    rateNowBtn.classList.remove("active");
    rateNowBtn.disabled = true;
    rateNowBtn.style.cursor = "not-allowed"; // Disable cursor change
  }
}

// Enable button and show check icon when "Rate Now" clicked
rateNowBtn.addEventListener("click", () => {
  if (rateNowBtn.classList.contains("active")) {
    checkIcon.style.display = "block"; // Show check icon
    checkIcon.style.position = "absolute"; // Make sure it's positioned correctly on top of the color box
    checkIcon.style.top = "50%"; // Position it within the color box
    checkIcon.style.left = "50%";
    checkIcon.style.transform = "translate(-50%, -50%)"; // Center the icon
    resetForm(); // Reset form after showing icon
  }
});

// Reset form after 5 seconds
function resetForm() {
  setTimeout(() => {
    checkIcon.style.display = "none"; // Hide check icon
    setStars(0); // Reset stars
    ratingValue = 0; // Reset rating
    messageBox.value = ""; // Clear message box
    rateNowBtn.classList.remove("active");
    rateNowBtn.disabled = true;
  }, 2000); // Hide check icon after 5 seconds
}

// Hide review box when "Maybe later" is clicked
document.querySelector(".maybe-later").addEventListener("click", () => {
  reviewBox.style.visibility = "hidden";
});

// check icon count
const addImgIcon = document.querySelectorAll(".fa-plus");
let countNo = document.querySelector(".count");
let num = 0;

addImgIcon.forEach((plusIcon) => {
  plusIcon.addEventListener("click", () => {
    if (plusIcon.classList.contains("fa-check") == true) {
      countNo.innerHTML = ++num;
    } else {
      countNo.innerHTML = --num;
    }
  });
});
