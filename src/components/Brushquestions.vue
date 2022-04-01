<template>
  <div>
    <PartHead index="4"></PartHead>
    <el-row class="details">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="to_black">
          <router-link to>
            <i @click="$router.back(-1)" class="el-icon-arrow-left">返回</i>
          </router-link>
          <h3>{{data.title}}</h3>
          <p class="inner_p">作者:趣编程</p>
          <p class="inner_p">时间: {{data.time}}</p>
          <div class="details_html" v-html="inHtml"></div>
          <p class="answer" @click="answer">
            答案及解析
            <svg v-show="isShow" class="Zi--TriangleDown" fill="currentColor" viewBox="0 0 24 24" width="10" height="10"><path d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z" fill-rule="evenodd"></path></svg>
            <svg v-show="!isShow" class="Zi--TriangleUp VoteButton-TriangleUp" fill="currentColor" viewBox="0 0 24 24" width="10" height="10"><path d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z" fill-rule="evenodd"></path></svg>
          </p>
          <div v-show="isShow" class="details_html" v-html="inHtml2"></div>
        </div>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>

<script>
//文章详情页

import axiosHttp from "../http/api";
import PartHead from "./part/PartHead.vue";
import Footer from "./part/Footer.vue";

export default {
  name: "Details",
  components: {
    PartHead,
    Footer,
  },
  data() {
    return {
      data: "",
      inHtml: "",
      inHtml2: "",
      isShow: false
    };
  },
  methods:{
    answer(){
      this.isShow = !this.isShow;
    },
    //替换code的class实现Prism高亮
    replaceHtml(htmlContent) {
      let reg = new RegExp("<pre", "g"); //创建正则RegExp对象
      let stringObj = htmlContent;
      let newstr = stringObj.replace(
        reg,
        `<pre class="line-numbers language-javascript"`
      );
      return newstr;
    }
  },
  created() {
    var _this = this;
    axiosHttp({
      url: "/brushquestions",
      method: "get",
      params: {
        key: _this.$route.query.key,
      },
    })
      .then(function (response) {
        _this.data = response.data[0];
        var newhtml = _this.replaceHtml(response.data[0].ehtml);
        var newhtml2 = _this.replaceHtml(response.data[0].ehtml2);
        _this.inHtml = newhtml;
        _this.inHtml2 = newhtml2;
        document.title = response.data[0].title;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  watch: {
    data(newValue, oldValue) {
      this.$nextTick(() => {
        Prism.highlightAll();
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details {
  display: flex;
  justify-content: center;
  margin-top: 110px;
  padding: 20px;
}
.details h3{
  font-size:28px;
  text-align:center;
  color: #000;
  margin-top: 50px;
}
.inner_p{
  font-size: 14px;
  color: #666;
  text-align:right;
}
.details_html{
  margin-top:30px;
}
.answer{
  font-size: 18px;
  color: #666;
  cursor: pointer;
  margin-top:30px;
}
</style>
