document.addEventListener('DOMContentLoaded', function() {
    let timerElement = document.getElementById('timer');
    let timeLeft = parseInt(timerElement.textContent);
  
    let countdown = setInterval(function() {
      timeLeft--;
      timerElement.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
      }
    }, 1000);
  });
  