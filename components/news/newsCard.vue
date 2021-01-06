<template>
  <v-card class="ma-2" max-width="300px" min-height="500px">
    <v-img
      v-if="newElement.img"
      class="white--text align-end"
      height="200px"
      :src="newElement.img"
    >
    </v-img>
    <v-card-text class="text-h6">
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
a:link {
  background-color: white;
  color: black;
  text-decoration: none;
  display: inline-block;
}

a:hover {
  color: var(--v-primary-base);
}
</style>
