<template>
  <div>
    <newsCard v-if="type === 'news'" :new-element="newElement" />
    <peopleCard v-else :new-element="newElement" />
  </div>
</template>

<script>
import newsCard from '~/components/slide/newsCard.vue'
import peopleCard from '~/components/slide/peopleCard.vue'

export default {
  components: { newsCard, peopleCard },
  props: {
    newElement: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: 'news',
    },
  },
}
</script>
