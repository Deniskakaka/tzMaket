!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t,n){},function(e,t){var n,o=document.querySelector(".block4-carousel"),r=document.querySelector(".block4-carousel__slider"),l=document.querySelector(".next"),u=document.querySelector(".prev"),c=document.querySelector(".comment").clientWidth;window.addEventListener("resize",(function(){c=document.querySelector(".comment").clientWidth})),window.addEventListener("load",(function(){c=document.querySelector(".comment").clientWidth})),l.addEventListener("click",(function(){n=-1,o.style.justifyContent="flex-start",r.style.transform="translate(".concat(-(c+10),"px)")})),u.addEventListener("click",(function(){-1===n&&(n=1,r.appendChild(r.firstElementChild)),o.style.justifyContent="flex-end",r.style.transform="translate(".concat(c+10,"px)")})),r.addEventListener("transitionend",(function(){1===n?r.prepend(r.lastElementChild):r.appendChild(r.firstElementChild),r.style.transition="none",r.style.transform="translate(0)",setTimeout((function(){r.style.transition="all 0.3s"}))}),!1)},function(e,t,n){"use strict";n.r(t);n(0);var o=document.querySelector(".popup"),r=document.querySelector(".popup2"),l=document.querySelector(".order1"),u=document.querySelector(".order2"),c=document.querySelectorAll(".order3"),s=document.querySelector(".name2"),i=document.querySelector(".phones"),a=document.querySelector(".yourPhone"),d=document.querySelector(".popup__thanks"),p=document.querySelector(".popup__request"),m=document.querySelector(".popup2__request");function f(){""!==name.value&&""!==i.value&&""!==a.value&&(o.classList.toggle("show"),d.classList.toggle("showPopapThank"))}function v(){o.classList.toggle("show"),p.classList.toggle("showPopupRequest")}o.addEventListener("click",(function(e){"popup"===e.target.classList[0]&&(f(),p.classList.remove("showPopupRequest"),o.classList.remove("show"),s.value="",i.value="",a.value="")})),r.addEventListener("click",(function(e){"popup2"===e.target.classList[0]&&(r.classList.remove("show"),m.classList.remove("showPopupRequest"))}));for(var y=0;y<c.length;y++)c[y].addEventListener("click",(function(){r.classList.add("show"),m.classList.add("showPopupRequest")}));l.addEventListener("click",v),u.addEventListener("click",f);n(1);var h=document.querySelectorAll(".list"),q=document.querySelectorAll(".send"),L=document.querySelectorAll(".name"),S=document.querySelectorAll(".phone"),g=document.querySelectorAll(".mail");for(var _=function(e){h[e]&&h[e].addEventListener("click",(function(){this.classList.add("red"),function(e,t){for(var n=0;n<=e.length;n++)+n!==t&&e[n]&&e[n].classList.remove("red")}(h,e)}))},E=0;E<=h.length;E++)_(E);emailjs.init("user_N5JR8YYD4ZUE9uPaypxsL");for(var b=0;b<q.length;b++)q[b].addEventListener("click",(function(){var e;e={name:L[0].value?L[0].value:L[1].value,phone:S[0].value?S[0].value:S[1].value,email:g[0].value?g[0].value:g[1].value},emailjs.send("krollik1000000_gmail_com","template_b5PgxmW1",e).then((function(e){alert("Thanks")}),(function(e){console.log("FAILED...",e)})),v(),document.querySelector(".popup2").classList.remove("show")}))}]);