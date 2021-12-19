<template>
  <div class="text-center pb-8">
    <v-btn icon :color="color" :href="contactLinks.rg">
      <iconBase width="30" height="30" icon-name="RGI">
        <RGIcon />
      </iconBase>
    </v-btn>
    <v-btn class="ml-2" icon :color="color" :href="contactLinks.googleSchoolar">
      <iconBase width="30" height="30" icon-name="googleSchoolar">
        <googleSchoolarIcon />
      </iconBase>
    </v-btn>
    <v-btn class="ml-3" icon :color="color" :href="contactLinks.gmail">
      <iconBase width="30" height="30" icon-name="googleSchoolar">
        <gmailLogo />
      </iconBase>
    </v-btn>
    <v-btn class="ml-3" icon :color="color" :href="contactLinks.github">
      <iconBase width="30" height="30" icon-name="googleSchoolar">
        <gitLogo />
      </iconBase>
    </v-btn>
  </div>
</template>

<script>
import googleSchoolarIcon from '~/components/icons/googleSchoolarIcon.vue'
import RGIcon from '~/components/icons/RGIcon.vue'
import gmailLogo from '~/components/icons/gmailLogo.vue'
import gitLogo from '~/components/icons/gitLogo.vue'
import iconBase from '~/components/icons/iconBase.vue'
import contactLinks from '~/assets/links/contact/links.json'

export default {
  components: {
    googleSchoolarIcon,
    RGIcon,
    iconBase,
    gmailLogo,
    gitLogo,
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
