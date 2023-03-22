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
        <div id="publications" ref="publications" class="pb-5">
          <indexSection title="publications.title">
            <publications :publications="publications.publications" />
          </indexSection>
        </div>
        <div id="people" ref="people" class="pb-5">
          <indexSection title="people.title">
            <slide :type="'people'" :items="people.people" />
          </indexSection>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center">
      <v-col cols="12" md="6">
        <div class="contact">
          <div id="contact" ref="contact" class="pb-5">
            <indexSection title="contact.title">
              <iconsLinks />
              <nuxt-content class="px-7" :document="contact" />
            </indexSection>
          </div>
          <div class="funko-absolute">
            <funko :messages="messages.messages" />
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="8" xs="12" class="mb-6">
        <v-card class="mb-6">
          <div class="twitter-timeline">
            <Timeline id="MValero87" source-type="profile" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
import navbar from '~/mixins/navbar.vue'
import indexSection from '~/components/index/indexSection.vue'
import hero from '~/components/index/hero.vue'
import publications from '~/components/publications/publications.vue'
import indexTab from '~/components/layout/indexTab.vue'
import slide from '~/components/slide/slide.vue'
import iconsLinks from '~/components/index/iconsLinks.vue'
import funko from '~/components/funko/funko.vue'

export default {
  components: {
    indexSection,
    hero,
    publications,
    indexTab,
    slide,
    iconsLinks,
    funko,
    Timeline,
  },
  mixins: [navbar],
  async asyncData({ $content, params, app, error }) {
    try {
      const contact = await $content(
        `/contact/${app.i18n.locale}/contact`
      ).fetch()
      const people = await $content(`/people/${app.i18n.locale}/people`).fetch()
      const publications = await $content('/publications/publications').fetch()
      const messages = await $content(
        `/messages/${app.i18n.locale}/messages`
      ).fetch()
      return { publications, people, contact, messages }
    } catch {
      error({ statusCode: 404, message: 'not found' })
    }
  },
  data: () => ({
    activeTab: null,
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
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        this.activeTab = 'contact'
      }
    },
  },
  layout: 'default',
}
</script>

<style>
@import url('~/assets/css/md.css');
.contact {
  display: flex;
  justify-content: center;
  min-height: 650px;
  position: relative;
}
.funko-absolute {
  position: absolute;
  bottom: 0;
}
.twitter-timeline {
  padding: 10px;
  height: 700px;
  overflow: auto;
}
</style>
