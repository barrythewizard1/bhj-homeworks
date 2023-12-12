document.addEventListener('DOMContentLoaded', function () {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswersContainer = document.getElementById('poll__answers');
  
    fetch('https://students.netoservices.ru/nestjs-backend/poll')
      .then(response => response.json())
      .then(data => {
        pollTitle.textContent = data.data.title;
        data.data.answers.forEach(answer => {
          const answerButton = document.createElement('button');
          answerButton.classList.add('poll__answer');
          answerButton.textContent = answer;
  
          answerButton.addEventListener('click', function () {
            alert('Спасибо, ваш голос засчитан!');
          });
  
          pollAnswersContainer.appendChild(answerButton);
        });
      })
      .catch(error => {
        console.error('Error fetching poll data:', error);
      });
  });
  