<template>
  <div class="container">
    <dySwiper :data="swiperData" />
  </div>
</template>

<script>
import dySwiper from '@/components/dy-swiper'

export default {
  name: 'index',
  components: {
    dySwiper
  },
  data () {
    return {
      swiperData: []
    }
  },
  methods: {
    getSwiper () {
      this.$axios.get(this.$api.getSwiper).then(res => {
        this.swiperData = res.data
      })
    }
  },
  created () {
    this.getSwiper()
  }
}
</script>

<style scoped src="./index.scss" lang="scss"></style>
