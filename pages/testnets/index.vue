/* eslint-disable */
<template>
  <main>
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="intro-text">
          <div class="section-title tm-rf7 tm-bold tm-lh-title">
            Get set for <span class="section-title__highlight">testnets</span>
          </div>
          <div class="section-subtitle tm-rf2 tm-lh-copy tm-measure-narrow">
            The future is here, Cosmonauts! Start integration testing with the
            Stargate testnets today.
          </div>
        </div>
      </div>
      <div class="testnet-lists container">
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
            <div
              class="testnet-lists__item__code tm-rf-1 tm-rf0-m-up tm-lh-title tm-code"
            >
              {{ item.id }}
            </div>
          </div>
          <graphics-dyson-sphere-glow
            class="testnet-lists__item__graphics"
            :testnet="item.code"
          />
          <div class="testnet-lists__item__bottom">
            <div class="testnet-lists__item__title tm-rf4 tm-bold tm-lh-title">
              {{ item.title }}
            </div>
            <div
              class="testnet-lists__item__desc tm-rf-1 tm-rf0-l-up tm-lh-copy tm-measure"
            >
              {{ item.desc }}
            </div>
            <div class="testnet-lists__item__cta">---></div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="section-graphics">
      <div class="inner">
        <graphics-testnets class="graphics" />
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
  gap var(--spacing-7)
  align-items center

  &__item
    background var(--background-color, linear-gradient(131.1deg, #3E0555 26.7%, #121435 64.71%, #030419 100%))
    grid-column span 12
    position relative
    padding var(--spacing-8)
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
      margin-top var(--spacing-13)

    &__desc
      margin-top var(--spacing-6)
      color var(--white-700)

    &__cta
      text-align right
      margin-top var(--spacing-6)
      display none

    &__graphics
      width 100%
      height auto
      margin-top -14%
      left 0
      position absolute
      z-index -1
      max-width 36rem

.section-graphics
  grid-column span 12
  position relative
  z-index -1
  margin calc(-1 * var(--spacing-12)) auto
  max-width: $max-width['11']
  display flex
  justify-content flex-end
  .inner
    padding-top var(--spacing-11)
    padding-bottom var(--spacing-11)
    padding-right 10%
    background radial-gradient(40% 56% at 44% 50%, #4251fa 16%, #320b93 39%, #030419 79%, rgba(0,0,0,0) 100%)
    min-width 36rem
    max-width 170rem
    flex 1 0 180%
  .graphics
    width 100%
    height auto

.intro-text
  text-align left
  margin-top var(--spacing-11)
  grid-column span 12

.section-title
  max-width 6em
  &__highlight
    background-color var(--white)
    background-image linear-gradient(90deg, #E644F8 0%, #CCD1FF 51.56%, #99DAFF 100%)
    background-size 100%
    background-clip text
    -webkit-text-fill-color transparent
    -moz-text-fill-color transparent
    padding-right 0.05em // Fix offset clipping

.section-subtitle
  color var(--gray-800)
  margin-top var(--spacing-8)

@media $breakpoint-medium
  .intro-text
    grid-column 2 / span 11

  .testnet-lists
    &__item
      grid-column span 6
      padding var(--spacing-8) var(--spacing-9)

      &__bottom
        margin-top var(--spacing-13)

      &__graphics
        margin-top -21%

      &__title
        max-width 7em

      &__cta
        display block

@media $breakpoint-xsmall-only
  .section-hero
    min-height 32rem
    max-height 42rem
    margin-bottom var(--spacing-8)
  main
    overflow-x hidden
  .testnet-lists
    margin-left calc(-1 * var(--spacing-3))
    margin-right calc(-1 * var(--spacing-3))
</style>
