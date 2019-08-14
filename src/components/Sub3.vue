<template>
    <div>
      <p>{{ sub3msg }}</p>
      <button @click="changeProp">修改prop</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            sub3msg: this.msg,
        }
    },
    props: ["msg", "obj"],
    methods: {
        changeProp() {
            // 报错，Vue不想让你这么做
            // this.msg = "我修改了prop";

            this.sub3msg = "我先储存prop的数据，再修改";

            // 总结：
            // props 是只读的，不能直接修改 props 中的数据
            // 如果要修改数据的话，而应该使用 data 或者 computed 计算属性来代替
        }
    }
    
}
</script>

<style>

</style>