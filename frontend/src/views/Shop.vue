<template>
  <div class="shop">
    <!-- Shop Top  -->
    <div class="shop__inform d-flex flex-column align-items-center justify-content-center">
      <img src="../assets/imgs/logo_2.png" alt="">
      <h1 class="shop__inform--title">Shop</h1>
      <div class="navigation mt-2">
        <p class="fw-bold">Home</p>
        <img src="../assets/icons/right.svg" alt="">
        <p>Shop</p>
      </div>
    </div>
    <!-- Filter  -->
    <div class="filter">
      <div class="container d-flex ">
        <div class="filter__left">
          <div class="filter__left--container">
            <img src="../assets/icons/filter.svg" alt="">
            <span>Filter</span>
          </div>
          <img src="../assets/icons/filter_2.svg" alt="">
          <img src="../assets/icons/filter_3.svg" alt="">
          <div class="separate"></div>
          <p>Showing 1–16 of 32 results</p>
        </div>
        <div class="filter__right">
          <div class="filter__right-group">
            <span>Show</span>
            <div class="filter__right--number-of-product">16</div>
          </div>
          <div class="filter__right-group">
            <span>Short by</span>
            <input type="text" placeholder="Default" class="filter__right--input-text">
          </div>
        </div>
      </div>
    </div>
    <!-- Products  -->
    <section class="shop__products products">
      <div class="container">
          <div class="row row-cols-4 gy-5 ">
            <div class="col">
              <Product />
            </div>
            <div class="col">
              <Product />
            </div>
            <div class="col">
              <Product />
            </div>
            <div class="col">
              <Product />
            </div>
            <div class="col">
              <Product />
            </div>
            <div class="col">
              <Product />
            </div>
            <div class="col">
              <Product />
            </div>
            <div class="col">
              <Product />
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="products__navigation">
              <div class="square active">1</div>
              <div class="square">2</div>
              <div class="square">3</div>
              <div class="square next">Next</div>
            </div>
          </div>
      </div> 
    </section>
    <!-- Shop Quality  -->
     <ShopQuality />
  </div>
 
</template>

<script lang="ts" setup>
import Product from '../components/Product.vue';
import ShopQuality from '../components/Shop-Quality.vue';

import "../assets/css/home/products.css"
</script>

<style scoped>
.shop__inform {
  height: 316px;
  background: url("../assets/imgs/shop.png");
}

.shop__inform>img {
  width: 70px;
  height: 70px;
  margin-bottom: -8px;
}

.shop__inform--title {
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


/* Filter  */
.filter {
  padding: 35px 0;
  background: #F9F1E7;
}

.filter__left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.filter__left img {
  cursor: pointer;
}

.filter__left--container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.filter__left--container span {
  font-size: 20px;
  color: #000000;
  font-weight: 600;
}

.filter__right {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 30px;
}

.filter__right-group {
  display: flex;
  align-items: center;
  gap: 17px;
}

.filter__right-group span {
  font-size: 20px;
  color: #000000;
  font-weight: 600;
}

.filter__right--number-of-product {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;

  background: #FFFFFF;
  font-size: 20px;
  color: #9F9F9F;
}

.filter__right--input-text {
  outline: none;
  border: none;
  padding: 12px 0px 12px 30px;
  width: 188px;
  font-size: 20px;

  color: #9F9F9F;
}

/* shop  */
.shop__products {
  padding-top: 63px;
}

.products__navigation {
  margin-top: 70px;
  display: flex;
  gap: 38px;
}

.square {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  color: #000000;
  background: #F9F1E7;
  cursor: pointer;
  transition: 0.5s;
}

.square:hover {
  background: rgba(184, 142, 47, 0.7);
}

.next {
  width: 98px;
}

.active {
  color: #fff;
  background: #B88E2F;
}
</style>