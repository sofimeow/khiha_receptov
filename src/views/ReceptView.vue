<script lang="ts">
import {defineComponent} from 'vue'
import datarecipes from "@/data/datarecipes.json"
import PripravaCard from "@/components/PripravaCard.vue";
import InterestingComponent from "@/components/InterestingComponent.vue";
import TableIngredienceComponent from "@/components/TableIngredienceComponent.vue";
import AccordionComponent from "@/components/AccordionComponent.vue";

export default defineComponent({
  name: "ReceptView",
  components: {AccordionComponent, TableIngredienceComponent, InterestingComponent, PripravaCard},
  props:{
    slug:String, required:true
  },
  computed: {
    recipe() {
      return datarecipes.recipes.find(recipe => recipe.slug === this.slug);
    }
  }
})
</script>

<template>
  <h1 style="text-transform: uppercase; font-weight: bold; text-align: center; padding-top: 20px;color: #0A5B73;">
    {{ recipe.title }}</h1><!--title-->
  <p style=" text-align: center;  font-size: 20px; font-weight: 700;color: #0A5B73;">{{recipe.subtitle }}</p>
  <div class="col-lg-12" style=" text-align: center;">
    <div class="p-3">
      <img style=" text-align: center; width: 850px; margin-bottom: 20px; border-radius: 20px;" class="img-fluid" :src="recipe.mainImage" alt="">
    </div>
  </div>
  <div class="container px-4 text-center">
    <div class="row gx-5">
      <PripravaCard v-for="(item,index) in recipe.priprava" :key="index" :main="item.main" :sub="item.sub" />
    </div>
  </div>
  <InterestingComponent :interestingFact="recipe.interestingFact"/>

  <div class="zag">
    <h2 class="fw-bold" style="font-size: 30px; padding-top: 40px;color: #0A5B73;">INGREDIENCIE</h2>
  </div>
  <div class="container text-center">
    <table class="table table-bordered border-dark" style="table-layout: fixed;">
      <TableIngredienceComponent v-for="(item,index) in recipe.ingredients" :key="index" :name="item.name" :quantity="item.quantity" />
    </table>
  </div>

  <div class="zag">
    <h2 class="fw-bold" style="font-size: 30px; padding-top: 40px;color: #0A5B73;">POSTUP</h2>
  </div>
  <div class="container">
    <div class="accordion" > <!--accordion-->
      <AccordionComponent v-for="(item,index) in recipe.steps" :key="index" :id="item.id" :databstarget="item.databstarget " :ariacontrols="item.ariacontrols" :stepnumber="item.stepnumber" :step="item.step"  />
    </div>
  </div>
  <div class="container">
    <div class="col-lg-12" style=" text-align: center;">
      <div class="p-3">
        <img style=" text-align: center; width: 850px;  border-radius: 20px;" class="img-fluid" :src="recipe.finalImage" alt="">
      </div>
    </div>
  </div>

  <div class="zag">
    <h2 class="fw-bold" style="font-size: 30px; padding-top: 60px;color: #0A5B73; padding-bottom: 40px;">{{recipe.closingText}}</h2>
  </div>

</template>

<style scoped>

</style>