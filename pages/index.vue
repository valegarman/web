<template>
  <v-main>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
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
      <i18nButton />
      <div
        id="index"
        v-intersect="onIntersectHandler()"
        style="width: 100%; height: 100vh"
      >
        <hero />
      </div>
      <v-col cols="12" md="8">
        <div id="timeline" v-intersect="onIntersectHandler()">
          <indexSection>
            <timelineSearch :years="years" />
          </indexSection>
        </div>
        <div id="publications" v-intersect="onIntersectHandler()">
          <indexSection>
            <indexSlide />
          </indexSection>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import layoutProps from '~/mixins/layoutProps.vue'
import i18nButton from '~/components/layout/i18nButton.vue'
import indexSection from '~/components/index/indexSection.vue'
import indexSlide from '~/components/index/indexSlide.vue'
import hero from '~/components/index/hero.vue'
import timelineSearch from '~/components/timelines/timelineSearch.vue'

export default {
  layout: 'empty',
  components: { i18nButton, indexSection, indexSlide, hero, timelineSearch },
  mixins: [layoutProps],
  data: () => ({
    activeTab: 'index',
    years: [
      {
        color: 'cyan',
        year: '1960',
      },
      {
        color: 'green',
        year: '1970',
      },
      {
        color: 'pink',
        year: '1980',
      },
      {
        color: 'amber',
        year: '1990',
      },
    ],
  }),
  mounted() {
    if (this.$route.query.id) {
      this.$vuetify.goTo(`#${this.$route.query.id}`)
      this.activeTab = this.$route.query.id
      this.$router.replace({ query: null })
    }
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
    goToId(link) {
      this.$vuetify.goTo(`#${link}`)
    },
  },
}
</script>
