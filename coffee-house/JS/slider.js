const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const cardLeft = document.querySelector(".favorites__card_left");
const cardCenter = document.querySelector(".favorites__card_center");
const cardRight = document.querySelector(".favorites__card_right");
const carusel = document.querySelector(".favorites__carusel");
const slider = document.querySelector(".favorites__slider");

let slide = 1;
let activeBar = bar1; 
let interval = null;
let timeout = null;
let sliderInterval = null;

function moveLeft() {
    slider.classList.remove("slide__right");
    slider.classList.remove("slide__center");
    setBar();
}

function moveCenter() {
    slider.classList.remove("slide__right");
    slider.classList.add("slide__center");
    setBar();
}

function moveRight() {
    slider.classList.remove("slide__center");
    slider.classList.add("slide__right");
    setBar();
}

function setBar(){
    interval = setInterval(()=>{
        activeBar.style.width = activeBar.clientWidth + 4 + "px";
    },500)
}
setBar();


function forward() {
    clearInterval(interval);
    clearInterval(sliderInterval);
    clearTimeout(timeout);
    if(slide === 1) {
        moveCenter();
        bar1.style.width = "0px";
        activeBar = bar2;
        slide = 2;
    } else if (slide === 2) {
        moveRight();
        bar2.style.width = "0px";
        activeBar = bar3;
        slide = 3;
    } else {
        moveLeft();
        bar3.style.width = "0px";
        activeBar = bar1;
        slide = 1; 
    }
    sliderInterval = setInterval(forward, 5000);
}

function back() {
    clearInterval(interval);
    clearInterval(sliderInterval);
    clearTimeout(timeout);
    if(slide === 1) {
        moveRight();
        bar1.style.width = "0px";
        activeBar = bar3;
        slide = 3;
    } else if (slide === 2) {
        moveLeft();
        bar2.style.width = "0px";
        activeBar = bar1;
        slide = 1;
    } else {
        moveCenter();
        bar3.style.width = "0px";
        activeBar = bar2;
        slide = 2; 
    }
    sliderInterval = setInterval(forward, 5000);
}

function onCarusel(){
    clearInterval(interval);
    clearInterval(sliderInterval);
}

function offCarusel(){
    let reminder = 5000 - (activeBar.clientWidth * 5000 / 40);
    timeout = setTimeout(()=>{
        forward();
    }, reminder)
    setBar();
}

carusel.addEventListener("mouseenter", onCarusel);
carusel.addEventListener("mouseleave", offCarusel);

arrowRight.addEventListener("click", forward);
arrowLeft.addEventListener("click", back);

sliderInterval = setInterval(forward, 5000);
