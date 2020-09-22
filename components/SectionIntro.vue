<template>
  <div id="intro">
    <div class="section section-intro">
      <div class="tm-section-container section-container">
        <div class="container">
          <div class="section-title tm-rf6 tm-bold tm-lh-title">
            A new era for Cosmos
          </div>
          <div class="section-subtitle tm-rf2 tm-lh-copy">
            The biggest event in the ecosystem since the launch of the Cosmos
            Hub.
          </div>
          <eclipsed-planet class="section-graphics" />
          <div class="section-statement tm-rf1 tm-lh-copy">
            <p>
              Stargate is a set of upgrades that complete the original roadmap
              laid out in the Cosmos Whitepaper. For the first time ever, Cosmos
              blockchains will be able to connect with each other using the
              first standardized protocol for inter-blockchain communication
              (IBC).
            </p>
            <div class="section-cta tm-rf1 tm-lh-solid">
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
    max-width 50rem
  .section-subtitle
    display flex
    justify-content flex-end
    flex-direction column
    margin-top -1.5em
    grid-row 2
    grid-column 6 / span 7
    color var(--white)
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
    text-align left
    p
      color var(--gray-800)
  .section-cta
    margin-top 3rem
    a
      display inline-block
      border-radius 0.375rem
      padding 1.375rem 0

@media screen and (max-width: 1024px)
  .section-intro
    .section-title
      grid-row 1
      grid-column 1 / span 12
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
</style>
