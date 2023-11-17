// splt({
//   reveal: true
// });

// anime({
//   targets: '.reveal',
//   translateY: [0, 20],
//   direction: 'alternate',
//   loop: 1,
//   delay: anime.stagger(25),
//   easing: 'cubicBezier(.71,-0.77,.43,1.67)'
// });
let items = document.querySelectorAll(".design-work .work-item");
console.log(items[1]);
let itemTitle = document.querySelectorAll(".text-box  .title");
let itemDesc = document.querySelectorAll(".text-box  .desc");

Array.from(items).forEach((item, index) => {
  item.addEventListener("mouseover", function () {
    itemTitle[index].classList.add("animate__animated");
    itemTitle[index].classList.add("animate__fadeInUp");
    itemDesc[index].classList.add("animate__animated");
    itemDesc[index].classList.add("animate__fadeInUp");
  });
  item.addEventListener("mouseout", function () {
    itemTitle[index].classList.remove("animate__animated");
    itemTitle[index].classList.remove("animate__fadeInUp");
    itemDesc[index].classList.remove("animate__animated");
    itemDesc[index].classList.remove("animate__fadeInUp");
  });
});
// for (const item of items) {
//   // item.addEventListener("mouseover", function () {
//   //   txtAnimation.classList.add("animate__animated");
//   //   txtAnimation.classList.add("animate__fadeInUp");
//   // });
//   let txtAnimation = document.querySelectorAll(".text-box");
//   item.addEventListener("mouseover", function () {
//     for (var i = 0; i < txtAnimation.length; i++) {
//       //       txtAnimation[i].classList.add("animate__animated");
//       //       txtAnimation[i].classList.add("animate__fadeInUp");
      
//       //     }
//     // let txtAnimation = document.querySelectorAll(".work-item  .text-box  .title");
//     // console.log(txtAnimation);
//   });
//   item.addEventListener("mouseout", function () {
//     for (const txt of txtAnimation) {
//       txt.classList.remove("animate__animated");
//       txt.classList.remove("animate__fadeInUp");
//       console.log(txt.className);
//     }
//   });

// }