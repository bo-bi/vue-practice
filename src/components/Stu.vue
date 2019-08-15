<template>
  <div>
      学生 {{ $route.params.id }} --- {{ name }}
  </div>
</template>

<script>
export default {
    data () {
        return {
            stuListObj: {
                    "1001": "小明",
                    "1002": "小红",
                },
            name: "",
        }
    },
    created() {
        const id = this.$route.params.id;
        this.name = this.stuListObj[id]
        
    },
    watch: {
        $route(to, from) {
            // from 从哪来，也就是：从哪个路由跳转过来的
            // to   到哪去, 也就是：也就是要跳转到哪个路由（也就是当前路由）
            // $store 是一个对象，Vue内部封装了，不用深度监视
            console.log(to);
            const id = to.params.id;
            this.name = this.stuListObj[id]
        }
    }
}
</script>

<style>

</style>