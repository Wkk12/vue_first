<template>
  <div class="CenterRightOne clearfix" :class="props_name.border">
        <img :src="props_name.img" alt="" >
        <div class="msg">
            <p class="one">
                <span>{{props_name.title}}</span><span class="progress">{{props_name.progress}}</span>
            </p>
            <p class="two">
                <span>上传时间：</span><span>{{props_name.data}}</span>
            </p>
            <p class="three">
                <span class="three_one"><i class="fa fa-user"></i>128位学员</span>
                <span><i class="fa fa-commenting"></i>18条评论</span>
            </p>
            <p class="four">{{props_name.data}}</p>
        </div>
  </div>
</template>

<script>

export default {
    name:"CenterRightOne",
    
    data:function(){
        return{
        }
    },
    props:["props_name"]
}
</script>

<style scoped lang="less">
.CenterRightOne{
    margin: 48px 0 40px;
    padding-left: 30px;
}
img{
    width: 196px;
    height: 128px;
    background-size: 100% 100%;
    float: left;
    margin-right: 25px;
    cursor: pointer;
}
.msg p{
    margin-bottom: 17px;
}
.one{
    font-size: 16px;
    font-weight: bold;
}
.two{
    font-size: 14px;
    font-weight: bolder;
    color:#5a5a5a;
}
.three{
    font-size: 12px;
    color: #cccccc;
}
.three i{
    margin-right: 5px;
}
.three_one{
    margin-right:20px ;
}
.four{
    font-size: 16px;
    color: #00aaff;
    font-weight: bolder;
}
.progress{
    color:#00aaff;
}

</style>