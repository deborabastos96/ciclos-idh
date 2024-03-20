"use strict";

////////////////////////////////////////////////////////////////////////////////
// Ano alterar ano atual
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////////////////////////////
// Carrossel
$(document).ready(function () {
  $(".carrossels").owlCarousel({
    pagination: false,
    autoplay: true,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});

$(document).ready(function () {
  $(".carrossels-posts").owlCarousel({
    pagination: false,
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});

/////////////////////////////////////////////
// Menu mobile
const btnNavEl = document.querySelector(".nav__mobile-btn");
const headerEl = document.querySelector(".header");
const imgAbs = document.querySelector(".cursos-page__img");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  document.body.classList.toggle("overlay");
  document.body.classList.toggle("sticky");
  imgAbs.classList.toggle("cursos-page__img-menu");
});

if ($(window).width() < 770) {
  headerEl.classList.remove("cursos-page__header");
}

////////////////////////////////////////////////////////////
// Button back to top
let mybutton = document.getElementsByClassName("btn--top")[0];

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Cookies
const cookieBox = document.querySelector(".wrapper"),
  acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = () => {
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  } else {
    //if cookie not set then alert an error
    alert(
      "Os cookies não funcionam! Por favor desbloqueie esse site das suas configurações de cookies do navegador."
    );
  }
};
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");

/////////////////////////////////////////////
// Accordion

let acc = document.getElementsByClassName("conteudo__modulo-pointer");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("conteudo-open");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
