import "./main.scss";
import "../src/js/popup.js";
import "../src/js/slaider.js";

let count = 0;
const list = document.querySelectorAll(".list");

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