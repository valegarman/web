<template>
  <v-card
    class="ma-2"
    max-width="265px"
    min-height="570px"
    @mouseover="touch = true"
    @mouseleave="touch = false"
    @touchstart="touch = true"
    @touchend="touch = false"
    @click="person.link ? $router.push({ path: person.link }) : none"
  >
    <v-img
      v-if="person.img"
      :class="{ 'is-last': touch }"
      class="white--text align-end"
      :height="'300px'"
      :src="person.img"
    >
    </v-img>
    <v-img
      v-if="person.img"
      :class="{ 'is-last': !touch }"
      class="white--text align-end alt-image"
      :height="'300px'"
      :src="person.imgAlt"
    >
    </v-img>
    <v-card-text class="text-subtitle-1 text-sm-h6">
      {{ person.name }}
    </v-card-text>
    <v-card-subtitle class="pb-0"> {{ person.subtitle }} </v-card-subtitle>
    <v-card-text v-if="!touch" class="text--primary pt-5">
      {{ person.content }}
    </v-card-text>
    <v-card-text v-if="touch" class="text--primary pt-5">
      {{ person.contentFun }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      touch: false,
    }
  },
}
</script>

<style lang="scss" scoped>
a:link,
a:visited {
  background-color: white;
  color: black;
  text-decoration: none;
  display: inline-block;
}

a:hover {
  color: var(--v-primary-base);
}
.alt-image {
  margin-top: -300px;
}
.is-last {
  z-index: -10;
}
</style>
