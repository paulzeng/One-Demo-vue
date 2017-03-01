// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuerouter from 'vue-router'
import Vueresource from 'vue-resource'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import index from './components/index/index.vue'
import read from './components/read/read.vue'
import music from './components/music/music.vue'
import readDetail from './components/read/readDetail.vue'
import musicDetail from './components/music/musicDetail.vue'
import movieDetail from './components/movie/movieDetail.vue'
import indexDetailPicture from './components/index/indexDetailPicture.vue'
import movie from './components/movie/movie.vue'
import AppDownload from './components/AppDownload/AppDownload.vue'
import AppAbout from './components/AppAbout/AppAbout.vue'
Vue.use(Vuerouter)
Vue.use(Vueresource)
Vue.use(Vuex)
Vue.use(MintUI)
Vue.component('icon', Icon)

const store = new Vuex.Store({
  state: {
    indexApi: null,
    indexDate: {},
    readDetailIndex: null,
    musicDetailIndex: null,
    movieDetailIndex: null
  },
  mutations: {
    getIndexApi (state, indexApi) {
      state.indexApi = indexApi
    },
    indexDateChange (state, date) {
      state.indexDate = date
    },
    readDetailIndexChange (state, index) {
      state.readDetailIndex = index
    },
    musicDetailIndexChange (state, index) {
      state.musicDetailIndex = index
    },
    movieDetailIndexChange (state, index) {
      state.movieDetailIndex = index
    }
  }
})

const router = new Vuerouter({
  routes: [
    {path: '/index', component: index},
    {path: '/read', component: read},
    {path: '/music', component: music},
    {path: '/readDetail', component: readDetail},
    {path: '/musicDetail', component: musicDetail},
    {path: '/movieDetail', component: movieDetail},
    {path: '/movie', component: movie},
    {path: '/AppDownload', component: AppDownload},
    {path: '/AppAbout', component: AppAbout},
    {path: '/indexDetailPicture', component: indexDetailPicture}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.push('/index')
