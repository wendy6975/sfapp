<template>
    <div class="app-left" >
        <div>
            <p>常用工具</p>
            <div class="left-hot">
                <p>热门功能</p>
                <div>
                    <div v-for="i of hotList" :key="i.id">
                        <img :src=i.pic alt="">
                        <p>{{i.name}}</p>
                    </div>
                </div>
            </div>
            <div class="left-hot left-recommend">
                <p>推荐工具</p>
                <div>
                    <div v-for="i of recommendList" :key="i.id">
                        <img :src=i.pic alt="">
                        <p>{{i.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hotList:[
                {name:"寄件记录",pic:"/img/ic_new_menu_tools_send_record.png"},
                {name:"查件记录",pic:"/img/ic_new_menu_tools_history.png"},
                {name:"投诉意见",pic:"/img/ic_new_menu_tools_workorder.png"},
                {name:"在线客服",pic:"/img/ic_new_menu_tools_online_service.png"},
                {name:"服务热线",pic:"/img/ic_new_menu_tools_service_hotline.png"},
            ],
            recommendList:[
                {name:"时效运费",pic:"/img/ic_new_menu_tools_proprice.png"},
                {name:"收送范围",pic:"/img/ic_new_menu_tools_scope.png"},
                {name:"收寄标准",pic:"/img/ic_new_menu_tools_forbidden.png"},
                {name:"汇率查询",pic:"/img/ic_new_menu_tools_exchange_rate.png"},
                {name:"清关服务",pic:"/img/ic_new_menu_tools_clear_gate.png"},
                {name:"通关服务",pic:"/img/ic_new_menu_tools_clearance_gate.png"},
                {name:"产品服务",pic:"/img/ic_new_menu_tools_product.png"}
            ],
            
        }

    },
    methods:{
        
    }
}
</script>
<style>
    .app-left{
        width: 80vw;
        height: 100vh;
        background: rgba(255,255,255,0);
        position: absolute;
        top: 0;
        z-index: 10;
        transform: translateX(-100%);
        transition-duration: 1s;
    }
    
    .app-left>div{
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        text-align: center;
        padding-top: 10%;
    }
    .app-left>div>p{
        color: #222;
        font-size: 18px;
    }
    .app-left>div>.left-hot{
        width: 100%;
        height: 34%;

        position: absolute;
        top: 14%;
        border-top: 1px solid #eee
    }
    .app-left>div>.left-hot>p{
        width: 25%;
        margin: -4% auto 0;
        background: #fff;
    }
    .app-left>div>.left-hot>div{
        width: 100%;
        height: 93%;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .app-left>div>.left-hot>div>div{
        width: 33.3%;
        height: 50%;
        padding: 4% 0; 
    }
    .app-left>div>.left-hot>div>div>p{
        color: #222;
    }
    .app-left>div>.left-hot>div>div>img{
        width: 50%;
    }
    .app-left>div>.left-recommend{
        height: 51%;
        top: 50%;
    }
    .app-left>div>.left-recommend>div>div{
        height: 33%;
    }
</style>

