let $ = document;
const hourElem = $.querySelector("#hour");
const minuteElem = $.querySelector("#minute");
const secondsElem = $.querySelector("#seconds");

setInterval(function () {
  let myDate = new Date();

  let nowhour = myDate.getHours();
  let nowminute = myDate.getMinutes();
  let nowseconds = myDate.getSeconds();

  if (nowhour < 10) {
    nowhour = "0" + nowhour;
  }
  if (nowminute < 10) {
    nowminute = "0" + nowminute;
  }


  if (nowseconds < 10) {
    nowseconds = "0" + nowseconds;
  }

  hourElem.innerHTML = nowhour;
  minuteElem.innerHTML = nowminute;
  secondsElem.innerHTML = nowseconds;
}, 1000);
