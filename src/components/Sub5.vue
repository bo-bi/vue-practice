<template>
    <div>
      <p>sub5</p>
      <button @click="send">向sub4传递数据</button>
    </div>
</template>

<script>
import EventBus from "../EventBus"
export default {
    data () {
        return {
            
        }
    },
    methods: {
        send() {
            EventBus.$emit("phone", "sub4 你好!", "lalala");
        }
    }
    
}
</script>

<style>

</style>