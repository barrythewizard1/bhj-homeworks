document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');
  const cartProductsContainer = document.querySelector('.cart__products');

  products.forEach(function (product) {
      const quantityControls = product.querySelector('.product__quantity-controls');
      const quantityValue = product.querySelector('.product__quantity-value');
      const addToCartButton = product.querySelector('.product__add');

      addToCartButton.addEventListener('click', function () {
          const productId = product.getAttribute('data-id');
          const imageSrc = product.querySelector('.product__image').getAttribute('src');
          const quantity = parseInt(quantityValue.innerText, 10);

          addToCart(productId, imageSrc, quantity);
      });

      quantityControls.addEventListener('click', function (event) {
          if (event.target.classList.contains('product__quantity-control')) {
              const delta = event.target.classList.contains('product__quantity-control_inc') ? 1 : -1;
              updateQuantity(delta);
          }
      });

      function updateQuantity(delta) {
          let currentQuantity = parseInt(quantityValue.innerText, 10);
          currentQuantity += delta;
          if (currentQuantity < 1) {
              currentQuantity = 1;
          }
          quantityValue.innerText = currentQuantity;
      }

      function addToCart(productId, imageSrc, quantity) {
          const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

          if (cartProduct) {
              const cartProductCount = cartProduct.querySelector('.cart__product-count');
              const newQuantity = parseInt(cartProductCount.innerText, 10) + quantity;
              cartProductCount.innerText = newQuantity;
          } else {
              const newCartProduct = document.createElement('div');
              newCartProduct.classList.add('cart__product');
              newCartProduct.setAttribute('data-id', productId);

              const cartProductImage = document.createElement('img');
              cartProductImage.classList.add('cart__product-image');
              cartProductImage.setAttribute('src', imageSrc);
              newCartProduct.appendChild(cartProductImage);

              const cartProductCount = document.createElement('div');
              cartProductCount.classList.add('cart__product-count');
              cartProductCount.innerText = quantity;
              newCartProduct.appendChild(cartProductCount);

              cartProductsContainer.appendChild(newCartProduct);
          }
      }
  });
});
