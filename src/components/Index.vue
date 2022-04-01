<template>
  <div class="index">
    <PartHead index="1"></PartHead>
    <Carousel></Carousel>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
// 首页

import PartHead from "./part/PartHead.vue"
import List from "./part/List.vue"
import Carousel from "./part/Carousel.vue"
import Footer from "./part/Footer.vue"

export default {
  name: 'Index',
  components:{
    PartHead,
    List,
    Carousel,
    Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
