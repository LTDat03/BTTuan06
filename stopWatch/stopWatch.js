var min = 0;
var sec = 0;
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");

var appendMin = document.getElementById("min");
var appendSec = document.getElementById("sec");
var timer;
btnStart.onclick = function () {
  clearInterval(timer);
  timer = setInterval(() => {
    sec++;

    if (sec <= 9) {
      appendSec.innerHTML = "0" + sec;
    }

    if (sec > 9) {
      appendSec.innerHTML = sec;
    }

    if (sec > 59) {
      min++;
      appendMin.innerHTML = "0" + min;
      sec = 0;
      appendSec.innerHTML = "0" + 0;
    }

    if (min > 9) {
      appendMin.innerHTML = min;
    }
  }, 1000);
};

btnStop.onclick = function () {
  clearInterval(timer);
};

btnReset.onclick = function () {
  clearInterval(timer);
  sec = 0;
  min = 0;
  appendMin.innerHTML = "00 ";
  appendSec.innerHTML = "00";
};
