<template>
  <v-tab key="index" href="#index" @click="$emit('tab', 'index')">
    <iconBase width="50" height="50" icon-name="home">
      <icon fill="#dca800ff" />
    </iconBase>
  </v-tab>
</template>

<script>
import icon from '~/components/icons/icon.vue'
import iconBase from '~/components/icons/iconBase.vue'

export default {
  layout: 'default',
  components: {
    icon,
    iconBase,
  },
}
</script>
