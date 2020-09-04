<template>
  <main>
    <div class="dark">
      <div class="section-container">
        <h2>Dark background + glowing buttons</h2>
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
          >To infinity</tm-button
        >
        <tm-button size="l" color="#fff" variant="text" glow
          >And beyond <span class="icon__right">--></span></tm-button
        >
      </div>
    </div>
    <div class="light">
      <div class="section-container">
        <h2>Light background + glowing buttons</h2>
        <tm-button
          size="l"
          background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
          glow
          >Beam me up</tm-button
        >
        <tm-button
          size="l"
          border-color="#4251fa"
          color="#4251fa"
          variant="outlined"
          >To infinity</tm-button
        >
        <tm-button size="l" color="#4251fa" variant="text" glow
          >And beyond <span class="icon__right">--></span></tm-button
        >
      </div>
    </div>
    <div class="dark">
      <div class="section-container">
        <h2>Dark background + internal + external</h2>
        <tm-button
          to-link="internal"
          to="/design/typography"
          size="l"
          color="var(--white)"
          variant="contained"
          glow
          >Internal</tm-button
        >
        <tm-button
          to-link="external"
          href="https://github.com/cosmos/stargate"
          size="l"
          color="#3B2AB7"
          background-color="var(--white)"
          variant="contained"
          glow
          >External</tm-button
        >
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
  head() {
    return {
      title: 'Buttons',
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: 'My custom description',
      //   },
      // ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.dark,
.light
  padding var(--spacing-9) 0
.light
  background white
  color black

a, .tm-button
  margin 0 var(--spacing-7)
</style>
