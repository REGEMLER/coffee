const header = document.getElementById("header");
const headerLogo = document.getElementById("headerLogo");
const headerNav = document.getElementById("headerNav");
const burger = document.getElementById("burger");
const line1 = document.querySelector(".burger__item1");
const line2 = document.querySelector(".burger__item2");
let isOpen = false; 

function show(event) {
    event.stopPropagation();
    if(isOpen) {
        hide();
        return;
    }
    document.body.style.overflowY = "hidden";
    line1.classList.add("burger__item1_active");
    line2.classList.add("burger__item2_active");
    headerNav.classList.add("header__nav_active");
    header.classList.add("header__container_active");
    isOpen = true;
}

function close(event) {
    const li = event.target.closest('li');
    if (!li) return; 
    hide();
}

function hide() {
    if(!isOpen) return;
    document.body.style.overflowY = "";
    line1.classList.remove("burger__item1_active");
    line2.classList.remove("burger__item2_active");
    headerNav.classList.remove("header__nav_active");
    header.classList.remove("header__container_active");
    isOpen = false;
}

burger.addEventListener("click", show);
headerNav.addEventListener("click", close);
window.addEventListener("resize", function(){
    if(this.window.innerWidth > 770) {
        hide();
    }
})