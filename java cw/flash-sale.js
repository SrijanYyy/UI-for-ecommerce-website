// Function to update the time left
function updateTimeLeft() {
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");

    var hours = parseInt(hoursElement.textContent);
    var minutes = parseInt(minutesElement.textContent);
    var seconds = parseInt(secondsElement.textContent);

    // Decrement seconds
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      // Decrement minutes if seconds reach 0
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        // Decrement hours if minutes reach 0
        hours--;
        if (hours < 0) {
          hours = 0;
          minutes = 0;
          seconds = 0;
          // Time's up, you can take additional action here if needed
        }
      }
    }

    // Update displayed time
    hoursElement.textContent = hours < 10 ? "0" + hours : hours;
    minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  // Update time left initially and every second thereafter
  updateTimeLeft();
  setInterval(updateTimeLeft, 1000);