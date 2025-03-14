const storege = JSON.parse(localStorage.getItem('carts')) || [];
const cart = document.querySelector('.cart');
const spanCount = document.querySelector('.spanCount');
const spanPrice = document.querySelector('.spanPrice');
spanCount.textContent = storege.length;


function quantityprice() {
    let totalprice = storege.reduce((prev, item) => {
        return prev + item.price * item.quantity;
    },0)

    spanPrice.textContent = `${totalprice}$`;
}

function rendercart() {
    cart.innerHTML = ``;
    if(storege) {
        storege.forEach((el, index) => {
            let {id, img, title, price, quantity = 1} = el;
            let newcart = document.createElement('div');
            newcart.setAttribute('class', 'newcart');
            newcart.innerHTML = `
            <div class="newcart" id="${id}">
            <img class="imgcart" src="${img}" alt="">
            <p class="titlecart">${title}</p>
            <p class="pricecart">${price * quantity}$</p>
            <div class="counts">
               <span data-index="${index}" class="spanMinus">-</span>
               <span class="spancount">${quantity}</span> 
               <span data-index="${index}" class="spanPlus">+</span>
            </div>
            <button data-index="${index}" class="btclosed">X</button>
            </div>
            `
         cart.append(newcart);
        })
    }
    quantityprice();
}; 

cart.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if(e.target.classList.contains('spanPlus')) {
        storege[index].quantity++;
    }
    else if (e.target.classList.contains('spanMinus')) {
        storege[index].quantity--;
        if(storege[index].quantity <= 0) {
            storege.splice(index, 1);
            location.reload();
        }
    }
    localStorage.setItem('carts', JSON.stringify(storege));
    rendercart();
})

rendercart();
                         
                        //  Удаленик товаров с корзины

document.onclick = (event) => {
    const cartPosition = event.target.getAttribute('data-index');
    if(event.target.classList.contains('btclosed') && cartPosition !== null) {
        storege.splice(cartPosition, 1);
        localStorage.setItem('carts', JSON.stringify(storege));
        rendercart();
        location.reload();
    }
};
