<template>
  <div id="app">
    {{ fatherMsg }}

    <!-- 这里 update:mysync 整体作为自定义事件名 -->
    <sub-vue @fn="fn" :demo="demo" @update:mysync="mySync"></sub-vue>
  </div>
</template>

<script>
import SubVue from './components/Sub.vue'

export default {
  name: 'app',
  data () {
    return {
      fatherMsg: "",
      demo: "样本数据",
    }
  },
  components: {
    SubVue,
  },
  methods: {
    fn(data) {
      this.fatherMsg = data;
    },
    mySync(data) {
      this.demo = data;
    }
  }
}
</script>

<style>

</style>
