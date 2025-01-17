<template>
  <div class="blog">
      <!-- Blog inform  -->
      <div class="blog__inform d-flex flex-column align-items-center justify-content-center">
          <img src="../assets/imgs/logo_2.png" alt="">
          <h1 class="blog__inform--title">Blog</h1>
          <div class="navigation mt-2">
          <p class="fw-bold">Home</p>
          <img src="../assets/icons/right.svg" alt="">
          <p>Blog</p>
          </div>
      </div>
      <!-- Blog Content  -->
      <div class="container">
        <div class="blog__content">
          <div class="blog__content-left">
            <div class="blog__content-block">
              <div class="blog__content-block--img">
                <img src="../assets/imgs/blog.png" alt="">
                <div class="block__content-block--desc">
                  <div class="block">
                    <img src="../assets/icons/admin.svg" alt="">
                    <span>Admin</span>
                  </div>
                  <div class="block"> 
                    <img src="../assets/icons/date.svg" alt="">
                    <span>14 Oct 2022</span>
                  </div>
                  <div class="block">
                    <img src="../assets/icons/wood.svg" alt="">
                    <span>Wood</span>
                  </div>
                </div>
              </div>
              <div class="blog__content-block--content">
                <h3 class="blog__content-block--heading">Going all-in with millennial design</h3>
                <p class="blog__content-block--info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              </div>
              <div class="blog__content-block--link">
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
          <div class="blog__content-right">
            <div class="blog__content-right--search">
              <input type="text">
              <button>
                <img src="../assets/icons/search.svg" alt="">
              </button>
            </div>
            <div class="blog__content-right--category">
              <h3 class="blog__content-category--heading">Categories</h3>
              <div class="blog__content-category--row">
                <span>Crafts</span>
                <span>1</span>
              </div>
              <div class="blog__content-category--row">
                <span>Design</span>
                <span>2</span>
              </div>
              <div class="blog__content-category--row">
                <span>Handmade</span>
                <span>3</span>
              </div>
              <div class="blog__content-category--row">
                <span>Interior</span>
                <span>4</span>
              </div>
              <div class="blog__content-category--row">
                <span>Wood</span>
                <span>5</span>
              </div>
            </div>
            <div class="blog__content-right--recent">
              <h3 class="blog__content-recentPost--heading">Recent Posts</h3>
              <div class="blog__content-recent--container">
                <div class="blog__content-recent--block">
                  <div class="blog__content-recent--img">
                    <img src="../assets/imgs/blog.png" alt="">
                  </div>
                  <div class="blog__content-recent--content">
                    <p class="blog__content-recent--heading">Going all-in with millennial design</p>
                    <p class="blog__content-recent--date">03 Aug 2022</p>
                  </div>
               </div>
               <div class="blog__content-recent--block">
                  <div class="blog__content-recent--img">
                    <img src="../assets/imgs/blog.png" alt="">
                  </div>
                  <div class="blog__content-recent--content">
                    <p class="blog__content-recent--heading">Going all-in with millennial design</p>
                    <p class="blog__content-recent--date">03 Aug 2022</p>
                  </div>
               </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  </div>
  <div class="d-flex justify-content-center">
    <div class="blog__navigation">
      <div class="square active">1</div>
      <div class="square">2</div>
      <div class="square">3</div>
      <div class="square next">Next</div>
    </div>
  </div>
  <!-- Shop Quality  -->
  <ShopQuality />
</template>

<script lang="ts" setup>
import ShopQuality from '../components/Shop-Quality.vue';

</script>

<style scoped>
/* Blog inform  */
.blog__inform {
    height: 316px;
    background: url("../assets/imgs/shop.png");
}

.blog__inform > img {
    width: 70px;
    height: 70px;
    margin-bottom: -8px;
}

.blog__inform--title {
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

/* Blog content  */
.blog__content {
  padding-top: 100px;
  padding-bottom: 55px;
  display: flex;
}

.blog__content-left {
  width: 70%;
}

.blog__content-right {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 30%;
}

.blog__content-block {
  display: flex;
  flex-direction: column;
}

.blog__content-block--img {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.blog__content-block--img>img {
  width: 817px;
  height: 500px;
  object-fit: contain;
}

.block__content-block--desc {
  display: flex;
  gap: 35px;
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}

.block img {
  width: 20px;
  height: 20px;
}

.block span {
  font-size: 16px;
  color: #9F9F9F;
}

.blog__content-block--content {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.blog__content-block--heading {
  font-size: 30px;
  font-weight: bold;
}

.blog__content-block--info {
  width: 817px;
  font-size: 16px;
  color: #9F9F9F;
  line-height: 24px;
}

.blog__content-block--link {
  width: 70px;
  padding-bottom: 10px;
  margin-top: 30px;
  font-size: 16px;
  border-bottom: 1px solid #000000;

  transition: all 0.5s;
}

.blog__content-block--link:hover {
  color: #B88E2F;
  transform: translateY(-2px);
  border-bottom: 1px solid #fff;
}

.blog__content-right--search {
  position: relative;
}

.blog__content-right--search input {
  padding-left: 10px;
  padding-right: 60px;
  width: 311px;
  height: 58px;
  border: 1px solid #9F9F9F;
  border-radius: 10px;
  font-size: 18px;
}

.blog__content-right--search button {
  position: absolute;
  top: 50%;
  right: 85px;
  transform: translateY(-50%);
  cursor: pointer;
  background: #fff;
}

.blog__content-right--category {
  margin-top: 45px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 33px;
}

.blog__content-category--row {
  width: 311px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog__content-category--row span {
  font-size: 16px;
  color: #9F9F9F;
}

.blog__content-category--heading, .blog__content-recentPost--heading {
  font-size: 24px;
  font-weight: bold;
}

.blog__content-recentPost--heading {
  margin-bottom: 20px;
}

.blog__content-right--recent {
  margin-top: 58px;
}

.blog__content-recent--container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.blog__content-recent--block {
  display: flex;
  align-items: center;
  gap: 22px;
}

.blog__content-recent--img {
  width: 80px;
  height: 80px;
}

.blog__content-recent--block img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.blog__content-recent--heading {
  font-size: 14px;
  max-width: 120px;
  line-height: 20px;
}

.blog__content-recent--date {
  margin-top: 5px;
  font-size: 12px;
  color: #9F9F9F;
}

.blog__navigation {
  margin-top: 70px;
  padding-bottom: 30px;
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
  transition: 0.3s;
}

.square:hover {
  background: rgba(184, 142, 47, 0.7);
  color: #fff;
}

.next {
  width: 98px;
}

.active {
  color: #fff;
  background: #B88E2F;
}

</style>