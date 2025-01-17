<template>
  <div class="contact">
    <!-- Contact Inform  -->
    <div class="contact__inform d-flex flex-column align-items-center justify-content-center">
      <img src="../assets/imgs/logo_2.png" alt="">
      <h1 class="contact__inform--title">Contact</h1>
      <div class="navigation mt-2">
        <p class="fw-bold">Home</p>
        <img src="../assets/icons/right.svg" alt="">
        <p>Contact</p>
      </div>
    </div>
    <!-- Contact Content  -->
     <div class="container">
        <div class="contact__container">
          <!-- Contact TOP  -->
         <div class="contact__top">
          <h1 class="contact__top-heading">Get In Touch With Us</h1>
          <p class="contact__top-desc">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
         </div>
         <div class="contact__content">
          <div class="contact__content-left">
            <div class="contact__content-left--block">
              <img src="../assets/icons/address.svg" alt="">
              <div class="contact__content-left--info">
                <p class="contact__content-left--heading">Address</p>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div class="contact__content-left--block">
              <img src="../assets/icons/phone.svg" alt="">
              <div class="contact__content-left--info">
                <p class="contact__content-left--heading">Phone</p>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div class="contact__content-left--block">
              <img src="../assets/icons/clock.svg" alt="">
              <div class="contact__content-left--info">
                <p class="contact__content-left--heading">Working Time</p>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div class="contact__content-right">
            <div class="form-group">
              <label for="">Your Name</label>
              <input type="text" placeholder="Abc">
            </div>
            <div class="form-group">
              <label for="">Email address</label>
              <input type="text" placeholder="Abc@def.com">
            </div>
            <div class="form-group">
              <label for="">Subject</label>
              <input type="text" placeholder="This is an optional">
            </div>
            <div class="form-group">
              <label for="">Message</label>
              <textarea type="textarea" placeholder="Hi! i’d like to ask about"></textarea>
            </div>
            <button class="contact__btn slide">Submit</button>
          </div>
         </div>
      </div>
     </div>
  </div>
  <!-- Shop Quality  -->
  <ShopQuality />
</template>

<script lang="ts" setup>
import ShopQuality from '../components/Shop-Quality.vue';

</script>

<style scoped>
.contact__container {
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Checkout Top  */
.contact__inform {
    height: 316px;
    background: url("../assets/imgs/shop.png");
}

.contact__inform > img {
    width: 70px;
    height: 70px;
    margin-bottom: -8px;
}

.contact__inform--title {
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

/* Contact top  */
.contact__content {
  padding-top: 95px;
  padding-bottom: 65px;
}

.contact__top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

.contact__top-heading {
  font-size: 36px;
  font-weight: bold;
}

.contact__top-desc {
  text-align: center;
  max-width: 642px;
  font-size: 16px;
  color: #9F9F9F;
  line-height: 24px;
}

/* Contact left  */
.contact__content {
  display: flex;
  gap: 200px;
}

.contact__content-left {
  width: 40%;
}

.contact__content-right {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 60%;
}

.contact__content-left {
  display: flex;
  flex-direction: column;
  gap: 42px;
}

.contact__content-left--block {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

.contact__content-left--info {
  line-height: 24px;
  font-size: 16px;
  max-width: 212px;
}

.contact__content-left--heading {
  font-size: 24px;
  font-weight: bold;
}

/* Contact right  */

.form-group {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-group input, textarea {
  padding-left: 30px;
  padding-right: 10px;
  width: 453px;
  height: 75px;
  border: 1px solid #9F9F9F;
  border-radius: 10px;

  font-size: 16px;
  color: #9F9F9F;
}

textarea {
  padding-top: 20px;
}

.form-group label {
  font-size: 16px;
  font-weight: bold;
}

.contact__btn {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 222px;
  height: 55px;

  background: #B88E2F;
  color: #fff;

  transition: all 0.5s;
}

</style>