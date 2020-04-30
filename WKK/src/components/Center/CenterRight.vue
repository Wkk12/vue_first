<template>
  <div class="MainTwoRight">
      <nav>
        <router-link to="/three/threeOne" >
            <label>
                <input class="btn" type="radio" name="applicationSystem" value="1" checked>已发布课程
            </label>
        </router-link>
        <router-link to="/three/threeOne" >
            <label class="center">
                <input class="btn" type="radio" name="applicationSystem" value="1" checked>审核中课程
            </label>
        </router-link>
        <router-link to="/three/threeOne" >
            <label>
                <input class="btn" type="radio" name="applicationSystem" value="1" checked>未通过审核课程
            </label>
        </router-link>
      </nav>
      
      
        <router-view>
              
        </router-view>

  </div>
</template>
<script>
export default {
    
    name:"CenterRight",
    components:{
        
    }
}
</script>

<style scoped lang="less">
.MainTwoRight{
    border-radius: 8px;
    background: white;
    margin-left: 35px;
    flex: 1;
    margin-top: 50px ;
    justify-content:space-between;
}
nav{
    padding: 32px 40px;
    font-size: 20px;
    border-bottom: 1px solid #f0f0f0;
}
.btn{
    margin-right: 25px;
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.center{
    margin-left: 48px;
    margin-right: 62px;
}
.border_bottom{
     border-bottom: 1px solid #f0f0f0;
}
</style>