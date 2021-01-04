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
      <v-col cols="12" md="8">
        <div id="index" v-intersect="onIntersectHandler()">
          <indexSection>
            <indexCard />
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
import indexCard from '~/components/index/indexCard.vue'

export default {
  layout: 'empty',
  components: { i18nButton, indexSection, indexSlide, indexCard },
  mixins: [layoutProps],
  data: () => ({
    activeTab: 'index',
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
