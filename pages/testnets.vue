<template>
  <main>
    <div class="section-hero">
      <div class="tm-section-container section-container">
        <div class="container">
          <section-primary-nav />
          <div class="intro-text">
            <div class="section-title tm-rf6 tm-rf7-xl-up tm-bold tm-lh-title">
              Get set for <span class="section-title__highlight">testnets</span>
            </div>
            <div class="section-subtitle tm-rf2 tm-lh-copy tm-measure">
              The future is here, Cosmonauts! Start integration testing with the
              Stargate testnets today.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <section-intro /> -->
    <!-- <section-features /> -->

    <!-- <section-community /> -->
    <!-- <section-roadmap /> -->
    <!-- <section-testnets /> -->
    <!-- <section-contributors /> -->
    <card-banner />
    <section-form />
  </main>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
main
  overflow -webkit-paged-x

.nav-container
  height 4rem

.section-nav
  top 0
  width 100%
  z-index 1000

.section-hero
  position relative
  // height 100vh
  // min-height 52rem
  // max-height 72rem
  // margin-bottom var(--spacing-10)
  display flex
  justify-content stretch
  align-items stretch
  text-align center
  // background url(/stars.svg)
  .section-container
    display flex
    align-items stretch
    width 100%
    padding-top var(--spacing-9)
    padding-bottom var(--spacing-10)
  .container
    position relative
    display flex
    width 100%
    flex-direction column
    align-items normal
    justify-content flex-start

.intro-text
  text-align left
  margin-top var(--spacing-11)

.section-title
  grid-column 1 / span 12
  grid-row 1 / 2
  max-width 9em
  min-height $line-height-title-base-min * 2em
  margin-bottom -1.1em
  &__highlight
    background-color var(--white)
    background-image linear-gradient(90deg, #E644F8 0%, #CCD1FF 51.56%, #99DAFF 100%)
    background-size 100%
    background-clip text
    -webkit-text-fill-color transparent
    -moz-text-fill-color transparent
    padding-right 0.05em // Fix offset clipping

.section-subtitle
  display flex
  justify-content flex-end
  flex-direction column
  grid-row 2
  grid-column 6 / span 7
  color var(--gray-800)

@media screen and (max-width: 1024px)
  .section .section-header
    grid-column 1 / span 12

  .section-hero
    display grid
    .container
      .headings
        .subtitle
          margin-top var(--spacing-7)

@media screen and (max-width: 767px)
  .section-hero
    .container
      .content
        padding-bottom 20%

@media screen and (max-width: 576px)
  .section-hero
    min-height 32rem
    max-height 42rem
    margin-bottom var(--spacing-8)

@media screen and (max-width: 414px)
  main
    overflow-x hidden

@media screen and (max-width: 375px)
  .section-container .container
    gap unset
</style>
