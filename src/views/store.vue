<template>
  <div>
    <a-input v-model="adminName"></a-input>
    <p>{{ inputValue }}</p>
    <p>{{ adminName }}</p>
    <p>{{ adminNameWithLastName }}</p>
    <button @click="handleChange">changeName</button>
    <p>{{ addName }}</p>
    <p>{{ userAdminName }}</p>
  </div>
</template>

<script>
import AInput from '@/components/AInput.vue'
import { mapState,mapMutations,mapActions } from 'vuex'
// const {mapState} = createNamespacedHelpers('user')
export default {
  data(){
    return{
      inputValue:''
    }
  },
  computed:{
    ...mapState({
      // adminName: state => state.adminName,
      addName: state => state.addName,
      userAdminName: state => state.user.adminName
    }),
    adminName:{
      get(){
        return this.$store.state.adminName
      },
      set(val){
        this.CHANGE_NAME(val)
      }
    },
    adminNameWithLastName(){
      return this.$store.getters.adminNameWithLastName
    }
  },
  components:{
    AInput
  },
  methods:{
    ...mapMutations([
      'CHANGE_NAME',
      'ADD_NAME',
      'CHANGE_ADMIN_NAME'
    ]),
    ...mapActions([
      'updateName'
    ]),
    handleChange(){
      // this.$store.commit('CHANGE_NAME','newVal')
      // this.$store.commit('ADD_NAME')
      // this.CHANGE_NAME('newVal')
      // this.ADD_NAME(),
      // this.CHANGE_ADMIN_NAME()
      this.updateName()
    }
  }

}
</script>

<style>

</style>
