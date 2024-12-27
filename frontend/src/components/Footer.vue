<template>
  <div>
    <div class="footer_line"></div>
    <div class="container">
      <footer id="footer" class="footer">
          <div class="footer_left">
            <img src="../assets/imgs/footer-logo.png" alt="" class="footer_logo">
            <div class="footer_left--content">
              <p>400 University Drive Suite 200 Coral </p>
              <p>Gables</p>
              <p>FL 33134 USA</p>
            </div>
          </div>
          <div class="footer_right">
            <div class="col">
              <div class="footer_right--title">Links</div>
              <div class="footer_right--content">
                <RouterLink to="/" class="footer_link">Home</RouterLink>
                <RouterLink to="shop" class="footer_link">Shop</RouterLink>
                <RouterLink to="about" class="footer_link">About</RouterLink>
                <RouterLink to="contact" class="footer_link">Contact</RouterLink>
              </div>
            </div>
            <div class="col">
              <div class="footer_right--title">Help</div>
              <div class="footer_right--content">
                <RouterLink to="/" class="footer_link">Payment Options</RouterLink>
                <RouterLink to="shop" class="footer_link">Returns</RouterLink>
                <RouterLink to="about" class="footer_link">Privacy Policies</RouterLink>
              </div>
            </div>
            <div class="col">
              <div class="footer_right--title">Newsletter</div>
              <div class="footer_right--content">
                <input type="text" class="footer_input" placeholder="Enter Your Email Address">
                <a href="#" class="subcribe">SUBSCRIBE</a>
              </div>
            </div>
          </div>
      </footer>
     <div class="footer_line"></div>
     <p style="margin-top: 35px; font-weight: bold;">2023 furino. All rights reverved</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.footer {
  display: flex;
  padding: 48px 0;
}

.footer_logo {
  width: 85px;
  height: 36px;
  margin-bottom: 50px;
  object-fit: contain;
}

.footer_left--content {
  color: #9F9F9F;
  line-height: 24px;
}

.footer_right {
  display: flex;
  gap: 170px;
  margin-left: 212px;
}

.footer_right--title {
  margin-top: 9px;
  margin-bottom: 65px;
  font-size: 16px;
  color: #9F9F9F;
}

.footer_right--content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.footer_link {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s;
}

.footer_link:hover, .subcribe:hover {
  color: #B88E2F;
  opacity: 0.9;
  border-color: #fff;
}

.footer_input, .subcribe {
  font-size: 14px;
}

.footer_input {
  width: 200px;
  outline: none;
  border: none;
  border-bottom: 1px solid #000000;
  color: #9F9F9F;
}

.subcribe {
  position: absolute;
  top: 2px;
  right: -100px;
  width: 80px;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #000000;
  padding-bottom: 2.5px;
  color: #000000;
  transition: all 0.2s;
}

.footer_line {
  width: 100%;
  height: 1px;
  background: #D9D9D9;
}

</style>