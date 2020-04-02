'use string'

function cart() {
  const basket = document.querySelector('.cart__products');
  const products = document.querySelectorAll('.product');


  for(const product of products) {
    product.addEventListener('click', doCart); 
  };

  function doCart(event) {
    const btn = event.target;
    const quantity = btn.closest('.product').querySelector('.product__quantity-value');
    let quantityNumber = Number(quantity.textContent);
    if( btn.classList.contains('product__quantity-control_dec') ) {
      if( quantityNumber === 0 ) {
        return false;
      }
      quantityNumber -= 1;
      quantity.textContent = quantityNumber;
    } else if( btn.classList.contains('product__quantity-control_inc') ) {      
      quantityNumber += 1;
      quantity.textContent = quantityNumber;
    } else if( btn.classList.contains('product__add') ) { 
        const productId = btn.closest('.product').dataset.id;
        let cartProducts = Array.from(basket.querySelectorAll('cart__product'));
        const index = cartProducts.findIndex( (el) => {
          el.dataset.id == productId
        });
        console.log(index);
        if( index >= 0 ) {
          const quantityBasket = cartProducts[index].querySelector('.cart__product-count');
          let quantityBasketNumber = Number(quantityBasket.textContent);
          quantityBasketNumber += quantityNumber;
          quantityBasket.textContent = quantityBasketNumber;
        } else {    
          const productInBasket = document.createElement('div');
          productInBasket.dataset.id = productId;
          productInBasket.classList.add('cart__product');
          const imgSrc = btn.closest('.product').querySelector('.product__image').getAttribute('src');
          productInBasket.innerHTML += `
            <img class="cart__product-image" src="${imgSrc}">
            <div class="cart__product-count">${quantity.textContent}</div>
          `;
          basket.appendChild(productInBasket);
      };
    };
  };
};

document.addEventListener('DOMContentLoaded', cart);




  // class Product {
  //   constructor(element) {
  //     this.name = element.querySelector('.product__title').textContent.trim();
  //     this.img = element.querySelector('.product__image').getAttribute('src');
  //     this.id = element.dataset.id;
  //     this.quantity = element.querySelector('.product__quantity-value').textContent.trim();
  //   }
  // }

  // let productsObj = [];

  // for (const product of products) {
  //   const productObj = new Product(product);
  //   productsObj.push(productObj);
  // };
  // console.log(productsObj);