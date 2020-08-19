import vue from 'vue'
const mutations = {
  CHANGE_NAME(state,params){
    state.adminName=params
  },
  ADD_NAME(state){
    vue.set(state,'addName','test')
  }
}

export default mutations
