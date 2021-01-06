<template>
  <main>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
        <indexTab @tab="goToId" />
        <v-tab
          v-for="link in links"
          :key="link"
          :href="`#${link}`"
          @click="goToId(link)"
        >
          {{ $t(`nav.${link}`) }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-row no-gutters justify="center">
      <div
        id="index"
        v-intersect="onIntersectHandler()"
        style="width: 100%; height: 100vh"
      >
        <hero />
      </div>
      <v-col cols="12" md="8">
        <div id="news" v-intersect="onIntersectHandler()" class="pb-5">
          <indexSection>
            <newsSlide :news="news.news" />
          </indexSection>
        </div>
        <div id="publications" v-intersect="onIntersectHandler()" class="pb-5">
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
    intersectElementes: {
      index: {
        intersectionRatio: 0,
        isIntersecting: true,
      },
    },
  }),
  computed: {
    activeTab: {
      get() {
        const entries = []
        for (const name in this.intersectElementes) {
          if (this.intersectElementes[name].isIntersecting) {
            entries.push({
              name,
              intersectionRatio: this.intersectElementes[name]
                .intersectionRatio,
            })
          }
        }
        return entries.sort(
          (a, b) => a.intersectionRatio > b.intersectionRatio
        )[0].name
      },
      set(newTab) {
        return newTab
      },
    },
  },
  mounted() {
    try {
      this.$vuetify.goTo(`#${this.$route.query.id}`)
      this.$router.replace({ query: null })
    } catch (err) {}
  },
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      this.intersectElementes[entries[0].target.id] = {
        intersectionRatio: entries[0].intersectionRatio,
        isIntersecting,
      }
    },
    onIntersectHandler() {
      const thresholds = []
      const numSteps = 100

      for (let i = 0; i <= numSteps; i++) {
        const ratio = i / numSteps
        thresholds.push(ratio)
      }
      return {
        handler: this.onIntersect,
        options: {
          threshold: thresholds,
        },
      }
    },
  },
}
</script>
