<template>
  <main>
    <v-app-bar app flat>
      <v-tabs :value="activeTab" centered class="ml-n9">
        <indexTab @tab="goToId" />
        <v-tab
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          @click="
            link.type === 'section' ? goToId(link.id) : pushToRouter(link.id)
          "
        >
          {{ $t(`nav.${link.id}`) }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-row no-gutters justify="center">
      <div id="index" ref="index" style="width: 100%; height: 100vh">
        <hero />
      </div>
      <v-col cols="12" md="8">
        <div id="news" ref="news" class="pb-5">
          <indexSection>
            <newsSlide :news="news.news" />
          </indexSection>
        </div>
        <div id="publications" ref="publications" class="pb-5">
          <indexSection>
            <timelineSearch :publications="publications.publications" />
          </indexSection>
        </div>
      </v-col>
    </v-row>
  </main>
</template>

<script>
import navbar from '~/mixins/navbar.vue'
import indexSection from '~/components/index/indexSection.vue'
import hero from '~/components/index/hero.vue'
import timelineSearch from '~/components/timelines/timelineSearch.vue'
import indexTab from '~/components/layout/indexTab.vue'
import newsSlide from '~/components/news/newsSlide.vue'

export default {
  layout: 'default',
  components: {
    indexSection,
    hero,
    timelineSearch,
    indexTab,
    newsSlide,
  },
  mixins: [navbar],
  async asyncData({ $content, params, app, error }) {
    try {
      const news = await $content(`/news/${app.i18n.locale}/news`).fetch()
      const publications = await $content('/publications/publications').fetch()
      return { publications, news }
    } catch {
      error({ statusCode: 404, message: 'not found' })
    }
  },
  data: () => ({
    activeTab: 'index',
  }),
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    try {
      this.$vuetify.goTo(`#${this.$route.query.id}`)
      this.$router.replace({ query: null })
    } catch (err) {}
  },
  methods: {
    handleScroll(a) {
      const entries = []
      const links = this.links.map((link) => link.id)
      for (const link of [...links, 'index']) {
        try {
          entries.push({
            id: this.$refs[link].id,
            position: this.$refs[link].getBoundingClientRect().top,
          })
        } catch (err) {}
      }
      this.activeTab = entries
        .filter((entrie) => entrie.position <= 100)
        .sort((a, b) => b.position - a.position)[0].id
    },
  },
}
</script>
