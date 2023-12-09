import products from './products.js';
let product = products.coffee;
let isRefreshed = false; 

const mainRadios = document.querySelector(".main__buttons");
const cards = [...document.querySelectorAll(".main__card")];
const refresh = document.querySelector(".main__refresh");

function setCategory(index) {
    const card = document.querySelector(`.main__card${index + 1}`);
    card.id = product[index].id;
    const img = card.querySelector(".card__img img");
    img.src = product[index].src;
    img.alt = product[index].name;
    const title = card.querySelector(".card__subtitle");
    title.textContent = product[index].name;
    const text = card.querySelector(".card__text");
    text.textContent = product[index].description;
    const price = card.querySelector(".card__price");
    price.textContent = product[index].price;
} 

function changeCategory(event) {
    if(event.target.name === "radio") {
        isRefreshed = false;
        document.body.classList.add("blur");
        setTimeout(()=> {
            document.body.classList.remove("blur");   
        }, 500)
        product = products[event.target.value]; 
        if(product.length < cards.length) {
            refresh.classList.add("main__refresh_passive");
        } else {
            refresh.classList.remove("main__refresh_passive"); 
        }
        cards.forEach((item, index) => {
            item.classList.remove("card__visible"); // удалить "подгруженные" карточки
            if(product.length <= index) {
                item.classList.add("card__invisible"); // если чаи, чтобы не выводило 8 карточек
                return;
            }
            item.classList.remove("card__invisible");
            setCategory(index);
        })
    }

}

mainRadios.addEventListener("click", changeCategory);

function loadCards() {
    cards.forEach(item => {
        item.classList.add("card__visible");
    })
    refresh.classList.add("main__refresh_passive");
    isRefreshed = true;
}
refresh.addEventListener("click", loadCards);

window.addEventListener("resize", function(){
    if(this.window.innerWidth < 770 && !isRefreshed) {
        cards.forEach((item) => {
            item.classList.remove("card__visible"); // удалить "подгруженные" карточки
        })
        if(product.length > 4) {
            refresh.classList.remove("main__refresh_passive"); // вернуть кнопку подгрузки
        }
    }
})


// modal

const grid = document.querySelector(".main__grid");
const modal = document.querySelector(".modal");

function setModal(product) {
    modal.id = product.id;

    const img = modal.querySelector(".modal__img img");
    img.src = product.src;
    img.alt = product.name;

    const title = modal.querySelector(".modal__title");
    title.textContent = product.name;

    const text = modal.querySelector(".modal__text");
    text.textContent = product.description;

    const price = modal.querySelector(".modal__price");
    price.textContent = "$ " + product.price;

    const s = document.getElementById("S");
    s.value = 0;
    s.checked = true;
    const modalLabel1 = modal.querySelector(".modal__button1 .modal__label");
    modalLabel1.textContent = product.sizes.s;

    const m = document.getElementById("M");
    m.value = 0.5;
    m.checked = false;
    const modalLabel2 = modal.querySelector(".modal__button2 .modal__label");
    modalLabel2.textContent = product.sizes.m;

    const l = document.getElementById("L");
    l.value = 1;
    l.checked = false;
    const modalLabel3 = modal.querySelector(".modal__button3 .modal__label");
    modalLabel3.textContent = product.sizes.l;

    const additives1 = document.getElementById("additives1");
    additives1.value = product.additives.one;
    additives1.checked = false;
    const modalLabel4 = modal.querySelector(".modal__button4 .modal__label");
    modalLabel4.textContent = product.additives.one;

    const additives2 = document.getElementById("additives2");
    additives2.value = product.additives.two;
    additives2.checked = false;
    const modalLabel5 = modal.querySelector(".modal__button5 .modal__label");
    modalLabel5.textContent = product.additives.two;

    const additives3 = document.getElementById("additives3");
    additives3.value = product.additives.three;
    additives3.checked = false;
    const modalLabel6= modal.querySelector(".modal__button6 .modal__label");
    modalLabel6.textContent = product.additives.three;
}

function showModal(event){
    const clickedCard = event.target.closest('.main__card');
    if(!clickedCard) return;
    const id = clickedCard.id;
    const currentCard = product.find(item => item.id === id);
    document.body.style.overflowY = "hidden";
    setModal(currentCard);
    modal.classList.remove("modal_passive");
}

let checkedRadio = Number([...document.getElementsByName("size")].find(item => item.checked === true).value); //Нужно чтобы знать, предыдущий размер

function onModal(event) {
    const card = event.target.closest('.modal__card');
    if(!card || event.target.tagName === "BUTTON") {
        document.body.style.overflowY = "";
        modal.classList.add("modal_passive");
        return;
    }
    const priceElement = modal.querySelector(".modal__price")
    let price = +priceElement.textContent.slice(1).trim(2);
    if(event.target.name === "additives"){
        if(event.target.checked){
            price = (price + 0.5).toFixed(2);
        } else {
            price = (price - 0.5).toFixed(2); 
        }
        priceElement.textContent = "$ " + price;
    }
    if(event.target.name === "size"){
        price = (price + +event.target.value - checkedRadio).toFixed(2);
        priceElement.textContent = "$ " + price;
        checkedRadio = Number(event.target.value);
    }
}

grid.addEventListener("click", showModal);
modal.addEventListener("click", onModal);