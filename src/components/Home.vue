<template>
  <div>
      <slot name="header" :content="content"></slot>
      Home
      <slot name="footer" des="的尾部" $index="3"></slot>
  </div>
</template>

<script>
export default {
    data () {
        return {
            content: "首页的内容",
        }
    }
}
</script>

<style>

</style>
