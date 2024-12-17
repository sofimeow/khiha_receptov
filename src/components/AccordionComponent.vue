<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AccordionComponent",
  props: {
    id: String,
    databstarget: String,
    ariacontrols: String,
    stepnumber: String,
    step: String
  }
})
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button style="background-color:#0A5B73; color :  white" class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="databstarget" aria-expanded="true" :aria-controls="ariacontrols">
        <strong>{{stepnumber}}</strong>
      </button>
    </h2>
    <div :id="id" class="accordion-collapse collapse">
      <div class="accordion-body">
        {{step}}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>