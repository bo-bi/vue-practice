<template>
  <div>
      Sub
      <button @click="send">向父组件传递数据</button>
      
      <p>{{ demo }}</p>
      <button @click="sendSync">模拟sync同步父组件中的demo数据</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            sonMsg: "这是子组件的数据",
        }
    },
    props: ["demo"],
    methods: {
        send() {
            this.$emit("fn", this.sonMsg);
        },
        sendSync() {
            this.$emit("update:mysync", "这是同步后的数据");
        }
    }
}
</script>

<style>

</style>