<template>
  <div class="dy-swiper">
    <swiper :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide v-for="(item, index) in data" :key="index">
        <div class="swiper-item">
          <img :src="item.img" alt="" class="swiper-item-img">
          <p class="desc">{{item.title}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css' // 引入轮播图样式
import { swiper, swiperSlide } from 'vue-awesome-swiper' // 引入轮播图组件

export default {
  name: 'index',
  props: {
    data: Array
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../globalStyle/pxtorem';
  .dy-swiper {
    .swiper-item {
      position: relative;
      height: px-to-rem(400);

      .swiper-item-img {
        display: block;
        width: 100%;
        height: 100%;
      }

      .desc {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 30px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 14px;
        line-height: 30px;
        padding: 0 6px;
      }

    }
  }
</style>
