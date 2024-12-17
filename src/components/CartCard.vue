<script lang="ts">
import {defineComponent} from 'vue'
import {useCounter} from "@/stores/counter.ts";

export default defineComponent({
  name: "CartCard",
  data(){
    return{
      counter: useCounter(),
    }
  },
  props:{
    product: Object
  }
})
</script>

<template>
  <div class="card shadow-sm h-100">
    <img :src="product.image" class="card-img-top" alt="Ukrajinský Borshč" style="height: 200px; object-fit: cover"/>
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">{{product.productname}}</h5>
        <p class="card-text mb-2"><strong>Cena: </strong>{{product.price}}$</p>
      </div>
      <button @click="counter.removeFromCart(product)" class="btn btn-danger mt-3">Odstrániť z košíka</button>
    </div>
  </div>
</template>

<style scoped>

</style>