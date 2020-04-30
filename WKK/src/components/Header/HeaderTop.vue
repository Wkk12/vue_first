<template>
    <section class="nav_top">
           <div class="nav_top_box">
                <a href="javasciript:;">
                    <img class="nav_top_logo" src="../../assets/img/logo.png" alt="">
                </a>
                <a class="nav_top_userbox" href="javasciript:;">
                    <img class="nav_top_userhead" src="../../assets/img/userhead.jpg" alt="">
                    <span class="nav_top_username">罗密欧</span>
                    <i class="fa fa-angle-down"></i>
                </a>
            </div>
    </section>
</template>

<script>
export default {
    name:"HeaderTop",
}
</script>

<style scoped lang="less">
/* 头top */
.nav_top{
    line-height: 40px;
    background: #333333;
}
.nav_top_box ,
.nav_bottom ul{
    margin: 0 125px;
}
.nav_top_logo {
    width: 180px;
    height: 40px;
    background-size: 100%;
}
.nav_top_userhead{
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
}

.nav_top_userbox{
    float:right;
}
.nav_top_username{
    font-size: 16px;
    color: white;
    margin: 0 15px;
}
.nav_top_box i{
    font-size: 16px;
    color: white;
    margin-right: 30px;
}
</style>