<template>
  <el-row class="login" :gutter="24" type="flex" justify="center">
    <el-col class="tocenter" :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
      <div class="login_top grid-content">
        <h3>趣编程后台</h3>
      </div>
      <form class="Login_form grid-content">
        <input type="text" placeholder="用户名" v-model="name" />
        <input type="password" placeholder="密码" v-model="psd" />
        <button type="submit" class="btn" @click.prevent="login">登录</button>
        <p class="msg">{{ msg }}</p>
      </form>
    </el-col>
  </el-row>
</template>

<script>
//后台管理登录页

import axiosHttp from "../http/api"

export default {
  name: "Login",
  data() {
    return {
      name: "",
      psd: "",
      msg: "",
    };
  },
  methods: {
    login() {
      if (this.name == "") {
        this.msg = "请输入用户名";
        return false;
      }
      if (this.psd == "") {
        this.msg = "请输密码";
        return false;
      }
      var _this = this;
      axiosHttp({
        url: "/admin",
        method: "post",
        data: {
          name: _this.name,
          psd: _this.psd,
        },
      })
        .then(function (response) {
          if (response.data.state == "success") {
            localStorage.setItem('authentication', response.data.authentication)
            _this.msg = "登录成功即将跳转";
            _this.$router.push("/adminpage");
          } else {
            _this.msg = "登录失败请验证用户名密码";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tocenter {
  position: relative;
}
.login {
  align-items: center;
  height: 100vh;
  margin: 0 !important;
}
.login_top {
  height: 108px;
  background: #06f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.login_top h3,
.login_top p {
  margin: 0;
  padding: 0;
}
.login_top h3 {
  color: #fff;
  font-size: 25px;
}
.login_top p {
  color: #fff;
  font-size: 16px;
}
.close {
  position: absolute;
  top: 13px;
  right: 25px;
}
.Login_form {
  padding: 20px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Login_form input {
  color: #121212;
  height: 48px;
  line-height: 24px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  outline: none;
  font-size: 16px;
}
.btn {
  color: #fff;
  background: #06f;
  font-size: 16px;
  height: 40px;
  margin-top: 20px;
  border-radius: 3px;
  border: none;
}
.msg {
  font-size: 16px;
  color: red;
  text-align: center;
}
</style>
