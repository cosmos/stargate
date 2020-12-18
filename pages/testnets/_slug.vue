<template>
  <div class="tm-section-container section-container">
    <h1>{{ testnet.title }}</h1>

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

<style lang="stylus" scoped>
.nuxt-content p
  margin-bottom 1.25rem

.nuxt-content h2
  font-weight bold
  font-size 1.75rem

.nuxt-content h3
  font-weight bold
  font-size 1.375rem
</style>
