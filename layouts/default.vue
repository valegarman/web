<template>
  <v-app>
    <v-app-bar app flat>
      <v-tabs centered class="ml-n9">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ['Dashboard', 'Messages', 'Profile', 'Updates'],
  }),
}
</script>
