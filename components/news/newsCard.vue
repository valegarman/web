<template>
  <v-card flat>
    <v-img
      v-if="newElement.img"
      class="white--text align-end"
      :height="$vuetify.breakpoint.mobile ? '150px' : '200px'"
      :src="newElement.img"
    >
    </v-img>
    <v-card-text class="text-subtitle-1 text-sm-h5">
      <a :href="newElement.link">{{ newElement.title }}</a>
    </v-card-text>
    <v-card-subtitle class="pb-0"> {{ newElement.date }} </v-card-subtitle>
    <v-card-text class="text--primary pt-5">
      {{ newElement.content }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    newElement: {
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
