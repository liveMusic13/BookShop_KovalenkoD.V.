// "use strict";

export function slider() {

  // const bannerArray = [{
  //   image: 'img/slider_image/people.jpg'
  // }, {
  //   image: 'img/slider_image/maunt.jpg'
  // }, {
  //   image: 'img/slider_image/foliage.jpg'
  // }]

  const bannerArray = [{
    image: 'slider_image/people.jpg'
  }, {
    image: 'slider_image/maunt.jpg'
  }, {
    image: 'slider_image/foliage.jpg'
  }]

  const imageBlock = document.querySelector('.start__block-image');
  const dotsBlock = document.querySelector(".start__block-dots")

  initImages();
  initDots();
  initAutoplay();

  function initImages() {
    bannerArray.forEach((image, index) => {
      let images = `<img class="start__image n${index} ${index === 0 ? 'active' : ''}" src="${bannerArray[index].image}" alt="image" data-index="${index}">`;
      imageBlock.innerHTML += images;
    });
  }

  function moveSlider(num) {
    imageBlock.querySelector(".active").classList.remove("active");
    imageBlock.querySelector(".n" + num).classList.add("active");
    dotsBlock.querySelector(".active").classList.remove("active");
    dotsBlock.querySelector(".n" + num).classList.add("active");
  }

  function initDots() {
    bannerArray.forEach((image, index) => {
      let dot = `<div class="start__dot n${index} ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`;
      dotsBlock.innerHTML += dot;
    });

    dotsBlock.querySelectorAll('.start__dot').forEach((dot) => {
      dot.addEventListener('click', function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initAutoplay() {
    setInterval(() => {
      let curNumber = +imageBlock.querySelector('.active').dataset.index;
      let nextNumber = curNumber === bannerArray.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, 3000);
  }

}