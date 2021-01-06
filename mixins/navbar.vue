<script>
import links from '~/content/links/links.json'

export default {
  data: () => ({
    links: links.links,
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
          path: `/pages/${link}`,
        })
      )
    },
  },
}
</script>
