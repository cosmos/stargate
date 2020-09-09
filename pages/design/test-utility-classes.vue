<template>
  <main>
    <div class="hero">
      <div class="tm-section-container">
        <div class="tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline">
          Welcome to Cosmos
        </div>
        <h1 class="title tm-rf7 tm-bold tm-lh-title">
          The open economy for <span class="highlight">everyone</span>
        </h1>
        <tm-button
          size="l"
          background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
          glow
          >Beam me up</tm-button
        >
        <tm-button
          size="l"
          border-color="#fff"
          color="#fff"
          variant="outlined"
          glow
          >Get knowledge</tm-button
        >
        <p class="subtitle tm-rf1 tm-rf2-m-up tm-lh-copy tm-measure">
          Cosmos is an ever-expanding network of decentralized and
          interconnected applications, built with powerful blockchain
          technology.
        </p>
        <p class="smallprint tm-rf-1 tm-lh-copy tm-measure-narrower">
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
  // background white
  // color black
  text-align center
  padding var(--spacing-9) 0
  min-height 100vh
  display flex
  flex-direction column
  align-items center
  justify-content center
  .title
    max-width 10em
    margin var(--spacing-5) auto var(--spacing-8)
    color #fff
    // TODO: convert to mixin
    .highlight
      color red
      background linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)
      background-clip text
      -webkit-text-fill-color transparent
      padding-right 0.02em // fix for gradient not reaching edge of last character
  .subtitle
    margin var(--spacing-8) auto var(--spacing-7)
  .smallprint
    margin var(--spacing-5) auto 0
    opacity .7
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
