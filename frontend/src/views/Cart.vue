<template>
  <div class="cart">
    <!-- Cart Top  -->
    <div class="cart__inform d-flex flex-column align-items-center justify-content-center">
        <img src="../assets/imgs/logo_2.png" alt="">
        <h1 class="cart__inform--title">Cart</h1>
        <div class="navigation mt-2">
          <p class="fw-bold">Home</p>
          <img src="../assets/icons/right.svg" alt="">
          <p>Cart</p>
        </div>
    </div>
    <!-- Cart Content  -->
     <div class="container">
       <div class="cart__content">
        <div class="cart__content-left">
          <table style="width: 100%;">
            <tr class="cart__content-head">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
            <tr class="cart__content-data">
              <td>
                <div class="cart__content-product">
                  <img src="../assets/imgs/product_img.png" alt="" class="cart__product-img">
                  <p class="cart__product-name">Asgaard sofa</p>
                </div>
              </td>
              <td class="cart__price">Rs. 250,000.00</td>
              <td class="cart__quantity-container">
                <div class="cart__quantity">1</div>
              </td>
              <td class="cart__left-subtotal">Rs. 250,000.00</td>
              <td>
                <img src="../assets/icons/trash.svg" alt="">
              </td>
            </tr>
          </table>
        </div>
        <div class="cart__content-right">
          <div class="cart__content-bill">
            <h4>Cart Totals</h4>
            <div class="cart__right-subtotal">
              <span>Subtotal</span>
              <p>Rs. 250,000.00</p>
            </div>
            <div class="cart__right-total">
              <span>Total</span>
              <p>Rs. 250,000.00</p>
            </div>
            <button class="cart__button slide">Check Out</button>
          </div>
        </div>
       </div>
     </div>
    <!-- Shop Quality  -->
    <ShopQuality />
  </div>
</template>

<script setup>
import ShopQuality from '../components/Shop-Quality.vue';


</script>

<style scoped>
/* Cart top  */
.cart__inform {
  height: 316px;
  background: url("../assets/imgs/shop.png");
}

.cart__inform > img {
  width: 70px;
  height: 70px;
  margin-bottom: -8px;
}

.cart__inform--title {
  font-size: 48px;
  font-weight: bold;
  color: #000000;
}


.navigation {
  display: flex;
  align-items: center;
  gap: 6px;
}

.navigation img {
  width: 18px;
  height: 18px;
  filter: brightness(0) saturate(100%)
}

.cart__content {
  display: flex;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 100px;
}

/* Cart left  */
.cart__content-left {
  width: 66%;
}

.cart__content-head {
  background: #F9F1E7;
}

.cart__content-product {
  display: flex;
  align-items: center;
  gap: 34px;
}

.cart__product-img {
  width: auto;
  height: 105px;
  object-fit: contain;
  border-radius: 10px;
  background: #B88E2F;
}

.cart__product-name {
  font-size: 16px;
  color: #9F9F9F;
}

.cart__quantity-container {
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart__quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #9F9F9F;
  width: 32px;
  height: 32px;
  border-radius: 5px;
}

table {
    border-collapse: separate; 
    border-spacing: 0 55px;
}

th {
  padding: 15px 0;
  text-align: center;
}

td {
  text-align: center;
  vertical-align: middle;
}

/* Cart right  */
.cart__content-right {
  transform: translateY(55px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px 96px 80px 96px;

  background: #F9F1E7;
}

.cart__content-bill h4 {
  font-size: 32px;
  font-weight: bold;
}

.cart__right-subtotal, .cart__right-total {
  display: flex;
  align-items: center;
  gap: 58px;
}

.cart__right-subtotal, .cart__right-total span {
  font-size: 16px;
  font-weight: bold;
}

.cart__right-subtotal {
  margin-top: 61px;
}

.cart__right-total {
  margin-top: 31px;
}

.cart__right-subtotal p {
  font-size: 16px;
  font-weight: 400;
  color: #9F9F9F;
}

.cart__right-total p {
  margin-left: auto;
  font-size: 18px;
  font-weight: bold;
  color: #B88E2F;
}

.cart__button {
  width: 220px;
  margin-top: 42px;
  padding: 15px 0;
  border: 1px solid #000000;
  border-radius: 15px;
  text-align: center;
  background: #F9F1E7;
  outline: none;

  font-size: 20px;
  font-weight: bold;
  transition: 0.5s;
}

.cart__button:hover {
  color: #fff;
  border-color: #E97171;
}

</style>