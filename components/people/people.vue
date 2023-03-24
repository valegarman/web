<template>
  <div>
    <v-checkbox
      v-model="currentOnly"
      class="ml-4"
      :label="$t('people.current_only')"
    ></v-checkbox>
    <div class="people">
      <div v-for="person in peopleSelected" :key="person.name">
        <personCard :person="person" />
      </div>
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
  data: () => ({
    currentOnly: true,
  }),
  computed: {
    peopleSelected() {
      return this.people.filter((person) =>
        this.currentOnly ? person.current : true
      )
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
