const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const order1 = document.querySelector(".order1");
const order2 = document.querySelector(".order2");
const order3 = document.querySelectorAll(".order3");
const name2 = document.querySelector(".name2");
const phones = document.querySelector(".phones");
const yourPhone = document.querySelector(".yourPhone");
const popupThanks = document.querySelector(".popup__thanks");
const popupRequest = document.querySelector(".popup__request");
const popupRequest2 = document.querySelector(".popup2__request");

function showPopupThank() {
  if (name2.value !== "" && phones.value !== "") {
    popup.classList.toggle("show");
    popupThanks.classList.toggle("showPopapThank");
  }
}

export function showPopupRequest() {
  popup.classList.toggle("show");
  popupRequest.classList.toggle("showPopupRequest");
}

popup.addEventListener("click", (e) => {
  if (e.target.classList[0] === "popup") {
    showPopupThank();
    popupRequest.classList.remove("showPopupRequest");
    popup.classList.remove("show");
    name2.value = "";
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