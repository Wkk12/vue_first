<template>
    <div class="write_msg">
            <ul class="write_msg_nav" >
                <li class="write_msg_nav_userhaed">
                        <div class="userhead_box"> 
                            <img src="../../assets/img/userhead.jpg" alt="">
                            <p class="editor_title">编辑</p>
                        </div>
                </li>
                <li class="my_msg">
                    <a href="javascript:"><i class="fa fa-user "></i><span>我的课程</span></a>
                </li>
                <li class="certification_msg">
                    <a href="javascript:"><i class="fa fa-check-square-o"></i><span>我的活动</span></a>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    name:"CenterLeft"
}
</script>

<style scoped lang="less">
.write_msg{
    margin-top: 50px;
    margin-right: 20px;
    background: white;
    border-radius: 8px;
}
.write_msg_nav{
      padding: 50px 95px 270px;
      text-align: center;
      
}
.userhead_box{
    width: 105px;
    height: 105px;
    overflow: hidden;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    position: relative;
    margin-bottom: 50px;
    cursor: pointer;
}
.editor_title{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    padding-top: 4px;
    background: #92908dfb;
}
.write_msg_nav_userhaed{
    position: relative;
}
.write_msg_nav_userhaed img{
    width: 105px;
    height: 105px;
    background-size: 100%;
    border-radius: 50%;
    margin-bottom: 50px;
}
.userhead_editor{
    position: absolute;
}
.my_msg, .certification_msg{
    font-size: 20px;
    color: #666666;
    margin-bottom: 30px;
}
.my_msg a{
    color: #00aaff;
}
.my_msg i,
.certification_msg i
{
    margin-right: 3px;
}
</style>