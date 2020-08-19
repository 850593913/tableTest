import state from "./state"

const getters = {
  adminNameWithLastName: state => {
    return state.adminName+'Liu'
  }
}

export default getters
