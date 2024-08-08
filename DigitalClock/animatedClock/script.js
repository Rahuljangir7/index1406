const second = document.querySelector(".second");
const minut = document.querySelector(".minut");
const hour = document.querySelector(".hour");

setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  second.style.transform = `rotate(${seconds * 6}deg)`;
  minut.style.transform = `rotate(${minutes * 6}deg)`;

  // 30 degrees per hour + 0.5 degrees per minute to account for the gradual movement of the hour hand
  hour.style.transform = `translate(-50%) rotate(${
    (hours % 12) * 30 + minutes * 0.5
  }deg)`;
}, 1000);