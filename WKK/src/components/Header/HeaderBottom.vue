<template>
    <main>
        <section class="nav_bottom">
                <ul>
                    <li class="home_page" >
                        <router-link to="/one" >My Center</router-link>
                    </li>
                    <li  class="basic_information"   >
                        <router-link to="/two" >基础信息</router-link>
                    </li>
                    
                    <li class="class_management">
                          <router-link to="/three" >课程管理</router-link>
                    </li>
                    <li class="my_answer">
                        <a href="javascript:;">我的问答</a>
                    </li>
                
                </ul>
                <div class="add_class_btn"><i>+</i>添加课程</div>
        </section>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name:"HeaderBottom",
     data:function(){
            return{
                toggle:{
                    main:true,
                    maintwo:false
                },
                fantoggle:{
                    main:false,
                    maintwo:true
                },
                message:""
            }
        },
        
        methods:{     
                one: function () {
                    // bus.$emit('on-message', this.toggle);
                },
                two: function () {
                    // bus.$emit('on-message', this.fantoggle);
                }

           },
}
</script>

<style scoped lang="less">
/* 头bottom */
.nav_bottom{
    position: relative;
}
.nav_bottom ul{
    height: 90px;
    margin: 0 125px;
}
.nav_bottom ul li{
    float: left;
}
.home_page{
    font-size: 26px;
    margin-top: 33px;
    margin-right: 98px;

}
.home_page a{
    color: #00a7ff;
}
.basic_information{
    font-size: 18px;
}
.class_management,
.basic_information,
.my_answer
{
    font-size: 16px;
    margin-top: 40px;
}
.class_management{
    margin: 40px 85px 0 85px;
}
.add_class_btn{
    float: right;
}
.add_class_btn{
    top: 32px;
    right: 125px;
    position: absolute;
    border: 1px solid #f6f6f6;
    padding: 6px 40px;
    border-radius: 15px;
    color: #00aaff;
}
.add_class_btn i{
    margin-right: 5px;
    font-weight: bold;
}
</style>