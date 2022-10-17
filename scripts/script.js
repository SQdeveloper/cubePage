const button = document.querySelectorAll(".question__img");
const response = document.querySelectorAll(".question__response");
const titleQuestion = document.querySelectorAll(".question__question");
const groupQuestion = document.querySelector(".group__question");
const questionImg = document.querySelectorAll(".question__img");
let flag = [0,0,0,0];

for(let i=0; i<4; i++) {
    button[i].addEventListener("click", ()=>{
        response[i].classList.toggle("question__response-active");
        titleQuestion[i].classList.toggle("question__question-active");
        if(flag[i]==0){
            questionImg[i].src = "images/boton-menos.png";
            flag[i] = 1;
        }
        else{
            questionImg[i].src = "images/mas.png";
            flag[i] = 0;
        }
    });
}

button[0].click();

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});