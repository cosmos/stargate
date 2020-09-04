<template>
  <div>
    <nuxt />
    <tm-footer />
  </div>
</template>

<script>
import TmFooter from '~/components/TmFooter.vue'

export default {
  components: {
    TmFooter,
  },
}
</script>

<style lang="stylus">
a[href]
  color inherit
  text-decoration initial
</style>
