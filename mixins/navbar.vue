<script>
export default {
  data: () => ({
    links: ['news', 'publications'],
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
