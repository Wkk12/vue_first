<template>
    <div>
        <h1>111111111111111111111111111</h1>
        <CenterRightOne v-for='(item,index) in list' :key=index :props_name="item"></CenterRightOne>
        
    </div>
</template>

<script>
var img= require('../../assets/img/one.jpg');
var imgtwo= require('../../assets/img/two.jpg');
import CenterRightOne from "../Center/CenterRightOne.vue"

    export default {
        data:function(){
        return{
           img,
           imgtwo,
           list:[
                {"img":img,title:"显示你的实力——面试",progress:"「进行中」",data:"免费",border:"border_bottom"},
                {"img":imgtwo,title:"微信微博新媒体一笑课程",progress:"「已结束」",data:"￥199"}
           ]
        }
    },
        name:"CenterRightOneBox",
        components:{
            CenterRightOne
        }
    }
</script>

<style lang="scss" scoped>

</style>