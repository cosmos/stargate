<template>
  <div class="tm-section-container section-container">
    <!-- content from markdown -->
    <nuxt-content :document="testnet" />

    <section-form />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const testnet = await $content('testnets', params.slug).fetch()

    return { testnet }
  },
}
</script>

<style lang="stylus" scoped></style>
