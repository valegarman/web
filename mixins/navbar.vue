<script>
import links from '~/assets/links/links.json'

export default {
  data: () => ({
    links: links.links,
  }),
  methods: {
    goToId(id) {
      try {
        this.$vuetify.goTo(`#${id}`)
      } catch (err) {}
    },
    pushToHomeRouter(id) {
      this.$router.push(
        this.localePath({
          path: '/',
          query: { id: id.toLowerCase().replaceAll(' ', '-') },
        })
      )
    },
    pushToRouter(link) {
      this.$router.push(
        this.localePath({
          path: `/${link.type}/${link.id}`,
        })
      )
    },
  },
}
</script>
