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
        <v-window-item v-for="newElement in news" :key="newElement.title">
          <v-card class="ma-1" max-width="300px" min-height="500px">
            <newsCard :new-element="newElement" />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
    <v-slide-group v-else v-model="slide" center-active show-arrows>
      <v-slide-item
        v-for="newElement in news"
        :key="newElement.title"
        v-slot="{ active, toggle }"
      >
        <v-card
          class="ma-1"
          max-width="300px"
          min-height="500px"
          :color="active ? 'transparent' : 'transparent'"
          @click="toggle"
        >
          <newsCard :new-element="newElement" />
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </section>
</template>

<script>
import newsCard from '~/components/news/newsCard.vue'

export default {
  components: { newsCard },
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    onboarding: 0,
    slide: null,
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.news.length ? 0 : this.onboarding + 1
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.news.length - 1 : this.onboarding - 1
    },
  },
}
</script>
