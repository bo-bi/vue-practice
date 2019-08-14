<template>
    <div>
      <button @click="fn(subMsg)">向父组件传递数据(属性传递事件)</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            subMsg: "子组件的数据(sub2)",
        }
    },
    props: ["fn"],
}
</script>

<style>

</style>