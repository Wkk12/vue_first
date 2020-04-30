<template>
  <div class="LoginHomePage">
    <nav>
      <a href="javascript:;">
        <img src="../../assets/img/login/login_logo.jpg" alt />
      </a>
        <a href="javascript:;">
          <span>注册</span>
          <span class="LoginHomePage_line"></span>
          <span>登录</span>
        </a>
    </nav>
    <main>
        <section class="main_left">
            <img src="../../assets/img/login/login_man.jpg" alt="">
            <div class="main_left_box">
                <div class="main_left_box_one">
                    <i class="fa fa-mortar-board"></i>
                    <p>我是学生</p>
                </div>
                <div class="main_left_box_two">
                    <i class="fa fa-user"></i>
                    <p>我是讲师</p>
                </div>
                <div class="main_left_box_three">
                    <i class="fa fa-user"></i>
                    <p>我是HR</p>
                </div>
            </div>
        </section>
        <section class="main_right">
            <div class="main_right_box">
                <div class="main_right_box_nav">
                    <a href="javascript:;"><span class="account_login">账号登陆</span></a>
                    <a href="javascript:;"><span class="weixin_login">微信登陆</span></a> 
                </div>
                
                <div class="account_box">
                    <input class="account_box_input_one" type="text" name="" id="" placeholder="手机号"><br/>
                    <input class="account_box_input_two" type="text" name="" id="" placeholder="密码">
                    <p class="forgot_password clearfix"><a href="javascript:;">忘记密码?</a></p>
                    <p class="login_btn"><a href="javascript:;"> 登录啦！</a></p>
                    <p class="registered_btn">还没有账号?<span class="please">请</span><a href="javascript:;">注册</a></p>
                </div>

            </div>
        </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "LoginHomePage"
};
</script>

<style lang="less" scoped>
.LoginHomePage{
    width: 1500px;
}
.LoginHomePage nav{
    display: flex;
    padding: 0 125px 0 150px ;
    justify-content: space-between;
    align-items: center;
    box-shadow: -1px 1px 12px 4px #e4e4e4;
}
.LoginHomePage nav a{
    
    color: #9d9d9d;
}
.LoginHomePage nav img{
    width: 275px;
    height: 55px;
    background-size: cover;
    margin:20px 0;
}
.LoginHomePage_line{
    display: inline-block;
    border-right: 1px solid;
    height: 16px;
    margin:-2px 6px;
}
.LoginHomePage main{
    display: flex;
}
.main_left{
    width: 530px;
    
    height: 844px;
    position: relative;
}
.main_left_box{
    width: 115px;
    height: 480px;
    display: flex;
    position: absolute;
    top: 140px;
    right: 0;
    color: white;
    flex-direction: column;
    text-align: center;
}
.main_left_box div{
    
    cursor: pointer;
}
.main_left_box_one{
    flex: 1;
    padding: 30px 25px;
    background: #202421;
}
.main_left_box_two{
    flex: 2;
    padding: 90px 25px;
    background: #adc700;
}
.main_left_box_three{
    flex:1;
    padding: 30px 25px;
    background: #202421;
}
// .main_left_box div{
//     background: #202421;
// }
.main_right{
    width: 550px;
    height: 480px;
    padding-top: 140px;
}
.main_right_box{
    width: 410px;
    height: 388px;
    padding: 65px 70px 26px 70px;
    box-shadow: 2px 1px 3px 3px #e4e4e4;
}
.main_right_box_nav{
    display: flex;
    justify-content: space-between;
}
.main_right_box_nav span{
    line-height: 30px;
    padding: 15px 70px;
    // border-bottom: 3px solid #ebebeb;
}
.account_login{
    color: #adc700;
    border-bottom: 3px solid #adc700;
}
.weixin_login{
    color: #939aa8;
    border-bottom: 3px solid #ebebeb;
}
.main_right_box_nav span:hover{
    color: #adc700;
    border-bottom: 3px solid #adc700;
}
.account_box input{
    width: 397px;
    height: 25px;
    margin-top: 55px;
}
.account_box_input_one,
.account_box_input_two
{
    padding: 2px 5px;
    border: none;
    border-bottom: 1px solid #ebebeb;
}
.forgot_password{
    float: right;
    margin-top: 15px;
}
.forgot_password a{
   color:#939aa8;
}
.login_btn{
    margin-top: 95px;
    width: 408px;
    line-height: 47px;
    background: #adc700;
    border-radius: 15px;
    color: white;
    font-size: 16px;
    text-align: center;
}
.login_btn a{
    color: #fefefc;
    display: block;
}
.registered_btn{
    margin-top: 25px;
    text-align: center;
    color: #cfcfcf;
}
.registered_btn a{
    color: #b1c90b;
}
.please{
    padding: 10px ;
}
</style>