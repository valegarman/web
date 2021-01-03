<template>
  <div>
    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      EN
    </nuxt-link>
    <nuxt-link v-if="$i18n.locale !== 'es'" :to="switchLocalePath('es')">
      ES
    </nuxt-link>
  </div>
</template>
