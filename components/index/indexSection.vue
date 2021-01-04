<template>
  <article class="pt-4">
    <v-btn
      color="transparent"
      class="pr-4"
      elevation="0"
      :to="localePath('/publications')"
    >
      Publications <v-icon right> mdi-link </v-icon>
    </v-btn>
    <slot />
  </article>
</template>
