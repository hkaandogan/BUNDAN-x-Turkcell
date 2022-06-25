<template>
  <v-slide-item v-slot="{ active, toggle }">
    <v-card
      :color="active ? '#dd6c03' : 'white'"
      @click="toggle"
      v-on:click="getproducts(cname)"
      class="pa-4"
      :height="$vuetify.breakpoint.mobile? '75' : '100'"
      :width="$vuetify.breakpoint.mobile? '75' : '100'"
      v-bind:style="$vuetify.breakpoint.mobile? 'border-radius:30px !important;':'border-radius:35px !important;'"
    >
      <v-container class="pa-0">
        <v-img :src="active ? whicon : icon"/>
       </v-container>
    </v-card>
  </v-slide-item>
</template>

<script>
export default {
  name: "Category",
  props: ['icon','whicon','cname','passdata','getproducts','isfirst'],
  mounted() {
    if(this.isfirst){
      this.getproducts(this.cname);
      console.log(this.$scopedSlots.default());
    }
  }
}
</script>

<style scoped>
.v-card--link:before {
  background: none;
}
</style>