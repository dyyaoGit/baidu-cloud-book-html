<template>
  <router-link :to="{name: 'details', params: {id: opt._id}}" class="content-item mt-10">
    <div class="content-item-left">
      <img class="img"
        :src="opt.img"
           alt="">
    </div>
    <div class="content-item-right">
      <div class="title">
        {{opt.title}}
      </div>
      <div class="desc">
        {{opt.desc}}
      </div>
      <div class="book-msg">
        <span class="author">
          {{opt.author}}
        </span>
        <span class="date">
          {{opt.updateTime}}
        </span>
        <span class="looks">
          {{opt.looksnum}}人在看
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "contentItem",
    props: {
      opt: Object
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../globalStyle/pxtorem';

  .content-item {
    display: flex;
    justify-content: space-between;

    .img {
      display: block;
      width: px-to-rem(200);
      height: px-to-rem(266);
    }

    .content-item-right {
      position: relative;
      flex: 1;
      margin-left: 10px;

      .title {
        font-size: 16px;
        font-weight: 400;
        color: #333;
      }
      .desc {
        line-height: 1.5;
        font-size: 12px;
        margin-top: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        color: #555;
      }
      .book-msg {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
