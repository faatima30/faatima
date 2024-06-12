// header effect when scrolling
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// service section -- modal
const servicemodals = document.querySelectorAll(".service-modal");
const learnmorebtns = document.querySelectorAll(".learn-more-btn");
const modalclosebtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalclick) {
  servicemodals[modalclick].classList.add("active");
};
learnmorebtns.forEach((learnmorebtn, i) => {
  learnmorebtn.addEventListener("click", () => {
    modal(i);
  });
});

modalclosebtns.forEach((modalclosebtn) => {
  modalclosebtn.addEventListener("click", () => {
    servicemodals.forEach((modalview) => {
      modalview.classList.remove("active");
    });
  });
});
// portfolio section modal
const portfoliomodals = document.querySelectorAll(".portfolio-modal");
const imgcards = document.querySelectorAll(".img-card");
const portfoliomodalclosebtns = document.querySelectorAll(
  ".portfolio-close-btn"
);

var portfoliomodal = function (modalclick) {
  portfoliomodals[modalclick].classList.add("active");
};
imgcards.forEach((imgcard, i) => {
  imgcard.addEventListener("click", () => {
    portfoliomodal(i);
  });
});

portfoliomodalclosebtns.forEach((portfoliomodalclosebtn) => {
  portfoliomodalclosebtn.addEventListener("click", () => {
    portfoliomodals.forEach((portfoliomodalview) => {
      portfoliomodalview.classList.remove("active");
    });
  });
});
// my clients
// var swiper = new Swiper(".client-swiper", {
//   slidesPreView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// scroll to  top
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
  scrollToTopBtn.classList.toggle("active", window.scrollY > 10);
});
scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// // menu items active on page scroll
// window.addEventListener("scroll", () => {
// const sections=document.querySelectorAll("section")
// const scrollY=window.pageYOffset;

// sections.forEach(current=>{
//   let sectionHeight=current.offsetHeight
//   let sectionTop=current.offsetTop-50
//   let id=current.getAttribute("id")

//   if(scrollY>sectionTop&&scrollY<=sectionTop+sectionHeight){
//     document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active")
//   }
//   else{
//     document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active")

//   }
// })
// })

// theme btn
const themebtn = document.querySelector(".theme-btn");

themebtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themebtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  document.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themebtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
