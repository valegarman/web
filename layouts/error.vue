<template>
  <v-app>
    <div class="pa-8">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <v-btn
        color="transparent"
        class="pr-4"
        elevation="0"
        :to="localePath('/')"
      >
        Home page <v-icon right> mdi-link </v-icon>
      </v-btn>
      <game />
    </div>
  </v-app>
</template>

<script>
import game from '~/components/errorPage/game.vue'

export default {
  components: {
    game,
  },
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
</style>
