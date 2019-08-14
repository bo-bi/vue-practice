<template>
  <div id="app">
    <div style="background-color: pink;">
      <h2>子到父</h2>
      <!-- 利用 @ 传递事件（@自定义事件） -->
      <sub1-vue @fn1="fn1"></sub1-vue>
      <p>@传递事件 --- {{ sub2Info }}</p>

      <!-- 利用属性传递事件 -->
      <sub2-vue :fn="fn"></sub2-vue>
      <p>属性传递事件 --- {{ sub1Info }}</p>
    </div>

    <div style="background: yellowgreen;">
      <h2>父到子</h2>
      <!-- 向子组件传递数据 -->
      <sub3-vue :msg="msg"></sub3-vue>
    </div>
    
    <div style="background: skyblue;">
      <h2>任意两个组件</h2>
      <sub4-vue></sub4-vue>
      <sub5-vue></sub5-vue>
    </div>
    
  </div>
</template>

<script>
import Sub1Vue from "./components/Sub1.vue"
import Sub2Vue from "./components/Sub2.vue"
import Sub3Vue from "./components/Sub3.vue"
import Sub4Vue from "./components/Sub4.vue"
import Sub5Vue from "./components/Sub5.vue"

export default {
  name: 'app',
  data () {
    return {
      sub1Info: "",
      sub2Info: "",
      msg: "这是App.vue的数据",
    }
  },
  components: {
    Sub1Vue,
    Sub2Vue,
    Sub3Vue,
    Sub4Vue,
    Sub5Vue,
  },
  methods: {
    fn(value) {
      this.sub1Info = value;
    },
    fn1(value) {
      this.sub2Info = value;
    }
  }
}
</script>

<style>

</style>
