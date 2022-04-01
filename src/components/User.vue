<template>
  <div class="user">
    <PartHead index="0"></PartHead>
    <div class="the_name">
      <router-link to class="to_back">
        <i @click="$router.back(-1)" class="el-icon-arrow-left">返回</i>
      </router-link>
      <svg
        t="1647229233539"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2242"
        width="200"
        height="200"
      >
        <path
          d="M683.195363 567.615469v349.144399h73.369442V789.975017c117.268312 1.739582 176.721095-3.479165 193.195962-103.55631 5.218747-29.265914-5.218747-62.113321-18.214449-80.123114-38.680124-52.392126-155.027481-39.396423-248.350955-38.680124zM756.564805 730.624563v-101.816728c54.438693-1.739582 112.049565-7.776956 121.566103 36.224243 15.656241 73.574098-60.373738 67.332068-121.566103 65.592485zM541.879884 569.355051c0.818627 115.52873 0.818627 231.876087 1.739582 347.404817h71.629859V567.615469c-24.149495 1.023284-48.401319 1.023284-73.369441 1.739582zM680.739482 102.123713c-113.072849 112.868192-225.838713 224.917758-339.730189 337.990607V102.123713H67.690217c0.818627 22.409913 0.818627 45.638453 1.739582 68.150695h66.411112v745.973818c271.579494-271.784151 542.340362-542.545018 813.919856-814.124513H680.739482z"
          p-id="2243"
          fill="#ffd700"
        ></path>
      </svg>
      <p>
        尊贵的宇宙、银河系、太阳系、地球、中国、
        <br />
        铁岭、莲花村、池水沟子vip用户<span>{{ name }}</span
        >你好！！！ <br />您的账户剩余使用时间还剩:<span>{{ balance }}</span
        >！！！
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//用户中心页
import PartHead from "./part/PartHead.vue";
import Footer from "./part/Footer.vue";
import axiosHttp from "../http/api";

export default {
  name: "User",
  components: {
    PartHead,
    Footer,
  },
  data() {
    return {
      name: this.$store.state.name,
      balance: "",
    };
  },
  created() {
    var _this = this;
    axiosHttp({
      url: "/users",
      method: "get",
    })
      .then(function (response) {
        _this.balance = response.data.balance;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.to_back {
  width: 40%;
  margin-bottom: 50px;
}
.the_name {
  margin-top: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.the_name p {
  color: #999;
  line-height: 50px;
}
.the_name p span {
  color: red;
}
</style>
