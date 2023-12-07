document.addEventListener('DOMContentLoaded', function() {
    let deadCounter = 0; 
    let lostCounter = 0; 
    let playing = true; 
  
    function getHole(index) {
      return document.getElementById('hole' + index);
    }
  
    function deactivateHole(index) {
      getHole(index).className = 'hole';
    }
  
    function activateHole(index) {
      getHole(index).className = 'hole hole_has-mole';
    }
  
    function next() {
      setTimeout(() => {
        if (!playing) {
          return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
      }, 800);
    }
  
    next();
  
    for (let i = 1; i <= 9; i++) {
      getHole(i).addEventListener('click', function() {
        if (getHole(i).className === 'hole hole_has-mole') {
          deadCounter++;
          document.getElementById('dead').textContent = deadCounter;
          deactivateHole(i);
          if (deadCounter === 10) {
            playing = false;
            alert('Поздравляем! Вы победили в игре!');
            resetCounters();
          }
        } else {
          lostCounter++;
          document.getElementById('lost').textContent = lostCounter;
          if (lostCounter === 5) {
            playing = false;
            alert('Игра окончена. Вы проиграли');
            resetCounters();
          }
        }
      });
    }
  
    function resetCounters() {
      deadCounter = 0;
      lostCounter = 0;
      document.getElementById('dead').textContent = deadCounter;
      document.getElementById('lost').textContent = lostCounter;
    }
  });
  