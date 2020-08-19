<template>
  <div>
    {{value}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:''
    }
  },
  mounted(){
    this.$bus.$on('on-click', val => {
      this.value=val
    })
  }
}
</script>

<style>

</style>
