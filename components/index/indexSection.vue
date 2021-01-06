<template>
  <article class="pt-4">
    <h2 class="pb-8 pl-5 font-weight-regular">
      {{ $t(title) }}
    </h2>
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
