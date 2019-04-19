<template>
  <div class="article">
    <div class="markdown" v-html="articleData.contentHtml" :style="{fontSize: fontSize + 'px'}">
    </div>
    <div class="bg" v-show="isShowBg" @click="hideCatelog">
    </div>
    <div class="catelog" :style="{transform: 'translateX('+translate+')'}">
      <ul>
        <li v-for="(item,index) in titlesData" :key="index" @click="jump(item._id)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <div class="menus">
      <i class="iconfont icon-prev" @click="handleJump('prev')"></i>
      <i class="iconfont icon-mulu" @click="showCatelog"></i>
      <i class="iconfont icon-zitifangda" @click="handleAdd"></i>
      <i class="iconfont icon-zitisuoxiao" @click="handleReduce"></i>
      <i class="iconfont icon-next" @click="handleJump"></i>
    </div>
  </div>
</template>

<script>
  import showdown from 'showdown'
  import {Toast} from 'mint-ui'
  import titles from '../titles'

  export default {
    name: "index",
    components: {
      titles
    },
    data () {
      return {
        articleData: {},
        fontSize: 50,
        titlesData: [],
        isShowBg: false,
        translate: '-100%'
      }
    },
    methods: {
      getData () {
        const {id} = this.$route.params;
        this.$axios.get(this.$api.getArticle + id).then(res => {
          const converter = new showdown.Converter();
          this.articleData = res.data;
          this.articleData.contentHtml = converter.makeHtml(res.data.content.trim())
          this.getTitles();
        })
      },
      handleJump (isPrev) {
        if(isPrev == 'prev') {
          if(this.articleData.index == 0){ // 不是第一张
            Toast({
              message: '已经是第一章了',
              duration: 1500
            })
          } else {
            const index = this.articleData.index - 1;
            const id = this.titlesData[index]._id;
            this.$router.push({
              name: 'article',
              params: {
                id
              }
            })
            this.getData()
          }
        } else { // 下一张
          const index = this.articleData.index;
          if(index == this.titlesData.length - 1) {
            Toast({
              message: '已经是最后一张了',
              duration: 1500
            })
          } else {
            const index = this.articleData.index + 1;
            const id = this.titlesData[index]._id;
            this.$router.push({
              name: 'article',
              params: {
                id
              }
            })
            this.getData();
          }
        }
      },
      getTitles () {
        this.$axios.get(this.$api.getTitles + this.articleData.bookId).then(res => {
          this.titlesData = res.data;
        })
      },
      handleAdd () {
        this.fontSize += 2;
      },
      handleReduce () {
        if(this.fontSize < 40){
          Toast({
            message: '字体太小会损害视力哦',
            duration: 1500
          })
          return
        }
        this.fontSize -= 2;
      },
      showCatelog () {
        this.isShowBg = true;
        this.translate = '0';
      },
      hideCatelog () {
        this.translate = '-100%';
        setTimeout(() => {
          this.isShowBg = false;
        }, 2000)
      },
      jump (id) {
        this.$router.push({
          name: 'article',
          params: {
            id
          }
        })
        this.isShowBg = false;
        this.translate = '-100%';
        this.getData()
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style lang="scss">
  @import './markdown.scss';
</style>
<style scoped lang="scss">
  .article {
    .menus {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      background: #fff;
      border-top: 1px solid #eee;
      padding: 8px;

      .iconfont {
        flex: 1;
        text-align: center;
        font-size: 20px;
      }
    }
    .bg {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 998;
      background: rgba(0,0,0,.5);
    }

    .catelog {
      background: #fff;
      position: fixed;
      z-index: 1001;
      top: 40px;
      bottom: 0;
      left: 0;
      width: 50%;
      border-right: 1px solid #eee;
      transform: translateX(-100%);
      transition: transform ease 2s;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;

      li {
        padding: 10px;
        border-bottom: 1px solid #eee;
      }
    }
  }
</style>
