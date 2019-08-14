<template>
    <div>
      <button @click="send">向父组件传递数据(@自定义事件)</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            subMsg: "子组件的数据(sub1)",
        }
    },
    props: ["fn"],
    methods: {
        send() {
            this.$emit("fn1", this.subMsg);
        }
    }
}
</script>

<style>

</style>