
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
  if (top > window.innerHeight * 2) {
    header.style.color = "#fff";
  } else {
    header.style.color = "#111";
  };
});

window.addEventListener("wheel", function (e) {
  // 변수 i를 인자로 받아 observer 콜링 
  observer.observe(typeI);
  // 마우스 휠 방향 감지하여 변수 i 가로세로 변경, classList로 관리할 것
  let wheel = e.wheelDeltaY;
  if (wheel > 0) {
    typeI.classList.remove("active");
    intro.classList.remove("active");
    // intro.style.transform = `translate(6.56vw, -1.63vh)`;
    intro.opacity = `0`;
  }
  else {
    typeI.classList.add("active");
    intro.classList.add("active");
    // intro.style.transform = `translate(0, 0)`;

  }
});

//design work
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

//모달  오픈
const body = document.querySelector('body');
let contentWrap = document.querySelector(".content-wrap");
let web = document.querySelector(".web-work");
let myro = document.querySelector(".concept");
let modal = document.querySelector(".modal");
myro.addEventListener("click", () => {
  // contentWrap.style.position = `stactic`;
  // web.style.position = `fixed`;
  // contentWrap.style.top = `-30%`;
  modal.style.display = `block`;
  body.style.overflow = 'hidden';
});
modal.addEventListener("click", () => {
  modal.style.display = `none`;
  body.style.overflow = 'auto';

});
