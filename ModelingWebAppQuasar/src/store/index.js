import Vue from 'vue'
import Vuex from 'vuex'

import auth from './store-auth'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth
    },
    strict: process.env.DEV
  })

  return Store
}