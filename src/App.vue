<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
export default {
  name:'app',
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    this.axios.get('/user/login')
    .then((res)=>{
      this.res=res;
    })
  }
}
</script>
