import "./main.scss";
import "../src/js/popup.js";
import "../src/js/slaider.js";
import {showPopupRequest} from "../src/js/popup.js";

let count = 0;
const list = document.querySelectorAll(".list");
const send = document.querySelectorAll(".send");

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

(function () {
  emailjs.init("user_N5JR8YYD4ZUE9uPaypxsL");
})();

function message() {
  let templateParams = {
    name: !document.querySelector(".name").value
      ? document.querySelector(".name2").value
      : document.querySelector(".name").value,
    phone: !document.querySelector(".phone").value
      ? document.querySelector(".phone2").value
      : document.querySelector(".phone").value,
    email: !document.querySelector(".mail").value
      ? document.querySelector(".mail2").value
      : document.querySelector(".mail").value,
  };
  emailjs
    .send(
      "krollik1000000_gmail_com",
      "template_b5PgxmW1",
      templateParams
    )
    .then(
      function (response) {
        alert("Thanks");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

for (let i = 0; i < send.length; i++) {
  send[i].addEventListener("click", () => {
    message();
    showPopupRequest()
    document.querySelector(".popup2").classList.remove("show");
  });
}
