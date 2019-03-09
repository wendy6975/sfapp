<template>
    <div class="app-up">
        <div class="up-send">
            <div v-for="i of sendList" :key="i.id">
                <img :src=i.img_url >
                <p>{{i.msg}}</p>
            </div>
        </div>
        <div class="up-close" @click="down">x</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sendList:[
                {msg:"快递员上门",img_url:"/img/sm.png"},
                {msg:"服务点自寄",img_url:"/img/zj.png"},
                {msg:"扫码寄",img_url:"/img/smj.png"},
            ]
        }
    },
    methods: {
        down(){
            this.$store.state.up=false;
            this.$store.state.op8=false;
            console.log(this.$store.state.op8==true?'o7':'');
        }
    },
}
</script>
<style>
.app-up{
        width: 100vw;
        height:48vh;
        
        position: fixed;
        bottom:0%;
        transform: translateY(100%);
        transition-duration: .5s;
    }
    .app-up>.up-close{
        width: 100vw;
        height: 7vh;
        background: #fff;
        position: absolute;
        bottom: 0%;
        text-align: center;
        font-size: 34px;
        line-height: 7vh;
        color: #999;
    }
.app-up>.up-send{
    width: 100%;
    height: 33vh;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.app-up>.up-send>div{
    width:33% ;
    height: 20vh;
    text-align: center;
}
.app-up>.up-send>div>img{
    width: 60%;
}
</style>
