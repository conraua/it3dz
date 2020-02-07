<template>
  <div class="about">
    <div class="row">
      <div class="col">
        <router-link to="/"> Return </router-link>
      </div>
      <div class="col">
        <h3>
          {{ this.$store.getters.returnProduct[this.$route.params.id].name }}
        </h3>  
        <div>
          <img :src = this.$store.getters.returnProduct[this.$route.params.id].image>
        </div>
        <span id="desc">
          {{ this.$store.getters.returnProduct[this.$route.params.id].desc }}
        </span>  
      </div>
      <div class="col">
      </div>  
    </div>
  </div>
</template>

<style scoped>
  h3 {
    color: pink;
  }
  img {
    vertical-align: middle;
    width: 200px;
    height: 200px;
  }
  #desc {
    vertical-align: middle;
    font-size: medium;
    text-align: justify;
    color: lime;
  }
</style>