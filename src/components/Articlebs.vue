<template>
  <div class="edit">
    <el-row class="edit_content">
      <el-col class="addmp4" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="to_black">
          <router-link to="/adminpage">
            <i class="el-icon-arrow-left">返回</i>
          </router-link>
        </div>
        <el-input placeholder="请输入标题" v-model="title" class="title">
          <template slot="prepend">标题</template>
        </el-input>
        <p class="type">
        类型:
        <el-select v-model="typeValue" 
        :popper-append-to-body="false"
        filterable placeholder="请选择">
          <el-option
            v-for="item in type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        </p>
        <div id="wangeditor">
          <div ref="editorElem" style="text-align: left"></div>
        </div>
        <br />
        <el-button type="primary" v-show="!isShow" class="btn" @click="btn" round
          >确定</el-button
        >
        <el-button type="primary" v-show="isShow" class="btn" @click="btnTwo" round
          >确定</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
//后台文章编辑页

import axiosHttp from "../http/api";
import wangEditor from "wangeditor";

export default {
  name: "Articlebs",
  data() {
    return {
      title: "",
      editor: null,
      isShow: false,
      id:'',
      type: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
        {
          value: "jQuery",
          label: "jQuery",
        },
        {
          value: "Photoshop",
          label: "Photoshop",
        },
        {
          value: "Vue",
          label: "Vue",
        },
        {
          value: "Vue3",
          label: "Vue3",
        },
        {
          value: "HTML5",
          label: "HTML5",
        },
        {
          value: "CSS3",
          label: "CSS3",
        },
        {
          value: "Node",
          label: "Node",
        },
        {
          value: "Express",
          label: "Express",
        },
        {
          value: "React",
          label: "React",
        },
        {
          value: "Git",
          label: "Git",
        },
        {
          value: "ElementUI",
          label: "ElementUI",
        },
        {
          value: "TypeScript",
          label: "TypeScript",
        },
        {
          value: "Angular",
          label: "Angular",
        },
        {
          value: "小程序",
          label: "小程序",
        },
        {
          value: "编辑器",
          label: "编辑器",
        },
        {
          value: "Other",
          label: "Other",
        },
      ],
      typeValue: "JavaScript",
    };
  },
  methods: {
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
    btn() {
      // 通过代码获取编辑器内容
      let ehtml = this.editor.txt.html();
      let time = this.dateFormat(new Date(), "yyyy/MM/dd");
      var _this = this;
      axiosHttp({
        url: "/article",
        method: "post",
        data: {
          title: _this.title,
          ehtml: ehtml,
          time: time,
          authentication: localStorage.getItem('authentication'),
          type: _this.typeValue,
        },
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
            //回到顶部
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          } else {
            _this.$message.error("新增失败");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    btnTwo(){
      // 通过代码获取编辑器内容
      let ehtml = this.editor.txt.html();
      let time = this.dateFormat(new Date(), "yyyy/MM/dd");
      var _this = this;
      axiosHttp({
        url: "/article/change",
        method: "post",
        data: {
          title: _this.title,
          ehtml: ehtml,
          time: time,
          id: _this.id,
          authentication: localStorage.getItem('authentication'),
          type: _this.typeValue,
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          if (response.data.status == "success") {
            _this.$message({
              message: "修改成功",
              type: "success",
            });
            //回到顶部
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          } else {
            _this.$message.error("修改失败");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created() {
    if (this.$route.query.key) {
      var _this = this;
      _this.isShow = !_this.isShow 
      axiosHttp({
        url: "/article/getext",
        method: "get",
        params: {
          key: _this.$route.query.key,
          authentication: localStorage.getItem('authentication')
        },
      })
        .then(function (response) {
          if(response.data.msg == '请登录'){
            _this.$router.push("/qubianchengadmin");
          }
          _this.title = response.data[0].title;
          _this.editor.txt.html(response.data[0].ehtml);
          _this.id = response.data[0]._id;
          _this.typeValue = response.data[0].type;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
    const editor = new wangEditor(this.$refs.editorElem);
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml;
    };
    // 创建编辑器
    editor.create();
    this.editor = editor;
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addmp4 {
  text-align: center;
  margin: 50px 0;
}
.edit_content {
  padding: 10px;
  justify-content: center;
  display: flex;
}
.mp4url {
  margin-top: 20px;
}
#wangeditor {
  margin-top: 50px;
}
.btn {
  margin-top: 20px;
}
.to_black {
  text-align: left;
  margin-bottom: 40px;
  cursor: pointer;
}
.type{
  text-align: left;
  font-size: 14px;
  color: #666;
  margin-top: 35px;
}
/deep/ .el-select-dropdown{
  z-index: 100000 !important;
}
</style>
