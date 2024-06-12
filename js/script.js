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
