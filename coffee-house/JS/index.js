import products from './products.js';
let product = products.coffee;

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
}
refresh.addEventListener("click", loadCards);

window.addEventListener("resize", function(){
    if(this.window.innerWidth < 770) {
        cards.forEach((item) => {
            item.classList.remove("card__visible"); // удалить "подгруженные" карточки
        })
        refresh.classList.remove("main__refresh_passive"); // вернуть кнопку подгрузки
    }
})