<template>
    <div class="app-vip">
        <div class="vip-header">
            <img src="/img/back.png" @click="back">
            <p>会员专区</p>
            <a href="javasctipt:;" @click="back">关闭</a>
        </div>
        <div class="vip-user">
            <img src="/img/logo.png" alt="">
            <div class="user-name">
                <h4>会员名称</h4>
                <p>64积分</p>

            </div>
            <div class="user-detail">
                <p>
                    <img src="/img/tongp.png" alt="">
                    铜牌会员</p>
                <p class="equity">我的权益
                    <img src="/img/jf.png" alt="">
                    <img src="/img/yh.png" alt="">
                    <img src="/img/qy.png" alt="">
                    <img src="/img/sr.png" alt="">
                </p>
            </div>
        </div>
        <div class="vip-swiper">
            <mt-swipe :auto="2500">
                <mt-swipe-item v-for="i of swipeList" :key="i.id">
                    <img :src="i.img_url" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="vip-privilege">
            <div :style='`transform:translate(${x}%,0)`' ref="privilege">
                <div v-for="i of privilegeList" :key="i.id"> 
                    <img :src=i.img_url alt="">
                    <p>{{i.msg}}</p>
                </div>
            </div> 
            <ul>
                <li :style="x==0?`background:#eb4c5f`:`background:#ccc`"></li>
                <li :style="x==-50?`background:#eb4c5f`:`background:#ccc`"></li>
            </ul>
        </div>
        <div class="vip-myplg">
            <p>
                <span>我的特权</span>
                <a href="javascript:;">更多》</a>
            </p>
            <div :style='`transform:translate(${y}%,0)`' ref="myplg">
                <div v-for="i of plgList" :key="i.id"> 
                    <img :src=i.img_url alt="">
                    <p>{{i.msg}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Swiper,Slide} from 'vue-swiper-component'

export default {
    data() {
        return {
            swipeList:[
                {id:1,img_url:"/img/swiper1.png"},
                {id:2,img_url:"/img/swiper2.png"},
                {id:3,img_url:"/img/swiper3.png"},
                {id:4,img_url:"/img/swiper4.png"},
            ],
            privilegeList:[
                {msg:"会员权益",img_url:"/img/hg.png"},
                {msg:"积分商城",img_url:"/img/gift.png"},
                {msg:"会员好货",img_url:"/img/shopcar.png"},
                {msg:"会员社区",img_url:"/img/sq.png"},
                {msg:"同城福利",img_url:"/img/money.png"},
                {msg:"购物红包",img_url:"/img/red.png"},
                {msg:"会员活动",img_url:"/img/lb (2).png"},
                {msg:"优惠券",img_url:"/img/yhq.png"},
                {msg:"学生专享",img_url:"/img/xsm (2).png"},
            ],
            plgList:[
                {msg:"收寄件积分",img_url:"/img/jf.png"},
                {msg:"收件人权益",img_url:"/img/qy.png"},
                {msg:"满4增1",img_url:"/img/zp.png"},
                {msg:"升级有礼",img_url:"/img/up.png"},
                {msg:"生日有礼",img_url:"/img/sr.png"},
                {msg:"在线客服",img_url:"/img/kf.png"},
                {msg:"快速理赔",img_url:"/img/sd.png"},
            ],
            x:0,
            y:0,
            endx:"",
            syj:""
        }
    },
    methods: {
        back(){
            this.$router.back();
        },
        wrap(){
            var a=this.$refs.privilege;
            this.move(a);
            
            a.addEventListener("touchend",(e)=>{
                if(this.endx>50){
                    this.x=-50;
                }else if(this.endx<50){
                    this.x=0;
                }     
            });  
        },
        myplg(){
            var a=this.$refs.myplg;
            this.move(a);
            var i=(this.plgList.length-5)*-10;
            a.addEventListener("touchend",(e)=>{
                
                if(this.endx>50){
                    
                    this.y+=-10;
                }else if(this.endx<50){
                    
                    this.y+=10;
                }
                if(this.y>0){
                    this.y=0;
                }else if(this.y<i){
                    this.y=i;
                }
            });  
        },
        move(a){
            var startx,endx,movex 
            a.addEventListener("touchstart",(e)=>{
                startx=e.touches[0].pageX;
            });
            a.addEventListener("touchmove",(e)=>{
                movex=e.changedTouches[0].pageX;
                this.endx=startx-movex;
            });
        }
    },
    created() {
    
    },
    mounted() {   
        this.wrap();
        this.myplg();
    },
    components:{
        Swiper,
        Slide
    }
}
</script>
<style>
.app-vip{
        width: 100vw;
        height: 100vh;
    }
.app-vip>.vip-header{
        background: #ffffff;
        height: 7vh;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #ddd;
    }
    .app-vip>.vip-header>img{
        width: 15%;
        height: 100%;
    }
    .app-vip>.vip-header>p{
        width: 70%;
        height: 100%;
        line-height: 7vh;
        text-align: center;
        color: #333;
    }
    .app-vip>.vip-header>a{
        display: block;
        width: 15%;
        height: 100%;
        line-height: 7vh;
        text-align: center;
        color: #e94b5e;
    }
.app-vip>.vip-user{
        width: 100vw;
        height: 10vh;
        background: #ffffff;
        display: flex;
    }
    .app-vip>.vip-user>img{
        width: 18%;
        height: 100%;
    }
    .app-vip>.vip-user>.user-name{
        width: 42%;
        height: 100%;
      
        padding: 2% 0 2% 2%;
    }
    .app-vip>.vip-user>.user-detail{
        width: 40%;
        height: 100%;
        
        text-align: right;
    }
    .app-vip>.vip-user>.user-detail>p{
        width: 100%;
        height: 50%;
        margin: 0;
        line-height: 4.5vh;
        padding-right: 5%;
    }
    .app-vip>.vip-user>.user-detail>p>img{
        height: 55%;
        vertical-align: middle;
    }
    .equity{
        color: #e94b5e;
    }
.app-vip>.vip-swiper{
        width: 100vw;
        height: 24vh;
        background: #fff;
        padding-top: 1px;
        position: relative;
    }
    .app-vip>.vip-swiper>.mint-swipe{
        width: 96%;
        height: 91%;
        position: absolute;
        top: 4.5%;
        left: 2%;
    }
    .app-vip>.vip-swiper>.mint-swipe img{
        width: 100%;
    }
.app-vip>.vip-privilege{
        width: 100vw;
        height: 17vh;
        background: #fff;
        /**/ overflow: hidden; 
        position: relative;

    }
    .app-vip>.vip-privilege>div{
        width: 200vw;
        height: 100%;
        display: flex;
        transition-duration: .5s;
    }
    .app-vip>.vip-privilege>div>div{
        width: 20vw;
        height: 100%;
        text-align: center;
        padding-top: 3%;
        background: url("/img/bg2.png")no-repeat 50% 15%;
        background-size: 80%
    }
    .app-vip>.vip-privilege>div>div>img{
        width: 40%;
        margin-bottom: 20%;
    }
    .app-vip>.vip-privilege>div>div>p{
        margin: 0;
    } 
    .app-vip>.vip-privilege>ul{
        width: 8vw;
        height: 3vw;
        list-style: none;
        position: absolute;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        bottom: 3%;
        left: 50%;
        margin-left: -4vw;
    }
    .app-vip>.vip-privilege>ul>li{
       
        width: 2vw;
        height: 2vw;
        border-radius: 50%;
    }
.app-vip>.vip-myplg{
        position: relative;
        width: 100vw;
        height: 20vh;
        overflow: hidden;
    }
    .app-vip>.vip-myplg>p{
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0% 1%;
    }
    .app-vip>.vip-myplg>p>span{
        font-size: 16px;
        font-weight: 500;
        color: #222;
    }
    .app-vip>.vip-myplg>p>a{
        color: #bbb;
    }
    .app-vip>.vip-myplg>div{
        width: 200vw;
        height: 80%;
        background: #fff;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content:flex-start;
        align-items: center;
        transition-duration: 0.5s;
    }
    .app-vip>.vip-myplg>div>div{
        width: 20vw;
        height: 100%;
        padding-top: 3%;
        background: url("/img/bg2.png")no-repeat 50% 15%;
        background-size: 80%;
        text-align: center;
    }
    .app-vip>.vip-myplg>div>div>img{
        width: 40%;
        margin-bottom: 20%;
    }
</style>
