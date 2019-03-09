<template>
    <div class="express-news">
        <p>无最新的寄出的快递和收到的快递~</p>
        <button type="button" class="mui-btn mui-btn-outlined">
            我要寄件
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .express-news{
        width: 100vw;
        height: 19vh;
        text-align: center;
        background: url(/img/ic_home_list_empty_new_express.png) no-repeat center 20%;
        background-size:10%;
        padding-top:17%; 
        position: absolute;
        bottom: 0;
    }
    .express-news>p{
        font-size: 12px;
        margin: 0;
    }
    .express-news>button{
        width: 25%;
        line-height: .9;
        color: #2190f3;
        margin-top:3%;
        font-size: 12px;
    }
</style>
