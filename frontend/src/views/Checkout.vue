<template>
    <div class="checkout">
      <!-- Checkout Top  -->
      <div class="checkout__inform d-flex flex-column align-items-center justify-content-center">
          <img src="../assets/imgs/logo_2.png" alt="">
          <h1 class="checkout__inform--title">Checkout</h1>
          <div class="navigation mt-2">
            <p class="fw-bold">Home</p>
            <img src="../assets/icons/right.svg" alt="">
            <p>Checkout</p>
          </div>
      </div>
      <!-- Checkout Content  -->
        <div class="container">
          <div class="checkout__content">
              <div class="checkout__content-left">
                <h1 class="checkout__content-heading">Billing details</h1>
                <!-- Full name  -->
                <div class="form-double-group">
                  <div class="form-group">
                    <label for="">First Name</label>
                    <input type="text" class="input-small">
                  </div>
                  <div class="form-group">
                    <label for="">Last Name</label>
                    <input type="text" class="input-small">
                  </div>
                </div>
                <!-- Company Name -->
                  <div class="form-group">
                    <label for="">Company Name (Optional)</label>
                    <input type="text">
                  </div>
                <!-- Country / Region -->
                  <div class="form-group">
                    <label for="">Country / Region</label>
                    <input type="text">
                  </div>
                  <!-- Street address -->
                  <div class="form-group">
                    <label for="">Street address</label>
                    <input type="text">
                  </div>
                  <!-- Town / City -->
                  <div class="form-group">
                    <label for="">Town / City</label>
                    <input type="text">
                  </div>
                  <!-- Province -->
                  <div class="form-group">
                    <label for="">Province</label>
                    <input type="text">
                  </div>
                  <!-- ZIP code -->
                  <div class="form-group">
                    <label for="">ZIP code</label>
                    <input type="text">
                  </div>
                  <!-- Phone  -->
                  <div class="form-group">
                    <label for="">Phone</label>
                    <input type="text">
                  </div>
                  <!-- Email address  -->
                  <div class="form-group">
                    <label for="">Email address</label>
                    <input type="text">
                  </div>
                  <!-- Add information  -->
                  <div class="form-group">
                    <label for=""></label>
                    <input type="text" placeholder="Additional information">
                  </div>
              </div>
              <div class="checkout__content-right">
                <div class="checkout__content-info-product">
                  <div class="checkout__info-product--row">
                    <h5>Product</h5>
                    <h5>Subtotal</h5>
                  </div>
                  <div class="checkout__info-product--row">
                    <div class="checkout__info-product--name">
                      <p class="checkout__info-product--p">Asgaard sofa</p>
                      <span>x</span>
                      <span>1</span>
                    </div>
                    <p class="checkout__info-product--price">Rs. 250,000.00</p>
                  </div>
                  <div class="checkout__info-product--row">
                    <p class="checkout__info-product--p">Subtotal</p>
                    <p class="checkout__info-product--subtotal-price">Rs. 250,000.00</p>
                  </div>
                  <div class="checkout__info-product--row">
                    <p class="checkout__info-product--p">Total</p>
                    <p class="checkout__info-product--total-price">Rs. 250,000.00</p>
                  </div>
                </div>
                <div class="checkout__content-bank">
                  <form class="checkout__bank-form">
                    <div>
                      <input type="checkbox" value="bankOnline" name="Direct Bank Transfer">
                      <label for="">Direct Bank Transfer</label>
                      <p class="checkout__bank-form--desc">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                    <div>
                      <input type="checkbox" value="cashDelivery" name="Cash On Delivery">
                      <label for="">Cash On Delivery</label>
                      <p class="checkout__bank-form--desc" v-if="false">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                </form>
                </div>
                <p class="checkout__content-policy">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong> privacy policy</strong>.</p>
                <div class="checkout__content-btn">
                  <button class="checkout__btn slide">Place order</button>
                </div>
              </div>
          </div>
        </div>
    </div>
    <!-- Shop Quality  -->
    <ShopQuality />
  </template>
  
  <script setup>
  import ShopQuality from '../components/Shop-Quality.vue';
  
  
  </script>
  
  <style scoped>
/* Checkout Top  */
.checkout__inform {
    height: 316px;
    background: url("../assets/imgs/shop.png");
}

.checkout__inform > img {
    width: 70px;
    height: 70px;
    margin-bottom: -8px;
}

.checkout__inform--title {
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

/* Checkout Content  */
.checkout__content {
  display: flex;
  padding: 65px 0;
}

.checkout__content-right, .checkout__content-left {
  width: 50%;
}

/* Checkout left  */

.checkout__content-right {
  padding-top: 90px;
}

.checkout__content-info-product {
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 24px;
  padding-bottom: 30px;

  border-bottom: 1px solid #D9D9D9;
}

.checkout__info-product--row {
  display: flex;
  justify-content: space-between;
}

.checkout__info-product--row h5 {
  font-size: 24px;
  font-weight: 600;
  color: #000000;
}

.checkout__info-product--name {
  display: flex;
  gap: 11px;  
}

.checkout__info-product--name p {
  color: #9F9F9F;
}

.checkout__info-product--p, 
.checkout__info-product--subtotal-price, 
.checkout__info-product--total-price,
.checkout__bank-form label {
  font-size: 16px;
  color: #000000;
}

.checkout__info-product--p {
  font-weight: 500;
}

.checkout__info-product--total-price {
  font-size: 24px;
  font-weight: bold;
  color: #B88E2F;
}

.checkout__bank-form {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.checkout__bank-form label {
  font-weight: bold;
  margin-left: 15px;
}

.checkout__bank-form--desc {
  margin-top: 11px;
  font-size: 16px;
  color: #9F9F9F;
  line-height: 24px;
}

.checkout__content-policy {
  margin-top: 22px;
  font-size: 16px;
  line-height: 24px;
}

.checkout__content-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkout__btn {
  margin-top: 25px;
  background: #fff;
  width: 314px;
  height: 64px;

  border: 1px solid #000000;
  border-radius: 15px;

  font-size: 20px;

  transition: all 0.5s;
}

.checkout__btn:hover {
  width: 222px;
  color: #fff;
  border-color: #E97171;
}


/* Checkout right  */
.checkout__content-left {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.checkout__content-heading {
  font-size: 36px;
  font-weight: bold;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-double-group {
  display: flex;
  gap: 31px;
}


.form-group input {
  padding-left: 30px;
  padding-right: 10px;
  width: 453px;
  height: 75px;
  border: 1px solid #9F9F9F;
  border-radius: 10px;

  font-size: 16px;
  color: #9F9F9F;
}

.input-small {
  width: 211px !important;
}

.form-group label {
  font-size: 16px;
  font-weight: bold;
}
  
</style>