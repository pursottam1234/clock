function displayTime(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours: 12;

  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  function addLeadingZero(value) {
    return value < 10 ? '0' + value : value;
  }
  var timeString = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
// console.log(timeString);
  
    // hours = (hours < 10 ? "0" : "") + hours;
    // minutes = (minutes < 10 ? "0" : "") + minutes;
    // seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // var clockElement = 
  document.getElementById("clock").textContent = timeString;
    // clockElement.innerText = hours + ":" + minutes + ":" + seconds;
  
    // setTimeout(updateClock, 1000);
}
  
  // updateClock();
setInterval(displayTime, 1000);
  