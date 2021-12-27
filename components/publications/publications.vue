<template>
  <section>
    <v-container class="px-0" style="max-width: 800px">
      <v-row no-gutters>
        <v-switch
          v-model="switchTimeline"
          class="ml-2"
          :label="`Timeline`"
        ></v-switch>

        <v-checkbox
          v-model="isSelected"
          class="ml-4"
          :label="$t('timelineSearch.is_selected')"
        ></v-checkbox>
      </v-row>
      <div v-if="switchTimeline">
        <timeline :publications="selectedPublications" />
      </div>
      <div v-else>
        <publicationsText :publications="selectedPublications" />
      </div>
    </v-container>
  </section>
</template>

<script>
import timeline from '~/components/timelines/timeline.vue'
import publicationsText from '~/components/publications/publicationsText.vue'

export default {
  components: { timeline, publicationsText },
  props: {
    publications: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    isSelected: true,
    switchTimeline: true,
  }),
  computed: {
    selectedPublications() {
      return this.publications.filter(
        (publication) => publication.selected || !this.isSelected
      )
    },
  },
}
</script>
