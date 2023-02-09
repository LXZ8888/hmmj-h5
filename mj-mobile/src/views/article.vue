<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a
        href="javascript:;"
        :class="{ active: type == 'weight_desc' }"
        @click="changeTab('weight_desc')"
        >推荐</a
      >
      <a
        href="javascript:;"
        :class="{ active: type != 'weight_desc' }"
        @click="changeTab()"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>
    <!-- 上拉加载 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <Article-item
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></Article-item>
    </van-list>
  </div>
</template>

<script>
import { articleListAPI } from '@/api/article'
export default {
  name: 'article-page',
  data () {
    return {
      type: 'weight_desc',
      list: [],
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    changeTab (type) {
      this.type = type
      this.list = []
      // 有可能页码已经发生变化了
      this.page = 1
      this.loading = this.finished = false
      this.onLoad()
    },
    async onLoad () {
      // 异步更新数据
      const res = await articleListAPI({
        current: this.page,
        pageSize: 10,
        sorter: this.type
      })
      this.page++
      console.log(res)
      // 不能用=进行复制，因为这样会覆盖原本的数据,我们应该在原本的数据上进行追加。this,list.push()，不能直接追加数组。...把数据展开，
      // this.list = res.data.rows
      this.list.push(...res.data.rows)
      this.loading = false
      if (this.list.length >= res.data.total) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
