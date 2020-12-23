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

@media screen and (max-width: 414px)
  main
    overflow-x hidden
</style>
