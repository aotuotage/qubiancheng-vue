<template>
  <div class="footer">
    <h3>趣编程</h3>
    <p>咨询微信</p>
    <img src="../../assets/img/wx.png" alt="">
    <p class="icp_p">冀ICP备2022004296号</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      name: "",
    };
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #333;
  margin-top: 60px;
  color: #fff;
}
.footer img{
  width: 150px;
  height: 150px;
}
.footer h3{
  margin: 20px 0 0 0;
  color: #fff;
}
.footer p{
  line-height: 40px;
  margin: 0px;
  color: #fff;
}
.icp_p{
  font-size: 12px;
  color: #888 !important;
}
</style>
