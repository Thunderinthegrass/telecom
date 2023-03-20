// function scrollToLink() {
//   const anchors = document.querySelectorAll('a[href*="#"]');

//   for (let anchor of anchors) {
//     anchor.addEventListener("click", function (event) {
//       event.preventDefault();
//       const blockID = anchor.getAttribute("href");
//       document.querySelector("" + blockID).scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     });
//   }
// }
// scrollToLink();

function cityPopup() {
  const cityBtn = document.querySelector('.header__city-btn');
  const cityPopup = document.querySelector('.city__popup');
  
  cityBtn.addEventListener('click', () => {
    cityPopup.classList.toggle('d-none');
  })
}
cityPopup();



