import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        name: localStorage.getItem('name') ? localStorage.getItem('name') : '',
        token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
    },
    mutations:{
      setStorage(state, payload){
        localStorage.setItem('name', payload.data.name);
        localStorage.setItem('token', payload.data.token);
        state.name = payload.data.name;
        state.token = payload.data.token;
      }
    }
})

export default store