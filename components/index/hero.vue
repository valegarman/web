<template>
  <div class="hero-image">
    <div class="hero-container">
      <iconBase
        width="100"
        height="100"
        view-box="0 0 79.482 153.59"
        icon-name="ripplocampus"
      >
        <ripplocampusIcon />
      </iconBase>
      <h1 style="font-size: 50px">
        <span style="font-weight: normal">neuComp</span
        ><span style="color: rgb(255 223 116)">Lab</span>
      </h1>
      <p>{{ $t('hero.ocupation') }}</p>
      <iconsLinks color="white" />
    </div>
  </div>
</template>

<script>
import iconBase from '~/components/icons/iconBase.vue'
import iconsLinks from '~/components/index/iconsLinks.vue'
import ripplocampusIcon from '~/components/icons/ripplocampusIcon.vue'

export default {
  components: { iconBase, iconsLinks, ripplocampusIcon },
}
</script>

<style lang="scss" scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.03)),
    url('/images/bkg2.jpg');
  height: 95%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
