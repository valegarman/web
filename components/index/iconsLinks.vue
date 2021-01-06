<template>
  <div class="text-center pb-8">
    <v-btn icon :color="color" :href="contactLinks.rg">
      <iconBase width="30" height="30" icon-name="RGI">
        <RGIcon />
      </iconBase>
    </v-btn>
    <v-btn icon :color="color" :href="contactLinks.googleSchoolar">
      <iconBase class="ml-3" width="30" height="30" icon-name="googleSchoolar">
        <googleSchoolarIcon />
      </iconBase>
    </v-btn>
  </div>
</template>

<script>
import googleSchoolarIcon from '~/components/icons/googleSchoolarIcon.vue'
import RGIcon from '~/components/icons/RGIcon.vue'
import iconBase from '~/components/icons/iconBase.vue'
import contactLinks from '~/content/contact/links.json'

export default {
  components: {
    googleSchoolarIcon,
    RGIcon,
    iconBase,
  },
  props: {
    color: {
      type: String,
      default: 'black',
    },
  },
  data: () => ({
    contactLinks,
  }),
}
</script>
