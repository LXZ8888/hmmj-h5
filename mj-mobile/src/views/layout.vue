<template>
  <div class="layout-page">
    首页架子 - 内容区域

    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/article" icon="fire-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="like-o">点赞</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>

    <!-- 底部tabbar - 区域 -->
  </div>
</template>

<script>
export default {
  name: 'layout-page',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped></style>
