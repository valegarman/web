<template>
  <div>
    <div v-for="(publication, i) in publications" :key="i">
      <p>
        {{ beforeHighlightName(publication) }}
        <u>{{ highlightName(publication) }}</u
        >{{ afterHighlightName(publication) }}.
        <i> {{ publication.title }}. </i>
        <b>{{ publication.journal }}</b> . {{ publication.issue }}. ({{
          publication.year
        }})
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    publications: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    me: 'Valero M',
  }),
  methods: {
    beforeHighlightName(publication) {
      const authors = publication.authors
      return authors.slice(0, authors.indexOf(this.me))
    },
    highlightName(publication) {
      return this.me
    },
    afterHighlightName(publication) {
      const authors = publication.authors
      const countMeIndex = this.me.length
      return authors.slice(
        authors.indexOf(this.me) + countMeIndex,
        authors.length
      )
    },
  },
}
</script>
