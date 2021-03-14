/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {firebaseAuth} from 'boot/firebase'

const state = {
  loggedIn: false
}
const mutations = {
  setLoggedIn(state, value){
    state.loggedIn = value
  }
}
const actions = {
  loginUser({commit}, payload){
    firebaseAuth.signInWithEmailAndPassword(
      payload.email, payload.password
    )
    .then(response => {
      console.log('response', response);
    })
    .catch(e => {
      console.log(e);
    })
  },
  logoutUser(){
    firebaseAuth.signOut()
  },
  handleAuthStateChange({commit, dispatch}){
    firebaseAuth.onAuthStateChanged(user => {
      if(user){
        commit('setLoggedIn', true)
        localStorage.setItem('loggedIn', true)
      }else{
        commit('setLoggedIn', false);
        localStorage.getItem('loggedIn', false)
      }
    })
  }
}
const getters = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}