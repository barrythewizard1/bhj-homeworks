const rotators = document.getElementsByClassName('rotator');

Array.from(rotators).forEach(rotator => {
  const cases = rotator.getElementsByClassName('rotator__case');
  let activeIndex = 0;

  const rotateCases = () => {
    cases[activeIndex].classList.remove('rotator__case_active');
    activeIndex = (activeIndex + 1) % cases.length;
    cases[activeIndex].classList.add('rotator__case_active');
  };

  setInterval(rotateCases, 1000);
});
