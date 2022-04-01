<template>
  <div>
    <PartHead index="4"></PartHead>
    <el-row class="seach">
      <el-col type="flex" :xs="22" :sm="22" :md="10" :lg="10" :xl="10">
        <el-button slot="append" icon="el-icon-search"></el-button>
        <el-input placeholder="请输入搜索的题目" v-model="seach" clearable>
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="seachOneAxios(1)"
          ></el-button>
        </el-input>
        <p class="screen" @click="screenFn">
          类型筛选
          <i v-show="isScreen" class="el-icon-caret-bottom"></i>
          <i v-show="!isScreen" class="el-icon-caret-top"></i>
        </p>
        <div class="seach_btn" v-show="isScreen">
          <el-button
            type="success"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'HTML')"
          >
            HTML
          </el-button>
          <el-button
            type="danger"
            icon="el-icon-search"
            plain
            @click="seachTwoAxios(1, 'HTML5')"
            >HTML5</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'JavaScript')"
          >
            JavaScript
          </el-button>
          <el-button
            type="warning"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'jQuery')"
          >
            jQuery
          </el-button>
          <el-button
            type="warning"
            icon="el-icon-search"
            plain
            @click="seachTwoAxios(1, 'CSS3')"
            >CSS3</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'CSS')"
          >
            CSS
          </el-button>
          <el-button
            type="danger"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'Vue')"
          >
            Vue
          </el-button>
          <el-button
            type="danger"
            icon="el-icon-search"
            plain
            @click="seachTwoAxios(1, 'Node')"
          >
            Node
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            plain
            @click="seachTwoAxios(1, 'Vue3')"
          >
            Vue3
          </el-button>
          <el-button
            type="success"
            icon="el-icon-search"
            plain
            @click="seachTwoAxios(1, 'Express')"
          >
            Express
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'React')"
          >
            React
          </el-button>
          <el-button
            type="danger"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'Git')"
          >
            Git
          </el-button>
          <el-button
            type="success"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'ElementUI')"
          >
            ElementUI
          </el-button>
          <el-button
            type="warning"
            icon="el-icon-search"
            @click="seachTwoAxios(1, 'TypeScript')"
          >
            TypeScript
          </el-button>
          <el-button
            type="danger"
            icon="el-icon-search"
            plain
            @click="seachTwoAxios(1, 'Angular')"
          >
            Angular
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="coursepage">
      <el-row v-show="isShow">
        <p class="null_text">暂无数据</p>
      </el-row>
      <el-col
        v-for="(item, index) in questionsData"
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
              path: '/brushquestions',
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
              path: '/brushquestions',
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
          :current-page="currentPage"
          layout="prev, pager, next"
          @current-change="changeState"
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
//文章详情页

import axiosHttp from "../http/api";
import PartHead from "./part/PartHead.vue";
import Footer from "./part/Footer.vue";

export default {
  name: "QuestionsPage",
  components: {
    PartHead,
    Footer,
  },
  data() {
    return {
      data: "",
      questionsData: [],
      changenum: 0,
      seach: "",
      seachIcon: "",
      currentPage: 1,
      queryType: 1,
      isShow: false,
      isScreen: true,
    };
  },
  methods: {
    changeState(val) {
      var _this = this;
      if (_this.queryType == 1) {
        _this.getList(val);
      } else if (_this.queryType == 2) {
        _this.seachOneAxios(val);
      } else {
        _this.seachTwoAxios(val, _this.seachIcon);
      }
    },
    screenFn() {
      this.isScreen = !this.isScreen;
    },
    getList(index) {
      var _this = this;
      _this.queryType = 1;
      _this.currentPage = index;
      axiosHttp({
        url: "/list/questions",
        method: "get",
        params: {
          page: index,
        },
      })
        .then(function (response) {
          _this.changenum = response.data.questionsnum;
          _this.questionsData = response.data.questionsData;
          _this.isShowFn(response.data.questionsData.length);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    seachTwoAxios(index, seachIcon) {
      var _this = this;
      _this.seachIcon = seachIcon;
      _this.queryType = 3;
      _this.currentPage = index;
      axiosHttp({
        url: "/list/questionskeyword",
        method: "get",
        params: {
          page: index,
          type: seachIcon,
        },
      })
        .then(function (response) {
          _this.changenum = response.data.questionsnum;
          _this.questionsData = response.data.questionsData;
          _this.isShowFn(response.data.questionsData.length);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    seachOneAxios(page) {
      var _this = this;
      _this.queryType = 2;
      _this.currentPage = page;
      axiosHttp({
        url: "/list/questionsseach",
        method: "get",
        params: {
          seach: _this.seach,
          page: page,
        },
      })
        .then(function (response) {
          _this.changenum = response.data.questionsnum;
          _this.questionsData = response.data.questionsData;
          _this.isShowFn(response.data.questionsData.length);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    isShowFn(data) {
      if (data > 0) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
  created() {
    this.getList(1);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  font-size: 14px;
  color: #999;
}
.page {
  text-align: center;
  margin-top: 30px;
}
.seach {
  margin-top: 130px;
  display: flex;
  justify-content: center;
}
.seach_btn {
  margin-top: 30px;
}
.el-button + .el-button {
  margin: 10px 5px;
}
.title_text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.null_text {
  text-align: center;
  font-size: 20px;
  margin: 60px;
  color: #666;
}
.screen {
  font-size: 16px;
  color: #999;
  cursor: pointer;
  margin: 25px 0 10px 0;
}
</style>
