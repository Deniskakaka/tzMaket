import "./main.scss";
let count = 0;
const list = document.querySelectorAll(".list");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const order1 = document.querySelector(".order1");
const order2 = document.querySelector(".order2");
const order3 = document.querySelectorAll(".order3");
const name = document.querySelector(".name");
const phones = document.querySelector(".phones");
const yourPhone = document.querySelector(".yourPhone");
const popupThanks = document.querySelector(".popup__thanks");
const popupRequest = document.querySelector(".popup__request");
const popupRequest2 = document.querySelector(".popup2__request");
const carousel = document.querySelector('.block4-carousel');
const slider = document.querySelector('.block4-carousel__slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function check(arr, count) {
  for (let i = 0; i <= arr.length; i++) {
    if (+i !== count && arr[i]) {
      arr[i].classList.remove("red");
    }
  }
}

for (let elem = 0; elem <= list.length; elem++) {
  if (list[elem]) {
    list[elem].addEventListener("click", function () {
      this.classList.add("red");
      count = elem;
      check(list, count);
    });
  }
}

function showPopupThank() {
  if (
    name.value !== "" &&
    phones.value !== "" &&
    yourPhone.value !== ""
  ) {
    popup.classList.toggle("show");
    popupThanks.classList.toggle("showPopapThank");
  }
}

function showPopupRequest() {
  popup.classList.toggle("show");
  popupRequest.classList.toggle("showPopupRequest");
}

popup.addEventListener("click", (e) => {
  if (e.target.classList[0] === "popup") {
    showPopupThank();
    popupRequest.classList.remove("showPopupRequest");
    popup.classList.remove("show");
    name.value = "";
    phones.value = "";
    yourPhone.value = "";
  }
});

popup2.addEventListener("click", (e) => {
  if (e.target.classList[0] === "popup2") {
    popup2.classList.remove("show");
    popupRequest2.classList.remove("showPopupRequest");
  }
});

for (let i = 0; i < order3.length; i++) {
  order3[i].addEventListener("click", () => {
    popup2.classList.add("show");
    popupRequest2.classList.add("showPopupRequest");
  });
}

order1.addEventListener("click", showPopupRequest);
order2.addEventListener("click", showPopupThank);

let direction;
let width = document.querySelector(".comment").clientWidth;

window.addEventListener("resize", () => {
   width = document.querySelector(".comment").clientWidth;
});

window.addEventListener("load", () => {
  width = document.querySelector(".comment").clientWidth;
});

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = `translate(${-(width + 10)}px)`;  
});

prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = `translate(${width + 10}px)`;
  
});

slider.addEventListener('transitionend', function() { 
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.3s';
  })
}, false);