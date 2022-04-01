<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <el-row class="top">
          <el-col v-show="isShow" :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <el-form
              label-position="left"
              label-width="80px"
              :model="formLabelAlign"
            >
              <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="formLabelAlign.phone"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col>
            <el-button
              class="btn"
              v-show="!isShow"
              type="primary"
              @click="addOne"
            >
              新增用户
            </el-button>
            <el-button
              class="btn"
              v-show="isShow"
              type="primary"
              @click="addTwo"
            >
              确定
            </el-button>
          </el-col>
        </el-row>
        <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="table">
          <h3>用户列表</h3>
          <el-table :data="tableData" max-height="400">
            <el-table-column prop="time" label="日期"> </el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
            <el-table-column prop="phone" label="手机号"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.prevent="deleteRow(scope.row._id)"
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <el-pagination
          class="page"
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="total"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="视频教程管理" name="second">
        <el-row class="top">
          <el-col>
            <router-link
              :to="{
                path: '/edit',
              }"
            >
              <el-button class="btn" type="primary">新建教程</el-button>
            </router-link>
          </el-col>
        </el-row>
        <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="table">
          <h3>教程列表</h3>
          <el-table :data="courseData" max-height="400">
            <el-table-column prop="title" label="名称"> </el-table-column>
            <el-table-column prop="time" label="时间"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.prevent="deleteRowTwo(scope.row._id)"
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
                <router-link
                  :to="{
                    path: '/edit',
                    query: {
                      key: scope.row._id,
                    },
                  }"
                >
                  <el-button type="text" size="small" class="edit">
                    编辑
                  </el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <el-pagination
          class="page"
          background
          layout="prev, pager, next"
          @current-change="courseChange"
          :total="coursenum"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="文章管理" name="third">
        <el-row class="top">
          <el-col>
            <router-link
              :to="{
                path: '/articlebs',
              }"
            >
              <el-button class="btn" type="primary">新建文章</el-button>
            </router-link>
          </el-col>
        </el-row>
        <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="table">
          <h3>文章列表</h3>
          <el-table :data="articleData" max-height="400">
            <el-table-column prop="title" label="名称"> </el-table-column>
            <el-table-column prop="time" label="时间"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.prevent="deleteRowThree(scope.row._id)"
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
                <router-link
                  :to="{
                    path: '/articlebs',
                    query: {
                      key: scope.row._id,
                    },
                  }"
                >
                  <el-button type="text" size="small" class="edit">
                    编辑
                  </el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <el-pagination
          class="page"
          background
          layout="prev, pager, next"
          @current-change="articleChange"
          :total="coursenum"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="刷题管理" name="fourth">
        <el-row class="top">
          <el-col>
            <router-link
              :to="{
                path: '/questions',
              }"
            >
              <el-button class="btn" type="primary">新建题目</el-button>
            </router-link>
          </el-col>
        </el-row>
        <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="table">
          <h3>题目列表</h3>
          <el-table :data="questionsData" max-height="400">
            <el-table-column prop="title" label="名称"> </el-table-column>
            <el-table-column prop="time" label="时间"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.prevent="deleteRowFour(scope.row._id)"
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
                <router-link
                  :to="{
                    path: '/questions',
                    query: {
                      key: scope.row._id,
                    },
                  }"
                >
                  <el-button type="text" size="small" class="edit">
                    编辑
                  </el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <el-pagination
          class="page"
          background
          layout="prev, pager, next"
          @current-change="questionsChange"
          :total="questionsnum"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
//后台管理主页

import axiosHttp from "../http/api";

export default {
  name: "Details",
  data() {
    return {
      activeName: "first",
      tableData: [],
      isShow: false,
      formLabelAlign: {
        name: "",
        phone: "",
        time: "",
      },
      page: 1,
      page2: 1,
      page3: 1,
      page4: 1,
      total: 0,
      coursenum: 0,
      courseData: [],
      articlenum: 0,
      articleData: [],
      questionsnum:0,
      questionsData: []
    };
  },
  methods: {
    //点击导航获取对应数据
    handleClick(tab) {
      if (tab.index == "0") {
        this.initPage(this.page);
      }
      if (tab.index == "1") {
        this.course(this.page2);
      }
      if (tab.index == "2") {
        this.articlebs(this.page3);
      }
      if (tab.index == "3") {
        this.questions(this.page4);
      }
    },
    //教程列表获取
    course(index) {
      var _this = this;
      axiosHttp({
        url: "/adminpage/course",
        method: "get",
        params: {
          page: index,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          _this.coursenum = response.data.coursenum
          _this.courseData = response.data.courseData;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //文章列表获取
    articlebs(index) {
      var _this = this;
      axiosHttp({
        url: "/adminpage/article",
        method: "get",
        params: {
          page: index,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          _this.articlenum = response.data.articlenum;
          _this.articleData = response.data.articleData;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //获取题目列表
    questions(index) {
      var _this = this;
      axiosHttp({
        url: "/adminpage/questions",
        method: "get",
        params: {
          page: index,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          _this.questionsnum = response.data.questionsnum;
          _this.questionsData = response.data.questionsData;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //删除用户
    deleteRow(index) {
      var _this = this;
      axiosHttp({
        url: "/adminpage/delete",
        method: "post",
        data: {
          id: index,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          if (response.data.status == "success") {
            _this.$message({
              message: "删除成功",
              type: "success",
            });
            _this.initPage(_this.page);
          } else {
            _this.$message.error("删除失败");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //删除教程
    deleteRowTwo(index) {
      var _this = this;
      axiosHttp({
        url: "/adminpage/deletecourse",
        method: "post",
        data: {
          id: index,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          if (response.data.status == "success") {
            _this.$message({
              message: "删除成功",
              type: "success",
            });
            _this.course(_this.page2);
          } else {
            _this.$message.error("删除失败");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //删除文章
    deleteRowThree(index) {
      var _this = this;
      axiosHttp({
        url: "/adminpage/deletearticle",
        method: "post",
        data: {
          id: index,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          if (response.data.status == "success") {
            _this.$message({
              message: "删除成功",
              type: "success",
            });
            _this.articlebs(_this.page3);
          } else {
            _this.$message.error("删除失败");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //删除题目
    deleteRowFour(index) {
      var _this = this;
      axiosHttp({
        url: "/adminpage/deletequestions",
        method: "post",
        data: {
          id: index,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          if (response.data.status == "success") {
            _this.$message({
              message: "删除成功",
              type: "success",
            });
            _this.questions(_this.page4);
          } else {
            _this.$message.error("删除失败");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //添加用户按钮切换
    addOne() {
      this.isShow = !this.isShow;
    },
    //格式化时间
    dateFormat(thisDate, fmt) {
      var o = {
        "M+": thisDate.getMonth() + 1,
        "d+": thisDate.getDate(),
        "h+": thisDate.getHours(),
        "m+": thisDate.getMinutes(),
        "s+": thisDate.getSeconds(),
        "q+": Math.floor((thisDate.getMonth() + 3) / 3),
        S: thisDate.getMilliseconds(),
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (thisDate.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    },
    //添加用户
    addTwo() {
      if (this.formLabelAlign.name == "") {
        this.$message.error("用户名不能为空");
        return false;
      }
      if (this.formLabelAlign.phone == "") {
        this.$message.error("手机号不能为空");
        return false;
      }
      this.formLabelAlign.time = this.dateFormat(new Date(), "yyyy/MM/dd");
      this.formLabelAlign.authentication = localStorage.getItem('authentication')
      var _this = this;
      axiosHttp({
        url: "/adminpage/add",
        method: "post",
        data: _this.formLabelAlign,
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          if (response.data.status == "success") {
            _this.$message({
              message: "新增成功",
              type: "success",
            });
            _this.initPage(_this.page);
          } else {
            _this.$message.error("新增失败");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //初始化获取用户列表
    initPage(num) {
      var _this = this;
      axiosHttp({
        url: "/adminpage/userdata",
        method: "get",
        params: {
          page: num,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          _this.tableData = response.data.usersData;
          _this.total = response.data.usernum;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //点击用户管理分页获取数据
    handleCurrentChange(val) {
      this.initPage(val);
      this.page = val;
    },
    //点击教程管理分页获取数据
    courseChange(val) {
      this.course(val);
      this.page2 = val;
    },
    //点击文章管理分页获取数据
    articleChange(val) {
      this.articlebs(val);
      this.page3 = val;
    },
    //点击刷题管理分页获取数据
    questionsChange(val) {
      this.questions(val);
      this.page4 = val;
    },
  },
  created() {
    //初始化请求用户列表
    this.initPage(1);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tabs {
  padding: 30px;
}
.btn {
  margin: 30px 0;
}
.top {
  margin-top: 30px;
}
.edit {
  margin-left: 0;
}
.page {
  text-align: center;
  margin-top: 30px;
}
</style>
