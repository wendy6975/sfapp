<template>
    <div class="app-my">
        <div @click=rightC :class="this.$store.state.op8==true?  'o7':''">
            <div class="my-header">
                <div class="header-function" @click.stop=leftC ></div>
                <div class="header-setting"></div>
            </div>
            <div class="my-login">
                <button @click="login" v-if="this.$store.state.vipname==''">登录/注册</button>
                <p>{{this.$store.state.vipname}}</p>
            </div>
            <div class="my-nav">
                <div>
                    <h3>0</h3>
                    <p>速运通卡(顺丰卡)</p>
                </div>
                <div>
                    <h3>0</h3>
                    <p>积分</p>
                </div>
                <div>
                    <h3>0</h3>
                    <p>优惠券</p>
                </div>
            </div>
            <div class="my-msg">
                <img src="/img/ic_my_message_ico.png" alt="">
                <span>消息中心</span>
            </div>
            <div class="my-address">
                <p> 
                    地址簿
                    <a href="javascript:;">全部</a>
                </p>
                <div>
                    <p>登录后才可对地址进行编辑管理。
                        <a href="javascript:;">立即登录</a>
                    </p>
                </div>
            </div>
            <div class="my-function">
                <p>常用服务</p>
                <div>
                    <div v-for="i of serveList" :key="i.id">
                        <img :src=i.pic alt="">
                        <p>{{i.name}}</p>
                    </div>
                </div>
            </div>
            <foot></foot>  
        </div>
        <left :style="this.$store.state.left==true?'transform: translateX(0%)':'transform: translateX(-100%)'"></left>
        <!-- <up :style="this.$store.state.up==true?'transform:translateY(0%)':'transform:translateY(100%)'"></up>    -->  <foot></foot>              
    </div>
</template>
<script>
import Foot from "../../components/common/foot.vue"
import Left from '../../components/home/left.vue'

export default {
    data(){
        return{
            serveList:[
                {name:"寄件记录",pic:"/img/ic_new_menu_tools_send_record.png"},
                {name:"月结卡",pic:"/img/ic_new_menu_tools_monthly_card.png"},
                {name:"交易记录",pic:"/img/ic_new_menu_tools_deal_record.png"},
                {name:"我的关注",pic:"/img/gz2.png"},
                {name:"索取发票",pic:"/img/mp.png"},
                {name:"通关服务",pic:"/img/ic_new_menu_tools_clearance_gate.png"},
                {name:"投诉意见",pic:"/img/ic_new_menu_tools_workorder.png"},
                {name:"寄件模板",pic:"/img/bq.png"},
                {name:"在线客服",pic:"/img/ic_new_menu_tools_online_service.png"},
                {name:"服务热线",pic:"/img/ic_new_menu_tools_service_hotline.png"},
            ],
        }
    },
    methods: {
        login(){
            this.$router.push("/Login");
        },
        leftC(){
            this.$store.state.left=true;
            this.$store.state.op8=true;
        },
        /* */ rightC(){
            this.$store.state.left=false;
            this.$store.state.op8=false;
        },
    },
    created() {
        var a=sessionStorage.getItem("uname");
        if(!a){
            this.$store.state.vipname="";
        }else{
            this.$store.state.vipname=sessionStorage.getItem("uname");
        }
        
        console.log(this.syj);
       
    },
    components:{   
        Foot,Left
    }
}
</script>
<style>
    .app-my{
        width: 100vw;
        height: 100vh;
        overflow: scroll;
        background: #ddd;
    }
.app-my .my-header{
        width: 100%;
        height: 11vh;
        background: #ef4559;
        position: fixed; 
        z-index: 10;   
    }
    .app-my .my-header>.header-function{
        width: 6vw;
        height: 6vw;
        float: left;
        background: url("/img/ic_tools.png") no-repeat center center;
        background-size: 100%;
        margin: 10% 0 0 5%;
    }
    .app-my .my-header>.header-setting{
        float:right;
        width: 6vw;
        height: 6vw;
        background: url("/img/ic_setting.png") no-repeat center center;
        background-size: 100%;
        margin: 10%  5% 0 0;
    }
.app-my .my-login{
        width: 100vw;
        height: 16vh;
        background: #000;
        position: relative;
        top: 11vh;
        background: #ef4559 url("/img/renwu.png") no-repeat 50% 15%;
        background-size: 13%;
    }
    .app-my .my-login>p{
        width: 100vw;
        text-align: center;
        padding: 1.5% 0%;
        position:absolute;
        top:55%;
        color:#fff;
        font-size: 16px;
    }
    .app-my .my-login>button{
        width: 25vw;
        height:4vh;
        padding: 1.5% 0%;
        position:absolute;
        top:63%;
        left:37.5%;
        background:rgba(255,255,255,.2);
        border:0;
        color:#fff;
    }   
.app-my .my-nav{
        width: 100vw;
        height: 10vh;
        position: relative;
        top: 11vh;
        background: #ef4559;
        display: flex;
    }
    .app-my .my-nav>div{
        width: 33.33%;
        height: 100%;
        text-align: center;
        color: #fff;
        padding-top: 1vh;
    }
    .app-my .my-nav>div>h3{
        font-weight: normal;
    }
    .app-my .my-nav>div>p{
        margin: 0;
        color: #fff;
        font-weight:lighter;
    }
.app-my  .my-msg{
        width: 100vw;
        height: 7vh;
        background: #fff url("/img/ic_arrow_right_2.png") no-repeat 98% center;
        position: relative;
        top: 11vh;
        padding-top:1vh;
        padding-left: 3vw; 
        
    }
    .app-my .my-msg>img{
        width: 5vh;
        vertical-align: middle;
        margin-right: 4vw;
    }
    .app-my .my-msg>span{
        font-size: 16px;
        font-weight: 500;
        
    }
.app-my .my-address{
        width: 100vw;
        height: 20vh;
        position: relative;
        top: 11vh;
    }
    .app-my .my-address>p{
        margin: 0;
        height: 4vh;
        line-height: 4vh;
        padding: 0 5vw;
    }
    .app-my .my-address>p>a{
        float: right;   
    }
    .app-my .my-address>div{
        background: #fff url("/img/address.png")no-repeat center 20%;
        background-size: 15%;
        width: 100vw;
        height: 16vh;
        text-align: center;
        padding-top: 10vh;
    }
.app-my .my-function{
        width: 100vw;
        position: relative;
        top: 11vh;
    }
    .app-my .my-function>p{
        height: 4vh;
        line-height: 4vh;
        padding-left:5vw; 
        margin: 0;
    }
    .app-my .my-function>div{
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content:space-between;
        padding-bottom: 10vh;
    }
    .app-my .my-function>div>div{
        width: 33.1%;
        background: #fff;
        margin-bottom: .2vh;
        padding: 2vh 0;
        
    }
    .app-my .my-function>div>div>img{
        width: 10vw;
    }
    .app-my .my-function>div>div>p{
        color: #333;
    }
</style>
