const carousel = document.querySelector('.block4-carousel');
const slider = document.querySelector('.block4-carousel__slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

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