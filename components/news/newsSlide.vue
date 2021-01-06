<template>
  <section>
    <v-slide-group class="py-3" show-arrows>
      <v-slide-item v-for="newElement in news" :key="newElement.title">
        <indexCard :new-element="newElement" />
      </v-slide-item>
    </v-slide-group>
  </section>
</template>

<script>
import indexCard from '~/components/news/newsCard.vue'

export default {
  components: { indexCard },
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.v-slide-group__prev,
.v-slide-group__next {
  background: transparent;
  position: relative;
  min-width: 100px;
  z-index: 2;
  i {
    color: #fff !important;
    background: #000;
    font-size: 48px;
    border-radius: 50%;
  }
  .v-icon--disabled {
    display: none;
  }
}
.v-slide-group__wrapper {
  margin: 0 -100px 0 -100px;
}
</style>
