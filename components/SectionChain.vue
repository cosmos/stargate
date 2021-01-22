<template>
  <div class="section">
    <div class="tm-section-container section-container">
      <div class="container list">
        <div class="section-graphics">
          <graphics-chain class="section-graphics__canvas" />
        </div>
        <div class="list__top">
          <div
            class="list__top__heading tm-rf0 tm-medium tm-lh-title tm-overline"
          >
            service providers
          </div>
        </div>
        <div class="list__title tm-rf7 tm-bold tm-lh-title">
          Prepare for <span class="list__title__highlight">Stargate</span>
        </div>
        <div class="list__desc tm-rf2 tm-lh-copy tm-measure-narrower">
          The future is here, Cosmonauts! Start integration testing with
          Stargate today.
        </div>
        <div class="list__quote tm-measure-wide">
          <blockquote>
            <span class="tm-rf0 tm-bold tm-lh-copy" style="color: var(--white)"
              >Imminent upgrades</span
            >
            <p class="tm-rf0 tm-lh-copy" style="color: var(--gray-800)">
              Service providers have until early February (date TBC) to test
              their integrations with Stargate before the upgrades are launched
              on Cosmos Hub.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
/deep/
  .section
    overflow initial

blockquote
  padding-left var(--spacing-7)
  padding-right var(--spacing-7)
  border-left 0.25rem solid #FFBA31
  color inherit
  margin-top var(--spacing-8)

.section
  overflow visible

.list
  margin-top var(--spacing-7)
  position relative

  &__top
    grid-column 6/span 7
    position relative

    &__heading
      color var(--gray-600)
      position relative

  &__title
    margin-top var(--spacing-8)
    color var(--white)
    grid-column 5/ span 9
    position relative

    &__highlight
      background-color var(--white)
      background-image linear-gradient(90deg, #99DAFF 0%, #CCD1FF 51.56%, #E644F8 100%)
      background-size 100%
      background-clip text
      -webkit-text-fill-color transparent
      -moz-text-fill-color transparent
      padding-right 0.05em // Fix offset clipping

  &__desc
    margin-top var(--spacing-8)
    grid-column 6/span 7
    color var(--gray-800)
    position relative

  &__quote
    margin-top var(--spacing-8)
    grid-column 6/span 7
    position relative

.section-graphics
  grid-column 1/span 3
  grid-row span 4
  position relative
  z-index -1
  left -40%
  top 8%
  &__canvas
    position absolute
    width 390%
    right -190%
    height auto
    margin-top -24%

@media $breakpoint-medium-max
  .list__top,
  .list__title,
  .list__desc,
  .list__quote
    grid-column 1/span 12
  .section-graphics
    grid-column 1/span 12
    grid-row 5
    &__canvas
      position relative
      width 140%
      right auto
      margin-top -20%
      margin-bottom -40%
      margin-left -20%
</style>
