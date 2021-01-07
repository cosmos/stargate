<template>
  <main class="page-container">
    <!-- content from markdown -->
    <nuxt-content :document="testnet" />

    <section-form />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const testnet = await $content('testnets', params.slug).fetch()

    return { testnet }
  },
}
</script>

<style lang="stylus" scoped>
@media $breakpoint-medium-max
  .page-container
    overflow-x hidden
</style>
