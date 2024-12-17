<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CarouselComponent"
})
</script>

<template>
  <div class="osobna-galeria">
    <h2 class="fw-bold" style="font-size: 30px; color: #0A5B73;">osobná galéria</h2>
  </div>
  <div class="container" style=" padding-bottom: 150px;">
    <div id="carouselExampleCaptions" class="carousel slide"> <!--carousel-slideshow-->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/img/pamp.jpg" class="d-block w-100" style="border-radius: 20px;" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h2 style=" font-weight: bold; text-transform: uppercase;">pampušky</h2>
            <h3 style="font-weight: bold;">s cesnakom</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/borsh.jpg" class="d-block w-100" style="border-radius: 20px;" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h2 style=" font-weight: bold; text-transform: uppercase;">boršč</h2>
            <h3 style="font-weight: bold;">na ohni</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/palacinky.jpg" class="d-block w-100" style="border-radius: 20px;" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h2 style=" font-weight: bold; text-transform: uppercase;">palacinky</h2>
            <h3 style="font-weight: bold;">s mäsom</h3>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>