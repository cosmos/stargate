<template>
  <main>
    <div class="hero">
      <div class="section-container">
        <div class="tm-rf0 tm-rf1-m-up tm-lh-title tm-overline">
          Welcome to Cosmos
        </div>
        <h1 class="title tm-rf7 tm-bold tm-lh-title">
          The open economy for <span class="highlight">everyone</span>
        </h1>
        <p class="subtitle tm-rf1 tm-rf2-m-up tm-lh-copy tm-measure">
          Cosmos is an ever-expanding network of decentralized and
          interconnected applications, built with powerful blockchain
          technology.
        </p>
        <tm-button size="l">Beam me up</tm-button>
        <tm-button size="l" borderColor="white" color="white" variant="outlined"
          >Show me more</tm-button
        >
        <p
          class="smallprint tm-rf-1 tm-rf0-l-up tm-lh-copy tm-measure-narrower"
        >
          Here's some smallprint that no one should be able to read. Just
          kidding.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import TmButton from '~/components/TmButton.vue'
export default {
  components: {
    TmButton,
  },
}
</script>

<style lang="stylus" scoped>
.hero
  text-align center
  padding var(--spacing-9) 0
  min-height 100vh
  display flex
  flex-direction column
  align-items center
  justify-content center
  .title
    max-width 10em
    margin var(--spacing-5) 0 0
  .subtitle
    margin var(--spacing-7) auto var(--spacing-8)
  .smallprint
    margin var(--spacing-5) auto 0
  .tm-button
    margin var(--spacing-4)

@media $breakpoint-xsmall-only
  .hero
    .tm-button
      margin-left auto
      margin-right auto
      display block
      width 100%
      max-width $max-width-6
</style>
