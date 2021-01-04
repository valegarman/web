<template>
  <section>
    <v-container style="max-width: 600px">
      <v-text-field v-model="select" label="Search"></v-text-field>
      <timeline :years="selectedYears" />
    </v-container>
  </section>
</template>

<script>
import timeline from '~/components/timelines/timeline.vue'

export default {
  components: { timeline },
  props: {
    years: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    select: null,
  }),
  computed: {
    selectedYears() {
      return this.years.filter((year) => year.year > this.select)
    },
  },
}
</script>
