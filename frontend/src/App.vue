<template>
  <Header v-if="!errorPage" />
  <router-view></router-view>
  <Footer v-if="!errorPage" />
</template>

<script setup>
import axios from 'axios';
import { ref, provide, onMounted, watch } from 'vue';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useRoute } from 'vue-router';

// Call API 
const items = ref([])

const getAllItems = async () => {
  const storedItems = localStorage.getItem("items")
  if (storedItems) {
    items.value = JSON.parse(storedItems)
  } else {
    try {
      const res = await axios.get("http://localhost:3001/items")
      items.value = res.data
      localStorage.setItem("items", JSON.stringify(res.data))
      console.log(1)
   }
    catch(err) {
      console.log(err)
    }
  }
 
}

provide("items", items)

onMounted(() => {
  getAllItems()
})

// Indentity Error Page 
const route = useRoute()
let errorPage = ref("")

watch(() => route.name, (newRoute) => {
  if (newRoute === "Error") {
    errorPage.value = true
  } else {
    errorPage.value = false
  }
})

</script>


<style>

</style>