<template>
  <v-footer app>
    <i18nButton />
    <v-card color="transparent" class="flex" flat>
      <cookie />
      <v-card-text class="py-2 text-center">
        &copy; {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import i18nButton from '~/components/layout/i18nButton.vue'
import cookie from '~/components/layout/cookie.vue'

export default {
  components: { cookie, i18nButton },
}
</script>
