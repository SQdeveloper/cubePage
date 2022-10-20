const button = document.querySelectorAll(".question__img");
const response = document.querySelectorAll(".question__response");
const titleQuestion = document.querySelectorAll(".question__question");
const groupQuestion = document.querySelectorAll(".group__question");
const questionImg = document.querySelectorAll(".question__img");
const cardImg = document.querySelectorAll(".tiposCubos__card-img");
const vectorImgGan = document.querySelector(".vector__img-gan");
const text_primer_vector = document.querySelector(".vector__text");
const title = document.querySelectorAll(".title");
const subFooter = document.querySelectorAll(".groupImg-sub");
const buttonUp = document.querySelector(".img__up");
let flag = [0,0,0,0];
let distancia = [];
let distanciaTitle = [];
let distanciaQuestion = [];
let distanciaFooter = [];

//Evento para el boton subir
buttonUp.addEventListener("click", ()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
})

//Evento scroll para realizar animaciones para tener pagina dinamica
window.addEventListener("scroll", ()=>{
    //Condicional para que la flecha up se oculte
    if(this.scrollY == 0){buttonUp.style.opacity = "0";}
    else {buttonUp.style.opacity = "1"}
  
    let heightWindow = window.innerHeight;//Altura de la pagina
    //Ciclo para agregar animaciones a los 6 cards(tipos de cubos)
    for(let i=0; i<6; i++) {
        distancia[i] = cardImg[i].getBoundingClientRect().top;
    
        if(distancia[i] <= heightWindow/1.3){
            cardImg[i].classList.add("tiposCubos__card-img-active");
        }
    }
    //Distancia entre la parte superior del elemento con la parte superior de la pagina
    distanciatextGan = text_primer_vector.getBoundingClientRect().top;
    if(distanciatextGan <= heightWindow){
        vectorImgGan.classList.add("vector__img-gan-active");
        text_primer_vector.style.animation = "bounce 2s";
    }
    //Ciclo para agregar animación a los titulos flecha
    for(let i=0; i<3; i++){
        distanciaTitle[i] = title[i].getBoundingClientRect().top;
        if(distanciaTitle[i] <= heightWindow){
            title[i].classList.add("title-active");
        }
        //En esta sección agregamos animación para las redes sociales del footer
        distanciaFooter[i] = subFooter[i].getBoundingClientRect().top;
        if(distanciaFooter[i] <= heightWindow/1.3){
            subFooter[i].classList.add("groupImg-sub-active");
        }
        else {
            subFooter[i].classList.remove("groupImg-sub-active");
        }
    }
    //Ciclo para animar la seccion de preguntas frecuentes
    for(let i=0; i<4; i++){
        distanciaQuestion[i] = groupQuestion[i].getBoundingClientRect().top;
        if(distanciaQuestion[i] <= heightWindow){
            groupQuestion[i].classList.add("group__question-active");
        }    
    }
})

//Ciclo para animar el camibio de imagen de signo más a menos, y los cards de la sección preguntas frecuentes
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

//Damos click para que la primera pregunta(card) de la sección preguntas frecuntes este activa.
button[0].click();

//Configuración del slider
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
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        440: {
            slidesPerView: 2
        },
        860: {
            slidesPerView: 3
        }
    }
});