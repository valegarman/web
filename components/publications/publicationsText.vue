<template>
  <v-card class="ma-2 pa-2">
    <v-card-actions justify="right">
      <v-spacer></v-spacer>
      <v-btn @click="copy">
        <v-icon v-if="!copying" color="blue darken-2">mdi-clipboard</v-icon>
        <v-icon v-else color="green">mdi-check</v-icon>
      </v-btn>
    </v-card-actions>
    <div v-for="(publication, i) in publications" :key="i">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="publicationToHtml(publication)"></p>
    </div>
  </v-card>
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
    namesToHighlight: ['Valero M'],
    copying: false,
  }),
  methods: {
    highlightNames(authors) {
      let authorsHighlighted = authors
      this.namesToHighlight.forEach((name) => {
        authorsHighlighted = authorsHighlighted.replace(
          name,
          '<b>' + name + '</b>'
        )
      })
      return authorsHighlighted
    },
    publicationToHtml(publication) {
      return (
        this.highlightNames(publication.authors) +
        '. ' +
        '<i>' +
        publication.title +
        '. </i>' +
        publication.journal +
        '. ' +
        publication.issue +
        '. ' +
        publication.year +
        '.'
      )
    },
    copy() {
      this.copying = true
      setInterval(() => {
        this.copying = false
      }, 2000)
      const strings = this.publications.map((publication) =>
        this.publicationToHtml(publication)
      )
      const string = strings.join('<br><br>').replace(/<b>|<\/b>/g, '')
      function handler(event) {
        event.clipboardData.setData('text/html', string)
        event.preventDefault()
        document.removeEventListener('copy', handler, true)
      }

      document.addEventListener('copy', handler, true)
      document.execCommand('copy')
    },
  },
}
</script>
