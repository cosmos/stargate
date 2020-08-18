<template>
  <main>
    <div
      class="hero tc pv9 min-vh-100 flex flex-column items-center justify-center"
    >
      <div class="container ph7 ph9-m-up ph10-l-up ph11-xl-up ph12-xxl">
        <div class="f-1 rf1-m-up fw5 lh-title ttu tracked">
          Welcome to Cosmos
        </div>
        <h1 class="title rf7 b lh-solid mt5 mb0">
          The open economy for everyone
        </h1>
        <p class="rf2 lh-copy measure mt7 mb8 center">
          Cosmos is an ever-expanding network of decentralized and
          interconnected applications, built with powerful blockchain
          technology.
        </p>
        <tm-button size="l">Beam me up</tm-button>
        <p class="rf-1 rf0-l-up lh-copy measure-narrow mt5 center">
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
  .title
    max-width 10em
</style>
