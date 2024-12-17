<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "InterestingComponent",
  props:{
    interestingFact:String
  }
})
</script>

<template>
  <div class="container">
    <div class="accordion" > <!--accordion-->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button style="background-color:#0A5B73; color :  white" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <strong>Zaujímavý fakt</strong>
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            {{interestingFact}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>