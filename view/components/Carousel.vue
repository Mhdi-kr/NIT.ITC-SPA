<template>
  <el-carousel :interval="5000" height="500px">
    <el-carousel-item v-for="item in 3" :key="item">
      <img class="carousel-image" :src="require('~/static/images/Header(' + item + ').jpg')" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.carousel-image {
  user-select: none;
  width: 100vw;
  min-height: 100%;
  display:block;
  margin:auto;
}
</style>