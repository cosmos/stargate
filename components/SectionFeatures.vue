<template>
  <div class="section section-features">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header">Features</div>
        <div class="section-title">What’s new?</div>
        <div class="section-statement">
          These upgrades bring significant performance improvements to
          blockchains built with Cosmos SDK. Discover all the amazing features
          of the Stargate upgrade below.
        </div>
        <div class="data-container">
          <div class="data-item">
            <div class="data-item__overline">Enabling</div>
            <div class="data-item__heading">IBC</div>
          </div>
          <div class="data-item">
            <div class="data-item__overline">Efficiency gains up to</div>
            <div class="data-item__heading">100x</div>
          </div>
          <div class="data-item">
            <div class="data-item__overline">Faster full node sync</div>
            <div class="data-item__heading">96x</div>
          </div>
          <div class="data-item">
            <div class="data-item__overline">Faster upgrades</div>
            <div class="data-item__heading">20x</div>
          </div>
        </div>
        <div class="features-graphics">
          <interoperable-planets />
        </div>
        <div class="ibc-item">
          <div class="ibc-item__icon">
            <icon-ibc-cropped />
          </div>
          <div class="ibc-item__title">Inter-Blockchain Communication</div>
          <div class="ibc-item__description">
            Cosmos SDK-based blockchains can incorporate the Inter-Blockchain
            Communication (IBC) Protocol to communicate with other compatible
            blockchains. The Cosmos Hub is the first blockchain to support IBC
            in production.
          </div>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <div class="grid-item__icon">
              <icon-countdown />
            </div>
            <div class="grid-item__title">State Sync</div>
            <div class="grid-item__description">
              For blockchains built on top of Tendermint Core, the full-node
              synchronization process will be reduced from 2 days to just 30
              mins or less.
            </div>
          </div>
          <div class="grid-item">
            <div class="grid-item__icon">
              <icon-repeat />
            </div>
            <div class="grid-item__title">Automatic upgrades</div>
            <div class="grid-item__description">
              The upgrade module facilitates the upgrade process of chains built
              with Cosmos SDK. Migration from one version to the next will take
              little to no time, as opposed to one hour or more before.
            </div>
          </div>
          <div class="grid-item">
            <div class="grid-item__icon">
              <icon-mask-oval />
            </div>
            <div class="grid-item__title">Full-featured Light Clients</div>
            <div class="grid-item__description">
              Light clients are lightweight alternatives to a full node,
              allowing a wide range of devices to safely and efficiently receive
              blockchain data for new network nodes and inter-blockchain
              communication.
            </div>
          </div>
          <div class="grid-item">
            <div class="grid-item__icon">
              <icon-speedometer />
            </div>
            <div class="grid-item__title">
              Transition from Amino to Protobuf
            </div>
            <div class="grid-item__description">
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
    margin-top 3rem
    margin-bottom 3rem
    font-weight 900
    font-size 5.125rem
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
    grid-column 6 / span 7
    text-align left
  .section-statement
    grid-row 3
    grid-column 6 / span 7
    max-width 30em
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
  .data-container
    position relative
    z-index 1 // above .feature-graphics
    grid-row 4
    margin-top 9rem
    display grid
    flex-direction row
    grid-column 1/ span 12
    grid-template-columns repeat(4, 1fr)
    gap 2rem
    .data-item
      border-top 1px dashed #282B53
      &__overline
        margin-top 1rem
        font-weight 600
        font-size 16px
        line-height 137.5%
        letter-spacing 0.08em
        text-transform uppercase
        color #989BB9
      &__heading
        margin-top 16px
        font-weight bold
        font-size 58px
        line-height 117.2%
        letter-spacing -0.03em
        color #CCD1FF
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
    max-width 24em
    font-size 1rem
    line-height 1.625
    color #989BB9
    &__icon
      width 3em
      height 3em
    &__title
      margin-top 1.5rem
      font-weight bold
      font-size 1.75rem
      line-height 1.285
      letter-spacing -0.02em
      color #FFFFFF
    &__description
      margin-top 1rem
  .grid-container
    margin-top 21%
    display grid
    grid-template-columns repeat(9, 1fr)
    gap 6rem 2rem
    grid-column 4 / span 9
    grid-row 6
    color white
    .grid-item
      grid-column 1 / span 4
      max-width 24em
      font-size 1rem
      line-height 1.625
      color #989BB9
      &:nth-child(even)
        grid-column 6 / span 4
      &__icon
        width 3rem
        height 3rem
      &__title
        margin-top 1.5rem
        font-weight bold
        font-size 1.75rem
        line-height 1.285
        letter-spacing -0.02em
        color #FFFFFF
      &__description
        margin-top 1rem

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
      grid-column 1 / 12
      font-size 4rem
    .section-statement
      grid-column 1 / 12
    .data-container
      grid-template-columns repeat(2, 1fr)
    .features-graphics
      grid-column 1 / span 10
    .ibc-item
      grid-row 6
      grid-column 1 / 12
      margin-top 2rem
    .grid-container
      grid-row 7

@media screen and (max-width: 767px)
  .section-features
    .features-graphics
      font-size 1rem

@media screen and (max-width: 576px)
  .section-features
    .data-container
      margin-top 3rem
      .data-item
        &__overline
          font-size 0.8125rem
          line-height 1.384
        &__heading
          font-size 2.5rem
          line-height 1.2
    .features-graphics
      font-size 0.5rem
    .grid-container
      margin-top 3rem
      gap 3rem 2rem
      .grid-item
        &:nth-child(even),
        &:nth-child(odd)
          grid-column 1/span 12
          grid-template-columns repeat(1, 1fr)
    .ibc-item__title,
    .grid-container .grid-item__title
      font-size 1.4375rem
      line-height 1.217
      letter-spacing -0.01em

@media screen and (max-width: 375px)
  .section-features .grid-container .grid-item
    max-width 20em

@media screen and (max-width: 320px)
  .section-features
    .grid-container
      .grid-item
        &:nth-child(even),
        &:nth-child(odd)
          grid-column 1/span 9
</style>
