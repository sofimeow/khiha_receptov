<script lang="ts">
import {defineComponent} from 'vue'
import { useCounter } from '@/stores/counter';

export default defineComponent({
  name: "Navigation",
  data() {
    return {
      counter: useCounter(),
    }
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top"> <!--navbar-->
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img  src="@/assets/img/salad.png" width="64px" height="64px" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link p-3 text-white" to="/">DOMOV</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link p-3 text-white" :to="{name:'recipes', params: { slug: 'borsc'}}">BORŠČ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link p-3 text-white" :to="{name:'recipes', params: { slug: 'varenyki'}}">VARENYKI</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link p-3 text-white" :to="{name:'recipes', params: { slug: 'kutia'}}">KUTIA</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link p-3 text-white" to="/shop">SHOP</RouterLink>
          </li>
        </ul>
        <div class="d-flex align-items-center" style="padding-top: 10px">
          <RouterLink to="/cart" class="position-relative me-3" >
            <img src="@/assets/img/shopping-cart.svg" alt="Cart" width="70" height="70"/>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white " style="color: #0A5B73;">{{ counter.getCount }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>