<template>
  <v-app>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
        <v-tab
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          @click="pushToRouter(link)"
        >
          {{ $t(link.id) }}
        </v-tab>
      </v-tabs>
      <i18nButton />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
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
  components: { i18nButton },
  mixins: [layoutProps],
  data: () => ({
    activeTab: 'publications',
  }),
  mounted() {
    this.activeTab = this.$route.path.replace('/', '')
  },
  methods: {
    pushToRouter(link) {
      this.$router.push(
        this.localePath({
          path: '/',
          query: { id: link.id.toLowerCase().replaceAll(' ', '-') },
        })
      )
    },
  },
}
</script>
