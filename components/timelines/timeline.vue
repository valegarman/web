<template>
  <v-timeline dense>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
      class="mb-12"
    >
      <indexCard />
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import indexCard from '~/components/index/indexCard.vue'

export default {
  components: { indexCard },
  props: {
    years: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
