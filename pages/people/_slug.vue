<template>
  <v-main>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
        <indexTab @tab="pushToHomeRouter" />
        <v-tab
          v-for="link in links"
          :key="link.id"
          @click="
            link.type === 'section'
              ? pushToHomeRouter(link.id)
              : pushToRouter(link)
          "
        >
          {{ $t(`nav.${link.id}`) }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-container>
      <v-row class="pt-5" justify="center">
        <v-col
          v-if="person && !['You', 'Tú'].includes(person.name)"
          class="person-card"
          cols="12"
          lg="3"
          md="4"
          sm="8"
        >
          <personCard :person="person" />
        </v-col>
        <v-col cols="12" lg="8" md="8" sm="8">
          <nuxt-content :document="article" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import navbar from '~/mixins/navbar.vue'
import indexTab from '~/components/layout/indexTab.vue'
import personCard from '~/components/people/personCard.vue'

export default {
  layout: 'default',
  components: { indexTab, personCard },
  mixins: [navbar],
  async asyncData({ $content, params, app, error }) {
    try {
      const article = await $content(
        `/people/${app.i18n.locale}/profiles/`,
        params.slug
      ).fetch()
      const { people } = await $content(
        `/people/${app.i18n.locale}/people`
      ).fetch()
      const person = people.filter(
        (person) =>
          !!person.link && person.link.endsWith(`/people/${params.slug}`)
      )[0]
      return { article, person }
    } catch {
      error({ statusCode: 404, message: 'not found' })
    }
  },
  data: () => ({
    activeTab: 'resources',
  }),
}
</script>

<style lang="scss" scoped>
.person-card {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>

<style lang="scss">
@import url('~/assets/css/md.css');
</style>
