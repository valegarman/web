<i18n>
{
  "en": {
    "is_selected": "Selected publications"
  },
  "es": {
    "is_selected": "Artículos seleccionados"
  }
}
</i18n>

<template>
  <section>
    <v-container style="max-width: 800px">
      <v-checkbox v-model="isSelected" :label="$t('is_selected')"></v-checkbox>
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
        (selected) => this.isSelected === false || selected === true
      )
    },
  },
}
</script>
