<template>
    <div class="app-container">
        <router-view></router-view>
    </div>    
</template>
<script>
export default {
    methods: {
        back(){
            this.$router.back();
        }
    },
}
</script>
<style>
    .app-container{
        font-size: 14px;
    }
</style>
