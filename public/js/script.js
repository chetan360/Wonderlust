// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

var swiper = new Swiper(".slide-content", {
  slidesPerView: 10,
  spaceBetween: 5,
  loop: true,
  centeredSlides: true, // Correct

  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3, // 3 slides for small screens
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 4, // 4 slides for medium screens
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 6, // 6 slides for larger screens
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 10, // 10 slides for extra large screens
      spaceBetween: 25,
    },
  },
});

const showProfile = document.getElementById("profile-btn");
const loginMenu = document.getElementById("login-menu");

let loginClicked = false;
showProfile.addEventListener("click", function () {
  loginClicked = !loginClicked;
  if (loginClicked) {
    showProfile.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    loginMenu.classList.add("show");
  } else {
    showProfile.innerHTML = "<i class='fa-solid fa-bars'></i>";
    loginMenu.classList.remove("show");
  }
});
