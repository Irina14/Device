var controls_1 = document.querySelector('.controls-1');
var controls_2 = document.querySelector('.controls-2');
var controls_3 = document.querySelector('.controls-3');
var slider_1 = document.querySelector('.slider__item-1');
var slider_2 = document.querySelector('.slider__item-2');
var slider_3 = document.querySelector('.slider__item-3');


controls_1.addEventListener('click', function (evt) {
    evt.preventDefault();
    controls_1.classList.add('controls--current');
    controls_2.classList.remove('controls--current');
    controls_3.classList.remove('controls--current');
    slider_1.classList.add('slider--show');
    slider_1.classList.remove('slider--hidden');

    if (slider_2.classList.contains('slider--show')) {
      slider_2.classList.remove('slider--show');
      slider_2.classList.add('slider--hidden');
    }

    if (slider_3.classList.contains('slider--show')) {
      slider_3.classList.remove('slider--show');
      slider_3.classList.add('slider--hidden');
    }

  });

controls_2.addEventListener('click', function (evt) {
    evt.preventDefault();
    controls_2.classList.add('controls--current');
    controls_1.classList.remove('controls--current');
    controls_3.classList.remove('controls--current');
    slider_2.classList.remove('slider--hidden');
    slider_2.classList.add('slider--show');


    if (slider_1.classList.contains('slider--show')) {
      slider_1.classList.remove('slider--show');
      slider_1.classList.add('slider--hidden');
    }

    if (slider_3.classList.contains('slider--show')) {
      slider_3.classList.remove('slider--show');
      slider_3.classList.add('slider--hidden');
    }

  });

controls_3.addEventListener('click', function (evt) {
    evt.preventDefault();
    controls_3.classList.add('controls--current');
    controls_2.classList.remove('controls--current');
    controls_1.classList.remove('controls--current');
    slider_3.classList.remove('slider--hidden');
    slider_3.classList.add('slider--show');


     if (slider_2.classList.contains('slider--show')) {
      slider_2.classList.remove('slider--show');
      slider_2.classList.add('slider--hidden');
    }

    if (slider_1.classList.contains('slider--show')) {
      slider_1.classList.remove('slider--show');
      slider_1.classList.add('slider--hidden');
    }

  });
