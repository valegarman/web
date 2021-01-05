<i18n>
{
  "en": {
    "index": "Home",
    "publications": "Publications", 
    "news": "News"
  },
  "es": {
    "index": "Inicio",
    "publications": "Publicaciones",
    "news": "Noticias"
  }
}
</i18n>

<script>
export default {
  data: () => ({
    links: ['news', 'publications'],
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
