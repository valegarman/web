<template>
  <v-timeline dense>
    <v-timeline-item
      v-for="(publication, i) in publications"
      :key="i"
      :color="publication.selected ? 'green' : 'grey'"
      small
      class="mr-2"
      ><timelineCard :publication="publication" />
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import timelineCard from '~/components/timelines/timelineCard.vue'

export default {
  components: { timelineCard },
  props: {
    publications: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
