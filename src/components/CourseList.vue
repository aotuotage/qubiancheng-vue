<template>
  <div>
    <PartHead index="2"></PartHead>
    <el-row class="coursepage">
      <router-link to class="bo_black">
        <i @click="$router.back(-1)" class="el-icon-arrow-left">返回</i>
      </router-link>
      <el-col
        v-for="(item, index) in courseData"
        :key="index"
        :xs="22"
        :sm="22"
        :md="5"
        :lg="5"
        :xl="5"
        :offset="1"
      >
        <el-card class="box-card">
          <router-link
            class="title"
            :to="{
              path: '/course',
              query: {
                key: item._id,
              },
            }"
          >
            <div class="box_img">
              {{ item.title }}
            </div>
          </router-link>
          <router-link
            class="title_text"
            :to="{
              path: '/course',
              query: {
                key: item._id,
              },
            }"
          >
            {{ item.title }}
          </router-link>
          <p>
            {{ item.time }}
          </p>
        </el-card>
      </el-col>
      <el-col>
        <el-pagination
          class="page"
          background
          layout="prev, pager, next"
          @current-change="change"
          :total="changenum"
          :page-size="8"
        >
        </el-pagination>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>

<script>
import axiosHttp from "../http/api";
import PartHead from "./part/PartHead.vue";
import Footer from "./part/Footer.vue";

export default {
  name: "CourseList",
  components: {
    PartHead,
    Footer,
  },
  data() {
    return {
      data: "",
      courseData: [],
      changenum: 0
    };
  },
  methods: {
    getList(index) {
      var _this = this;
      axiosHttp({
        url: "/list/course",
        method: "get",
        params: {
          page: index,
          type: _this.$route.query.type
        },
      })
        .then(function (response) {
          _this.changenum = response.data.coursenum;
          _this.courseData = response.data.courseData;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    change(val) {
      this.getList(val);
    },
  },
  created() {
    this.getList(1);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coursepage {
  margin-top: 80px;
}
@media screen and (min-width: 1200px) {
  .coursepage {
    width: 96%;
  }
}
.box-card {
  margin-top: 60px;
  padding: 0;
}
.box-card a {
  text-decoration: none;
  color: #333;
  margin-top: 20px;
  display: block;
}
.box_img {
  height: 130px;
  background: url("../assets/img/bg.jpg");
  background-size: cover;
  text-shadow: #333 2px 0 0, #333 0 2px 0, #333 -2px 0 0, #333 0 -2px 0;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 0 10px;
}
.box-card p {
  font-size: 16px;
  color: #999;
}
.page {
  text-align: center;
  margin-top: 30px;
}
.bo_black {
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
}
.title_text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
