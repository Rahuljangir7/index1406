let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h21 = document.querySelector("h2.first");
let h22 = document.querySelector("h2.second");

document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  setTimeout(() => {
    btn.classList.add("flash");
  }, 1000);

  setTimeout(() => {
    btn.classList.remove("flash");
  }, 1500);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h21.innerText = `level ${level}`;
  h22.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randBtn);
  // console.log(randColor);
  // console.log(randIdx);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  // console.log("curr level : ", level);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h21.innerHTML = `Game over ! Your score was <b>${level}</b> Press any key to start.`;
    h22.innerHTML = `Game over ! Your score was <b>${level}</b> Press any key to start.`;
    
    document.querySelector("body").style.background = "red";
    setTimeout(
      () => (document.querySelector("body").style.background = ""),
      300
    );
    hightScore(level);
    reset();
  }
}

function btnPress() {
  // console.log(this);
  let btn = this;
  userFlash(btn);

  let = userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

let span = document.querySelector(".highScore");
const highArr = [];
function hightScore(level) {
  highArr.push(level);
  let highNumber = Math.max(...highArr);
  span.innerText = highNumber;
}
