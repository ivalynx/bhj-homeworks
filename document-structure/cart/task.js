'use strict'

class GoodsBasket {
  constructor() {
    this.productsInBasket = [];
  }
  add(id, title, src, quantity) {
    if(quantity === 0) {
      return alert('You cannot add 0 product');
    }
    const indexFound = this.productsInBasket.findIndex( product => Object.values(product).includes(id) ); 
    if( indexFound >= 0 ) {
      this.productsInBasket[indexFound].quantity += quantity;
      const productsInBasketEl = document.querySelectorAll('.cart__product');
      productsInBasketEl[indexFound].querySelector('.cart__product-count').textContent = this.productsInBasket[indexFound].quantity;
    } else {
      this.productsInBasket.push({id, title, src, quantity});
      const basket = document.querySelector('.cart__products');
      const productInBasket = document.createElement('div');
      productInBasket.dataset.id = id;
      productInBasket.classList.add('cart__product');        
      productInBasket.innerHTML += `
        <img class="cart__product-image" src="${src}">
        <div class="cart__product-count">${quantity}</div>
      `;
      basket.appendChild(productInBasket);
    };
  };
};

function cart() {
  const goodsBasket = new GoodsBasket();
  const products = document.querySelectorAll('.product');

  for(const product of products) {
    product.addEventListener('click', doCart); 
  };

  function doCart(event) {
    const btn = event.target;
    const quantity = btn.closest('.product').querySelector('.product__quantity-value');
    let quantityNumber = Number(quantity.textContent);
    if( btn.classList.contains('product__quantity-control_dec') ) {
      if( quantityNumber === 1 ) {
        return false;
      }
      quantityNumber -= 1;
      quantity.textContent = quantityNumber;
    } else if( btn.classList.contains('product__quantity-control_inc') ) {      
      quantityNumber += 1;
      quantity.textContent = quantityNumber;
    } else if( btn.classList.contains('product__add') ) { 
      const id = btn.closest('.product').dataset.id;
      const title = btn.closest('.product').querySelector('.product__title').textContent.trim();
      const src = btn.closest('.product').querySelector('.product__image').getAttribute('src');
      goodsBasket.add(id, title, src, quantityNumber);
      quantity.textContent = 1;
    };
  };
};

document.addEventListener('DOMContentLoaded', cart);