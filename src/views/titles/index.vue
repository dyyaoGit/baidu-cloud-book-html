<template>
  <div class="titles">
    <ul class="titles-content">
      <li class="title-item" v-for="(item, index) in titlesData" :key="index">
        <router-link :to="{name: 'article', params: {id: item._id}}">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      bookId: String
    },
    data () {
      return {
        titlesData: []
      }
    },
    methods: {
      getData () {
        const id = this.$route.params.id;
        this.$axios.get(this.$api.getTitles + id).then(res => {
          this.titlesData = res.data;
        })
      }
    },
    created () {
      this.getData();
    }
  }
</script>

<style scoped lang="scss">
  .titles {
    li {
      border-bottom: 1px solid #555;
      padding: 10px 8px;
      font-size: 14px;
    }
  }
</style>
