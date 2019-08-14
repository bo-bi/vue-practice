<template>
    <div>
      <p>sub4</p>
    </div>
</template>

<script>
import EventBus from '../EventBus'
export default {
    data () {
        return {
            
        }
    },
    created() {
        console.log("sub4的created");
        EventBus.$on("phone", (msg1, msg2) => {
            console.log(msg1, msg2);
        });
    }
    
}
</script>

<style>

</style>