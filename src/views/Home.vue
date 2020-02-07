<template>
  <div class="home">
    <div class="row">
      <div id="input" class="col-md-12">
        <div class="row">
          <div class="col-md-4"/>
          <div class="col-md-4">
            <input v-model.trim="inputSearch" type="text" placeholder="Поиск по названию товара">
          </div>
          <div class="col-md-4"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div is="Cardholder" v-for="product in filteredProducts" :product="product" :key="product.id"/>
    </div>
  </div>
</template>

<script>
import Cardholder from '@/components/Cardholder.vue'

export default {
  name: 'home',
  components: {
    Cardholder
  },
  data: function() {
    return {
      inputSearch: "",

    }
  },
  computed: {
    filteredProducts: function() {
      let that = this;
      return this.$store.getters.returnProduct.filter(function(product) {
        return ((product.name.toLowerCase().indexOf(that.inputSearch.toLowerCase()) !== -1) ||
          (product.description.toLowerCase().indexOf(that.inputSearch.toLowerCase()) !== -1));
      });
    }
  }
}
</script>
