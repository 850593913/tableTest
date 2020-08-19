<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
   props:{
     name:{
       type:String,
       default:'tom'
     }
   }
}
</script>

<style>

</style>
