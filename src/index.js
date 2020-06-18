import "./main.scss";
import "../src/js/popup.js";
import "../src/js/slaider.js";

let count = 0;
const list = document.querySelectorAll(".list");
const send = document.querySelector(".send");
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

(function(){
  emailjs.init("user_N5JR8YYD4ZUE9uPaypxsL");
})();

var templateParams = {
  name: "denis",
  phone: document.querySelector(".phone").value,
  email: "krollik1000000@gmail.com"
};

function message () {
   emailjs.send('krollik1000000_gmail_com', 'template_b5PgxmW1', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });
}

send.addEventListener("click", () => {
  message()
  console.log(document.querySelector(".name").value)
})