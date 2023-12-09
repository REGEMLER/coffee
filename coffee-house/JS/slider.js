const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const carusel = document.querySelector(".favorites__carusel");
const slider = document.querySelector(".favorites__slider");

let slide = 1;
let activeBar = bar1; 
let interval = null;
let timeout = null;
let sliderInterval = null;

carusel.addEventListener("contextmenu", (e) => {
    e.stopPropagation();
    e.preventDefault();
});
carusel.addEventListener("dragstart", (e) => {
    e.stopPropagation();
    e.preventDefault();
});
carusel.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    e.preventDefault();
    stopTimer();
});
carusel.addEventListener("mouseup", (e) => {
    e.stopPropagation();
    e.preventDefault();
    stopTimer();
});

function clear() {
    clearInterval(interval);
    clearInterval(sliderInterval);
    clearTimeout(timeout);
    bar1.style.width = "0px";
    bar2.style.width = "0px";
    bar3.style.width = "0px";
}

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
        activeBar.style.width = activeBar.clientWidth + 2 + "px";
    },250)
}
setBar();


function forward() {
    clear();
    if(slide === 1) {
        moveCenter();
        activeBar = bar2;
        slide = 2;
    } else if (slide === 2) {
        moveRight();
        activeBar = bar3;
        slide = 3;
    } else {
        moveLeft();
        activeBar = bar1;
        slide = 1; 
    }
    sliderInterval = setInterval(forward, 5000);
}

function back() {
    clear();
    if(slide === 1) {
        moveRight();
        activeBar = bar3;
        slide = 3;
    } else if (slide === 2) {
        moveLeft();
        activeBar = bar1;
        slide = 1;
    } else {
        moveCenter();
        activeBar = bar2;
        slide = 2; 
    }
    sliderInterval = setInterval(forward, 5000);
}

function stopTimer() {
    clearInterval(interval);
    clearInterval(sliderInterval);
}

function startTimer() {
    let reminder = 5000 - (activeBar.clientWidth * 5000 / 40);
    timeout = setTimeout(()=>{
        forward();
    }, reminder)
    setBar();
}

function onCarusel(){
    if(window.innerWidth < 640) return;
    stopTimer();
}

function offCarusel(){
    if(window.innerWidth < 640) return;
    startTimer();
}

carusel.addEventListener("mouseenter", onCarusel);
carusel.addEventListener("mouseleave", offCarusel);

arrowRight.addEventListener("click", forward);
arrowLeft.addEventListener("click", back);

sliderInterval = setInterval(forward, 5000);

let firstPoint = 0;
let endPoint = 0;

function touchStart(event) {
    if(window.innerWidth > 640) return;
    event.preventDefault();
    firstPoint = event.touches[0].pageX;
    endPoint = 0;
    stopTimer();
}

function touchMove(event) {
    endPoint = event.touches[0].pageX;
}

function touchEnd() {
    if(window.innerWidth > 640) return;
    let result = Math.abs(endPoint - firstPoint);
    if(result < 10 || endPoint === 0) {
        startTimer()
    } else {
        if ( firstPoint > endPoint ) {
            forward();
        } else {
            back();
        }
    }
}
carusel.addEventListener("touchstart", touchStart);
carusel.addEventListener("touchmove", touchMove);
carusel.addEventListener("touchend", touchEnd);