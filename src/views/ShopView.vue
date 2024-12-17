<script lang="ts">
import {defineComponent} from 'vue'
import datacards from "@/data/datacards.json"
import CardsComponent from "@/components/CardsComponent.vue";
import PripravaCard from "@/components/PripravaCard.vue";

export default defineComponent({
  name: "ShopView",
  components: {PripravaCard, CardsComponent},
  data(){
    return{
      products:datacards
    }
  }
})
</script>

<template>
  <div>
    <h1 class="text-center mb-4" style="text-transform: uppercase; font-weight: bold; color: #0A5B73;">SHOP</h1>
    <div class="container">
      <div class="row row-cols-2 row-cols-md-3 g-4">
        <CardsComponent v-for="(item, index) in products" :key="index" :product="item" />
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>