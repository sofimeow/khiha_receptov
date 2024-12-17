<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PripravaCard",
  props:{
    main:String,
    sub:String
  }
})
</script>

<template>
  <div class="col ramka">
    <div class="p-3">{{ main }} <br>
      <div class="textbo">{{ sub }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>