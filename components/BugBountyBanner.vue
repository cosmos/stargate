<template>
  <div class="section section-container tm-section-container">
    <div class="container">
      <div class="graphics">
        <div class="graphics__back"></div>
        <graphics-bug-bounty class="graphics__front" />
      </div>
      <div class="text">
        <div
          class="text__overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
        >
          Calling all contributors
        </div>
        <div class="text__title tm-rf5 tm-bold tm-lh-title">
          <span class="text__title__highlight">Bug</span> Bounty Program
        </div>
        <div class="text__subtitle tm-rf1 tm-lh-copy tm-measure">
          We depend on the community to assist us with testing so that we can
          increase confidence in the Stargate software releases.
        </div>
        <div class="text__btn-container">
          <tm-button
            to-link="external"
            href="https://hackerone.com/tendermint?type=team"
            background-color="linear-gradient(89.41deg, #99DAFF -0.22%, #FFD1FD 99.78%)"
            color="var(--gray-50)"
            size="l"
            >Submit bug<span class="icon__right">↗</span></tm-button
          >
          <tm-button
            to-link="external"
            href="https://blog.cosmos.network/cosmos-stargate-release-bug-bounty-program-1662af59c92d"
            variant="text"
            size="l"
            color="var(--link)"
            glow
            >Learn more<span class="icon__right">↗</span></tm-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.section
  overflow visible

.graphics
  $scale = 1.2

  position relative
  z-index -1
  grid-column 1 / span 6
  grid-row span 5
  display flex
  align-items stretch
  justify-content flex-end

  &__back
    min-width ($scale * 100%)
    height 100%
    padding-bottom 56.25%
    background url("/stars.svg"), linear-gradient(180deg, #03072C 0%, #030320 100%)
    background-size 50%
    border-radius $border-radius-6

  &__front
    position absolute
    max-width floor($scale * 144%)
    top 43%
    left 57%
    transform translate(-50%, -50%)

.text
  position relative
  grid-column 8 / span 5
  &__overline
    color var(--gray-600)
    position relative

  &__title
    margin var(--spacing-6) 0
    margin-left calc(60% * -1 + (var(--spacing-7) *2))
    color var(--white)
    position relative

    &__highlight
      background-color var(--white)
      background-image linear-gradient(90deg, #ff5348 0%, #ff75c8 46%, #fff 93%)
      background-size 100%
      background-clip text
      -webkit-text-fill-color transparent
      -moz-text-fill-color transparent
      padding-right 0.05em // Fix offset clipping

  &__subtitle
    color var(--gray-800)

  &__btn-container
    margin-top var(--spacing-8)
    display flex
    flex-wrap wrap
    gap var(--spacing-7)

@media $breakpoint-medium-up
  .section
    overflow visible

@media $breakpoint-medium-max
  .container
    grid-template-columns repeat(1, minmax(0, 1fr))
    gap var(--spacing-8) var(--spacing-7)

  .text,
  .graphics
    grid-column span 1
    grid-row auto

  .graphics__back
    min-width 100%
    border-radius $border-radius-5

  .text__title
      margin-left 0

@media $breakpoint-small-max
  .text__btn-container
    display grid
    grid-template-columns repeat(auto-fill, minmax(13rem, auto))
</style>
