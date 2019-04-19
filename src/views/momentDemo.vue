<template>
  <div>
    <h1>{{str}}</h1>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: "momentDemo",
    data () {
      return {
        str: ''
      }
    },
    mounted () {
      const date = new Date('2019-04-18 21:56:28.749');
      this.str = moment(date).format('YYYY年-MM月-DD日');
    }
  }
</script>

<style scoped>

</style>
