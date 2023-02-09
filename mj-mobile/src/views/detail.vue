<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      fixed
      title="面经详细"
      @click-left="$router.back()"
    />
    <header class="header">
      <h1>{{ info.stem }}</h1>
      <p>
        {{ info.createdAt }} | {{ info.views }} 浏览量 |{{ info.likeCount }}
        点赞数
      </p>
      <p>
        <img :src="info.avatar" alt="" />
        <span>{{ info.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="info.content"></main>
    <div class="opt">
      <van-icon
        :class="{ active: info.likeFlag }"
        name="like-o"
        @click="doLike(1)"
      />
      <van-icon
        name="star-o"
        @click="doLike(2)"
        :class="{ active: info.collectFlag }"
      />
    </div>
  </div>
</template>

<script>
import { detailAPI, optAPI } from '@/api/article.js'
export default {
  name: 'detail-page',
  data () {
    return {
      info: {}
    }
  },
  async created () {
    const res = await detailAPI({
      id: this.$route.params.id
    })
    console.log(res)
    this.info = res.data
  },
  methods: {
    async doLike (optType) {
      await optAPI({
        id: this.$route.params.id,
        optType
      })

      if (optType === 1) {
        this.info.likeFlag = !this.info.likeFlag
      } else {
        this.info.collectFlag = !this.info.collectFlag
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
