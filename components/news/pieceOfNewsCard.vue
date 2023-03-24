<template>
  <v-card class="ma-2" max-width="265px" min-height="500px">
    <v-img
      v-if="pieceOfNews.img"
      class="white--text align-end"
      :height="$vuetify.breakpoint.mobile ? '150px' : '200px'"
      :src="pieceOfNews.img"
    >
    </v-img>
    <v-card-text class="text-subtitle-1 text-sm-h5">
      <a :href="pieceOfNews.link">{{ pieceOfNews.title }}</a>
    </v-card-text>
    <v-card-subtitle class="pb-0"> {{ pieceOfNews.date }} </v-card-subtitle>
    <v-card-text class="text--primary pt-5">
      {{ pieceOfNews.content }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    pieceOfNews: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
a:link,
a:visited {
  background-color: white;
  color: black;
  text-decoration: none;
  display: inline-block;
}

a:hover {
  color: var(--v-primary-base);
}
</style>
