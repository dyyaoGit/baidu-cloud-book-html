<template>
  <!--// router 路由-->
  <!--// route 路线-->
  <!--// routes 路线们，-->

  <div class="details">
     <div class="book-details">
       <div class="book-details-left">
         <img :src="bookData.img" alt="">
       </div>
       <div class="book-details-right">
         <h2 class="title">{{bookData.title}}</h2>
         <div class="details-right-btm">
           <div class="author">作者: {{bookData.author}}</div>
           <div class="looksnum">{{bookData.looksnum}}人在看</div>
           <div class="likes">0人喜欢</div>
         </div>
       </div>
     </div><!--book-details end-->
    <div class="btns">
      <Button size="small">加入收藏</Button>
      <Button size="small">分享好友</Button>
    </div>
    <div class="line"></div>
    <div class="book-msg">
      <div class="title">
        ECMAScript6
      </div>
      <div class="desc">
          《ECMAScript 6入门》是一本开源的JavaScript语言教程，全面介绍ECMAScript 6新引入的语法特性。
      </div>
    </div>
    <div class="show-titles">
      <div class="title">
        查看目录
        <span class="total-titles">共{{titlesData.length}}章</span>
      </div>
      <div class="date">
        {{bookData.updateTime}}
      </div>
    </div>
    <div class="line"></div>

    <div class="btn-wrap">
      <Button
        size="large"
        type="primary"
        @click="handleJump"
        class="btm-btn">阅读该书籍</Button>
    </div>
  </div>
</template>

<script>
  import {Button} from 'mint-ui';
  import moment from 'moment';

  export default {
    name: "index",
    components: {
      Button
    },
    data () {
      return {
        bookData: {},
        titlesData: []
      }
    },
    methods: {
      getData () {
        const id = this.$route.params.id
        this.$axios.get(this.$api.getBookById + id).then(res => {
          this.bookData = res.data
          this.bookData.updateTime = moment(this.bookData.updateTime).format('YYYY年-MM月-DD日');
        })
      },
      getTitles () {
        const id = this.$route.params.id;
        this.$axios.get(this.$api.getTitles + id).then(res => {
          console.log(res);
          this.titlesData = res.data;
        })
      },
      handleJump () {
        const id = this.$route.params.id;
        this.$router.push({
          name: 'titles',
          params: {
            id
          }
        })
      }
    },
    created () {
      this.getData()
      this.getTitles()
    }

  }
</script>

<style scoped lang="scss">
  @import '../../globalStyle/pxtorem';

  .details {
    .book-details {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .book-details-left {
        width: px-to-rem(200);
        height: px-to-rem(266);
        border: 1px solid #f1f1f1;
        box-shadow: 0 0 4px 2px rgba(0,0,0,.5);

        img {
          width: 100%;
          height: 100%;
        }
      }

      .book-details-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
        flex: 1;
        font-size: 13px;
        color: #333;

        .details-right-btm {
          margin-left: 4px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 80px;
          font-size: 12px;
          color: #555;
        }
      }
    }

    .btns {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .mint-button--small {
        font-size: 12px;
        height: 26px;
      }
    }
    .line {
      height: 4px;
      background: #999;
      margin: 20px 0;
    }

    .book-msg {
      .title {
        font-size: 16px;
      }
      .desc {
        margin-top: 20px;
        font-size: 12px;
        color: #555;
        line-height: 1.5;
      }
    }

    .show-titles {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .total-titles {
          font-size: 12px;
          margin-left: 30px;
        }
      }

      .date {
        font-size: 14px;
        color: #555;
      }
    }

    .btn-wrap {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: px-to-rem(18);

      .mint-button {
        height: 26px;
        font-size: 12px;
      }
    }
  }
</style>
