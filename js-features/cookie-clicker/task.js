document.addEventListener('DOMContentLoaded', function() {
    let clickerCounter = 0; 
    let cookie = document.getElementById('cookie');
  
    cookie.addEventListener('click', function() {
        clickerCounter++;
        document.getElementById('clicker__counter').textContent = clickerCounter; 
        if (cookie.width === 200) {
            cookie.width = 180; 
            cookie.height = 180;
        } else {
            cookie.width = 200; 
            cookie.height = 200;
        }
    });
  });
  