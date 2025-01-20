<template>
  <div class="product__container">
    <!-- Modal  -->
    <div class="product__modal">
      <div @click="goToSingleProductPage(item.id)" class="product__modal--btn slide text-center">Add to cart</div>
      <div class="product__modal--row">
        <div class="product__modal-block">
          <img src="../assets/icons/share.svg" alt="">
          <span>Share</span>
        </div>
        <div class="product__modal-block">
          <img src="../assets/icons/compare.svg" alt="">
          <span>Compare</span>
        </div>
        <div class="product__modal-block">
          <img src="../assets/icons/like.svg" alt="">
          <span>Like</span>
        </div>
      </div>
    </div>
    <!-- Sale / Noftification -->
    <div v-if="item.isSale" class="discount d-flex justify-content-center align-items-center">-30%</div>
    <!-- <div class="product__new--notification d-flex justify-content-center align-items-center">New</div> -->
    <!-- Product  -->
    <img :src="item.avatar" alt="" class="product__img">
    <div class="product__content">
      <h3 class="product__name">{{ item.name }}</h3>
      <p class="product__desc">{{ item.description }}</p>
      <div class="product__price">
        <span class="product__price--view">{{ item.price }} VND</span>
        <span class="product__price--root">{{ item.importPrice }} VND</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
  item: {
    type: Object,
    required: true
  }
}) 
const router = useRouter()

// Logic Go to Single Product
function goToSingleProductPage(id) {
  router.push({ name: "single-product", params: { id }})
}


</script>

<style scoped>
.product__container {
  position: relative;
  width: 100%;
  background: #F4F5F7;
  border-radius: 5px;
  overflow: hidden;

  cursor: pointer;
}

.product__img {
  width: 100%;
  height: 301px;
  object-fit: cover;
}

.product__content {
  margin-top: 16px;
  margin-left: 16px;
}

.product__name {
  font-size: 24px;
  font-weight: 700;
  color: #3A3A3A;
}

.product__desc {
  margin-top: 8px;
  font-size: 16px;
  color: #898989;
}

.product__price {
  margin-top: 8px;
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.product__price--view {
  font-size: 20px;
  font-weight: 600;
  color: #3A3A3A;
}

.product__price--root {
  font-size: 16px;
  color: #B0B0B0;
  text-decoration: line-through;
}

/* Discount  */

.discount, .product__new--notification {
  position: absolute;
  top: 24px;
  right: 24px;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 16px;
  color: #ffffff;
}

.discount {
  background: #E97171;
}

.product__new--notification {
  background: #2EC1AC;
}

/* Modal  */
.product__modal {
  opacity: 0;

  z-index: 2;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(59, 59, 59, 0.7);
  width: 100%;
  height: 100%;

  transition: 0.5s;
}

.product__modal:hover {
  opacity: 1;
}

.product__modal--btn {
  width: 180px;
  background: #FFFFFF;
  padding: 12px 0;

  font-size: 18px;
  font-weight: bold;
  color: #B88E2F;
  transition: 0.5s;
}

.product__modal--btn:hover {
  color: #FFFFFF;
  border-color: #E97171;
}

.product__modal--row {
  margin-top: 24px;
  display: flex;
  gap: 20px;
}

.product__modal-block {
  display: flex;
  align-items: center;
  gap: 2px;

  font-size: 16px;
  font-weight: semibold;
  color: #FFFFFF;
  transition: 0.3s;
}

.product__modal-block:hover {
  color: #E97171;
  transform: translateY(-4px);
}

.product__modal-block:hover img {
  filter: brightness(0) saturate(100%) invert(67%) sepia(19%) saturate(1892%) hue-rotate(313deg) brightness(97%) contrast(87%);
}
</style>