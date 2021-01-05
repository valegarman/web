<template>
  <section>
    <v-slide-group show-arrows class="mt-2">
      <v-slide-item v-for="n in 15" :key="n">
        <indexCard />
      </v-slide-item>
    </v-slide-group>
  </section>
</template>

<script>
import indexCard from '~/components/index/indexCard.vue'

export default {
  components: { indexCard },
}
</script>

<style lang="scss">
.v-slide-group__prev,
.v-slide-group__next {
  background: transparent;
  position: relative;
  min-width: 40px;
  z-index: 2;
  i {
    color: #fff !important;
    background: #000;
    font-size: 48px;
    border-radius: 50%;
  }
  .v-icon--disabled {
    display: none;
  }
}
.v-slide-group__wrapper {
  margin: 0 -40px 0 -40px;
}
</style>
