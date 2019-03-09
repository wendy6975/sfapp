//1.加载模块 express pool.js
const express=require("express");
const pool=require("./pool");
//2.创建服务器对象
var app=express();
//3.监听端口3000；
app.listen(3000);
//4.托管静态目录 public
app.use(express.static("public"));
//5.加载跨域访问模块
const cors=require("cors");
//6.配置跨域访问模块
app.use(cors({
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    credentials:true
}));
//7.加载第三方模块body-parser
const bodyParser=require("body-parser");
//8.配置对特殊json是否自动转换，不转
app.use(bodyParser.urlencoded({extended:false}));

//登录功能
app.post("/login",(req,res)=>{
    var obj=req.body;
    var sql=`SELECT * FROM sf_user WHERE phone=? AND upwd=?`;
    pool.query(sql,[obj.phone,obj.upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,data:result});
            
        }else{
            res.send({code:0});
        }
        
    });
});

//注册功能
app.post("/register",(req,res)=>{
    var obj=req.body;
    pool.query(`SELECT *FROM sf_user WHERE phone=?`,[obj.phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("2");
        }else{
            pool.query('INSERT INTO sf_user SET ?',[obj],(err,result)=>{
                if(err)throw err;
                console.log(result);
                if(result.affectedRows>0){
                    
                    res.send("1");
                }else{
                    res.send("0");
                }
            });
        }
    })
});