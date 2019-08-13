<template>
  <div id="app">
    <home>
      <!-- <div>手机</div>
      <div>U盘</div>
      <hello-world></hello-world>  -->
      <template v-slot:header="scope">
        <p>美团外卖头部</p>
        <p>{{ scope.content }}</p>
      </template>
      
      <h3 slot="footer" slot-scope="scope">
        美团外卖{{ scope.des }}---{{scope.$index}}
        </h3>
      
    </home>  
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
}
</script>

<style>

</style>
