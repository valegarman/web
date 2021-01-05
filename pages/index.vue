<template>
  <main>
    <pre> {{ publicationsa.publications }} </pre>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
        <indexTab @tab="goToId" />
        <v-tab
          v-for="link in links"
          :key="link"
          :href="`#${link}`"
          @click="goToId(link)"
        >
          {{ $t(link) }}
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

export default {
  layout: 'default',
  components: {
    indexSection,
    hero,
    timelineSearch,
    indexTab,
  },
  mixins: [navbar],
  async asyncData({ $content, params, app, error }) {
    try {
      const publicationsa = await $content('/publications/publications').fetch()
      return { publicationsa }
    } catch {
      error({ statusCode: 404, message: 'not found' })
    }
  },
  data: () => ({
    activeTab: 'index',
  mounted() {
    try {
      this.$vuetify.goTo(`#${this.$route.query.id}`)
      this.activeTab = this.$route.query.id
      this.$router.replace({ query: null })
    } catch (err) {}
  },
  methods: {
    onIntersect(entries, observer, intersect) {
      if (entries[0].intersectionRatio >= 0.5) {
        this.activeTab = entries[0].target.id
      }
    },
    onIntersectHandler() {
      return {
        handler: this.onIntersect,
        options: {
          threshold: [0, 0.25, 0.5, 0.75, 1.0],
        },
      }
    },
  },
}
</script>
