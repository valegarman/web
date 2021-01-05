<i18n>
{
  "en": {
    "button": "Accept",
    "cookies_policy": "This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy. For more information about how we use information collected by cookies and other tracking technologies, please refer to our Privacy Policy ",
    "link": "page."
  },
  "es": {
    "button": "Aceptar",
    "cookies_policy": "Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener más información ",
    "link": "aqui."
  }
}
</i18n>

<template>
  <v-banner v-if="!isAccepted">
    <div>
      <span class="policy-text">
        {{ $t('cookies_policy') }}
        <nuxt-link :to="localePath('/content/cookies_policy')">
          {{ $t('link') }}
        </nuxt-link>
      </span>
    </div>
    <v-row class="pt-2" no-gutters justify="center">
      <v-btn text color="success" @click="accept"> {{ $t('button') }} </v-btn>
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
