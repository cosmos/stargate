<template>
  <div class="section-outer">
    <div class="section section-intro">
      <div class="tm-section-container section-container">
        <div class="container">
          <div class="section-title tm-rf6 tm-rf7-xl-up tm-bold tm-lh-title">
            A <span class="section-title__highlight">new era</span> for Cosmos
          </div>
          <div class="section-subtitle tm-rf2 tm-lh-copy tm-measure">
            Join the biggest event in the ecosystem since the launch of the
            Cosmos Hub.
          </div>
          <graphics-eclipsed-planet class="section-graphics" />
          <div class="section-statement tm-rf1 tm-lh-copy tm-measure">
            <p>
              Stargate is a set of upgrades that complete the original roadmap
              laid out in the Cosmos Whitepaper. For the first time ever, Cosmos
              blockchains will be able to connect with each other using the
              first standardized protocol for inter-blockchain communication
              (IBC).
            </p>
            <tm-button
              to-link="external"
              href="https://blog.cosmos.network/cosmos-stargate-upgrade-overview-8939475fe673"
              size="l"
              color="var(--link)"
              variant="text"
              class="section-cta"
              >Learn more &#8594;</tm-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-outer
  background url(/stars.svg)
.section-intro
  position relative
  .section-title
    grid-column 1 / span 12
    grid-row 1 / 2
    max-width 9em
    min-height $line-height-title-base-min * 2em
    margin-bottom -1.1em
    &__highlight
      background-color var(--white)
      background-image linear-gradient(90deg, #E644F8 0%, #CCD1FF 51.56%, #99DAFF 100%)
      background-size 100%
      background-clip text
      -webkit-text-fill-color transparent
      -moz-text-fill-color transparent
      padding-right 0.05em // Fix offset clipping
  .section-subtitle
    display flex
    justify-content flex-end
    flex-direction column
    grid-row 2
    grid-column 6 / span 7
    color var(--white)
  .section-graphics
    grid-row 3
    grid-column 1 / span 6
    position relative
  .section-statement
    position relative
    margin-top var(--spacing-8)
    grid-column 6 / span 7
    grid-row 3
    text-align left
    p
      color var(--gray-800)
  .section-cta
    margin-top var(--spacing-8)

@media screen and (max-width: 1400px)
  .section-intro
    .section-subtitle,
    .section-statement
      grid-column 7 / span 6

@media screen and (max-width: 1024px)
  .section-intro
    .section-title
      grid-row 1
      grid-column 1 / span 12
      max-width none
      min-height 0
      margin-bottom 0
    .section-subtitle
      margin-top var(--spacing-7)
      grid-row 2
      grid-column 1 / span 12
    .section-graphics
      grid-row 3
      grid-column 2 / span 8
    .section-statement
      grid-row 4
      grid-column 1 / span 12

@media screen and (max-width: 767px)
  .section-intro
    .section-graphics
      font-size 0.75rem
    .section-statement
      margin-top var(--spacing-5)

@media screen and (max-width: 576px)
  .section-intro
    .section-graphics
      grid-column 1 / span 10
      font-size 0.5rem
</style>
