let hour = document.getElementById("hour");
      let minutes = document.getElementById("minuts");
      let seconds = document.getElementById("seconds");
      let milliSeconds = document.getElementById("miliSeconds");
      let startIcon = document.querySelector(".fa-play");
      let capture_time = document.querySelector(".showtime");
      let flagIcon = document.querySelector(".fa-flag");
      let clearBtn = document.querySelector(".clearBtn");
      let settimer = null;
      let conditionBtn = false;
      let [hours, minut, second, milliSecond] = [0, 0, 0, 0];
      const stopWatch = () => {
        if (startIcon.className == "fa-solid fa-play") {
          startIcon.classList.remove("fa-play");
          startIcon.classList.add("fa-pause");
          flagIcon.style.color = "black";
          conditionBtn = true;

          settimer = setInterval(() => {
            milliSeconds.innerText = ++milliSecond;
            if (milliSecond == 100) {
              milliSecond = 0;
              setTimeout(() => {
                seconds.innerText = ++second;
                if (second == 60) {
                  second = 0;
                  minutes.innerText = ++minut;
                  console.log(minut);
                  if (minut == 60) {
                    minut = 0;
                    hour.innerText = ++hours;
                  }
                }
              }, 100);
            }
          }, 10);
        } else {
          startIcon.classList.remove("fa-pause");
          startIcon.classList.add("fa-play");
          flagIcon.style.color = "";
          conditionBtn = false;

          clearInterval(settimer);
        }
      };

      const captureTime = () => {
        if (
          (hours != 0 || minut != 0 || second != 0 || milliSecond != 0) &&
          conditionBtn
        ) {
          capture_time.innerHTML += `<div> ${hours} : ${minut} : ${second} . ${milliSecond} </div>`;
          clearBtn.style.backgroundColor = "#ff0000";
        }
      };

      const reset = () => {
        hour.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        milliSeconds.innerText = 0;
        hours = 0;
        minut = 0;
        second = 0;
        milliSecond = 0;
        clearInterval(settimer);

        startIcon.classList.add("fa-play");
        startIcon.classList.remove("fa-pause");
      };

      const clickBtn = () => {};

      const clearBox = () => {
        if (capture_time.innerHTML != "") {
          capture_time.innerHTML = "";
          clearBtn.style.backgroundColor = "";
        }
      };