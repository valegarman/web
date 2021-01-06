<template>
  <section class="pa-1">
    <h2 class="pb-8 pl-5 font-weight-regular">
      {{ $t('news_and_views.title') }}
    </h2>
    <v-slide-group show-arrows>
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
  min-width: 40px;
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
</style>
