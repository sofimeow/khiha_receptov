<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HlavneFoto"
})
</script>

<template>
  <div class="container hlavny-cont text-center"> <!--title-->
    <div  class="row baza">
      <div class="col-lg-6 zagolovok">
        <div><h1 class="fw-bold "style="font-size: 50px;">SOCUISINE</h1></div>
        <h2 class="fw-bold" style="font-size: 50px; font-family: 'Ephesis', cursive;">najlepšie recepty na svete</h2>
      </div>
      <div class="col-lg-6">
        <img class="img-fluid hlavna-photo" src="@/assets/img/MyCollages.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>