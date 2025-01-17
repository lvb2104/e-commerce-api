<template>
  <div>
    <!-- Cart Modal  -->
    <div v-if="false" class="cart-modal">
      <div class="cart-modal__container">
        <!-- Modal Top  -->
        <div class="cart-modal__top">
          <h3 class="cart-modal__top-title">Shopping Cart</h3>
          <div class="cart-modal__top-close">
            <img src="../assets/icons/cart-close.svg" alt="">
          </div>
        </div>
        <div class="line" style="width: 80%;"></div>
        <!-- Modal content  -->
        <div class="cart-modal__content">
          <div class="cart-modal__product">
            <div class="cart-modal__product--left">
              <img src="../assets/imgs/single-product__img-1.png" alt="">
            </div>
            <div class="cart-modal__product--right">
              <div class="cart-modal__product-name">Asgaard sofa</div>
              <div class="cart-modal__product-price">
                <span class="amount">1</span>
                <span style="font-size: 16px; margin-bottom: 2px;">x</span>
                <span class="price">Rs. 250,000.00</span>
              </div>
            </div>
            <div class="cart-modal__product-delete">
              <img src="../assets/icons/delete.svg" alt="">
            </div>
          </div>
        </div>
        <!-- Modal Total  -->
        <div class="cart-modal__total">
          <span style="font-size: 16px; font-weight: bold;">Subtotal</span>
          <span class="cart-modal__total-price">Rs. 520,000.00</span>
        </div>
        <!-- Modal button  -->
         <div class="cart-modal__buttons">
          <div class="cart-modal__button slide_primary">
            <router-link to="cart">Cart</router-link>
          </div>
          <div class="cart-modal__button slide_primary">Checkout</div>
          <div class="cart-modal__button slide_primary">Comparison</div>
         </div>
      </div>
    </div>
    <!-- Header  -->
    <div class="container">
      <header id="header" class="header">
        <!-- Logo  -->
        <div class="logo">
          <router-link to="/"><img src="../assets/imgs/logo.png" alt="" class="img_logo"></router-link>
        </div>
        <!-- List Link page  -->
        <ul class="header_links">
          <RouterLink to="/" class="header_link">Home</RouterLink>
          <RouterLink to="shop" class="header_link">Shop</RouterLink>
          <RouterLink to="about" class="header_link">About</RouterLink>
          <RouterLink to="contact" class="header_link">Contact</RouterLink>
        </ul>
          <!-- Header icon  -->
        <ul class="header_icons">
          <RouterLink to="account" class="header_icon">
            <img src="../assets/icons/account.svg" alt="" class="icon">
          </RouterLink>
          <div class="search">
            <img src="../assets/icons/search.svg" alt="" class="icon">
          </div>
          <RouterLink to="favorite" class="header_icon">
            <img src="../assets/icons/favourtite.svg" alt="" class="icon">
          </RouterLink>
          <div class="header_icon header_cart">
            <img src="../assets/icons/cart.svg" alt="" class="icon">
          </div>
        </ul>
      </header>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.header, .header_icons, .header_links{
  display: flex;
  align-items: center;
}

.header {
  padding: 30px 0;
}

.header_links {
  gap: 75px;
  margin-left: 266px;
}

.header_link {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  transition: all 0.2s;
}

.header_link:hover {
  color: #B88E2F;
  opacity: 0.9;
}

.header_icons {
  gap: 45px;
  margin-left: 158px;
}

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: all 0.2s;
}

.icon:hover {
  filter: brightness(0) saturate(100%) invert(61%) sepia(58%) saturate(525%) hue-rotate(4deg) brightness(84%) contrast(85%);
}


.img_logo {
  width: 185px;
  height: 41px;
  object-fit: contain;
}

.cart-modal {
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.cart-modal__container {
  width: 417px;
  position: absolute;
  top: 0;
  right: 0;

  padding: 28px 40px 28px 28px;
  background: #FFFFFF;
}

.cart-modal__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-modal__top-title {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
}

.cart-modal__content {
  margin-top: 42px;
  height: 432px;
}

.cart-modal__product {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-modal__product--left img {
  width: 105px;
  height: 105px;
  object-fit: contain;
  background: #F9F1E7;
  border-radius: 10px;
}

.cart-modal__product--right {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cart-modal__product-name {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}

.cart-modal__product-price {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-modal__product-delete, .cart-modal__top-close {
  cursor: pointer;
}

.amount {
  font-size: 18px;
  font-weight: bold;
}

.price {
  font-size: 12px;
  font-weight: bold;
  color: #B88E2F;
}

.cart-modal__total {
  padding: 24px 0;
  display: flex;
  gap: 101px;
  
  border-bottom: 1px solid #D9D9D9;
}

.cart-modal__total-price {
  font-size: 16px;
  font-weight: bold;
  color: #B88E2F;
}

.cart-modal__buttons {
  padding-top: 26px;
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

.cart-modal__button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 30px;
  border: 1px solid #000000;
  border-radius: 50px;

  transition: 0.7s;
  cursor: pointer;
}

.cart-modal__button:hover {
  color: #FFFFFF;
}
</style>