var controls_1 = document.querySelector('.controls-1');
var controls_2 = document.querySelector('.controls-2');
var controls_3 = document.querySelector('.controls-3');


controls_1.addEventListener('click', function (evt) {
    evt.preventDefault();
    controls_1.classList.add('controls--current');
    controls_2.classList.remove('controls--current');
    controls_3.classList.remove('controls--current');
  });

controls_2.addEventListener('click', function (evt) {
    evt.preventDefault();
    controls_2.classList.add('controls--current');
    controls_1.classList.remove('controls--current');
    controls_3.classList.remove('controls--current');
  });

controls_3.addEventListener('click', function (evt) {
    evt.preventDefault();
    controls_3.classList.add('controls--current');
    controls_2.classList.remove('controls--current');
    controls_1.classList.remove('controls--current');
  });
