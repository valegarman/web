<template>
  <v-card
    flat
    @mouseover="touch = true"
    @mouseleave="touch = false"
    @touchstart="touch = true"
    @touchend="touch = false"
  >
    <v-img
      v-if="newElement.img"
      class="white--text align-end"
      :height="'300px'"
      :src="!touch ? newElement.img : newElement.imgAlt"
    >
    </v-img>
    <v-card-text class="text-subtitle-1 text-sm-h6">
      <a :href="newElement.link">{{ newElement.name }}</a>
    </v-card-text>
    <v-card-subtitle class="pb-0"> {{ newElement.subtitle }} </v-card-subtitle>
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
  data() {
    return {
      touch: false,
    }
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
