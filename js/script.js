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
// responsive nav toggle

const menubtn = document.querySelector(".nav-menu-btn");
const closebtn = document.querySelector(".nav-close-btn");
const navogation = document.querySelector(".navigation");
const navitems = document.querySelectorAll(".nav-items a");

menubtn.addEventListener("click", () => {
  navogation.classList.add("active");
});

closebtn.addEventListener("click", () => {
  navogation.classList.remove("active");
});

navitems.forEach((item) => {
  item.addEventListener("click", () => {
    navogation.classList.remove("active");
  });
});

// scroll animation

// common reavel options animations

ScrollReveal({
  // reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

//target animation reveal

ScrollReveal().reveal(".home .info h2, .section-title", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".home .info h3, .home .info p,.about-info .btn", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".home .info .btn", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".media-icons i,.contact-left li", {
  delay: 500,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".about  .decs, .copyright", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".about, .professional-list li ", {
  delay: 500,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(
  ".skills-decs, .service-decs,.contact-card,.client-swiper,.contact left h2 ",
  { delay: 700, origin: "left" }
);
ScrollReveal().reveal(
  ".exprience-card, .service-card, .education, .portfolio .img-card",
  { delay: 800, origin: "bottom", interval: 200 }
);
ScrollReveal().reveal("footer .me", {
  delay: 500,
  origin: "top",
  interval: 200,
});
