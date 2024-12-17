<script lang="ts">
import {defineComponent} from 'vue'
import { useCounter } from '@/stores/counter';

export default defineComponent({
  name: "CardsComponent",
  data() {
    return {
      counter: useCounter(),
    }
  },
  props:{
    product: Object
  }
})
</script>

<template>


  <div class="col">
    <div class="card">
      <img :src="product.image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.productname }}</h5>
        <p class="card-text">{{product.textcard}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-success">{{product.price}}$</span>
          <button @click="counter.addToCart(product)" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>