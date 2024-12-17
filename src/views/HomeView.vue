<script lang="ts">
import {defineComponent} from 'vue'
import HlavneFoto from "@/components/HlavneFoto.vue";
import data from "@/data/hlavnadata.json"
import TextFotoComponent from "@/components/TextFotoComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {CarouselComponent, TextFotoComponent, HlavneFoto},
  data(){
    return{
      textphoto: data
    }
  }
})
</script>

<template>
  <HlavneFoto/>
  <div class="zag">
    <h2 class="fw-bold" style="font-size: 30px; color: #0A5B73;">Ukrajinská kuchyňa</h2>
  </div>
  <div class="container text-photobloky text-center"><!--text+foto-->
    <div class="row gy-5 align-items-center">
      <TextFotoComponent v-for="(photo,index) in textphoto" :key="index" :image="photo.image" :text="photo.text" />
    </div>
  </div>
<CarouselComponent/>
</template>

<style scoped>

</style>