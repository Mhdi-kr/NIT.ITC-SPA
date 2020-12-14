<template>
  <nav class="hidden-sm">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      style="font-size: 14px !important;"
      @select="handleSelect"
    >
      <el-menu-item index="1" class="is-hidden-touch">
        <nuxt-link to="/">صفحه اصلی</nuxt-link>
      </el-menu-item>

      <el-submenu class="is-hidden-touch" index="2">
        <template slot="title">معرفی مرکز</template>
        <el-menu-item index="2-1">
          <nuxt-link to="/aboutUs">مرکز داده دانشگاه</nuxt-link>
          </el-menu-item>
        <el-menu-item index="2-2">
          <nuxt-link to="/personnel">افراد</nuxt-link>
          </el-menu-item>
      </el-submenu>
      <el-menu-item class="is-hidden-touch" index="3">
        <nuxt-link to="/services">خدمات</nuxt-link>
      </el-menu-item>
      <el-menu-item class="is-hidden-touch" index="4">
        <nuxt-link to="/terms">قوانین</nuxt-link>
      </el-menu-item>
      <el-menu-item class="is-hidden-touch" index="5">
        <nuxt-link to="/projects">پروژه ها</nuxt-link>
      </el-menu-item>
      <el-menu-item class="is-hidden-touch" index="6">
        <nuxt-link to="/news">اخبار</nuxt-link>
      </el-menu-item>
      <el-menu-item class="is-hidden-touch" index="7">
        <nuxt-link to="/guide">راهنما</nuxt-link>
      </el-menu-item>
      <el-menu-item class="is-hidden-touch" index="8">
        <nuxt-link to="/contact">تماس با ما</nuxt-link>
      </el-menu-item>
      <el-menu-item class="is-hidden-fullhd is-hidden-widescreen is-hidden-desktop">
        <i class="el-icon-menu"></i>
      </el-menu-item>
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
