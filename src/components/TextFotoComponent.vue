<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TextFotoComponent",
  props: {
    image:String,
    text:String
  }
})
</script>

<template>
  <div class="col-lg-6">
    <div class="p-2">
      <img  class="img-fluid photo11" :src="image" alt="">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="p-5 text-hlavny1">
      <p> {{text}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>