<template>
  <v-app>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
        <v-tab
          v-for="link in links"
          :key="link"
          :href="`#${link}`"
          @click="pushToRouter(link)"
        >
          {{ $t(link) }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-row no-gutters justify="center">
      <i18nButton />
      <nuxt />
    </v-row>
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
    this.activeTab = this.$route.name.replace(/__(.*)/, '')
  },
  methods: {
    pushToRouter(link) {
      this.$router.push(
        this.localePath({
          path: '/',
          query: { id: link.toLowerCase().replaceAll(' ', '-') },
        })
      )
    },
  },
}
</script>
