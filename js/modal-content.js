var link = document.querySelector(".company__link--popup");
var letter = document.querySelector(".modal-content-letter");
var close = letter.querySelector(".modal-content__close-button");
var login = letter.querySelector("[name=name]");
var mail = letter.querySelector("[name=mail]");
var text = letter.querySelector("[name=text]")
var storage = localStorage.getItem("login");
var form = letter.querySelector("form");

var mapOpen = document.querySelector(".company__map--js");
var mapPopup = document.querySelector(".modal-content-map");
var mapOverlay = document.querySelector(".modal-content-map__overlay");
var mapClose = mapPopup.querySelector(".modal-content__close-button");




link.addEventListener("click", function(event) {
  event.preventDefault("");
  letter.classList.add("modal-content-show");
  if (storage) {
         login.value = storage;
         mail.focus();
       } else {
         login.focus();
       }
});

close.addEventListener("click", function(event) {
  event.preventDefault("");
  letter.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !mail.value || !text.value) {
    event.preventDefault();
    console.log("Нужно ввести логин, пароль и текст письма");
  } else {
        localStorage.setItem("login", login.value);
      }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (letter.classList.contains("modal-content-show")) {
      letter.classList.remove("modal-content-show");
    }
  }
});

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
  mapOverlay.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
  mapOverlay.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
      mapOverlay.classList.remove("modal-content-show");
    }
  }
});
