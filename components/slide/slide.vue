<template>
  <section>
    <v-card
      v-if="$vuetify.breakpoint.mobile"
      flat
      style="
        display: flex;
        flex-direction: column;
        justify-items: end;
        align-items: center;
      "
    >
      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
      <v-window v-model="onboarding">
        <v-window-item v-for="item in items" :key="item.title">
          <v-card class="ma-1" max-width="300px" min-height="500px">
            <slideCard :new-element="item" :type="type" />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
    <v-slide-group v-else v-model="slide" center-active show-arrows>
      <v-slide-item
        v-for="item in items"
        :key="item.title"
        v-slot="{ active, toggle }"
      >
        <v-card
          class="ma-1"
          max-width="300px"
          min-height="500px"
          :color="active ? 'transparent' : 'transparent'"
          @click="toggle"
        >
          <slideCard :new-element="item" :type="type" />
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </section>
</template>

<script>
import slideCard from '~/components/slide/slideCard.vue'

export default {
  components: { slideCard },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'news',
    },
  },
  data: () => ({
    onboarding: 0,
    slide: null,
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.items.length ? 0 : this.onboarding + 1
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.items.length - 1 : this.onboarding - 1
    },
  },
}
</script>
