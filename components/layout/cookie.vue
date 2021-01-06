<template>
  <v-banner v-if="!isAccepted">
    <div>
      <span class="policy-text">
        {{ $t('cookies.cookies_policy') }}
        <nuxt-link :to="localePath('/info/cookies_policy')">
          {{ $t('cookies.link') }}
        </nuxt-link>
      </span>
    </div>
    <v-row class="pt-2" no-gutters justify="center">
      <v-btn text color="success" @click="accept">
        {{ $t('cookies.button') }}
      </v-btn>
    </v-row>
  </v-banner>
</template>

<script>
export default {
  name: 'Cookie',
  data: () => ({
    isAccepted: false,
  }),
  mounted() {
    this.isAccepted = localStorage.getItem('cookie-valeroneoroscience')
  },
  methods: {
    accept() {
      if (process.browser) {
        localStorage.setItem('cookie-valeroneoroscience', true)
        this.isAccepted = true
      }
    },
  },
}
</script>
