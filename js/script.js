var controls_1 = document.querySelector('.controls-1');
var controls_2 = document.querySelector('.controls-2');
var controls_3 = document.querySelector('.controls-3');
var slider_1 = document.querySelector('.slider__item-1');
var slider_2 = document.querySelector('.slider__item-2');
var slider_3 = document.querySelector('.slider__item-3');
var buttonDelivery = document.querySelector('.services__button--delivery');
var buttonWarranty = document.querySelector('.services__button--warranty');
var buttonCredit = document.querySelector('.services__button--credit');
var buttonBox_1 = document.querySelector('.services__box--1');
var buttonBox_2 = document.querySelector('.services__box--2');
var buttonBox_3 = document.querySelector('.services__box--3');
var sliderDelivery = document.querySelector('.services__delivery');
var sliderWarranty = document.querySelector('.services__warranty');
var sliderCredit = document.querySelector('.services__credit');


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


buttonDelivery.addEventListener('click', function (evt) {
    evt.preventDefault();
    buttonDelivery.classList.add('services__button--active');
    buttonBox_1.classList.add('services__box--active');
    buttonWarranty.classList.remove('services__button--active');
    buttonBox_2.classList.remove('services__box--active');
    buttonCredit.classList.remove('services__button--active');
    buttonBox_3.classList.remove('services__box--active');
    sliderDelivery.classList.add('slider--show');
    sliderDelivery.classList.remove('slider--hidden');

    if (sliderWarranty.classList.contains('slider--show')) {
      sliderWarranty.classList.remove('slider--show');
      sliderWarranty.classList.add('slider--hidden');
    }

    if (sliderCredit.classList.contains('slider--show')) {
      sliderCredit.classList.remove('slider--show');
      sliderCredit.classList.add('slider--hidden');
    }

});

buttonWarranty.addEventListener('click', function (evt) {
    evt.preventDefault();
    buttonWarranty.classList.add('services__button--active');
    buttonBox_2.classList.add('services__box--active');
    buttonDelivery.classList.remove('services__button--active');
    buttonBox_1.classList.remove('services__box--active');
    buttonCredit.classList.remove('services__button--active');
    buttonBox_3.classList.remove('services__box--active');
    sliderWarranty.classList.add('slider--show');
    sliderWarranty.classList.remove('slider--hidden');

    if (sliderDelivery.classList.contains('slider--show')) {
      sliderDelivery.classList.remove('slider--show');
      sliderDelivery.classList.add('slider--hidden');
    }

    if (sliderCredit.classList.contains('slider--show')) {
      sliderCredit.classList.remove('slider--show');
      sliderCredit.classList.add('slider--hidden');
    }

});

buttonCredit.addEventListener('click', function (evt) {
    evt.preventDefault();
    buttonCredit.classList.add('services__button--active');
    buttonBox_3.classList.add('services__box--active');
    buttonDelivery.classList.remove('services__button--active');
    buttonBox_1.classList.remove('services__box--active');
    buttonWarranty.classList.remove('services__button--active');
    buttonBox_2.classList.remove('services__box--active');
    sliderCredit.classList.add('slider--show');
    sliderCredit.classList.remove('slider--hidden');

    if (sliderDelivery.classList.contains('slider--show')) {
      sliderDelivery.classList.remove('slider--show');
      sliderDelivery.classList.add('slider--hidden');
    }

    if (sliderWarranty.classList.contains('slider--show')) {
      sliderWarranty.classList.remove('slider--show');
      sliderWarranty.classList.add('slider--hidden');
    }

});
