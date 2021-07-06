function clockfy() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hour < 10) {
    hours = "0" + hours;
  }
  if (minute < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("hour").textContent = hours + ":";
  document.getElementById("minute").textContent = minutes + ":";
  document.getElementById("second").textContent = seconds;
}
setInterval(clockfy);
