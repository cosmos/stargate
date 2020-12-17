<template>
  <main>
    <section-hero />

    <section-intro />
    <section-features />

    <section-community />
    <section-roadmap />
    <section-contributors />
    <bug-bounty-banner />
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
