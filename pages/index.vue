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
      <header id="section-nav">
        <section-nav />
      </header>
    </div>

    <section-intro />

    <div
      id="features"
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
      tabs: [],
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
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
// TODO: outlined pill badge
.outline-btn
  border 2px solid #43466D !important
  background transparent !important
  color #989BB9 !important

.nav-container
  height 4rem

main
  overflow -webkit-paged-x

// .headroom
//   will-change transform
//   transition transform .2s ease-out

// .headroom--pinned
//   transform translateY(0%)

// .headroom--unpinned
//   transform translateY(-100%)

@media screen and (max-width: 1024px)
  .section .section-header
      grid-column 1 / span 12

@media screen and (max-width: 576px)
  .section
    .section-title
      margin-top 3rem
      font-size 2.5rem
      line-height 1.20
    .section-subtitle
      font-size 1.4375rem
      line-height 1.217
    .section-statement
      font-size 1rem
      line-height 1.625
    .section-cta
      font-size 1rem
      line-height 1.375
      margin-top 1.5rem

@media screen and (max-width: 414px)
  main
    overflow-x hidden

@media screen and (max-width: 375px)
  .section-container .container
    gap unset
</style>
