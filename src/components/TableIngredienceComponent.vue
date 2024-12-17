<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TableIngredienceComponent",
  props:{
    name:String,
    quantity:String
  }
})
</script>

<template>
  <tr>
    <td style="background-color:#B0EDFF; font-size: 20px;">{{ name }}</td>
    <td style="background-color: #B0EDFF;font-size: 20px;font-weight: 700;">{{ quantity }} </td>
  </tr>
</template>

<style scoped>

</style>