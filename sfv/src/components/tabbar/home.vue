<template>
    <div class="app-content">
        <div class="app-home" @click=rightC :class="this.$store.state.op8==true?  'o7':''" 
         >
            <div class="app-header">
                <img src="/img/homebg.png" alt="">
                <a href="javascript:;" @click.stop=leftC></a>
                <div class="mui-input-row mui-search">
                    <input type="search" class="mui-input-clear" placeholder="请输入运单号查询快递信息">
                </div>
            </div>
            <div class="app-nav">
                <ul>
                    <li>
                        <img src="/img/ic_home_freight.png" alt="">
                        <p>快递费支付</p>
                    </li>
                    <li>
                        <img src="/img/ic_home_my_express.png" alt="">
                        <p>我的快递</p>
                    </li>
                    <li>
                        <img src="/img/ic_home_new_scan.png" alt="">
                        <p>扫一扫</p>
                    </li>
                </ul>
            </div>
            <div class="app-express">
                <ul>
                    <li id="news" @click=expressC :class="expressid=='news'?'expressA':''">最新快递</li>
                    <li id="notes" @click=expressC :class="expressid=='notes'?'expressA':''">寄件记录</li>
                </ul>
                <router-view></router-view>
            </div>
            <div class="app-product">
                <p>快递产品介绍</p>
                 <div>
                    <div>
                        <img src="/img/ic_home_product_today.png" alt="">
                        <h5>顺丰即日</h5>
                        <h6>今天寄、今天到</h6>
                    </div>
                    <div>
                        <img src="/img/ic_home_product_next_morning.png" alt="">
                        <h5>顺丰次晨</h5>
                        <h6>今天寄、明天上午到</h6>
                    </div>
                    <div>
                        <img src="/img/ic_home_product_morrow.png" alt="">
                        <h5>顺丰标快</h5>
                        <h6>365天一直在你身边</h6>
                    </div>
                    <div>
                        <img src="/img/ic_home_product_every_other_day.png" alt="">
                        <h5>顺丰特惠</h5>
                        <h6>一样的服务，更经济的选择</h6>
                    </div>
                </div> 
            </div>
            
            
          
        </div>
        <foot></foot>  
        <left :style="this.$store.state.left==true?'transform: translateX(0%)':'transform: translateX(-100%)'"></left>
        <up :style="this.$store.state.up==true?'transform:translateY(0%)':'transform:translateY(100%)'"></up> 
        
    </div>
    
</template>
<script>
import Left from '../../components/home/left.vue'
import Foot from '../../components/common/foot.vue'
import Up from '../../components/home/up.vue'
export default {
    data(){
        return{
                //tabbarid:"home",
                expressid:this.$route.path=="/Home/Notes"?"notes":"news",
              
        }
    },
    methods:{
        /* click(e){
            this.tabbarid=e.target.id;
        }, */
        expressC(e){
            this.expressid=e.target.id;
            if(this.expressid=="notes"){
                this.$router.push("/Home/Notes");
            }else{
               this.$router.push("/Home/"); 
            }
        },
        leftC(){
            this.$store.state.left=true;
            this.$store.state.op8=true;
        },
        /* */ rightC(){
            this.$store.state.left=false;
            this.$store.state.op8=false;
        },
        goback(){
            console.log(46875);
            
        }
    },
    created(){
        
            
    },
    components:{
        Left,Foot,Up
    }
}
</script>
<style >
    /* .app-content{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    } */
    .app-home{
        width: 100vw;
        height: 100vh;
        font-size: 12px;
        overflow: scroll;
        transition-duration: 1s;
        
    }
.app-home>.app-header{
        width: 100vw;
        height: 23vh;
        position: relative;        
    }
    .app-home>.app-header>img{
        width: 100%;
    }
    .app-home>.app-header>a{
        display: block;
        width: 3vh;
        height: 3vh;
        background: url("/img/ic_tools.png");
        background-size:100%; 
        position: absolute;
        top:17%;
        left:4%;
    }
    .app-home>.app-header>.mui-search{
        width: 80vw;
        height: 4vh;
        position: absolute;
        top: 15%;
        left: 13%;
    }
    .app-home>.app-header>.mui-search>input{
        height: 100%;
        width: 100%;
        background: #fff;
        font-size: 12px;
        text-align: left;
        padding-left: 3%;
        
    }
    .left{
       transform: translateX(0%); 
       
    }
    .o7{
        opacity: .2;
    }
.app-home>.app-nav{
        width: 100vw;
        height: 9vh;
        position: relative;
        background: #000;
    }
    .app-home>.app-nav>ul{
        width: 100vw;
        height: 100%;
        list-style: none;
        background: #fff;
        padding: 0%;
        margin: 0;
        display: flex;
    }
    .app-home>.app-nav>ul>li{
        width: 33.33%;
        text-align: center;
        line-height: 1;
    }
    .app-home>.app-nav>ul>li>img{
        width: 32%;
    }
    .app-home>.app-nav>ul>li>p{
        margin-bottom: 3%;
        font-size: 12px
    }
.app-home>.app-express{
        width: 100vw;
        height: 25vh;
        background: #fff;
        position: relative;
        margin-top: 1vh;
    }
    .app-home>.app-express>ul{
        width: 100%;
        height: 6vh;
        margin: 0;
        position: absolute;
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;
        border-bottom: 1px solid #eee;  
    }
    .app-home>.app-express>ul>li{
        width: 35%;
        text-align: center;
        line-height: 6vh;
        font-size: 14px;
       border-bottom: 2px solid transparent;
        color: #888;
    }
.app-home>.app-product{
        
        width: 100vh;
       
        position: relative;
    }
    .app-home>.app-product>p{
        padding-left:2%;
        font-size: 12px;
        margin: 0;
        height: 4vh;
        line-height: 4vh
    }
    .app-home>.app-product>div{
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .app-home>.app-product>div>div{
        width: 49.7%;
        background: #000;
        height: 16vh;
        padding: 5% 0% 2% 0%;
        text-align: center;background: #fff;
        margin-bottom: .3%;
    }
    .app-home>.app-product>div>div>img{
        width: 25%;
    }
    .app-home>.app-product>div>div>h5{
        color: #333;
        margin-bottom: 7%;
    }

.expressA{
    color: #de1c32!important;
    border-bottom: 2px solid #de1c32!important;
}

</style>
