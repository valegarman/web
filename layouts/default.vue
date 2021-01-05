<template>
  <v-app>
    <nuxt />
    <footerCookieAndLang />
  </v-app>
</template>

<script>
import footerCookieAndLang from '~/components/layout/footerCookieAndLang.vue'

export default {
  components: { footerCookieAndLang },
}
</script>
