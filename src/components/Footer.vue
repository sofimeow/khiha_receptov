<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <footer class="foot" >
    <div class="container p-3">
      <section class="mb-2" style="text-align: center;">
        <p style="text-align: center; font-weight: bold; font-family:'Montserrat', sans-serif; " >SOCUISINE</p>
        <p style="text-align: center; font-size: 13px; font-family:'Montserrat', sans-serif;">
          Na tejto stránke nájdete recepty na najobľúbenejšie ukrajinské jedlá.</p>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © Sofiia Pustovoitova
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style scoped>

</style>