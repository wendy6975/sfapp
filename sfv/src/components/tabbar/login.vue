<template>
    <div class="app-login">
        <div class="login-header">
            <img src="/img/back.png" @click="back" alt="">
            <p>登录</p>
            <h5 @click="reg">注册</h5>
        </div>
        <div class="login-input">
            <div>手机号码
                <input type="text" placeholder="请输入手机号" id="uphone" @focus="focus" @blur="blurPhone">
            </div>
            <div>登录密码
                <input type="password" placeholder="请输入手机密码" id="upwd"
                @focus="focus" @blur="blurPwd">
            </div>
        </div>
        <div class="login-button">
            <button :style=bg @click="submit" disabled ref="login">登录</button>
        </div>
        <div class="login-warn">
            <p>登录即代表你已经同意<span>《顺丰速运服务条款》</span>和<span>《顺丰速运隐私条款》</span></p>
        </div>
        <div class="login-phone">
            <p>客服电话<span>95338</span></p>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            n:[],
            bg:"",
            uphone:"",
            upwd:""
        }
    },
    methods: {
        focus(e){
            e.target.placeholder="";
            
        },
        blurPhone(e){
            var a=e.target;
            var reg=/^1[3-9]\d{9}$/
            this.blur(a,"手机号码格式错误",reg,0);
            this.uphone=a.value;
        },
        blurPwd(e){
            var a=e.target;
            var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
            this.blur(a,"手机密码格式错误",reg,1);
            this.upwd=a.value;
        },
        blur(a,b,reg,i){
            if(!reg.test(a.value)){
                Toast(b);
                return;
                this.n[i]=0;
            }else{
                this.n[i]=1;
            }
            for(var it of this.n){
                if(it==0||this.n.length<2){
                    return;
                }else{
                    this.bg="background:#eb4c5f";
                    this.$refs.login.disabled=false;
                    console.log(this.$refs.login);
                }
            }

            
        },
        submit(){
            var postData=this.qs.stringify({
                phone:this.uphone,
                upwd:this.upwd
            });
            var url="http://127.0.0.1:3000/login";
            this.axios.post(url,postData).then(result=>{
                console.log(result);
                if(result.data.code==1){
                    Toast("登录成功");
                    /* */ this.$router.push("/Home");
                    sessionStorage.setItem("uname",result.data.data[0].uname);
                }else{
                    Toast("手机号码或密码错误");
                }
            });
        },
        back(){
            this.$router.back();
        },
        reg(){
            this.$router.push("/Register");
        }
    },
    created() {
        console.log(this.$refs.login);
    },
}
</script>
<style>
.app-login{
        background: #eee;
        width: 100vw;
        height: 100vh;
        overflow: scroll;
    }
.app-login  .login-header{
        width: 100vw;
        height: 6vh;
        position: fixed;
        background: #fff;
    }
    .app-login .login-header>img{
        width: 10vw;
        float: left;
    }
    .app-login .login-header>p{
        width: 80vw;
        height: 6vh;
        line-height: 6vh;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        float: left;
        color: #111;
    }
    .app-login .login-header>h5{
        width: 10vw;
        height: 6vh;
        line-height: 6vh;
        float: left;
        margin: 0;
        color: #eb4c5f;
    }
.app-login .login-input{
        background: #fff;
        width: 100vw;
        height: 12vh;
        position: relative;
        top: 8vh;
    }
    .app-login .login-input>div{
        height: 49.5%;
        padding-left: 5vw;
        border-bottom:1px solid #eee; 
    }
    .app-login .login-input>div>input{
        width: 80%;
        height: 95%;
        margin: 0;
        font-size: 14px;
        border: 0;
    }
    .app-login .login-button{
        width: 100vw;
        height: 5vh;
        position: relative;
        top: 13vh;
        text-align: center
    }
    .app-login .login-button>button{
        width: 88vw;
        height: 6vh;
        background: #ccc;
        color: #fff;
        font-size: 14px;
    }
.app-login .login-warn{
        position: relative;
        top: 70vh;
        text-align: center;
    }
    .app-login .login-warn>p{
        font-size: 8px;
    }
    .app-login .login-warn>p>span{
        color: #2196f3;
    }
.app-login .login-phone{
        width: 100vw;
        height: 7vh;
        background: #fff url("/img/ic_telephone_icon_selected.png")no-repeat 26% 50%;
        background-size: 6%;
        position: fixed;
        bottom: 0;
    }
    .app-login .login-phone>p{
        padding:3% 31%; 
        color: #222;
    }
    .app-login .login-phone>p>span{
        margin-left: 2vw;
        color: #999;
    }
</style>
