
<template>
<div>
  <img src="../../src/assets/images/1.jpeg" alt="">
 <div class="block">
  <el-carousel indicator-position="none" height="620px" >
    <el-carousel-item v-for="(item,index) in img" :key="index" >
      <img :src="item.url" width="100%" height="100%">
    </el-carousel-item>
  </el-carousel>
  </div>
  <div class="blocka">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="(item,index) in imgi" :key="index">
      <img :src="item.url" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>
<script>
export default {
name:'MallA',
data() {
  return {
    img:[
      {url:require('../../src/assets/images/2.jpeg')},
      {url:require('../../src/assets/images/6.jpeg')},
     
    ],
    imgi:[
      {url:require('../../src/assets/images/3.jpeg')},
      {url:require('../../src/assets/images/4.jpeg')},
      

    ]
  }
},
}
</script>

<style lang="less" scoped>
div img{
  width: 1278px;
  height: 600px;
}
 .block{
  margin-top: -10px;
 } 
  .blocka{
  margin-top: -20px;
 } 
</style>