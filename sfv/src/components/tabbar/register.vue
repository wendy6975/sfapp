<template>
    <div class="app-register">
        <div class="register-header">
            <img src="/img/back.png" @click="back" alt="">
            <p>注册</p>
            
        </div>
        <div class="register-input">
           <div>用户名称:
                <input type="text" placeholder="用户名长度为3~8" id="uname" @focus="namef" @blur="nameb">
            </div>
            <div>手机号码
                <input type="text" placeholder="请输入11位手机号码" id="phone" @focus="phonef" @blur="phoneb">
            </div>
            <div>电子邮箱
                <input type="text" placeholder="请输入常用邮箱" id="email" @focus="emailf" @blur="emailb">
            </div>
            <div>登录密码
                <input type="password" placeholder="密度为6~12位，必须且只能包含字母，数字" id="upwd1" @focus="pwdf" @blur="pwdb">
            </div>
            <div>确认密码
                <input type="password" placeholder="请再次输入密码" id="upwd2" @focus="pwd2f" @blur="pwd2b">
            </div>
        </div>
        <div class="register-button">
            <button :style=bg @click="submit" disabled ref="reg">注册</button>
        </div>
        
        <div class="register-phone">
            <p>客服电话<span>95338</span></p>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            test:[],
            uname:"",
            phone:"",
            email:"",
            upwd:"",

            bg:""
        }
    },
    methods: {
        back(){
            this.$router.back();
        },
        focus(a){
            a.placeholder="";
        },
        blur(a,b,reg,d,f){
            if(!a.value){
                a.placeholder=b;
            }else if(!reg.test(a.value)){
                this.test[f]=0;
                Toast(d);
            }else{
                this.test[f]=1;
            }
        },

        namef(e){
            var a=e.target;
            this.focus(a);
        },
        nameb(e){
            var a=e.target;
            var reg=/^[0-9a-zA-Z\u4e00-\u9fa5]{3,8}$/;
            this.blur(a,"用户名长度为3~8",reg,"用户名格式错误",0);
            this.uname=a.value;
        },
        phonef(e){
            var a=e.target;
            this.focus(a);
        },
        phoneb(e){
            var a=e.target;
            var reg=/^1[3-8]\d{9}$/;
            this.blur(a,"请输入11位手机号码",reg,"手机号码格式错误",1);
            this.phone=a.value;
        },
        emailf(e){
            var a=e.target;
            this.focus(a);
        },
        emailb(e){
            var a=e.target;
            var reg=/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.(com|cn)$/;
            this.blur(a,"请输入常用邮箱",reg,"邮箱格式格式错误",2);
            this.email=a.value;
        },
        pwdf(e){
            var a=e.target;
            this.focus(a);
        },
        pwdb(e){
            var a=e.target;
            var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
            this.blur(a,"密度为6~12位，必须且只能包含字母，数字",reg,"密码格式格式错误",3);
            this.upwd=a.value;
        },
        pwd2f(e){
            var a=e.target;
            this.focus(a);
        },
        pwd2b(e){
            var a=e.target;
            if(!a.value){
                a.placeholder="请再次输入密码";
            }
            if(a.value!=this.upwd){
                Toast("密码不一致");
                this.test[4]=0;
            }else{
                this.test[4]=1;
            }
            for(var it of this.test){
                if(it==0||this.test.length<2){
                    this.bg="background:#ccc";
                    this.$refs.reg.disabled=true;
                    return;
                }else{
                    this.bg="background:#eb4c5f";
                    this.$refs.reg.disabled=false;
                    
                }
            }
        },
        submit(){
            var postData=this.qs.stringify({
                uname:this.uname,
                phone:this.phone,
                email:this.email,
                upwd:this.upwd
            });
            var url="http://127.0.0.1:3000/register"
            this.axios.post(url,postData).then(result=>{
               
                if(result.data==2){
                    Toast("该手机号已注册");
                    return;
                }else if(result.data==1){
                    Toast("注册成功");
                    this.$router.push("/Home");
                    sessionStorage.setItem("uname",this.uname);
                } 
            });
        },
    },
    created() {
    
    },
}
</script>
<style>
.app-register{
        background: #eee;
        width: 100vw;
        height: 100vh;
        overflow: scroll;
    }
.app-register  .register-header{
        width: 100vw;
        height: 6vh;
        position: fixed;
        background: #fff;
    }
    .app-register .register-header>img{
        width: 10vw;
        float: left;
    }
    .app-register .register-header>p{
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
    .app-register .register-header>h5{
        width: 10vw;
        height: 6vh;
        line-height: 6vh;
        float: left;
        margin: 0;
        color: #eb4c5f;
    }
.app-register .register-input{
        /* background: rgba(235, 76, 95, .8); */
        width: 100vw;
       height: 40vh;
        position: relative;
        top: 8vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }
    .app-register .register-input>div{
        width: 99%;
        height: 6vh;
        padding-left: 5vw;
        border-radius: 10vh;
       background: rgba(255, 255, 255, 0.8);
       line-height: 6vh;
    }
    .app-register .register-input>div>input{
        background: transparent;
        width: 78%;
        height: 95%;
        margin: 0;
        font-size: 14px;
        border: 0;
        font-size: 12px;
    }
    .app-register .register-button{
        width: 100vw;
        height: 5vh;
        position: relative;
        top: 13vh;
        text-align: center
    }
    .app-register .register-button>button{
        width: 88vw;
        height: 6vh;
        background: #ccc;
        color: #fff;
        font-size: 14px;
    }
.app-register .register-warn{
        position: relative;
        top: 70vh;
        text-align: center;
    }
    .app-register .register-warn>p{
        font-size: 8px;
    }
    .app-register .register-warn>p>span{
        color: #2196f3;
    }
.app-register .register-phone{
        width: 100vw;
        height: 7vh;
        background: #fff url("/img/ic_telephone_icon_selected.png")no-repeat 26% 50%;
        background-size: 6%;
        position: fixed;
        bottom: 0;
    }
    .app-register .register-phone>p{
        padding:3% 31%; 
        color: #222;
    }
    .app-register .register-phone>p>span{
        margin-left: 2vw;
        color: #999;
    }
</style>
