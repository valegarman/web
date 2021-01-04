<template>
  <div>
    <v-speed-dial
      v-model="fab"
      bottom
      right
      fixed
      direction="top"
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" small dark fab>
          <v-icon v-if="fab" small> mdi-close </v-icon>
          <v-icon v-else small> mdi-translate </v-icon>
        </v-btn>
      </template>
      <v-btn
        v-if="$i18n.locale !== 'en'"
        fab
        small
        :to="switchLocalePath('en')"
      >
        EN
      </v-btn>
      <v-btn v-else fab small :to="switchLocalePath('es')"> ES </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
  }),
}
</script>
