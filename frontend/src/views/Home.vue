<template>
  <div>
    <!-- Hero  -->
    <section class="hero">
      <img src="../assets/imgs/hero_img.png" alt="" class="hero__img">
      <div class="container">
        <div class="hero__content">
          <h6 class="hero__name">New Arrival</h6>
          <h1 class="hero__title">Discover Our New Collection</h1>
          <p class="hero__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button class="button hero__btn slide">
            <router-link to="shop">BUY NOW</router-link>
          </button>
        </div>
      </div>
    </section>

    <!-- Rooms  -->
    <section class="rooms">
      <div class="container">
        <div class="rooms__top text-center">
          <h2 class="rooms__top--title">Browse The Range</h2>
          <p class="rooms__top--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="rooms__content">
          <div class="rooms__content--col">
            <img src="../assets/imgs/room_dining.png" alt="" class="rooms__content--img">
            <p class="rooms__content--name text-center">Dining</p>
          </div>
          <div class="rooms__content--col">
            <img src="../assets/imgs/room_living.png" alt="" class="rooms__content--img">
            <p class="rooms__content--name text-center">Living</p>
          </div>
          <div class="rooms__content--col">
            <img src="../assets/imgs/room_bedroom.png" alt="" class="rooms__content--img">
            <p class="rooms__content--name text-center">Bedroom</p>
          </div>
        </div>
      </div>
    </section>

     <!-- Our Products  -->
    <section class="products">
      <div class="container">
          <div class="products__top text-center">
            <h2 class="products__top--title">Our Products</h2>
          </div>
          <div class="row row-cols-4 gy-4">
            <div v-for="item in items.slice(0,8)" :key="item.id"  class="col">
              <Product :item="item" />
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="products__show-more text-center">
              <router-link to="shop">Show More</router-link>
            </div>
          </div>
      </div> 
    </section>

    <!-- Preview designer  -->
    <section class="preview">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="preview__left">
              <h2 class="preview__left--title">50+ Beautiful rooms
                inspiration</h2>
              <p class="preview__left--desc">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <button class="button preview__button slide">
                <router-link to="shop">Explore More</router-link>
              </button>
          </div>
          <div class="preview__right">
            <!-- Slide main  -->
            <div class="preview__slide--main">
              <div class="list-images" ref="listImage">
                <div v-for="(image, i) in images" :key="image.id" >
                  <img :src="image.image" class="preview__slide-img" :class="{active: i === index}" alt="" ref="imgs">
                  <div class="preview__slide--content" :class="{active: i === index}">
                    <div class="button__next">
                      <img src="../assets/icons/arrow-right.svg" alt="">
                    </div>
                    <p class="preview__slie--content-name d-flex align-items-center">
                      {{ image.id }} <span class="line"></span> {{ image.name }}
                    </p>
                    <p class="preview__slie--content-desc">{{ image.description }}</p>
                  </div>
                </div>
              </div>
              <div class="next__preview-img">
                  <span v-for="(n, i) in Array(4).fill(0)" :key="i" :class="{current: i === index}" class="round"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Furniture Imgs  -->
     <section class="furnitureImgs">
        <div class="furnitureImgs__top text-center">
          <p class="furnitureImgs__top--desc">Share your setup with</p>
          <h2 class="furnitureImgs__top--title">#FuniroFurniture</h2>
        </div>
        <div class="furnitureImgs__content">
          <div class="furnitureImgs__content-left">
            <div class="furnitureImgs__content-left--row">
              <img src="../assets/imgs/furnitureImgs_1.png" alt="" class="furnitureImgs__1">
              <img src="../assets/imgs/furnitureImgs_2.png" alt="" class="furnitureImgs__2">
            </div>
            <div class="furnitureImgs__content-left--row">
              <img src="../assets/imgs/furnitureImgs_3.png" alt="" class="furnitureImgs__3">
              <img src="../assets/imgs/furnitureImgs_4.png" alt="" class="furnitureImgs__4">
            </div>
          </div>
          <div class="furnitureImgs__content-center">
            <img src="../assets/imgs/furnitureImgs_5.png" alt="" class="furnitureImgs__5">
          </div>
          <div class="furnitureImgs__content-right">
            <div class="furnitureImgs__content-right--row">
              <img src="../assets/imgs/furnitureImgs_6.png" alt="" class="furnitureImgs__6">
              <img src="../assets/imgs/furnitureImgs_7.png" alt="" class="furnitureImgs__7">
            </div>
            <div class="furnitureImgs__content-left--row">
              <img src="../assets/imgs/furnitureImgs_8.png" alt="" class="furnitureImgs__8">
              <img src="../assets/imgs/furnitureImgs_9.png" alt="" class="furnitureImgs__9">
            </div>
          </div>
        </div>
     </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { inject, onMounted, reactive, ref, useTemplateRef } from 'vue';
import Product from '../components/Product.vue';

// Css file
import "../assets/css/home/hero.css"
import "../assets/css/home/furniture.css"
import "../assets/css/home/preview.css"
import "../assets/css/home/products.css"
import "../assets/css/home/rooms.css"


const items = inject("items")
const imgs = ref(null)
const listImage = ref(null)
const images = reactive([
  {
    id: "01",
    name: "Bed Room",
    description: "Inner Peace",
    image: "https://lvb2104.s3.us-east-1.amazonaws.com/1737209920941-image-6.png",
  },
  {
    id: "02",
    name: "Living Room",
    description: "Very Cozy",
    image: "https://lvb2104.s3.us-east-1.amazonaws.com/1737209241452-image-1.jpg",
  },
  {
    id: "03",
    name: "Bath Room",
    description: "Lovely",
    image: "https://lvb2104.s3.us-east-1.amazonaws.com/1737210050375-image-8.png",

  },
  {
    id: "04",
    name: "Dining Room",
    description: "Inner Peace",
    image: "https://lvb2104.s3.us-east-1.amazonaws.com/1737209872211-image-5.png",
  }
])

let index = ref(0)

// Logic SlideShow 
function slideShow() {
  setInterval(() => {
    if (index.value == images.length - 1) {
      index.value = 0
      const width = imgs.value[0].offsetWidth
      listImage.value.style.transform = `translateX(0px)`
    } else {
      index.value ++
      const width = imgs.value[0].offsetWidth
      listImage.value.style.transform = `translateX(${(width * -1 * index.value) - (24 * index.value)}px)`
      console.log(listImage.value.style.transform)
    }
  }, 4000)
}

onMounted(() => {
  slideShow()
})

</script>

<style scoped>



</style>