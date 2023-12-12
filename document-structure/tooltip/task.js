const elementsWithTooltip = document.querySelectorAll('.has-tooltip');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

let currentElement = null;
elementsWithTooltip.forEach(element => {
  element.addEventListener('click', function(event) {
    event.preventDefault();

    const title = this.getAttribute('title');
    const coords = this.getBoundingClientRect();

    if (currentElement === this) {
      tooltip.classList.remove('tooltip_active');
      currentElement = null;
      return;
    }

    tooltip.textContent = title;
    tooltip.style.top = coords.bottom + 'px';
    tooltip.style.left = (coords.left + coords.width / 2) + 'px';
    tooltip.classList.add('tooltip_active');

    currentElement = this;
  });
});

