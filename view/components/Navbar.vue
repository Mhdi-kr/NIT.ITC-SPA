<template>
  <nav class="hidden-sm">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">صفحه اصلی</el-menu-item>
      <el-submenu index="2">
        <template slot="title">معرفی مرکز</template>
        <el-menu-item index="2-1">مرکز داده دانشگاه</el-menu-item>
        <el-menu-item index="2-2">افراد</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">خدمات</el-menu-item>
      <el-menu-item index="4">قوانین</el-menu-item>
      <el-menu-item index="5">پروژه ها</el-menu-item>
      <el-menu-item index="6">اخبار</el-menu-item>
      <el-menu-item index="7">راهنما</el-menu-item>
      <el-menu-item index="8">تماس با ما</el-menu-item>
    </el-menu>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
<style scoped>
.el-menu {
  display: flex;
  flex: end;
  align-items: center;
}
</style>
