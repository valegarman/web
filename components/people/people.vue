<template>
  <div class="people">
    <div v-for="person in people" :key="person.name">
      <personCard :person="person" />
    </div>
  </div>
</template>

<script>
import personCard from '~/components/people/personCard.vue'

export default {
  components: {
    personCard,
  },
  props: {
    people: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.people {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
