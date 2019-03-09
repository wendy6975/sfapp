<template>
    <div class="app-tabbar">
                 <a href="javascript:;" id="home" :class="tabbarid=='home'?'homeA':''" @click=click class="home">
                    <span @click=index>首页</span>
                </a>
                <a href="javascript:;" id="vip" :class="tabbarid=='vip'?'vipA':''" @click=vip class="vip">
                    <span>会员中心</span>
                </a>
                <a href="javascript:;" id="send"  class="send" @click.stop="up">
                    <span>寄件</span>
                </a>
                <a href="javascript:;" id="serve" @click=click :class="tabbarid=='serve'?'serveA':''" class="serve">
                    <span>服务点</span>
                </a>
                <a href="javascript:;" id="my" :class="tabbarid=='my'?'myA':''" @click=click class="my">
                    <span @click=my>我</span>
                </a>
            </div>
</template>
<script>
export default {
    data(){
        return{
            tabbarid:this.$route.path=="/Home"?"home":this.$route.path=="/Vip"?"vip":this.$route.path=="/Serve"?"serve":"my",
        }
    },
    methods:{
        click(e){
            this.tabbarid=e.target.id;

        },
        index(){
            this.$router.push("/Home");
        },
        my(){
            this.$router.push("/My");
        },
        vip(){
            this.$router.push("/Vip");
        },
        up(){
            this.$store.state.up=true;
            this.$store.state.op8=true;
            
        }
    }
}
</script>
<style>
    .app-tabbar{
        width: 100vw;
        height: 7vh;
        background: #fff;
        /* */position: fixed;
        bottom: 0;
        font-size: 12px;
    }
    .app-tabbar>a{
        display: block;
        width: 20%;
        height: 100%;
        text-align: center;
        padding-top:7%; 
        color: #666;
        
        /* float: left; */
        position: absolute;
        background: #000;
    }
    .app-tabbar>.home{
        background: url("/img/ic_tab_home_normal.png")no-repeat 50% 20%;
        background-size: 32%;
        
    }
    .app-tabbar>.vip{
        background: url("/img/ic_tab_discover_normal.png")no-repeat 50% 20%;
        background-size: 32%;
        left: 20%;
    }
    .app-tabbar>.send{
        height: 60px;
        background:url("/img/ic_tab_send_express_normal.png")no-repeat 50% 100%;
        background-size: 100%;
        right: 40%;
        bottom: 0%;
        padding-top: 10%;
        color: #fff;
    }
    .app-tabbar>.serve{
        background:url("/img/ic_tab_store_normal.png")no-repeat 50% 20%;
        background-size: 32%;
        right: 20%;
        
    }
    .app-tabbar>.my{
        background:  url("/img/ic_tab_my_normal.png")no-repeat 50% 20%;
        background-size: 32%;
        right: 0%;
    }

.homeA{
    color: #eb4c5f!important;
    background-image: url("/img/ic_tab_home_pressed.png")!important;
}
.vipA{
    color: #eb4c5f!important;
    background-image: url("/img/ic_tab_discover_pressed.png")!important;
}
.serveA{
    color: #eb4c5f!important;
    background-image: url("/img/ic_tab_store_pressed.png")!important;
}
.myA{
    color: #eb4c5f!important;
    background-image: url("/img/ic_tab_my_pressed.png")!important;
}
</style>
