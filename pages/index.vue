<template>
  <main>
    <div
      v-observe-visibility="{
        callback: freezeNav,
      }"
    >
      <section-hero />
    </div>

    <div class="nav-container">
      <header id="section-nav" class="headroom section-nav">
        <section-nav />
      </header>
    </div>

    <section-intro />

    <div
      v-observe-visibility="{
        callback: unfreezeNav,
      }"
    >
      <section-features />
    </div>

    <section-testnets />
    <section-roadmap />
    <section-contributors />
    <section-articles />
    <section-videos />
    <section-community />
    <section-form />
  </main>
</template>

<script>
import Headroom from 'headroom.js'

export default {
  data() {
    return {
      headroom: null,
    }
  },
  mounted() {
    this.enableHeadroom()
  },
  methods: {
    // freeze the headroom instance, no scroll events
    freezeNav(isVisible) {
      if (isVisible) {
        this.headroom.freeze()
      }
    },
    // resume scroll events
    unfreezeNav(isVisible) {
      if (isVisible) {
        this.headroom.unfreeze()
      }
    },
    enableHeadroom() {
      if (!this.headroom) {
        const header = document.getElementById('section-nav')
        this.headroom = new Headroom(header)
        this.headroom.init()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
main
  overflow -webkit-paged-x

.nav-container
  height 4rem

.headroom
  will-change transform
  transition transform .2s ease-out

.headroom--pinned
  transform translateY(0%)

.headroom--unpinned
  transform translateY(-100%)

.section-nav
  top 0
  width 100%
  z-index 1000
  &.headroom--pinned,
  &.headroom--unpinned
    position fixed
    &:not(.headroom--frozen)
      background linear-gradient(180deg, rgba(0,0,0,0.96) 41%, rgba(0, 0, 0, 0))
      padding-bottom 1rem
  &.headroom--frozen
    position static

@media screen and (max-width: 1024px)
  .section .section-header
    grid-column 1 / span 12

@media screen and (max-width: 414px)
  main
    overflow-x hidden

@media screen and (max-width: 375px)
  .section-container .container
    gap unset
</style>
