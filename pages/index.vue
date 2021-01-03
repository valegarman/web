<template>
  <v-app>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
        <v-tab
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          @click="goToId(link)"
        >
          {{ $t(link.id) }}
        </v-tab>
      </v-tabs>
      <i18nButton />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6">
            <div
              id="index"
              v-intersect="{
                handler: onIntersect,
                options: {
                  threshold: [0, 0.5, 1.0],
                },
              }"
              style="height: 1000px"
            >
              Index
            </div>
            <div
              id="publications"
              v-intersect="{
                handler: onIntersect,
                options: {
                  threshold: [0, 0.5, 1.0],
                },
              }"
              style="height: 1000px"
            >
              publications
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import layoutProps from '~/mixins/layoutProps.vue'
import i18nButton from '~/components/layout/i18nButton.vue'

export default {
  layout: "empty",
  components: { i18nButton },
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
    goToId(link) {
      this.$vuetify.goTo(`#${link.id}`)
    },
  },
}
</script>
