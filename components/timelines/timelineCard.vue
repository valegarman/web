<template>
  <v-card>
    <v-row no-gutters class="d-flex">
      <v-col v-if="publication.img" cols="12" sm="12" md="3">
        <v-card class="ml-3 mt-3" width="150">
          <v-img width="150" :src="publication.img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="9">
        <v-card-text class="text-subtitle-1 text-sm-h5">
          <a :href="publication.link">{{ publication.title }}</a>
        </v-card-text>
      </v-col>
    </v-row>
    <div>
      <v-card-text class="pt-1 pb-0">
        <span class="text-h6 text-sm-h6">
          {{ publication.journal }}
        </span>
        {{ publication.issue }}
        <p class="text-subtitle-1">{{ publication.year }}</p>
      </v-card-text>

      <v-card-text class="pt-1">
        {{ publication.description }}
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    publication: {
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
