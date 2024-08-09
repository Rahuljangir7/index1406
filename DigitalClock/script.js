let rahul = document.querySelector(".time");
let krishan = document.querySelector(".day");
let vishnu = document.querySelector(".date");

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  const watch = new Date();
  let hours = watch.getHours();
  if (hours > 12) hours -= 12;
  let minute = watch.getMinutes();
  if (minute < 10) minute = `0${minute}`;
  const second = watch.getSeconds();
  rahul.innerText = `${hours} : ${minute} : ${second}`;

  const day = watch.getDay();
  krishan.innerText = `Day : ${week[day]}`;

  vishnu.innerText = `Date : ${Date().substring(4, 15)}`;
}, 1000);

// animated clock

const body = document.body.style;
let clearSet;
const animatedClock = () => {
  clearSet =  setInterval(() => {
    const [no1, no2, no3] = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    body.background = `rgb(${no1}, ${no2}, ${no3})`;
    body.transition = '1s background  linear'
  }, 1000);
};


function digitalClock(){
  clearInterval(clearSet);
  body.background = '';

}


const animated = function(){
  window.location.href = './animatedClock/clock.html';
}



