<template>
  <v-timeline dense>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
      class="mb-12"
    >
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
          {{ year.year }} Title
        </h2>
        <div>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    years: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
