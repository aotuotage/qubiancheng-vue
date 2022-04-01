<template>
  <div>
    <PartHead index="3"></PartHead>
    <el-row class="details">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="to_black">
          <router-link to>
            <i @click="$router.back(-1)" class="el-icon-arrow-left">返回</i>
          </router-link>
          <h3>{{ data.title }}</h3>
          <p class="inner_p">作者:趣编程</p>
          <p class="inner_p">时间: {{ data.time }}</p>
          <div class="details_html" v-html="inHtml"></div>
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

// import 'prismjs/themes/prism.css'

export default {
  name: "Details",
  components: {
    PartHead,
    Footer,
  },
  data() {
    return {
      data: "",
      inHtml:''
    };
  },
  methods: {
    //替换code的class实现Prism高亮
    replaceHtml(htmlContent) {
      let reg = new RegExp("<pre", "g"); //创建正则RegExp对象
      let stringObj = htmlContent;
      let newstr = stringObj.replace(
        reg,
        `<pre class="line-numbers language-javascript"`
      );
      return newstr;
    },
  },
  created() {
    var _this = this;
    axiosHttp({
      url: "/details",
      method: "get",
      params: {
        key: _this.$route.query.key,
      },
    })
      .then(function (response) {
        _this.data = response.data[0];
        var newhtml = _this.replaceHtml(response.data[0].ehtml);
        _this.inHtml = newhtml;
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
  },
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
.details h3 {
  font-size: 28px;
  text-align: center;
  color: #404040;
  margin-top: 50px;
}
.inner_p {
  font-size: 14px;
  color: #666;
  text-align: right;
}
.details_html {
  margin-top: 30px;
}
/* table 样式 */
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

/* blockquote 样式 */
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
/* code 样式 */
/* code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
pre code {
  display: block;
}
pre {
  background-color: #f1f1f1 !important;
} */
/* ul ol 样式 */
ul,
ol {
  margin: 10px 0 10px 20px;
}
</style>
