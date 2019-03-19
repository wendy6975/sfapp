import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入Vuex
import Vuex from "vuex"
//注册Vue组件
Vue.use(Vuex);
//创建store
var store=new Vuex.Store({
  state:{
    up:false,
    op8:false,
    left:false,
    vipname:""
  },
  mutations:{
    
  },
  getters:{
    optup(){
      

    }
  }
})
//导入mint-ui样式表
import 'mint-ui/lib/style.css'
//导入mui样式表
import './lib/mui/css/mui.css'
  //加载图标字体文件
import './lib/mui/css/icons-extra.css'


//引入mint-ui组件
import{Header,Swipe,SwipeItem}from "mint-ui"
//注册组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
 
/**/
/* import Up from './components/home/up.vue'
Vue.component(Up); */


/* import Foot from "./components/common/foot.vue"
Vue.component(Foot); */
//引入axios库
import axios from "axios"
  //配置跨域访问保存session
  axios.defaults.withCredentials=true;
//将axios库配置Vue示例对象
Vue.prototype.axios=axios;
//引入qs库:将url中的参数转为对象；将对象转为url参数形式
import qs from "qs";
//配置qs模块
Vue.prototype.qs=qs;

/* import VueTouch from 'vue-touch' 
Vue.use(VueTouch);
VueTouch.config.swipe={
  threshold:100
} */
new Vue({
    router,
    render:h=>h(App),
    store
}).$mount('#app')