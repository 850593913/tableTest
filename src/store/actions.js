import { getName } from '@/api/app'
const actions = {
  updateName({commit}){
    getName().then(res => {
      const {code, info:{name}} = res
      commit('CHANGE_NAME',name)
    }).catch(err => {
      console.log(err);
    })
  }
}
export default actions
