
let typeI = document.querySelector(".visual .empthy .i");
let intro = document.querySelector(".intro ");
// 리사이징 감지 객체 인스턴스 observer선언
const observer = new ResizeObserver(() => {
  intro.style.clipPath = `inset(${(window.innerHeight - typeI.clientHeight) / 2}px ${(window.innerWidth - typeI.clientWidth) / 2.024}px)`;
});


//내려오면 헤더 색상 바뀌게
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let top = window.scrollY
    || window.scrollX
    || document.documentElement.scrollTop
    || document.body.scrollTop;
  if (top > window.innerHeight * 1.9) {
    header.style.color = "#fff";
  } else {
    header.style.color = "#111";
  };

  if (top > 10) {
    typeI.classList.add("active");
    intro.classList.add("active");
  } else {
    typeI.classList.remove("active");
    intro.classList.remove("active");
    intro.opacity = `0`;
  }
});

// window.addEventListener("wheel", function (e) {
//   // 변수 i를 인자로 받아 observer 콜링 
//   observer.observe(typeI);
//   // 마우스 휠 방향 감지하여 변수 i 가로세로 변경, classList로 관리할 것
//   let wheel = e.wheelDeltaY;
//   if (wheel > 0) {
//     typeI.classList.remove("active");
//     intro.classList.remove("active");
//     intro.opacity = `0`;
//   }
//   else {
//     typeI.classList.add("active");
//     intro.classList.add("active");

//   }
// });

//design work
let items = document.querySelectorAll(".design-work .work-item");
let itemTitle = document.querySelectorAll(".text-box .title");
let itemDesc = document.querySelectorAll(".text-box .desc");
let designWork = document.querySelector(".design-work");
let designTitle = document.querySelector(".design-work .inner > .title ");
let designInner = document.querySelector(".design-work .inner");
let designDown = document.querySelector(".design-work .down");
let designModal = document.querySelector(".design-work .modal");


Array.from(items).forEach((item, index) => {
  let modalInner = document.querySelectorAll(".design-work .modal .modal-inner");
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
  item.addEventListener("click", function () {
    designModal.style.display = `block`;
    body.style.overflow = 'hidden';
    modalInner[index].style.display = `block`;
  });

  designModal.addEventListener("click", function () {
    designModal.style.display = `none`;
    body.style.overflow = 'auto';
    modalInner[index].style.display = `none`;
  });
});


designDown.addEventListener("click", (e) => {
  designInner.classList.toggle("on");
  designDown.classList.toggle("on");
});


//모달 오픈
const body = document.querySelector('body');
let contentWrap = document.querySelector(".content-wrap");
let myro = document.querySelector(".concept");
let modal = document.querySelector(".modal");
myro.addEventListener("click", () => {
  modal.style.display = `block`;
  body.style.overflow = 'hidden';
});
modal.addEventListener("click", () => {
  modal.style.display = `none`;
  body.style.overflow = 'auto';

});

//퍼블리시 워크
let web = document.querySelector(".web-work");
let webItems = document.querySelectorAll(".web-work .work-item");
let webImg = document.querySelectorAll(".web-work .work-item .content .img-box");
Array.from(webItems).forEach((webItem, index) => {
  webItem.addEventListener("mouseover", function () {
    webImg[index].classList.add("on");
  });
  webItem.addEventListener("mouseout", function () {
    webImg[index].classList.remove("on");
  });
});