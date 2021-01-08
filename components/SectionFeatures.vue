<template>
  <div class="section section-features">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
          Features
        </div>
        <div class="section-title tm-rf6 tm-bold tm-lh-title">What’s new?</div>
        <div class="section-statement tm-rf1 tm-lh-copy tm-measure">
          These upgrades bring significant performance improvements to
          blockchains built with Cosmos SDK. Discover all the amazing features
          of the Stargate upgrade below.
        </div>
        <div class="data-container">
          <div class="data-item">
            <div
              class="data-item__overline tm-rf-1 tm-medium tm-lh-title tm-overline"
            >
              Enabling
            </div>
            <div class="data-item__heading tm-rf4 tm-bold tm-lh-title">IBC</div>
          </div>
          <div class="data-item">
            <div
              class="data-item__overline tm-rf-1 tm-medium tm-lh-title tm-overline"
            >
              Efficiency gains up to
            </div>
            <div class="data-item__heading tm-rf4 tm-bold tm-lh-title">
              100x
            </div>
          </div>
          <div class="data-item">
            <div
              class="data-item__overline tm-rf-1 tm-medium tm-lh-title tm-overline"
            >
              Faster full node sync
            </div>
            <div class="data-item__heading tm-rf4 tm-bold tm-lh-title">96x</div>
          </div>
          <div class="data-item">
            <div
              class="data-item__overline tm-rf-1 tm-medium tm-lh-title tm-overline"
            >
              Faster upgrades
            </div>
            <div class="data-item__heading tm-rf4 tm-bold tm-lh-title">20x</div>
          </div>
        </div>
        <div class="features-graphics">
          <graphics-interoperable-planets />
        </div>
        <div class="ibc-item tm-measure-narrower tm-measure-narrow-m-up">
          <div class="ibc-item__icon">
            <icon-ibc-cropped />
          </div>
          <div class="ibc-item__title tm-rf2 tm-bold tm-lh-copy">
            Inter-Blockchain Communication
          </div>
          <div class="ibc-item__description tm-rf0 tm-lh-copy">
            Cosmos SDK-based blockchains can incorporate the Inter-Blockchain
            Communication (IBC) Protocol to communicate with other compatible
            blockchains. The Cosmos Hub is the first blockchain to support IBC
            in production.
          </div>
        </div>
        <div class="grid-container">
          <div class="grid-item tm-measure-narrower tm-measure-narrow-m-up">
            <div class="grid-item__icon">
              <icon-countdown />
            </div>
            <div class="grid-item__title tm-rf2 tm-bold tm-lh-copy">
              State Sync
            </div>
            <div class="grid-item__description tm-rf0 tm-lh-copy">
              For blockchains built on top of Tendermint Core, the full-node
              synchronization process will be reduced from 2 days to just 30
              mins or less.
            </div>
          </div>
          <div class="grid-item tm-measure-narrower tm-measure-narrow-m-up">
            <div class="grid-item__icon">
              <icon-repeat />
            </div>
            <div class="grid-item__title tm-rf2 tm-bold tm-lh-copy">
              Automatic upgrades
            </div>
            <div class="grid-item__description tm-rf0 tm-lh-copy">
              The upgrade module facilitates the upgrade process of chains built
              with Cosmos SDK. Migration from one version to the next will take
              little to no time, as opposed to one hour or more before.
            </div>
          </div>
          <div class="grid-item tm-measure-narrower tm-measure-narrow-m-up">
            <div class="grid-item__icon">
              <icon-mask-oval />
            </div>
            <div class="grid-item__title tm-rf2 tm-bold tm-lh-copy">
              Full-featured Light Clients
            </div>
            <div class="grid-item__description tm-rf0 tm-lh-copy">
              Light clients are lightweight alternatives to a full node,
              allowing a wide range of devices to safely and efficiently receive
              blockchain data for new network nodes and inter-blockchain
              communication.
            </div>
          </div>
          <div class="grid-item tm-measure-narrower tm-measure-narrow-m-up">
            <div class="grid-item__icon">
              <icon-speedometer />
            </div>
            <div class="grid-item__title tm-rf2 tm-bold tm-lh-copy">
              Transition from Amino to Protobuf
            </div>
            <div class="grid-item__description tm-rf0 tm-lh-copy">
              Protobuf brings performance improvements and developer
              acceleration to Cosmos SDK-based blockchains with efficiency gains
              of 10-100x, and wider language support.
            </div>
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
.section-features
  position relative
  text-align left
  .section-header
    grid-row 1
    grid-column 6 / span 7
  .section-title
    grid-row 2
    margin-top var(--spacing-8)
    margin-bottom var(--spacing-8)
    grid-column 6 / span 7
  .section-statement
    position relative
    z-index 1 // above .feature-graphics
    grid-row 3
    grid-column 6 / span 7
    color var(--gray-800)
  .data-container
    position relative
    z-index 1 // above .feature-graphics
    grid-row 4
    margin-top var(--spacing-11)
    display grid
    flex-direction row
    grid-column 1/ span 12
    grid-template-columns repeat(4, 1fr)
    gap var(--spacing-7)
    .data-item
      display flex
      flex-direction column
      justify-content flex-end
      border-top 1px dashed #282B53
      &__overline
        margin-top var(--spacing-5)
        color var(--gray-600)
      &__heading
        margin-top var(--spacing-5)
        color var(--primary-900)
  .features-graphics
    grid-column 1 / span 8
    grid-row 5
    position relative
    font-size 1.5rem
    z-index 0
  .ibc-item
    position relative
    grid-column 9 / span 4
    grid-row 5
    align-self center
    &__icon
      width 3em
      height 3em
    &__title
      margin-top var(--spacing-6)
      color var(--white)
    &__description
      margin-top var(--spacing-5)
      color var(--gray-600)
  .grid-container
    margin-top 21%
    display grid
    grid-template-columns repeat(9, 1fr)
    gap var(--spacing-10) var(--spacing-7)
    grid-column 4 / span 9
    grid-row 6
    color white
    .grid-item
      grid-column 1 / span 4
      &:nth-child(even)
        grid-column 6 / span 4
      &__icon
        width 3em
        height 3em
      &__title
        margin-top var(--spacing-6)
        color var(--white)
      &__description
        margin-top var(--spacing-5)
        color var(--gray-600)

@media screen and (max-width: 1279px)
  .section-features
    .features-graphics
      font-size 1.25rem
    .grid-container
      grid-column 1 /span 12

@media screen and (max-width: 1024px)
  .section .section-header
    grid-column 1 / span 12

  .section-features
    .section-title
      grid-column 1 / span 12
    .section-statement
      grid-column 1 / span 12
    .data-container
      grid-template-columns repeat(2, 1fr)
    .features-graphics
      grid-column 1 / span 10
    .ibc-item
      grid-row 6
      grid-column 1 / span 12
      margin-top var(--spacing-7)
    .grid-container
      grid-row 7

@media screen and (max-width: 767px)
  .section-features
    .features-graphics
      font-size 1rem

@media screen and (max-width: 576px)
  .section-features
    .data-container
      margin-top var(--spacing-8)
    .features-graphics
      font-size 0.5rem
    .grid-container
      margin-top var(--spacing-8)
      gap var(--spacing-8) var(--spacing-7)
      .grid-item
        &:nth-child(even),
        &:nth-child(odd)
          grid-column 1/span 12
          grid-template-columns repeat(1, 1fr)

@media screen and (max-width: 320px)
  .section-features
    .grid-container
      .grid-item
        &:nth-child(even),
        &:nth-child(odd)
          grid-column 1/span 9
</style>
