import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/components/Index')
const Login = () => import('@/components/Login')
const User = () => import('@/components/User')
const Details = () => import('@/components/Details')
const Admin = () => import('@/components/Admin')
const Adminpage = () => import('@/components/Adminpage')
const Edit = () => import('@/components/Edit')
const Articlebs = () => import('@/components/Articlebs')
const Questions = () => import('@/components/Questions')
const Brushquestions = () => import('@/components/Brushquestions')
const Course = () => import('@/components/Course')
const CoursePage = () => import('@/components/CoursePage')
const CourseList = () => import('@/components/CourseList')
const ArticlePage = () => import('@/components/ArticlePage')
const QuestionsPage = () => import('@/components/QuestionsPage')

Vue.use(Router)

const router = new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '趣编程-官网',
        content: {
          keywords: '趣编程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,前端开发,前端面试,前端面试题,前端',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    },
    //登录页
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '趣编程-登录',
        content: {
          keywords: '趣编程登录,前端开发,前端面试,前端面试题,前端,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程',
          description: '登录趣编程高效学习前端开发。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    },
    //用户中心页
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        title: '趣编程-用户中心',
        content: {
          keywords: '尊贵的趣编程用户,趣编程,前端开发,前端面试,前端面试题,前端,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程',
          description: '趣编程尊贵的vip用户,赶快开始你的学习之旅吧。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    },
    //文章详情页
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: {
        title: '趣编程-文章',
        content: {
          keywords: '准确高效前端文章,趣编程,前端开发,前端面试,前端面试题,前端,Vue教程文章,HTML教程文章,CSS教程文章,JavaScript教程文章,ElementUi教程文章,jQuery教程文章',
          description: '趣编程准确高效的前端开发文章分享。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    },
    //后台管理登录页
    {
      path: '/qubianchengadmin',
      name: 'Admin',
      component: Admin,
      meta: {
        title: '趣编程-后台登录',
        content: {
          keywords: '趣编程,前端开发,前端面试,前端面试题,前端,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    },
    //后台管理主页
    {
      path: '/adminpage',
      name: 'Adminpage',
      component: Adminpage,
      meta: {
        title: '趣编程-后台首页',
        content: {
          keywords: '趣编程,前端开发,前端面试,前端面试题,前端,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    },
    //后台教程编辑器页
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      meta: {
        title: '趣编程-教程编辑',
        content: {
          keywords: '趣编程,前端开发,前端,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    }
    //后台文章编辑页
    ,
    {
      path: '/articlebs',
      name: 'Articlebs',
      component: Articlebs,
      meta: {
        title: '趣编程-文章编辑',
        content: {
          keywords: '趣编程,前端开发,前端,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    }
    //后台问题编辑页
    ,
    {
      path: '/questions',
      name: 'Questions',
      component: Questions,
      meta: {
        title: '趣编程-问题编辑',
        content: {
          keywords: '趣编程,前端开发,前端,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    }
    //前端刷题页
    ,
    {
      path: '/brushquestions',
      name: 'Brushquestions',
      component: Brushquestions,
      meta: {
        title: '趣编程-刷题',
        content: {
          keywords: '趣编程,前端面试题,前端开发,前端面试,前端,Vue面试题,HTML面试题,CSS面试题,JavaScript面试题,ElementUi面试题,jQuery面试题',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含前端面试题,Vue面试题,HTML面试题,CSS面试题,JavaScript面试题,ElementUi面试题,jQuery面试题。'
        }
      }
    }
    //前端教程页
    ,
    {
      path: '/course',
      name: 'Course',
      component: Course,
      meta: {
        title: '趣编程-教程',
        content: {
          keywords: '趣编程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,前端开发,前端面试,前端面试题,前端',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    }
    ,
    //前端教程分类列表
    {
      path: '/coursepage',
      name: 'CoursePage',
      component: CoursePage,
      meta: {
        title: '趣编程-教程分类',
        content: {
          keywords: '趣编程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,前端开发,前端面试,前端面试题,前端',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程等。'
        }
      }
    }
    //前端文章列表
    ,
    {
      path: '/articlepage',
      name: 'ArticlePage',
      component: ArticlePage,
      meta: {
        title: '趣编程-文章列表',
        content: {
          keywords: '趣编程,前端开发,前端文章,Vue教程,HTML文章,CSS教程文章,JavaScript文章,ElementUi教程文章,jQuery教程文章',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程文章,Vue教程文章,HTML教程文章,CSS教程文章,JavaScript教程文章,ElementUi教程文章,jQuery教程文章,React教程文章等。'
        }
      }
    }
    //前端刷题列表
    ,
    {
      path: '/questionspage',
      name: 'QuestionsPage',
      component: QuestionsPage,
      meta: {
        title: '趣编程-刷题列表',
        content: {
          keywords: '趣编程,前端面试题,前端开发,前端面试,前端,Vue面试题,HTML面试题,CSS面试题,JavaScript面试题,ElementUi面试题,jQuery面试题',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含前端面试题,Vue面试题,HTML面试题,CSS面试题,JavaScript面试题,ElementUi面试题,jQuery面试题。'
        }
      }
    }    
    //前端教程列表
    ,
    {
      path: '/courselist',
      name: 'CourseList',
      component: CourseList,
      meta: {
        title: '趣编程-教程列表',
        content: {
          keywords: '趣编程,前端开发,前端面试,前端面试题,前端,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程',
          description: '趣编程快速高效有趣,专业前端开发学习网站。包含全端开发教程,Vue教程,HTML教程,CSS教程,JavaScript教程,ElementUi教程,jQuery教程,React教程,前端开发文章,前端面试题等。'
        }
      }
    }
  ]
})

//路由拦截器
router.beforeEach((to, from, next) => {
  //网站标题和描述设置
  window.document.title = to.meta.title == undefined?'趣编程':to.meta.title
  if (to.meta.content) {
		let head = document.getElementsByTagName('head');
		let meta = document.createElement('meta');
		document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords)
		document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description)
		meta.content = to.meta.content;
		head[0].appendChild(meta)
	}

  //路由拦截判断
  var token = localStorage.getItem('token')
  var code = localStorage.getItem('authentication')
  if(to.name == 'Adminpage' && !code || 
  to.name == 'Edit' && !code ||
  to.name == 'Articlebs' && !code ||
  to.name == 'Questions' && !code){
    next({ name: 'Admin' })
  }
  if (to.name == 'User' && !token ||
  to.name == 'Course' && !token) {
    next({ name: 'Login' })
  }
  else next()
})

export default router