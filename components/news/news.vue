<template>
  <div class="news">
    <div v-for="pieceOfNews in news" :key="pieceOfNews.name">
      <pieceOfNewsCard :piece-of-news="pieceOfNews" />
    </div>
  </div>
</template>

<script>
import pieceOfNewsCard from '~/components/news/pieceOfNewsCard.vue'

export default {
  components: {
    pieceOfNewsCard,
  },
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.news {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
