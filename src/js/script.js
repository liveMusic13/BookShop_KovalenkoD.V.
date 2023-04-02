import '../css/style.css';
import { slider } from "./slider.js";

slider();

const menu = document.querySelector('.menu')

const apiKey = 'AIzaSyDAqSWPYcnIMTbPuqFbna6mdM04-wNA5Qo';

const menuBook = document.querySelector('.menu-book');
const loadMore = document.querySelector('.result__button-load-more');
const outputBook = document.querySelector('.result__block-book-result');


let NumberResult = 0;
let categoriesBook = '';

menuBook.querySelectorAll('.menu-book__item').forEach(categories => {
  categories.addEventListener('click', () => {
    menuBook.querySelector('.active').classList.remove("active");
    categories.classList.add('active');
    categoriesBook = categories.dataset.index;
    clearOutput();
    request();
  });
});

loadMore.addEventListener('click', request);

function formatOutput(data, index) {
  let htmlStringBook = `<div class="result__book book-result">
  <img class="book-result__image" src="${data.items[index].volumeInfo.imageLinks.thumbnail}" alt="book-image">
  <div class="book-result__content">
    <p class="book-result__author">
      ${data.items[index].volumeInfo.authors}
    </p>
    <h2 class="book-result__title">
      ${data.items[index].volumeInfo.title.substr(0, 37) + '...'}
    </h2>
    <div class="book-result__block-rating">
      <div class="book-result__average-rating">
        <img src="icons/GoldStar.svg" alt="star" class="book-result__star-image">
        <img src="icons/GoldStar.svg" alt="star" class="book-result__star-image">
        <img src="icons/GoldStar.svg" alt="star" class="book-result__star-image">
        <img src="icons/GoldStar.svg" alt="star" class="book-result__star-image">
        <img src="icons/Star.svg" alt="star" class="book-result__star-image">
      </div>
      <div class="book-result__rating-count">${data.items[index].volumeInfo.maturityRating}</div>
    </div>
    <p class="book-result__description">
      ${data.items[index].searchInfo.textSnippet.substr(0, 92) + '...'}
    </p>
    <p class="book-result__price">
    ${data.items[index].saleInfo.retailPrice}
    </p>
    <button class="book-result__buy" type="submit">buy now</button>
  </div>
</div>`;
  return htmlStringBook;
}
// ${data.items[index].saleInfo.retailPrice.amount} ${data.items[index].saleInfo.retailPrice.currencyCode}

function writeOutput(message) {
  outputBook.innerHTML += message;
}

function request(sub = menuBook.querySelector('.active').dataset.index) {
  NumberResult += 6;
  fetch(`https://www.googleapis.com/books/v1/volumes?q="${sub}"&key=${apiKey}&printType=books&startIndex=0&maxResults=${NumberResult}&langRestrict=en`)
    .then(response => response.json())
    .then(data => {
      data.items.forEach((elem, index) => {
        writeOutput(formatOutput(data, index));

        let counter = 0;
        const buyBook = document.querySelectorAll('.book-result__buy');
        const countShop = document.querySelector('.menu__count-shop');

        buyBook.forEach((button, buttonIndex) => {
          button.addEventListener('click', () => {
            const productLsKey = `book ${data.items[buttonIndex].volumeInfo.title}`;
            const productInCart = JSON.parse(
              localStorage.getItem(productLsKey)
            );

            console.log("here", productInCart, productLsKey);

            if (productInCart) {
              localStorage.setItem(productLsKey, null);
              counter -= 1;

              if (counter <= 0) {
                countShop.style.display = "none";
              } else {
                countShop.textContent = counter;
              }
            } else {
              countShop.style.display = "block";
              countShop.textContent = ++counter;

              let objektBook = {
                author: data.items[index].volumeInfo.authors,
                title: data.items[index].volumeInfo.title,
                rating: data.items[index].volumeInfo.maturityRating,
                description: data.items[index].searchInfo.textSnippet,
                price: data.items[index].saleInfo.retailPrice,
              };

              localStorage.setItem(productLsKey, JSON.stringify(objektBook));
            }
          });
        });
      });
    })
    .catch(error => console.error(error));
}

function clearOutput() {
  outputBook.innerHTML = '';
  outputBook.innerHTML = '<button class="result__button-load-more" type="submit">load more</button>';
  NumberResult = 0;
}




