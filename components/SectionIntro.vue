<template>
  <div id="intro">
    <div class="section section-intro">
      <div class="tm-section-container section-container">
        <div class="container">
          <div class="section-title">A new era for Cosmos</div>
          <div class="section-subtitle">
            The biggest event in the ecosystem since the launch of the Cosmos
            Hub.
          </div>
          <eclipsed-planet class="section-graphics" />
          <div class="section-statement">
            <p>
              Stargate is a set of upgrades that complete the original roadmap
              laid out in the Cosmos Whitepaper. For the first time ever, Cosmos
              blockchains will be able to connect with each other using the
              first standardized protocol for inter-blockchain communication
              (IBC).
            </p>
            <div class="section-cta">
              <a
                href="https://blog.cosmos.network/cosmos-stargate-upgrade-overview-8939475fe673"
                target="_blank"
                rel="noreferrer noopener"
              >
                Read more about Stargate &#8594;
              </a>
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
.section-intro
  position relative
  .section-title
    grid-column 1 / span 12
    grid-row 1 / 2
    font-weight 900
    font-size 100px
    line-height 112%
    letter-spacing -0.03em
    color #FFFFFF
    max-width 50rem
  .section-subtitle
    display flex
    justify-content flex-end
    flex-direction column
    margin-top -1.5em
    grid-row 2
    grid-column 6 / span 7
    font-size 2rem
    line-height 1.25
    letter-spacing -0.02em
    color #FFFFFF
  .section-graphics
    grid-row 3
    grid-column 1 / span 6
    position relative
  .section-statement
    position relative
    margin-top 3rem
    grid-column 6 / span 7
    grid-row 3
    max-width 30em
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    text-align left
    p
      color #CFD1E7
  .section-cta
    margin-top 3rem
    a
      display inline-block
      font-weight bold
      font-size 1.4375rem
      line-height 1.217
      letter-spacing -0.01em
      border-radius 6px
      padding 22px 0
      &:hover
        color inherit
  .title
    font-weight 900
    font-size 100px
    line-height 112%
    display flex
    align-items center
    letter-spacing -0.03em
    color var(--white)

@media screen and (max-width: 1024px)
  .section-intro
    .section-title
      grid-row 1
      grid-column 1 / span 12
      font-size 4rem
    .section-subtitle
      margin-top 2rem
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
      margin-top 1rem

@media screen and (max-width: 576px)
  .section-intro
    .section-graphics
      grid-column 1 / span 10
      font-size 0.5rem
    .section-cta a
      font-size 1rem
      line-height 1.375
      letter-spacing 0
      padding 0.8125rem 0
</style>
