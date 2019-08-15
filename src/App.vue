<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Stu', params: { id: 1001 } }">学生 1</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Stu', params: { id: 1002 } }">学生 2</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
 
}
</script>

<style>

</style>
