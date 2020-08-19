<template>
  <div>
    <button @click="handleClick">test</button>
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
      this.$bus.$emit('on-click','test')
    }
  }
}
</script>

<style>

</style>
