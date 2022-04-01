<template>
  <div>
    <PartHead index="0"></PartHead>
    <el-row class="Login">
      <el-col class="login_border" :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
        <div class="login_top">
          <h3>登录趣编程</h3>
          <p>购买视频教程请加底部老师微信</p>
          <router-link to>
            <svg
              class="close"
              fill="#fff"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              @click="$router.back(-1)"
            >
              <path
                d="M13.486 12l5.208-5.207a1.048 1.048 0 0 0-.006-1.483 1.046 1.046 0 0 0-1.482-.005L12 10.514 6.793 5.305a1.048 1.048 0 0 0-1.483.005 1.046 1.046 0 0 0-.005 1.483L10.514 12l-5.208 5.207a1.048 1.048 0 0 0 .006 1.483 1.046 1.046 0 0 0 1.482.005L12 13.486l5.207 5.208a1.048 1.048 0 0 0 1.483-.006 1.046 1.046 0 0 0 .005-1.482L13.486 12z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </div>
        <form class="Login_form">
          <input type="text" placeholder="用户名" v-model="name" />
          <input type="password" placeholder="密码" v-model="psd" />
          <button type="submit" class="btn" @click.prevent="login">登录</button>
          <p class="msg">{{ msg }}</p>
        </form>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>

<script>
import PartHead from "./part/PartHead.vue";
import Footer from "./part/Footer.vue";
//登录页
export default {
  name: "Login",
  components: {
    PartHead,
    Footer,
  },
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
      this.axios({
        method: "post",
        url: "http://www.qubiancheng1024.com/login",
        data: {
          name: _this.name,
          psd: _this.psd,
        },
      })
        .then(function (response) {
          if (response.data.status == "success") {
            _this.msg = "登录成功即将跳转";
            _this.$store.commit({
              type: "setStorage",
              data: response.data,
            });
            _this.$router.push("/");
          } else {
            _this.msg = "登录失败请验证用户名密码";
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_border {
  border: 1px solid #ebeef5;
}
.Login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin: 150px 0;
}
.login_top {
  height: 115px;
  background: #06f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
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
  font-size: 15px;
  margin-top: 10px;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
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
