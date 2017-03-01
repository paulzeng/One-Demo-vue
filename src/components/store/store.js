/**
 * Created by qiangxl on 2017/2/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    readDetailIndex: null,
    musicDetailIndex: null
  },
  mutations: {
    musicDetailIndexChange (index) {
      state.musicDetailIndex = index
    },
    readDetailIndexChange (index) {
      state.readDetailIndex = index
    }
  }
})
