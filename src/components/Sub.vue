<template>
  <div>
      
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