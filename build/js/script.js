"use strict";
const mobileMenu = document.querySelector(".main-menu");
const mobileMenuButton = document.querySelector(".main-menu__button");
const tablinks = document.querySelectorAll(
  ".travel-places__card-hover-content"
);
const tabNavs = document.querySelectorAll(".country-cards__list-item");
const tabPanes = document.querySelectorAll(".country-card");
const popupBuyTour = document.querySelector(".popup-buy-tour");
const popupBuyTourClose = document.querySelector(".popup-buy-tour__form-close");
const submitButton = document.querySelector(".form-submit");
const popupSucces = document.querySelector(".popup-succes");
const popupSuccesClose = document.querySelector(".popup-succes__close");

submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSucces.classList.add("popup-succes--open");
});

popupSuccesClose.addEventListener("click", function () {
  popupSucces.classList.remove("popup-succes--open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupSucces.classList.contains("popup-succes--open")) {
      popupSucces.classList.remove("popup-succes--open");
    }
  }
});

mobileMenu.classList.remove("main-menu--nojs");

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("main-menu--open");
  mobileMenuButton.classList.toggle("main-menu__button--close");
  console.log(tablinks);
});

const cardTabs = () => {
  for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      let activeTabAttr = e.target.getAttribute("data-tab");

      for (let j = 0; j < tabNavs.length; j++) {
        let contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("country-cards__list-item--active");
          tabPanes[j].classList.add("country-card--active");
        } else {
          tabNavs[j].classList.remove("country-cards__list-item--active");
          tabPanes[j].classList.remove("country-card--active");
        }
      }
    });
  }
};

const buyPopup = () => {
  let buttons = document.querySelectorAll(".button-buy"),
    index,
    button;

  for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener("click", clickHandler);
  }

  function clickHandler(event) {
    popupBuyTour.classList.add("popup-buy-tour--active");
    event.preventDefault();
  }

  popupBuyTourClose.addEventListener("click", function () {
    popupBuyTour.classList.remove("popup-buy-tour--active");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupBuyTour.classList.contains("popup-buy-tour--active")) {
        popupBuyTour.classList.remove("popup-buy-tour--active");
      }
    }
  });
};

buyPopup();
cardTabs();
