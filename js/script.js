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
