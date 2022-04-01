<template>
  <div class="head">
    <div class="logo">
      <router-link to="/">
        <img src="../../assets/img/logo.svg" height="30" width="30" alt="" />
        <p>趣编程</p>
      </router-link>
    </div>
    <div class="menu-demo-pr">
      <el-menu
        :default-active="index"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1"> 首页 </el-menu-item>
        <el-menu-item index="2"> 视频教程 </el-menu-item>
        <el-menu-item index="3"> 文章 </el-menu-item>
        <el-menu-item index="4"> 刷题 </el-menu-item>
      </el-menu>
    </div>
    <div class="menu-list">
      <el-menu
        :default-active="index"
        @select="handleSelect"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1"> 首页 </el-menu-item>
        <el-menu-item index="2"> 教程 </el-menu-item>
        <el-menu-item index="3"> 文章 </el-menu-item>
        <el-menu-item index="4"> 刷题 </el-menu-item>
      </el-menu>
    </div>
    <router-link v-show="isShow" class="login" to="/login"> 登录 </router-link>
    <router-link v-show="!isShow" class="login" to="/user">
      {{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PartHead",
  props: {
    index: {
      type: String,
    },
  },
  data() {
    return {
      name: "",
      isShow: true,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // this.$router.push('/coursepage')
      if (key == "1") {
        this.$router.push("/");
      }
      if (key == "2") {
        this.$router.push("/coursepage");
      }
      if (key == "3") {
        this.$router.push("/articlepage");
      }
      if (key == "4") {
        this.$router.push("/questionspage");
      }
    },
  },
  created() {
    if (this.$store.state.name !== "") {
      this.name = this.$store.state.name;
      this.isShow = !this.isShow;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  height: 52px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(18, 18, 18, 0.3);
  position: fixed;
  top: 0;
  z-index: 99;
}
.seach {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 32px;
  color: #999;
  border: 1px solid #ebebeb;
  background-color: hsla(0, 0%, 92.2%, 0.72);
  border-radius: 16px;
}
.login {
  padding: 0 16px;
  font-size: 16px;
  color: #06f;
  text-decoration: none;
  border-left: 1px solid #ebebeb;
}
.logo a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.logo p {
  color: #409eff;
  font-size: 18px;
  margin-left: 10px;
}
.menu-demo-pr {
  width: 60%;
}
.el-menu-demo {
  justify-content: space-around;
  display: flex;
  height: 52px;
}
.el-menu-demo a {
  text-decoration: none;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  height: 52px;
  font-size: 16px;
  color: #333;
}
.el-menu--horizontal > .el-menu-item.is-active {
  color: #06f;
}
.menu-list {
  position: fixed;
  width: 100%;
  height: 54px;
  top: 55px;
  background: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1000px) {
  .menu-demo-pr {
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  .menu-list {
    display: none;
  }
}
</style>
