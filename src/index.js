import "./main.scss";
let count = 0;
const list = document.querySelectorAll(".list");
const popup = document.querySelector(".popup");
const order1 = document.querySelector(".order1");
const order2 = document.querySelector(".order2");
const name = document.querySelector(".name");
const phones = document.querySelector(".phones");
const yourPhone = document.querySelector(".yourPhone");
const popupThanks = document.querySelector(".popup__thanks");
const popupRequest = document.querySelector(".popup__request");

function check(arr, count) {
  for (let i = 0; i <= arr.length; i++) {
    if (+i !== count) {
      if (arr[i]) {
        arr[i].classList.remove("red");
      }
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

order1.addEventListener("click", showPopupRequest);
order2.addEventListener("click", showPopupThank);