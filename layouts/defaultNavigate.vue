<template>
  <v-app>
    <v-app-bar app flat>
      <v-tabs v-model="activeTab" centered class="ml-n9">
        <v-tab
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          @click="
            $router.push({
              path: '/',
              query: { id: link.id.toLowerCase().replaceAll(' ', '-') },
            })
          "
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>
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

export default {
  mixins: [layoutProps],
  data: () => ({
    activeTab: 'index',
  }),
  mounted() {
    this.$data.activeTab = this.$route.name
  },
}
</script>
