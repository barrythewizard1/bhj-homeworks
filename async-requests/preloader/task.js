document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
  
    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
      .then(response => response.json())
      .then(data => {
        loader.classList.remove('loader_active');
  
        const valute = data.response.Valute;
        for (const currencyCode in valute) {
          const currency = valute[currencyCode];
  
          const item = document.createElement('div');
          item.classList.add('item');
  
          const itemCode = document.createElement('div');
          itemCode.classList.add('item__code');
          itemCode.textContent = currency.CharCode;
          item.appendChild(itemCode);
  
          const itemValue = document.createElement('div');
          itemValue.classList.add('item__value');
          itemValue.textContent = currency.Value.toFixed(2);
          item.appendChild(itemValue);
  
          const itemCurrency = document.createElement('div');
          itemCurrency.classList.add('item__currency');
          itemCurrency.textContent = 'руб.';
          item.appendChild(itemCurrency);
  
          itemsContainer.appendChild(item);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  