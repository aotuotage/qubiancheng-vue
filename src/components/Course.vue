<template>
  <div>
    <PartHead index="2"></PartHead>
    <el-row class="details">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="to_black">
          <router-link to>
            <i @click="$router.back(-1)" class="el-icon-arrow-left">返回</i>
          </router-link>
          <h3>{{ data.title }}</h3>
          <p class="inner_p">作者:趣编程</p>
          <p class="inner_p">时间: {{ data.time }}</p>
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
          <div class="details_html" v-html="inHtml"></div>
          <el-button class="editor_btn">源码编辑器:</el-button>
          <div v-show="isCode">
            <editor
              ref="aceEditor"
              v-model="content"
              @init="editorInit"
              width="100%"
              height="600"
              lang="javascript"
              :theme="theme"
              :options="{
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true,
                tabSize: 6,
                fontSize: 17,
                showPrintMargin: false, //去除编辑器里的竖线
              }"
            ></editor>
            <el-button type="primary" size="small" @click="pre"
              >上一个主题</el-button
            >
            <el-button type="primary" size="small" @click="next"
              >下一个主题</el-button
            >
            <el-button class="btn" type="primary" @click="run" round
              >运行代码</el-button
            >
          </div>
          <!-- <div v-html="showHtml"></div> -->
          <!-- <iframe :src="src" ref="iframe"></iframe> -->
          <!-- <div ref="iframe"></div> -->
          <!-- <Iframpage :ifdata='newdata'></Iframpage> -->
        </div>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>

<script>
//教程详情页

import axiosHttp from "../http/api";
import PartHead from "./part/PartHead.vue";
import Footer from "./part/Footer.vue";
import Iframpage from "./Iframpage.vue";

export default {
  name: "Course",
  components: {
    PartHead,
    Footer,
    editor: require("vue2-ace-editor"),
    Iframpage,
  },
  data() {
    return {
      data: "",
      inHtml: "",
      isShow: false,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        preload: "auto", //立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "", //url地址
          },
        ],
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
      content: "",
      theme: "",
      num: 0,
      arr: [
        //将brace/theme文件夹下的所有主题名字拷贝出来
        "terminal",
        "merbivore",
        "eclipse",
        "github",
        "monokai",
        "xcode",
      ],
      isCode: false,
      showHtml: '<p style="text-align: center;color: #666;">运行效果显示区域</p>',
      newdata: '45545'
    };
  },
  methods: {
    editorInit() {
      var editor = this.$refs.aceEditor.editor;
      editor.getSession().setMode("ace/mode/html"); //语言
      //编辑器初始化
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/html"); //language
      for (let i = 0; i < this.arr.length; i++) {
        //方便看哪个主题好看，循坏加载了所有主题，通过点击按钮切换
        require("brace/theme/" + this.arr[i]);
      }
      require("brace/snippets/html"); //snippet
    },
    run() {
      var myWindow=window.open('_blank','运行页面');
	    myWindow.document.write(this.$refs.aceEditor.editor.getValue());
      myWindow.document.close();
    },
    pre() {
      //切换到上一个主题
      if (this.num == 0) {
        return;
      }
      this.num--;
      this.theme = this.arr[this.num];
    },
    next() {
      //切换到下一个主题
      if (this.num == this.arr.length - 1) {
        return;
      }
      this.num++;
      this.theme = this.arr[this.num];
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
  mounted() {
    this.editorInit();
    this.theme = this.arr[4];
    var _this = this;
    axiosHttp({
      url: "/course",
      method: "get",
      params: {
        key: _this.$route.query.key,
      },
    })
      .then(function (response) {
        _this.data = response.data[0];
        _this.playerOptions.sources[0].src = response.data[0].theUrl;
        _this.$refs.aceEditor.editor.setValue(response.data[0].code);
        var newhtml = _this.replaceHtml(response.data[0].ehtml);
        _this.inHtml = newhtml;
        document.title = response.data[0].title;
        if (response.data[0].code == "") {
          _this.isCode = false;
        } else {
          _this.isCode = true;
        }
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
.details h3 {
  font-size: 28px;
  text-align: center;
  color: #000;
  margin-top: 50px;
}
.inner_p {
  font-size: 14px;
  color: #666;
  text-align: right;
}
.editor_btn{
  margin: 30px 0 20px 0;
}
.details_html {
  margin-top: 30px;
  font-size: 16px;
}
.answer {
  font-size: 18px;
  color: #666;
  cursor: pointer;
  margin-top: 30px;
}
.btn {
  margin-top: 20px;
}
.go_html{
  margin-top: 50px;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 20px;
}
</style>
