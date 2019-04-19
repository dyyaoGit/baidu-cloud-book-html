<template>
  <div class="container">
    <dySwiper :data="swiperData" />

    <div class="content">
      <div class="item mt-20" v-for="(item,index) in contentData" :key="index">
        <div class="row-1">
          <h2 class="title">
            {{item.title}}
          </h2>
          <router-link to="#">
            更多...
          </router-link>
        </div>
        <div class="row-2" v-if="item" >
          <contentItem
            v-for="(it,idx) in item.books" :key="idx"
            :opt="it"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dySwiper from '@/components/dy-swiper'
import contentItem from './components/contentItem'
import moment from 'moment'

export default {
  name: 'index',
  components: {
    dySwiper,
    contentItem
  },
  data () {
    return {
      swiperData: [],
      contentData: []
    }
  },
  methods: {
    getSwiper () {
      this.$axios.get(this.$api.getSwiper).then(res => {
        this.swiperData = res.data
      })
    },
    getContent () {
      this.$axios.get(this.$api.getCategoryBook).then(res => {
        this.contentData = res.data.map(item => {
          item.books = item.books.map(it => {
            const date = new Date(it.updateTime)
            it.updateTime = moment(date).format('YYYY年-MM月-DD日')
            return it
          })
          return item
        })
      })
    }
  },
  created () {
    this.getSwiper()
    this.getContent()
  }
}
</script>

<style scoped src="./index.scss" lang="scss"></style>
