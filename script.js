const cartset = document.querySelectorAll('.card');
const cartStorege = JSON.parse(localStorage.getItem('carts')) || [];
const spanCount = document.querySelector('.spanCount');
spanCount.textContent = cartStorege.length;

cartset.forEach(el => {
    let id = el.id;
    let img = el.childNodes[1].attributes.src.textContent;
    let title = el.childNodes[3].textContent;
    let pris = el.childNodes[5].textContent;
    let btaddCard = el.childNodes[7];
    let price = parseInt(pris.replace(/[^\d]/, ""), 10);
btaddCard.addEventListener('click', () => {
    let cart = {id, img, title, price, quantity: 1};
    const cartStorege = localStorage.getItem('carts') || "[]";
    let carts = JSON.parse(cartStorege);
const existCart = carts.findIndex((item) => item.id === id);
    if(existCart !== -1) {
        alert('Товар уже добавлен в коризину!')
    }
    else {
        carts.push(cart);
    }  
    localStorage.setItem('carts', JSON.stringify(carts));
    location.reload(); 
})
});

                // Навигация по сайту

const product = document.querySelector('.product');

product.addEventListener('click', () => {
    document.querySelector('.product-section').scrollIntoView({
        behavior: `smooth`,
        block: `start`
    })
});

                    //    Показываеть больше товаров

const btseeMore = document.querySelector('.btseeMore');
let visibleCards = 8; // Сколько карточек показывать изначально
const increment = 8; // Количество карточек, добавляемых при каждом клике

function updateCards() {
    cartset.forEach((item, index) => {
        if (index < visibleCards) {
            item.classList.remove('hiden'); // Показываем карточку
        } else {
            item.classList.add('hiden'); // Скрываем карточку
        }
    });

    if (visibleCards >= cartset.length) {
        btseeMore.innerHTML = 'Show less';
    } else {
        btseeMore.innerHTML = 'Show more';
    }
}

// Обработчик для кнопки
btseeMore.addEventListener('click', () => {

    if (visibleCards >= cartset.length) {
        visibleCards = 8; // Если все карточки показаны, оставляем только 8
    } else {
        visibleCards += increment; // Иначе показываем больше карточек
    }
    updateCards();
});

// Изначально показываем только часть карточек
updateCards();


            //    Popup-Cart

const cardset = document.querySelectorAll('.card');
const closPopup = document.querySelector('.closPopup');            
const imgPopup = document.querySelector('.imgPopup');
const titlePopup = document.querySelector('.titlePopup');
const pricePopup = document.querySelector('.pricePopup');

window.addEventListener('DOMContentLoaded', () => {
 
    cardset.forEach(el => {
        let openpopup = el.childNodes[1];
        let img = el.childNodes[1].attributes.src.textContent;
        let title = el.childNodes[3].textContent;
        let pris = el.childNodes[5].textContent;     
openpopup.addEventListener('click', () => {
        imgPopup.src = img;
        titlePopup.textContent = title;
        pricePopup.textContent = pris;

document.querySelector('.popupbg').classList.add('popupbgclass');
document.querySelector('html').classList.add('noscroll');

})  

})
closPopup.addEventListener('click', () => {
    document.querySelector('.popupbg').classList.remove('popupbgclass');
    document.querySelector('html').classList.remove('noscroll');
})

});

