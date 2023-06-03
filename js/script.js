function updateClock(){
    var currentTime = new Date();
    var hours = currentTime.getUTCHours();
    var minutes = currentTime.getUTCMinutes();
    var seconds = currentTime.getUTCSeconds();
  
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var clockElement = document.getElementById("clock");
    clockElement.innerText = hours + ":" + minutes + ":" + seconds;
  
    setTimeout(updateClock, 1000);
  }
  
  updateClock();
  