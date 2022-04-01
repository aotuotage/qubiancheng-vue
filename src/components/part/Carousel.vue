<template>
  <div class="carousel">
    <div class="top_null"></div>
    <el-row type="flex" class="in_row">
      <el-col class="icon" :xs="24" :sm="24" :md="24" :lg="19" :xl="19">
        <el-carousel :interval="4000" type="card" :height="bh + 'px'">
          <el-carousel-item v-for="item in bgm" :key="item.text">
            <a target="_blank" :href="item.hrefurl">
              <img
                ref="bh"
                class="banner"
                :src="item.imgsrc"
                alt=""
                @load="imgload"
              />
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      bh: "",
      name: "",
      isShow: true,
      activeIndex: "1",
      bgm: [
        {
          hrefurl:
            "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.621e3d0dMx5ZK0&ft=t&id=657583034128",
          imgsrc:
            "https://img-1303138867.cos.ap-beijing.myqcloud.com/banner2.jpg",
        },
        {
          hrefurl:
            "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.621e3d0dMx5ZK0&ft=t&id=657583034128",
          imgsrc:
            "https://img-1303138867.cos.ap-beijing.myqcloud.com/banner1.jpg",
        },
        {
          hrefurl:
            "https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.621e3d0dMx5ZK0&ft=t&id=657583034128",
          imgsrc:
            "https://img-1303138867.cos.ap-beijing.myqcloud.com/banner3.jpg",
        },
      ],
    };
  },
  methods: {
    imgload() {
      this.$nextTick(function () {
        this.bh = this.$refs.bh[0].height;
      });
    },
  },
  mounted() {
    var _this = this;
    _this.imgload();
    window.addEventListener(
      "resize",
      function () {
        _this.bh = _this.$refs.bh[0].height;
        _this.imgload();
      },
      false
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top_null {
  height: 120px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner {
  width: 100%;
}
.in_row{
  justify-content: center;
}
</style>
