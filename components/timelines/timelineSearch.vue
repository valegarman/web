<template>
  <section>
    <h2 class="pb-8 pl-5 font-weight-regular">
      {{ $t('publications.title') }}
    </h2>
    <v-container class="px-0" style="max-width: 800px">
      <v-checkbox
        v-model="isSelected"
        class="ml-2"
        :label="$t('timelineSearch.is_selected')"
      ></v-checkbox>
      <timeline :publications="selectedPublications" />
    </v-container>
  </section>
</template>

<script>
import timeline from '~/components/timelines/timeline.vue'

export default {
  components: { timeline },
  props: {
    publications: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    isSelected: true,
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
