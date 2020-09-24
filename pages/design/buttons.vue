<template>
  <main>
    <div class="dark">
      <div class="tm-section-container">
        <h2 class="tm-rf3 lh-title tm-bold">
          Dark background + glowing buttons
        </h2>
        <div class="row">
          <tm-button size="xl" color="var(--white)" variant="text" glow
            >And beyond<span class="icon__right">--></span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="l"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="l" background-color="var(--white)" color="#000"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="l"
            border-color="var(--white)"
            color="var(--white)"
            variant="outlined"
            glow
            >To infinity</tm-button
          >
          <tm-button size="l" color="var(--white)" variant="text" glow
            >And beyond<span class="icon__right">--></span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="m"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="m" background-color="var(--white)" color="#000"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="m"
            border-color="var(--white)"
            color="var(--white)"
            variant="outlined"
            glow
            >To infinity</tm-button
          >
          <tm-button size="m" color="var(--white)" variant="text" glow
            >And beyond<span class="icon__right">--></span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="s"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="s" background-color="var(--white)" color="#000"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="s"
            border-color="var(--white)"
            color="var(--white)"
            variant="outlined"
            glow
            >To infinity</tm-button
          >
          <tm-button size="s" color="var(--white)" variant="text" glow
            >And beyond<span class="icon__right">--></span></tm-button
          >
        </div>
      </div>
    </div>
    <div class="light">
      <div class="tm-section-container">
        <h2 class="tm-rf3 tm-lh-title tm-bold">
          Light background + glowing buttons
        </h2>
        <div class="row">
          <tm-button size="xl" color="#4251fa" variant="text" glow
            >And beyond<span class="icon__right">--></span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="l"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="l" background-color="var(--white)" color="#000"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="l"
            border-color="#4251fa"
            color="#4251fa"
            variant="outlined"
            >To infinity</tm-button
          >
          <tm-button size="l" color="#4251fa" variant="text" glow
            >And beyond<span class="icon__right">--></span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="m"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="m" background-color="var(--white)" color="#000"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="m"
            border-color="#4251fa"
            color="#4251fa"
            variant="outlined"
            >To infinity</tm-button
          >
          <tm-button size="m" color="#4251fa" variant="text" glow
            >And beyond<span class="icon__right">--></span></tm-button
          >
        </div>
        <div class="row">
          <tm-button
            size="s"
            background-color="linear-gradient(90deg, #C01AEA, #4251FA, #36D0E6)"
            glow
            >Beam me up</tm-button
          >
          <tm-button size="s" background-color="var(--white)" color="#000"
            >Cosmonaut</tm-button
          >
          <tm-button
            size="s"
            border-color="#4251fa"
            color="#4251fa"
            variant="outlined"
            >To infinity</tm-button
          >
          <tm-button size="s" color="#4251fa" variant="text" glow
            >And beyond<span class="icon__right">--></span></tm-button
          >
        </div>
      </div>
    </div>
    <div class="dark">
      <div class="tm-section-container">
        <h2 class="tm-rf3 tm-lh-title tm-bold">
          Dark background + internal + external
        </h2>
        <div class="row">
          <tm-button
            to-link="internal"
            to="/design/typography"
            size="l"
            color="var(--white)"
            glow
            >Internal</tm-button
          >
          <tm-button
            to-link="external"
            href="https://github.com/cosmos/stargate"
            size="l"
            color="#3B2AB7"
            background-color="var(--white)"
            glow
            >External</tm-button
          >
        </div>
      </div>
      <div class="tm-section-container">
        <h2 class="tm-rf3 tm-lh-title tm-bold">Disabled state</h2>
        <div class="row">
          <tm-button size="l" color="var(--white)" glow disabled
            >Disabled button</tm-button
          >
          <tm-button
            to-link="internal"
            to="/design/typography"
            size="l"
            color="var(--white)"
            glow
            disabled
            >Disabled link</tm-button
          >
        </div>
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

.tm-button
  margin var(--spacing-7) var(--spacing-7) var(--spacing-7) 0
</style>
