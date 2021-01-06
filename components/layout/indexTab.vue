<template>
  <v-tab key="index" href="#index" @click="$emit('tab', 'index')">
    <iconBase
      width="30"
      height="30"
      style="margin-right: 10px"
      icon-name="home"
    >
      <icon />
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
