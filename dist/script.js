/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/css/style.css":(e,t,s)=>{s.r(t)},"./src/js/slider.js":(e,t,s)=>{function o(){const e=[{image:"slider_image/people.jpg"},{image:"slider_image/maunt.jpg"},{image:"slider_image/foliage.jpg"}],t=document.querySelector(".start__block-image"),s=document.querySelector(".start__block-dots");function o(e){t.querySelector(".active").classList.remove("active"),t.querySelector(".n"+e).classList.add("active"),s.querySelector(".active").classList.remove("active"),s.querySelector(".n"+e).classList.add("active")}e.forEach(((s,o)=>{let r=`<img class="start__image n${o} ${0===o?"active":""}" src="${e[o].image}" alt="image" data-index="${o}">`;t.innerHTML+=r})),e.forEach(((e,t)=>{let o=`<div class="start__dot n${t} ${0===t?"active":""}" data-index="${t}"></div>`;s.innerHTML+=o})),s.querySelectorAll(".start__dot").forEach((e=>{e.addEventListener("click",(function(){o(this.dataset.index)}))})),setInterval((()=>{let s=+t.querySelector(".active").dataset.index;o(s===e.length-1?0:s+1)}),3e3)}s.r(t),s.d(t,{slider:()=>o})}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{s.r(o);s("./src/css/style.css");(0,s("./src/js/slider.js").slider)();document.querySelector(".menu");const e=document.querySelector(".menu-book"),t=document.querySelector(".result__button-load-more"),r=document.querySelector(".result__block-book-result");let a=0,l="";function n(t=e.querySelector(".active").dataset.index){a+=6,fetch(`https://www.googleapis.com/books/v1/volumes?q="${t}"&key=AIzaSyDAqSWPYcnIMTbPuqFbna6mdM04-wNA5Qo&printType=books&startIndex=0&maxResults=${a}&langRestrict=en`).then((e=>e.json())).then((e=>{e.items.forEach(((t,s)=>{var o;o=function(e,t){return`<div class="result__book book-result">\n  <img class="book-result__image" src="${e.items[t].volumeInfo.imageLinks.thumbnail}" alt="book-image">\n  <div class="book-result__content">\n    <p class="book-result__author">\n      ${e.items[t].volumeInfo.authors}\n    </p>\n    <h2 class="book-result__title">\n      ${e.items[t].volumeInfo.title.substr(0,37)+"..."}\n    </h2>\n    <div class="book-result__block-rating">\n      <div class="book-result__average-rating">\n        <img src="icons/GoldStar.svg" alt="star" class="book-result__star-image">\n        <img src="icons/GoldStar.svg" alt="star" class="book-result__star-image">\n        <img src="icons/GoldStar.svg" alt="star" class="book-result__star-image">\n        <img src="icons/GoldStar.svg" alt="star" class="book-result__star-image">\n        <img src="icons/Star.svg" alt="star" class="book-result__star-image">\n      </div>\n      <div class="book-result__rating-count">${e.items[t].volumeInfo.maturityRating}</div>\n    </div>\n    <p class="book-result__description">\n      ${e.items[t].searchInfo.textSnippet.substr(0,92)+"..."}\n    </p>\n    <p class="book-result__price">\n    ${e.items[t].saleInfo.retailPrice}\n    </p>\n    <button class="book-result__buy" type="submit">buy now</button>\n  </div>\n</div>`}(e,s),r.innerHTML+=o;let a=0;const l=document.querySelectorAll(".book-result__buy"),n=document.querySelector(".menu__count-shop");l.forEach(((t,o)=>{t.addEventListener("click",(()=>{const t=`book ${e.items[o].volumeInfo.title}`,r=JSON.parse(localStorage.getItem(t));if(console.log("here",r,t),r)localStorage.setItem(t,null),a-=1,a<=0?n.style.display="none":n.textContent=a;else{n.style.display="block",n.textContent=++a;let o={author:e.items[s].volumeInfo.authors,title:e.items[s].volumeInfo.title,rating:e.items[s].volumeInfo.maturityRating,description:e.items[s].searchInfo.textSnippet,price:e.items[s].saleInfo.retailPrice};localStorage.setItem(t,JSON.stringify(o))}}))}))}))})).catch((e=>console.error(e)))}e.querySelectorAll(".menu-book__item").forEach((t=>{t.addEventListener("click",(()=>{e.querySelector(".active").classList.remove("active"),t.classList.add("active"),l=t.dataset.index,r.innerHTML="",r.innerHTML='<button class="result__button-load-more" type="submit">load more</button>',a=0,n()}))})),t.addEventListener("click",n)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S2UsVUFBVUwsR0FDcEQsSUFDQSxHQUNGLEdBQ0YsSUFFSE0sT0FBTUMsR0FBU2IsUUFBUWEsTUFBTUEsSUFDbEMsQ0FsR0FuRCxFQUFTaEMsaUJBQWlCLG9CQUFvQkwsU0FBUXlGLElBQ3BEQSxFQUFXbkYsaUJBQWlCLFNBQVMsS0FDbkMrQixFQUFTNUMsY0FBYyxXQUFXSSxVQUFVQyxPQUFPLFVBQ25EMkYsRUFBVzVGLFVBQVVFLElBQUksVUFDekIwQyxFQUFpQmdELEVBQVdqRixRQUFRUCxNQWlHdENzQyxFQUFXcEMsVUFBWSxHQUN2Qm9DLEVBQVdwQyxVQUFZLDRFQUN2QnFDLEVBQWUsRUFqR2JFLEdBQVMsR0FDVCxJQUdKSixFQUFTaEMsaUJBQWlCLFFBQVNvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaG9wMi8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vYm9va3Nob3AyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jvb2tzaG9wMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9va3Nob3AyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9va3Nob3AyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9va3Nob3AyLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbGlkZXIoKSB7XHJcblxyXG4gIC8vIGNvbnN0IGJhbm5lckFycmF5ID0gW3tcclxuICAvLyAgIGltYWdlOiAnaW1nL3NsaWRlcl9pbWFnZS9wZW9wbGUuanBnJ1xyXG4gIC8vIH0sIHtcclxuICAvLyAgIGltYWdlOiAnaW1nL3NsaWRlcl9pbWFnZS9tYXVudC5qcGcnXHJcbiAgLy8gfSwge1xyXG4gIC8vICAgaW1hZ2U6ICdpbWcvc2xpZGVyX2ltYWdlL2ZvbGlhZ2UuanBnJ1xyXG4gIC8vIH1dXHJcblxyXG4gIGNvbnN0IGJhbm5lckFycmF5ID0gW3tcclxuICAgIGltYWdlOiAnc2xpZGVyX2ltYWdlL3Blb3BsZS5qcGcnXHJcbiAgfSwge1xyXG4gICAgaW1hZ2U6ICdzbGlkZXJfaW1hZ2UvbWF1bnQuanBnJ1xyXG4gIH0sIHtcclxuICAgIGltYWdlOiAnc2xpZGVyX2ltYWdlL2ZvbGlhZ2UuanBnJ1xyXG4gIH1dXHJcblxyXG4gIGNvbnN0IGltYWdlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRfX2Jsb2NrLWltYWdlJyk7XHJcbiAgY29uc3QgZG90c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydF9fYmxvY2stZG90c1wiKVxyXG5cclxuICBpbml0SW1hZ2VzKCk7XHJcbiAgaW5pdERvdHMoKTtcclxuICBpbml0QXV0b3BsYXkoKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdEltYWdlcygpIHtcclxuICAgIGJhbm5lckFycmF5LmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgaW1hZ2VzID0gYDxpbWcgY2xhc3M9XCJzdGFydF9faW1hZ2UgbiR7aW5kZXh9ICR7aW5kZXggPT09IDAgPyAnYWN0aXZlJyA6ICcnfVwiIHNyYz1cIiR7YmFubmVyQXJyYXlbaW5kZXhdLmltYWdlfVwiIGFsdD1cImltYWdlXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+YDtcclxuICAgICAgaW1hZ2VCbG9jay5pbm5lckhUTUwgKz0gaW1hZ2VzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlU2xpZGVyKG51bSkge1xyXG4gICAgaW1hZ2VCbG9jay5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgaW1hZ2VCbG9jay5xdWVyeVNlbGVjdG9yKFwiLm5cIiArIG51bSkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGRvdHNCbG9jay5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZG90c0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoXCIublwiICsgbnVtKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdERvdHMoKSB7XHJcbiAgICBiYW5uZXJBcnJheS5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IGRvdCA9IGA8ZGl2IGNsYXNzPVwic3RhcnRfX2RvdCBuJHtpbmRleH0gJHtpbmRleCA9PT0gMCA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+PC9kaXY+YDtcclxuICAgICAgZG90c0Jsb2NrLmlubmVySFRNTCArPSBkb3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb3RzQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0X19kb3QnKS5mb3JFYWNoKChkb3QpID0+IHtcclxuICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vdmVTbGlkZXIodGhpcy5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBdXRvcGxheSgpIHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgbGV0IGN1ck51bWJlciA9ICtpbWFnZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5kYXRhc2V0LmluZGV4O1xyXG4gICAgICBsZXQgbmV4dE51bWJlciA9IGN1ck51bWJlciA9PT0gYmFubmVyQXJyYXkubGVuZ3RoIC0gMSA/IDAgOiBjdXJOdW1iZXIgKyAxO1xyXG4gICAgICBtb3ZlU2xpZGVyKG5leHROdW1iZXIpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgc2xpZGVyIH0gZnJvbSBcIi4vc2xpZGVyLmpzXCI7XHJcblxyXG5zbGlkZXIoKTtcclxuXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXHJcblxyXG5jb25zdCBhcGlLZXkgPSAnQUl6YVN5REFxU1dQWWNuSU1UYlB1cUZibmE2bWRNMDQtd05BNVFvJztcclxuXHJcbmNvbnN0IG1lbnVCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYm9vaycpO1xyXG5jb25zdCBsb2FkTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2J1dHRvbi1sb2FkLW1vcmUnKTtcclxuY29uc3Qgb3V0cHV0Qm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2Jsb2NrLWJvb2stcmVzdWx0Jyk7XHJcblxyXG5cclxubGV0IE51bWJlclJlc3VsdCA9IDA7XHJcbmxldCBjYXRlZ29yaWVzQm9vayA9ICcnO1xyXG5cclxubWVudUJvb2sucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtYm9va19faXRlbScpLmZvckVhY2goY2F0ZWdvcmllcyA9PiB7XHJcbiAgY2F0ZWdvcmllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1lbnVCb29rLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgY2F0ZWdvcmllcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGNhdGVnb3JpZXNCb29rID0gY2F0ZWdvcmllcy5kYXRhc2V0LmluZGV4O1xyXG4gICAgY2xlYXJPdXRwdXQoKTtcclxuICAgIHJlcXVlc3QoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5sb2FkTW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcXVlc3QpO1xyXG5cclxuZnVuY3Rpb24gZm9ybWF0T3V0cHV0KGRhdGEsIGluZGV4KSB7XHJcbiAgbGV0IGh0bWxTdHJpbmdCb29rID0gYDxkaXYgY2xhc3M9XCJyZXN1bHRfX2Jvb2sgYm9vay1yZXN1bHRcIj5cclxuICA8aW1nIGNsYXNzPVwiYm9vay1yZXN1bHRfX2ltYWdlXCIgc3JjPVwiJHtkYXRhLml0ZW1zW2luZGV4XS52b2x1bWVJbmZvLmltYWdlTGlua3MudGh1bWJuYWlsfVwiIGFsdD1cImJvb2staW1hZ2VcIj5cclxuICA8ZGl2IGNsYXNzPVwiYm9vay1yZXN1bHRfX2NvbnRlbnRcIj5cclxuICAgIDxwIGNsYXNzPVwiYm9vay1yZXN1bHRfX2F1dGhvclwiPlxyXG4gICAgICAke2RhdGEuaXRlbXNbaW5kZXhdLnZvbHVtZUluZm8uYXV0aG9yc31cclxuICAgIDwvcD5cclxuICAgIDxoMiBjbGFzcz1cImJvb2stcmVzdWx0X190aXRsZVwiPlxyXG4gICAgICAke2RhdGEuaXRlbXNbaW5kZXhdLnZvbHVtZUluZm8udGl0bGUuc3Vic3RyKDAsIDM3KSArICcuLi4nfVxyXG4gICAgPC9oMj5cclxuICAgIDxkaXYgY2xhc3M9XCJib29rLXJlc3VsdF9fYmxvY2stcmF0aW5nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib29rLXJlc3VsdF9fYXZlcmFnZS1yYXRpbmdcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImljb25zL0dvbGRTdGFyLnN2Z1wiIGFsdD1cInN0YXJcIiBjbGFzcz1cImJvb2stcmVzdWx0X19zdGFyLWltYWdlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpY29ucy9Hb2xkU3Rhci5zdmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3M9XCJib29rLXJlc3VsdF9fc3Rhci1pbWFnZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvR29sZFN0YXIuc3ZnXCIgYWx0PVwic3RhclwiIGNsYXNzPVwiYm9vay1yZXN1bHRfX3N0YXItaW1hZ2VcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImljb25zL0dvbGRTdGFyLnN2Z1wiIGFsdD1cInN0YXJcIiBjbGFzcz1cImJvb2stcmVzdWx0X19zdGFyLWltYWdlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpY29ucy9TdGFyLnN2Z1wiIGFsdD1cInN0YXJcIiBjbGFzcz1cImJvb2stcmVzdWx0X19zdGFyLWltYWdlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9vay1yZXN1bHRfX3JhdGluZy1jb3VudFwiPiR7ZGF0YS5pdGVtc1tpbmRleF0udm9sdW1lSW5mby5tYXR1cml0eVJhdGluZ308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJib29rLXJlc3VsdF9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgJHtkYXRhLml0ZW1zW2luZGV4XS5zZWFyY2hJbmZvLnRleHRTbmlwcGV0LnN1YnN0cigwLCA5MikgKyAnLi4uJ31cclxuICAgIDwvcD5cclxuICAgIDxwIGNsYXNzPVwiYm9vay1yZXN1bHRfX3ByaWNlXCI+XHJcbiAgICAke2RhdGEuaXRlbXNbaW5kZXhdLnNhbGVJbmZvLnJldGFpbFByaWNlfVxyXG4gICAgPC9wPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJvb2stcmVzdWx0X19idXlcIiB0eXBlPVwic3VibWl0XCI+YnV5IG5vdzwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIHJldHVybiBodG1sU3RyaW5nQm9vaztcclxufVxyXG4vLyAke2RhdGEuaXRlbXNbaW5kZXhdLnNhbGVJbmZvLnJldGFpbFByaWNlLmFtb3VudH0gJHtkYXRhLml0ZW1zW2luZGV4XS5zYWxlSW5mby5yZXRhaWxQcmljZS5jdXJyZW5jeUNvZGV9XHJcblxyXG5mdW5jdGlvbiB3cml0ZU91dHB1dChtZXNzYWdlKSB7XHJcbiAgb3V0cHV0Qm9vay5pbm5lckhUTUwgKz0gbWVzc2FnZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChzdWIgPSBtZW51Qm9vay5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZGF0YXNldC5pbmRleCkge1xyXG4gIE51bWJlclJlc3VsdCArPSA2O1xyXG4gIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9XCIke3N1Yn1cIiZrZXk9JHthcGlLZXl9JnByaW50VHlwZT1ib29rcyZzdGFydEluZGV4PTAmbWF4UmVzdWx0cz0ke051bWJlclJlc3VsdH0mbGFuZ1Jlc3RyaWN0PWVuYClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBkYXRhLml0ZW1zLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgd3JpdGVPdXRwdXQoZm9ybWF0T3V0cHV0KGRhdGEsIGluZGV4KSk7XHJcblxyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICBjb25zdCBidXlCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2stcmVzdWx0X19idXknKTtcclxuICAgICAgICBjb25zdCBjb3VudFNob3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fY291bnQtc2hvcCcpO1xyXG5cclxuICAgICAgICBidXlCb29rLmZvckVhY2goKGJ1dHRvbiwgYnV0dG9uSW5kZXgpID0+IHtcclxuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdExzS2V5ID0gYGJvb2sgJHtkYXRhLml0ZW1zW2J1dHRvbkluZGV4XS52b2x1bWVJbmZvLnRpdGxlfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJbkNhcnQgPSBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2R1Y3RMc0tleSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiLCBwcm9kdWN0SW5DYXJ0LCBwcm9kdWN0THNLZXkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RJbkNhcnQpIHtcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9kdWN0THNLZXksIG51bGwpO1xyXG4gICAgICAgICAgICAgIGNvdW50ZXIgLT0gMTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnRTaG9wLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnRTaG9wLnRleHRDb250ZW50ID0gY291bnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY291bnRTaG9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgY291bnRTaG9wLnRleHRDb250ZW50ID0gKytjb3VudGVyO1xyXG5cclxuICAgICAgICAgICAgICBsZXQgb2JqZWt0Qm9vayA9IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogZGF0YS5pdGVtc1tpbmRleF0udm9sdW1lSW5mby5hdXRob3JzLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuaXRlbXNbaW5kZXhdLnZvbHVtZUluZm8udGl0bGUsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IGRhdGEuaXRlbXNbaW5kZXhdLnZvbHVtZUluZm8ubWF0dXJpdHlSYXRpbmcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5pdGVtc1tpbmRleF0uc2VhcmNoSW5mby50ZXh0U25pcHBldCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBkYXRhLml0ZW1zW2luZGV4XS5zYWxlSW5mby5yZXRhaWxQcmljZSxcclxuICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9kdWN0THNLZXksIEpTT04uc3RyaW5naWZ5KG9iamVrdEJvb2spKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyT3V0cHV0KCkge1xyXG4gIG91dHB1dEJvb2suaW5uZXJIVE1MID0gJyc7XHJcbiAgb3V0cHV0Qm9vay5pbm5lckhUTUwgPSAnPGJ1dHRvbiBjbGFzcz1cInJlc3VsdF9fYnV0dG9uLWxvYWQtbW9yZVwiIHR5cGU9XCJzdWJtaXRcIj5sb2FkIG1vcmU8L2J1dHRvbj4nO1xyXG4gIE51bWJlclJlc3VsdCA9IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJzbGlkZXIiLCJiYW5uZXJBcnJheSIsImltYWdlIiwiaW1hZ2VCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRvdHNCbG9jayIsIm1vdmVTbGlkZXIiLCJudW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbWFnZXMiLCJpbm5lckhUTUwiLCJkb3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoaXMiLCJkYXRhc2V0Iiwic2V0SW50ZXJ2YWwiLCJjdXJOdW1iZXIiLCJsZW5ndGgiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsIm1lbnVCb29rIiwibG9hZE1vcmUiLCJvdXRwdXRCb29rIiwiTnVtYmVyUmVzdWx0IiwiY2F0ZWdvcmllc0Jvb2siLCJyZXF1ZXN0Iiwic3ViIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIml0ZW1zIiwiZWxlbSIsIm1lc3NhZ2UiLCJ2b2x1bWVJbmZvIiwiaW1hZ2VMaW5rcyIsInRodW1ibmFpbCIsImF1dGhvcnMiLCJ0aXRsZSIsInN1YnN0ciIsIm1hdHVyaXR5UmF0aW5nIiwic2VhcmNoSW5mbyIsInRleHRTbmlwcGV0Iiwic2FsZUluZm8iLCJyZXRhaWxQcmljZSIsImZvcm1hdE91dHB1dCIsImNvdW50ZXIiLCJidXlCb29rIiwiY291bnRTaG9wIiwiYnV0dG9uIiwiYnV0dG9uSW5kZXgiLCJwcm9kdWN0THNLZXkiLCJwcm9kdWN0SW5DYXJ0IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dENvbnRlbnQiLCJvYmpla3RCb29rIiwiYXV0aG9yIiwicmF0aW5nIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyb3IiLCJjYXRlZ29yaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==