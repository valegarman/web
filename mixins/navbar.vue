<i18n>
{
  "en": {
    "index": "Home",
    "publications": "Publications", 
    "timeline": "Timeline"
  },
  "es": {
    "index": "Inicio",
    "publications": "Publicaciones",
    "timeline": "Linea temporal"
  }
}
</i18n>

<script>
export default {
  data: () => ({
    links: ['timeline', 'publications', 'asdfasdfasdfsadf'],
    activeTab: 'index',
  }),
  methods: {
    goToId(link) {
      try {
        this.$vuetify.goTo(`#${link}`)
      } catch (err) {}
    },
    pushToRouter(link) {
      this.$router.push(
        this.localePath({
          path: '/',
          query: { id: link.toLowerCase().replaceAll(' ', '-') },
        })
      )
    },
  },
}
</script>
