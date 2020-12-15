<template>
  <div class="section starport-banner">
    <div class="card"></div>
    <div class="text">
      <div class="text__overline tm-rf0 tm-medium tm-lh-title tm-overline">
        Calling all contributors
      </div>
      <div class="text__title tm-rf4 tm-bold tm-lh-title">
        <span class="text__title__highlight">Bug</span> Bounty Program
      </div>
      <div class="text__subtitle tm-rf1 tm-lh-copy">
        We depend on the community to assist us with testing so that we can
        increase confidence in the Stargate software releases.
      </div>
      <div class="text__btn-container">
        <tm-button
          to-link="external"
          href="https://hackerone.com/tendermint?type=team"
          background-color="linear-gradient(89.41deg, #99DAFF -0.22%, #FFD1FD 99.78%)"
          color="var(--gray-50)"
          class="text__btn-container__btn"
          >Submit bug<span class="icon__right">↗</span></tm-button
        >
        <tm-button
          to-link="external"
          href="https://blog.cosmos.network/cosmos-stargate-release-bug-bounty-program-1662af59c92d"
          color="var(--white)"
          variant="text"
          glow
          >Learn more<span class="icon__right">↗</span></tm-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.starport-banner
  display grid
  grid-template-columns repeat(12,1fr)
  gap 0 var(--spacing-7)
  // box-shadow var(--elevation-16)
  max-width var(--container-mw-lg)
  center()

.card
  background url("/stars-bg-bug-bounty.svg"), linear-gradient(180deg, #03072C 0%, #030320 100%)
  // background-repeat no-repeat
  background-size contain
  grid-column 1 / span 6
  border-radius $border-radius-4

.text
  // padding 0 var(--spacing-8)
  grid-column 8 / span 12

  &__overline
    color var(--gray-600)
    position relative

  &__title
    margin var(--spacing-6) 0
    color var(--white)
    position relative
    margin-left calc(var(--spacing-12) * -1)

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

.text__btn-container
  margin-top var(--spacing-8)
  display flex
  flex-wrap wrap

  &__btn
    margin-right var(--spacing-6)
    &:last-child
      margin-right 0

.icon__left
  color var(--primary-600)

@media screen and (max-width: 768px)
  .starport-banner
    grid-template-columns 1fr

  .text
    padding var(--spacing-7)

@media screen and (max-width: 660px)
  // .starport-banner
  //   max-width $max-width-7
  //   height 22rem
  //   background url(/cards/starport-rocket-small.jpg), linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%)
  //   background-repeat no-repeat
  //   background-size contain

  .text
    grid-column unset
    grid-row 2
    padding var(--spacing-6)
    position relative
    &:before
      content ''
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      border-radius $border-radius-4
      background linear-gradient(180deg, rgba(46, 45, 45, 0) 0%, #2E2D2D 39.9%)

    &__title
      margin-left 0

  .text__btn-container__btn
    flex 1 0 auto
</style>
