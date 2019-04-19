<template>
  <div class="container">
    <Header fixed :title="$route.meta.title || '云书'" style="z-index: 999">
      <Button size="small" slot="left" @click="$router.back()">
        <i class="iconfont icon-prev"></i>
        返回
      </Button>
    </Header>
    <router-view />
  </div>
</template>

<script>
  import {Header,Button} from 'mint-ui'

  export default {
    name: "index",
    components: {
      Header,
      Button
    }
  }
</script>

<style scoped lang="scss">
@import '../../globalStyle/pxtorem';

  .container {
    padding: 40px px-to-rem(18);
    padding-bottom: 0;
  }
</style>
