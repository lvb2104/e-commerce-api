<template>
  <section class="single-product">
    <!-- Navigation  -->
    <div class="navigation">
      <div class="container d-flex align-items-center gap-3">
        <div class="navigation__name">Home</div>
        <img src="../assets/icons/right.svg" alt="">
        <div class="navigation__name">Shop</div>
        <img src="../assets/icons/right.svg" alt="">
        <div class="separate"></div>
        <div class="navigation__name-of-product">{{ item.name }}</div>
      </div>
    </div>
    <!-- Single Product Content  -->
    <div class="container">
      <div class="single-product__content"> 
        <!-- Single Product Left  -->
        <div class="single-product__content-left">
          <div class="single-product__imgs-small">
            <img :src="item.avatar" alt="" class="single-product__img-small">
            <img :src="item.avatar" alt="" class="single-product__img-small">
            <img :src="item.avatar" alt="" class="single-product__img-small">
            <img :src="item.avatar" alt="" class="single-product__img-small">
          </div>
          <img :src="item.avatar" class="single-product__img-view">
        </div>
        <!-- Single Product Right  -->
        <div class="single-product__content-right">
          <h1 class="single-product__name">{{ item.name }}</h1>
          <h3 class="single-product__price">{{ item.price }} VND </h3>
          <div class="single-product__judge">
            <div class="single-product__jusdge-stars">
              <img src="../assets/icons/star.svg" alt="" class="star">
              <img src="../assets/icons/star.svg" alt="" class="star">
              <img src="../assets/icons/star.svg" alt="" class="star">
              <img src="../assets/icons/star.svg" alt="" class="star">
              <img src="../assets/icons/star.svg" alt="" class="star">
            </div>
            <div class="separate" style="height: 30px;"></div>
            <div class="single-product__judge--desc">5 Customer Review</div>
          </div>
          <p class="single-product__desc">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <div class="single-product__characteristic">
            <div class="single-product__characteristic--sizes">
              <span>Size</span>
              <div class="single-product__characteristic--size">
                <div class="size current">L</div>
                <div class="size">XL</div>
                <div class="size">XS</div>
              </div>
            </div>
            <div class="single-product__characteristic--colors">
              <span>Color</span>
              <div class="single-product__characteristic--color">
                <div class="color color_1"></div>
                <div class="color color_2"></div>
                <div class="color color_3"></div>
              </div>
            </div>
          </div>
          <div class="single-product__button">
            <div class="single-product__button-amount">
              <div class="minus">-</div>
              <div class="amount">1</div>
              <div class="plus">+</div>
            </div>
            <div class="single-product__button-cart slide">Add To Cart</div>
            <div class="single-product__button-compare slide_primary">Compare</div>
          </div>
          <div class="line"></div>
          <div class="single-product__details">
            <div class="single-product__details-left">
              <span>SKU</span>
              <span>Category</span>
              <span>Tags</span>
              <span>Share</span>
            </div>
            <div class="operation">
              <span>:</span>
              <span>:</span>
              <span>:</span>
              <span>:</span>
            </div>
            <div class="single-product__details-right">
              <span>SS001</span>
              <span>Sofas</span>
              <span>Sofa, Chair, Home, Shop</span>
              <div class="icons">
                <img src="../assets/icons/facebook.svg" alt="" class="icon">
                <img src="../assets/icons/in.svg" alt="" class="icon">
                <img src="../assets/icons/twitter.svg" alt="" class="icon">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Single Product Information -->
    <div class="line"></div>
       <div class="container">
         <div class="single-product__information">
            <div class="single-product__information-title">
              <h3 @click="setActiveTab(index)" v-for="(tab,index) in tabs" :key="tab.label" :class="{active: index === activeTab}">{{ tab.label }} <span v-if="index == 2" class="amount-of-review">[5]</span></h3>
            </div>
            <div class="single-product__information-content">
              <div v-for="(tab,index) in tabs" v-show="index === activeTab" :key="tab.label" class="single-product__information--desc">
                <p>{{ tab.content }}</p>
                <div class="single-product__information--desc-imgs">
                  <img :src="item.avatar" alt="">
                  <img :src="item.avatar" alt="">
                </div>
              </div>
            </div>
         </div>
       </div>
    <!-- Related Product  -->
    <section class="related-products">
      <div class="line" style="width: 100%;"></div>
      <div class="container">
          <div class="related-products__top text-center">
            <h2 class="related-products__top--title">Related Products</h2>
          </div>
          <div class="row row-cols-4 gy-4">
            <div v-for="item in items.slice(0,4)" :key="item.id" class="col">
              <Product :item="item" />
            </div>
          </div>
          <div class="related-products__button d-flex justify-content-center">
            <div class="related-products__show-more text-center">
              <div @click="goToShopPage">Show More</div>
            </div>
          </div>
      </div> 
    </section>
  </section>
</template>

<script setup>
import Product from '@/components/Product.vue';

import "../assets/css/single-product/navigation.css"
import "../assets/css/single-product/related-product.css"
import "../assets/css/single-product/single-product-information.css"
import "../assets/css/single-product/single-product.css"
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { inject, onBeforeMount, ref } from 'vue';


const route = useRoute()
const router = useRouter()
const itemId = route.params.id
const item = ref(null)
const items = inject("items")

// Call API Item 
const getItem = async () => {
  try {
    const res = await axios.get("http://localhost:3001/items/" + itemId)
    item.value = res.data
  }
  catch(err) {
    console.log(err)
  }
}

const activeTab = ref(0)
const tabs = ref([
  { label: "Description", content: "This is the description content." },
  { label: "Additional Information", content: "This is additional information content." },
  { label: "Reviews", content: "This is the reviews content." }
]);


// Fuction 
const goToShopPage = async () => {
  await router.push("/shop")
  window.location.reload()
}

const setActiveTab = (index) => {
  activeTab.value = index
}



onBeforeMount(() => {
  getItem()
})

</script>

<style scoped>
.size {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: #F9F1E7;
  color: #000000;
  font-size: 13px;

  transition: 0.5s;
  cursor: pointer;
}

.size.current {
  color: #FFFFFF;
  background: #B88E2F;
}

.size:hover {
  color: #FFFFFF;
  background: #B88E2F;
}

.color {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.color_1 {
  background: #816DFA;
}

.color_2 {
  background: #000000;
}

.color_3 {
  background: #B88E2F;
}

.minus, .plus {
  position: absolute;
  user-select: none;
}

.minus {
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 5px;
}

.plus {
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 5px;
}

.line {
  width: 100%;
  margin: 60px 0 40px 0;
  background: #D9D9D9;
}

.operation {
  margin-left: 12px;
  margin-right: 12px;
}

.icons {
  display: flex;
  align-items: center;
  gap: 25px;
}

</style>