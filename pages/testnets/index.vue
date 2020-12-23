/* eslint-disable */
<template>
  <main>
    <div class="section-hero">
      <div class="tm-section-container section-container">
        <div class="container">
          <div class="intro-text">
            <div class="section-title tm-rf6 tm-rf7-xl-up tm-bold tm-lh-title">
              Get set for <span class="section-title__highlight">testnets</span>
            </div>
            <div class="section-subtitle tm-rf2 tm-lh-copy tm-measure">
              The future is here, Cosmonauts! Start integration testing with the
              Stargate testnets today.
            </div>
          </div>
          <div class="testnet-lists">
            <NuxtLink
              v-for="item of testnets"
              :key="item.id"
              :to="`/testnets/${item.slug}`"
              class="testnet-lists__item"
              :style="{
                '--background-color': `${bgColor[item.code]}`,
              }"
            >
              <div class="testnet-lists__item__top">
                <div class="testnet-lists__item__code tm-code">
                  {{ item.id }}
                </div>
              </div>
              <graphics-dyson-sphere-glow
                class="section-graphics"
                :testnet="item.code"
              />
              <div class="testnet-lists__item__bottom">
                <div
                  class="testnet-lists__item__title tm-rf4 tm-bold tm-lh-title"
                >
                  {{ item.title }}
                </div>
                <div class="testnet-lists__item__desc tm-rf0 tm-lh-copy">
                  {{ item.desc }}
                </div>
                <div class="testnet-lists__item__cta">---></div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="data-container">
      <div class="features-graphics">
        <!-- <graphics-interoperable-planets /> -->
      </div>
    </div>

    <section-testnets />
    <bug-bounty-banner />
    <section-form />
  </main>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  async asyncData({ $content, params }) {
    const testnets = await $content('testnets', params.slug)
      .sortBy('index', 'asc')
      .fetch()

    return { testnets }
  },
  data() {
    return {
      bgColor: {
        cosmoshub:
          'linear-gradient(131.1deg, #3E0555 26.7%, #121435 64.71%, #030419 100%)',
        bigbang:
          'linear-gradient(131.1deg, #004447 26.7%, #19054B 64.71%, #030419 100%)',
        stargate:
          'linear-gradient(131.1deg, #4A2E03 26.7%, #341235 64.71%, #030419 100%)',
      },
    }
  },
  methods: {
    markdown(value) {
      const md = new MarkdownIt({
        linkify: true,
        html: true,
      })
      return md.render(value)
    },
  },
}
</script>

<style lang="stylus" scoped>
main
  overflow -webkit-paged-x

.testnet-lists
  margin-top var(--spacing-11)
  display grid
  grid-template-columns 1fr 1fr
  grid-template-rows 1fr
  gap var(--spacing-7)
  align-items center

  &__item
    background var(--background-color, linear-gradient(131.1deg, #3E0555 26.7%, #121435 64.71%, #030419 100%))
    position relative
    padding var(--spacing-9) var(--spacing-8)
    color var(--white)
    display flex
    flex-direction column
    flex-wrap nowrap
    height 100%
    justify-content space-between
    border-radius $border-radius-5
    hover-raise(-3px)

    &__code, &__title, &__desc, &__cta
      position relative

    &__code, &__title, &__desc
      text-align left

    &__code
      color var(--white-700)

    &__bottom
      margin-top var(--spacing-11)

    &__title
      max-width 7em

    &__desc
      margin-top var(--spacing-6)
      color var(--white-700)

    &__cta
      text-align right
      margin-top var(--spacing-6)

.section-graphics
  width 100%
  height auto
  margin-top -21%
  left 0
  position absolute
  z-index -1

.data-container
  position relative
  z-index 1 // above .feature-graphics
  grid-row 4
  margin-top var(--spacing-11)
  display grid
  flex-direction row
  grid-column 1/ span 12
  grid-template-columns repeat(4, 1fr)
  gap var(--spacing-7)

// .features-graphics
//   grid-column 1 / span 8
//   grid-row 5
//   position relative
//   font-size 1.5rem
//   z-index 0

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
  display grid
  grid-template-columns repeat(12, 1fr)
  gap 0 var(--spacing-7)
  max-width var(--container-mw-lg)

.section-title
  grid-column 2 / span 7
  // grid-row 1 / 2
  max-width 9em
  min-height $line-height-title-base-min * 2em
  // margin-bottom -1.1em
  &__highlight
    background-color var(--white)
    background-image linear-gradient(90deg, #E644F8 0%, #CCD1FF 51.56%, #99DAFF 100%)
    background-size 100%
    background-clip text
    -webkit-text-fill-color transparent
    -moz-text-fill-color transparent
    padding-right 0.05em // Fix offset clipping

.section-subtitle
  // display flex
  // justify-content flex-end
  // flex-direction column
  // grid-row 2
  grid-column 2 / span 7
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
