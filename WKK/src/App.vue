<template>
  <div id="app">
      <!-- <Header></Header>
      <Bottom></Bottom> -->
      <Login></Login>

  </div>
</template>
<script>
// import Header from "../src/components/Header/Header.vue";
// import Bottom from "../src/components/Bottom/Bottom.vue"
import Login from "../src/components/Login.vue"

export default {
    components:{
    //   Header,
    //   Bottom,
        Login
    }
}
</script>>

<style lang="less">
/* 全栈重置样式 */
*{
    margin: 0px;
    padding: 0px;
}
ul, ol, li{
    list-style: none;
}
body{
    font-family: "Miocrsoft Yahei";
    /* 取一个页面的主色调 */
    color: black;
}
/* input{
    outline: none;
} */
img{
    vertical-align: middle;
}
/* a标签不会集成父元素的样式  要单独写 */
a{
    color: #333333;
    /* 下划线 */
    text-decoration: none;
}
a:hover{
    color: #00aaff;
}
/* *******************清除浮动  ************** */
.clearfix{
    zoom: 1;
}
.clearfix::after {
    content: "";
    display: block;
    height: 0px;
    line-height: 0px;
    font-size: 0px;
    clear: both;
}



</style>
