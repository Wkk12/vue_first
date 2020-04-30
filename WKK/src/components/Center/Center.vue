<template>
    <div class="MainTwo">
        <CenterLeft></CenterLeft>
        <CenterRight></CenterRight>
    </div>
</template>

<script>
import CenterLeft from "./CenterLeft";
import CenterRight from "./CenterRight"
export default {
    name:"Center",
    components:{
        CenterLeft,
        CenterRight
    }
}
</script>

<style scoped lang="less">
.MainTwo{
    padding: 0px 125px;
    background: #f4f4f4;
    display: flex;
    padding-bottom: 35px;
}
</style>