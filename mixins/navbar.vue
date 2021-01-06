<script>
export default {
  data: () => ({
    links: [
      {
        id: 'news',
        type: 'section',
      },
      {
        id: 'publications',
        type: 'section',
      },
      {
        id: 'resources',
        type: 'page',
      },
    ],
  }),
  methods: {
    goToId(link) {
      try {
        this.$vuetify.goTo(`#${link}`)
      } catch (err) {}
    },
    pushToHomeRouter(link) {
      this.$router.push(
        this.localePath({
          path: '/',
          query: { id: link.toLowerCase().replaceAll(' ', '-') },
        })
      )
    },
    pushToRouter(link) {
      this.$router.push(
        this.localePath({
          path: `/${link}`,
        })
      )
    },
  },
}
</script>
