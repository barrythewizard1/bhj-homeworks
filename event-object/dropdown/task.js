document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      const dropdownValue = dropdown.querySelector('.dropdown__value');
      const dropdownList = dropdown.querySelector('.dropdown__list');
  
      dropdownValue.addEventListener('click', function(event) {
        event.stopPropagation(); 
  
        if (dropdownList.style.display === 'none' || dropdownList.style.display === '') {
          dropdownList.style.display = 'block';
        } else {
          dropdownList.style.display = 'none';
        }
      });
  
      dropdownList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('dropdown__link')) {
          dropdownValue.textContent = target.textContent; 
          dropdownList.style.display = 'none'; 
        }
      });
  
      document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          dropdownList.style.display = 'none';
        }
      });
    });
  });
  