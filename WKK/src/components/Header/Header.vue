<template>
  <div>
      <HeaderTop></HeaderTop>
      <HeaderBottom></HeaderBottom>
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop.vue"
import HeaderBottom from "./HeaderBottom"
export default {
    name:"Header",
    components:{
        HeaderTop,
        HeaderBottom
    }
}
</script>

<style scoped lang="less">

</style>