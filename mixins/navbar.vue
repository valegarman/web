<script>
import links from '~/assets/links/links.json'

export default {
  data: () => ({
    links: links.links,
    activeTab: null,
  }),
  mounted() {
    const slug = this.$route.params.slug
    if (slug) {
      const selectedTab = this.$data.links.filter((link) => link.id === slug)
      if (selectedTab.length === 1) {
        this.$data.activeTab = selectedTab[0].id
      } else {
        const fullPathElements = this.$route.fullPath.split('/')
        const linkType = fullPathElements[fullPathElements.length - 2]
        switch (linkType) {
          case 'people':
            this.$data.activeTab = 'people'
            break
          default:
            this.$data.activeTab = 'index'
        }
      }
    }
  },
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
