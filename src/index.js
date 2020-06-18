import "./main.scss";
import "../src/js/popup.js";
import "../src/js/slaider.js";
import {showPopupRequest} from "../src/js/popup.js";

let count = 0;
const list = document.querySelectorAll(".list");
const send = document.querySelectorAll(".send");
const nameValue = document.querySelectorAll(".name");
const phoneValue = document.querySelectorAll(".phone");
const mailValue = document.querySelectorAll(".mail");

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
    name: !nameValue[0].value ? nameValue[1].value: nameValue[0].value,
    phone: !phoneValue[0].value ? phoneValue[1].value : phoneValue[0].value,
    email: !mailValue[0].value ? mailValue[1].value: mailValue[0].value
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
