<template>
   <!-- Shop quality  -->
   <section class="shop__quality">
      <div class="shop__quality-container">
        <img src="../assets/icons/champion.svg" alt="">
        <div class="shop__quality-content">
          <h3 class="shop__quality-title">High Quality</h3>
          <p class="shop__quality-desc">crafted from top materials</p>
        </div>
      </div>
      <div class="shop__quality-container">
        <img src="../assets/icons/protection.svg" alt="">
        <div class="shop__quality-content">
          <h3 class="shop__quality-title">Warranty Protection</h3>
          <p class="shop__quality-desc">Over 2 years</p>
        </div>
      </div>
      <div class="shop__quality-container">
        <img src="../assets/icons/shipping.svg" alt="">
        <div class="shop__quality-content">
          <h3 class="shop__quality-title">Free Shipping</h3>
          <p class="shop__quality-desc">Order over 150 $</p>
        </div>
      </div>
      <div class="shop__quality-container">
        <img src="../assets/icons/support.svg" alt="">
        <div class="shop__quality-content">
          <h3 class="shop__quality-title">24 / 7 Support</h3>
          <p class="shop__quality-desc">Dedicated support</p>
        </div>
      </div>
     </section>
</template>

<script setup>
</script>

<style scoped>
/* Shop quality  */
.shop__quality {
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #FAF3EA;
}

.shop__quality-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.shop__quality-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.shop__quality-title {
  font-size: 25px;
  font-weight: 600;
  color: #242424;
}

.shop__quality-desc {
  font-size: 20px;
  color: #898989;
}
</style>