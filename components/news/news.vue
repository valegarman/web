<template>
  <div>
    <div class="news">
      <div v-for="pieceOfNews in newsSelectedSorted" :key="pieceOfNews.name">
        <pieceOfNewsCard :piece-of-news="pieceOfNews" />
      </div>
    </div>
    <div class="pt-5 d-flex justify-center">
      <v-btn
        v-if="!showMore"
        class="mx-2"
        fab
        dark
        small
        color="primary"
        @click="toggleShowMore"
      >
        <v-icon dark> mdi-chevron-down </v-icon>
      </v-btn>
      <v-btn
        v-if="showMore"
        class="mx-2"
        fab
        dark
        small
        color="primary"
        @click="toggleShowMore"
      >
        <v-icon dark> mdi-chevron-up </v-icon>
      </v-btn>
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
  data: () => ({
    showMore: false,
  }),
  computed: {
    newsSelectedSorted() {
      const newsSorted = [...this.news].sort(
        (aPieceOfNews, anotherPieceOfNews) => {
          const [aMonth, aYear] = aPieceOfNews.date
            .split('-')
            .map((dateElement) => Number(dateElement))
          const [anotherMonth, anotherYear] = anotherPieceOfNews.date
            .split('-')
            .map((dateElement) => Number(dateElement))
          const isFirstGreather =
            aYear === anotherYear ? aMonth > anotherMonth : aYear > anotherYear
          return isFirstGreather ? -1 : 1
        }
      )

      return this.showMore ? newsSorted : newsSorted.slice(0, 3)
    },
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore
      if (!this.showMore) {
        try {
          this.$vuetify.goTo(`#news`)
        } catch (err) {}
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
