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

const taxSwitch = document.getElementById("flexSwitchCheckDefault");

taxSwitch.addEventListener("click", function () {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});
