<template>
  <main>
    <div class="hero">
      <div class="container">
        <div class="overline">Welcome to Cosmos</div>
        <h1 class="title">The open economy for everyone</h1>
        <p class="description">
          Cosmos is an ever-expanding network of decentralized and
          interconnected applications, built with powerful blockchain
          technology.
        </p>
        <tm-button size="l">Beam me up</tm-button>
        <p class="smallprint">
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
.container
  padding-left var(--spacing-7)
  padding-right var(--spacing-7)

.hero
  text-align center
  padding-top var(--spacing-9)
  padding-bottom var(--spacing-9)
  min-height 100vh
  display flex
  flex-direction column
  align-items center
  justify-content center
  .overline
    overline(-1) // Custom mixin test
  .title
    max-width 10em
    margin var(--spacing-5) auto 0
    title(7) // Custom mixin test
  .description
    paragraph(0) // Custom mixin test
    max-width 30em
    margin var(--spacing-7) auto var(--spacing-8)
  .smallprint
    paragraph(-1) // Custom mixin test
    max-width 20em
    margin var(--spacing-5) auto 0

@media $breakpoint-medium
  .container
    padding-left var(--spacing-8)
    padding-right var(--spacing-8)

  .hero
    .overline
      font-size var(--font-size-0)
    .description
      paragraph(1) // Custom mixin test

@media $breakpoint-large
  .container
    padding-left var(--spacing-9)
    padding-right var(--spacing-9)

  .hero
    .overline
      font-size var(--font-size-1)
    .description
      paragraph(2) // Custom mixin test
    .smallprint
      paragraph(0) // Custom mixin test

@media $breakpoint-xl
  .container
    padding-left var(--spacing-10)
    padding-right var(--spacing-10)

@media $breakpoint-xxl
  .container
    padding-left var(--spacing-11)
    padding-right var(--spacing-11)
</style>
