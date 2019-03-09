<template>
    <div class="express-notes">
        <p>你最近没有寄件的下单记录呦~</p>
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
    .express-notes{
        width: 100vw;
        height: 19vh;
        text-align: center;
        background: url(/img/ic_home_list_empty_send_record.png) no-repeat center 20%;
        background-size:10%;
        padding-top:17%; 
        position: absolute;
        bottom: 0;
    }
    .express-notes>p{
        font-size: 12px;
        margin: 0;
    }
    .express-notes>button{
        width: 25%;
        line-height: .9;
        color: #2190f3;
        margin-top:3%;
        font-size: 12px;
    }
</style>
