<template>
  <div v-html="ifdata">
  </div>
</template>

<script>

export default {
  data () {
    return {
      ifdata: '4555'
    }
  },
  mounted () {
    var _this = this;
    window.addEventListener('message',function(e){
      var Data=e.data;
      _this.ifdata = Data

    

    },false);
  },
  // computed:{
  //   data: function () {
  //     // `this` 指向 vm 实例
  //     return this.ifdata
  //   }
  // }
}
</script>