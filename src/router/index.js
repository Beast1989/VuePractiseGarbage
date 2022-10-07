import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../components/home.vue'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
// Vue.use(login)
// Vue.use(home)

const routes = [
  {path:'/',redirect:'/login'},
  {path:'/login',component:login},
  {path:'/home',component:home},
]

const router = new VueRouter({
  routes
})

// 路由导航守卫
router.beforeEach((to,from,next)=>{
  //to代表将要访问的路径
  //from代表从哪个路径套转过来
  //next()代表放行  next('/login')强制跳转
  if(to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login');
  next();
})


export default router
