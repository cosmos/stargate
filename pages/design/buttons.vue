<template>
  <main>
    <div class="dark">
      <div class="section-container">
        <h2>Dark background + glowing buttons</h2>
        <tm-button
          size="l"
          backgroundColor="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
          glow
          >Beam me up</tm-button
        >
        <tm-button
          size="l"
          borderColor="#fff"
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
          backgroundColor="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
          glow
          >Beam me up</tm-button
        >
        <tm-button
          size="l"
          borderColor="#4251fa"
          color="#4251fa"
          variant="outlined"
          >To infinity</tm-button
        >
        <tm-button size="l" color="#4251fa" variant="text" glow
          >And beyond <span class="icon__right">--></span></tm-button
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
}
</script>

<style lang="stylus" scoped>
.dark,
.light
  padding var(--spacing-9) 0
.light
  background white
  color black

.tm-button
  margin var(--spacing-7)
</style>
