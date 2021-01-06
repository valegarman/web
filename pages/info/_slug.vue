<template>
  <v-main>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
        <indexTab @tab="pushToRouter" />
        <v-tab
          v-for="link in links"
          :key="link"
          :href="`#${link}`"
          @click="pushToRouter(link)"
        >
          {{ $t(`nav.${link}`) }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-container>
      <v-row class="pt-5" justify="center">
        <v-col cols="12" sm="8" md="8">
          <nuxt-content :document="article" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import navbar from '~/mixins/navbar.vue'
import indexTab from '~/components/layout/indexTab.vue'

export default {
  layout: 'default',
  components: { indexTab },
  mixins: [navbar],
  async asyncData({ $content, params, app, error }) {
    try {
      const article = await $content(
        `/info/${app.i18n.locale}/`,
        params.slug
      ).fetch()
      return { article }
    } catch {
      error({ statusCode: 404, message: 'not found' })
    }
  },
  data: () => ({
    activeTab: 'index',
  }),
}
</script>

<style>
@import url('~/assets/css/md.css');
</style>
