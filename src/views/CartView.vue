<script lang="ts">
import {defineComponent} from 'vue'
import {useCounter} from "@/stores/counter.ts";
import CartCard from "@/components/CartCard.vue";

export default defineComponent({
  name: "CartView",
  components: {CartCard},
  data(){
    return{
      counter: useCounter(),
    }
  },
})
</script>

<template>
  <div class="container mt-5" style="padding-bottom: 30px">
    <h1 class="text-center mb-4">Váš nákupný košík</h1>
    <div class="mt-5 d-flex justify-content-between align-items-center">
      <h5>Celkový počet produktov: <strong>{{ counter.getCount }}</strong></h5>
      <h4>Celková suma: <strong>{{ counter.getPrice }} $</strong></h4>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <CartCard v-for="(item, index) in counter.cartProducts" :key="index" :product="item" />
    </div>
    <div class="text-center mt-4">
      <RouterLink to="/shop">
        <button class="btn btn-primary">Späť do obchodu</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>