<template>
  <div id="testnets" class="section section-testnets">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header">Testnets</div>
        <planets-cluster class="section-graphics" />
        <div class="section-top">
          <div class="section-title">Get set for testnets</div>
          <div class="section-statement">
            <p>
              Validators, wallets, block explorers, exchanges and zone
              developers are among the primary services affected by the upgrades
              with Stargate. Make sure to schedule time for integration testing
              on the various testnets.
            </p>
          </div>
        </div>
        <div class="testnets-list">
          <div class="testnets-list__item">
            <img
              src="~/assets/illustrations/stargate-flag.svg"
              class="testnets-list__item__graphics"
            />
            <div class="testnets-list__item__text__top">
              <div class="testnets-list__item__text__top__title">
                <code>stargate-3a</code>
              </div>
              <div class="testnets-list__item__text__top__status">Live</div>
            </div>
            <div class="testnets-list__item__text">
              <div class="testnets-list__item__text__mid"></div>
              <p class="testnets-list__item__text__mid__desc">
                The first simulated upgrade of the Cosmos Hub and the primary
                public integration testnet for
                <a
                  href="https://airtable.com/shrEr1bQD6COG9WH0"
                  target="blank_"
                  rel="noreferrer noopener"
                  >Stargate-readiness</a
                >.
              </p>
              <div class="testnets-list__item__text__bot">
                <div class="testnets-list__item__text__bot__display">
                  Recommended for
                </div>
                <div class="testnets-list__item__text__bot__labels">
                  <div class="testnets-list__item__text__bot__labels__item">
                    Validators
                  </div>
                  <div class="testnets-list__item__text__bot__labels__item">
                    Wallets
                  </div>
                  <div class="testnets-list__item__text__bot__labels__item">
                    Explorers
                  </div>
                  <div class="testnets-list__item__text__bot__labels__item">
                    Exchanges
                  </div>
                </div>
              </div>
              <div class="testnets-list__item__cta">
                <a
                  href="https://github.com/cosmosdevs/stargate#testnet"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="testnets-list__item__cta__join"
                  >Join</a
                >
                <a
                  href="https://discord.com/channels/669268347736686612/723170066937413693"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="testnets-list__item__cta__discuss"
                  >Discuss</a
                >
              </div>
            </div>
          </div>
          <div class="testnets-list__item testnets-list__item__inactive">
            <img
              src="~/assets/illustrations/bigbang-flag.svg"
              class="testnets-list__item__graphics"
            />
            <div class="testnets-list__item__text__top">
              <div class="testnets-list__item__text__top__title">
                <code>bigbang-1</code>
              </div>
              <div class="testnets-list__item__text__top__status outline-btn">
                Coming soon
              </div>
            </div>
            <div class="testnets-list__item__text">
              <div class="testnets-list__item__text__mid">
                <div class="testnets-list__item__text__mid__desc">
                  A community-led testnet aimed at the wider Cosmos ecosystem
                  and independent zone developers.
                </div>
              </div>
              <div class="testnets-list__item__text__bot">
                <div class="testnets-list__item__text__bot__display">
                  Recommended for
                </div>
                <div class="testnets-list__item__text__bot__labels">
                  <div class="testnets-list__item__text__bot__labels__item">
                    Validators
                  </div>
                  <div class="testnets-list__item__text__bot__labels__item">
                    Cosmos SDK devs
                  </div>
                </div>
              </div>
              <div class="testnets-list__item__cta">
                <!-- <a
                  href="https://github.com/cosmosdevs/stargate#testnet"
                  target="_blank"
                  rel="noreferrer noopener"
                  > -->
                <div
                  class="testnets-list__item__cta__join outline-btn disabled"
                  aria-disabled="true"
                >
                  Join
                </div>
                <!-- </a> -->
                <a
                  href="https://discord.com/channels/669268347736686612/723170066937413693"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="testnets-list__item__cta__discuss"
                >
                  Discuss
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="section-status">
          <div class="section-status__title">Preparing to upgrade</div>
        </div>
        <div class="section-tabs">
          <tm-tabs>
            <tm-tab name="Validators" :selected="true">
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph">
                  Validators of chains that will implement Stargate upgrades –
                  beginning with the Cosmos Hub – should prepare by helping run
                  the Stargate testnets above.
                </p>
              </div>
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph">
                  More detailed instructions and guidelines on how validators
                  can prepare for the upgrade will be published in due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div class="section-tabs__text__heading">
                  Cosmos Hub Validators
                </div>
                <div class="section-tabs__text__title">
                  Joining <code>stargate-3a</code>
                </div>
                <p class="section-tabs__text__paragraph">
                  Your current <strong>"operator_address"</strong> and your
                  <strong>"consensus_pubkey"</strong> are required via pull
                  request. These keys will be used to generate a genesis file
                  for the upcoming testnets.
                </p>
                <div class="section-tabs__text__cta">
                  <a
                    href="https://github.com/cosmosdevs/stargate/tree/master/validator_pub_keys"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Submit validator key &#8594;
                  </a>
                </div>
              </div>
              <div class="section-tabs__text">
                <div class="update-container">
                  <div class="update-container__title">
                    Joined stargate-3a testnet?
                  </div>
                  <div class="update-container__cta">
                    <a
                      href="https://airtable.com/shrEr1bQD6COG9WH0"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Confirm your Stargate readiness &#8594;
                    </a>
                  </div>
                </div>
              </div>
            </tm-tab>
            <tm-tab name="Wallets &amp; Explorers">
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph">
                  Wallets and Explorers should ensure they are able to use the
                  old Amino endpoints and the new Protobuf queries to get the
                  correct expected results from their queries using
                  <a
                    href="https://github.com/cosmosdevs/stargate#testnet"
                    target="_blank"
                    rel="noreferrer noopener"
                    ><code>stargate-3a</code></a
                  >
                  testnet.
                </p>
              </div>
              <div class="section-tabs__code">
                <div class="left">
                  <div class="title">Public RPC endpoints</div>
                  <div class="list">
                    <a
                      href="http://34.123.30.100:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      ><code>34.123.30.100:26657</code></a
                    >
                    <a
                      href="http://174.129.101.58:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      ><code>174.129.101.58:26657</code></a
                    >
                    <a
                      href="http://52.200.210.219:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      ><code>52.200.210.219:26657</code></a
                    >
                  </div>
                </div>
                <div class="right">
                  <div class="title">Public RPC endpoints</div>
                  <div class="list">
                    <a
                      href="http://34.123.30.100:1317"
                      target="_blank"
                      rel="noreferrer noopener"
                      ><code>34.123.30.100:1317</code></a
                    >
                  </div>
                </div>
              </div>
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph">
                  More detailed instructions and guidelines on how wallets and
                  block explorers can prepare for the upgrade will be published
                  in due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div class="update-container">
                  <div class="update-container__title">
                    Joined stargate-3a testnet?
                  </div>
                  <div class="update-container__cta">
                    <a
                      href="https://airtable.com/shrEr1bQD6COG9WH0"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Confirm your Stargate readiness &#8594;
                    </a>
                  </div>
                </div>
              </div>
            </tm-tab>
            <tm-tab name="Exchanges">
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph">
                  Use the
                  <a
                    href="https://github.com/cosmosdevs/stargate/blob/master/ibc_readiness_matrix.md"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Stargate IBC Skill Matrix</a
                  >
                  to guide you in supporting IBC with your upgrades.
                </p>
                <p class="section-tabs__text__paragraph">
                  Make sure your signing and querying software is ready for the
                  Stargate upgrade by testing the features and your
                  infrastructure ahead of time, using the
                  <code class="section-tabs__text__paragraph__stargate"
                    >stargate-3a</code
                  >
                  testnet.
                </p>
              </div>
              <div class="section-tabs__code">
                <div class="left">
                  <div class="title">Public RPC endpoints</div>
                  <div class="list">
                    <a
                      href="http://34.123.30.100:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      ><code>34.123.30.100:26657</code></a
                    >
                    <a
                      href="http://174.129.101.58:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      ><code>174.129.101.58:26657</code></a
                    >
                    <a
                      href="http://52.200.210.219:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      ><code>52.200.210.219:26657</code></a
                    >
                  </div>
                </div>
                <div class="right">
                  <div class="title">Public RPC endpoints</div>
                  <div class="list">
                    <a
                      href="http://34.123.30.100:1317"
                      target="_blank"
                      rel="noreferrer noopener"
                      ><code>34.123.30.100:1317</code></a
                    >
                  </div>
                </div>
              </div>
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph">
                  More detailed instructions and guidelines on how exchanges can
                  prepare for the upgrade will be published in due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div class="update-container">
                  <div class="update-container__title">
                    Joined stargate-3a testnet?
                  </div>
                  <div class="update-container__cta">
                    <a
                      href="https://airtable.com/shrEr1bQD6COG9WH0"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Confirm your Stargate readiness &#8594;
                    </a>
                  </div>
                </div>
              </div>
            </tm-tab>
            <tm-tab name="Zone Developers">
              <div class="section-tabs__text">
                <div class="section-tabs__text__heading">
                  Not ready to upgrade?
                </div>
                <div class="section-tabs__text__title">Launchpad</div>
                <p class="section-tabs__text__paragraph">
                  Stargate involves a lot of breaking changes that may make it
                  difficult for you to upgrade, if you have already written a
                  lot of code for Cosmos SDK 0.37/0.38.
                </p>
                <p class="section-tabs__text__paragraph">
                  The community supports an SDK 0.39 Launchpad release that
                  includes backported bug fixes. The
                  <a v-scroll-to="'#contributors'">Cosmos development teams</a>
                  are working together to document a clean migration path from
                  Launchpad to a stable Stargate release.
                </p>
                <div class="section-tabs__text__cta">
                  <a
                    href="https://blog.cosmos.network/launchpad-a-pre-stargate-stable-version-of-the-cosmos-sdk-e0c58d8c4e24"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Learn more &#8594;
                  </a>
                </div>
              </div>
            </tm-tab>
          </tm-tabs>
          <div class="section-tabs__text">
            <div class="section-tabs__text__title">Migration guides</div>
            <p class="section-tabs__text__paragraph">
              Help the Cosmos ecosystem upgrade by contributing your own
              migration guides to the community.
            </p>
            <div class="section-tabs__text__cta">
              <a
                href="https://github.com/cosmosdevs/stargate/pulls"
                target="_blank"
                rel="noreferrer noopener"
              >
                Submit a guide &#8594;
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
.section-testnets
  position relative
  overflow hidden
  background linear-gradient(180deg, rgba(0,0,0,0) 0%, #030419 24%, #030419 69%, rgba(0,0,0,0) 100%)
  .section-header
    grid-column 6/span 7
    grid-row 1
  .section-graphics
    grid-column 8 / 13
    grid-row 1
    display flex
    align-items flex-end
  .section-top
    position relative
    grid-column 1 / span 12
    grid-row 1
    margin-top 6rem
  .section-title
    max-width 35rem
    font-weight 900
    font-size 5.125rem
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
  .section-statement
    margin-top 3rem
    max-width 30em
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
  .testnets-list
    grid-column 1/ span 12
    position relative
    &__item
      position relative
      display grid
      width 100%
      grid-template-columns repeat(12, 1fr)
      gap 1.5rem
      align-items flex-start
      border-bottom 1px solid #282B53
      padding 6rem 0
      &__graphics
        position absolute
        top 0
        left 0
        width 100%
        max-width 9.875rem
      &__text
        position relative
        grid-column 6 / span 7
        &__top
          position relative
          grid-column 1 / span 4
          text-align right
          &__title
            font-weight bold
            font-size 38px
            line-height 1.571
            letter-spacing -0.015em
            color #FFD1FD
            margin-bottom 0.75rem
          &__status
            padding 0.1875rem 0.75rem
            background #E644F8
            border-radius 0.875rem
            display inline-block
            font-weight bold
            font-size 1rem
            line-height 1.3125
            color #FFFFFF
        &__mid
          &__desc
            font-size 1.1875rem
            line-height 1.579
            letter-spacing -0.005em
            color #CFD1E7
            max-width 30em
          &__note
            margin-top 0.5rem
            font-size 0.8125rem
            line-height 1.538
            letter-spacing 0.001em
            color #989BB9
        &__bot
          margin-top 1rem
          display flex
          align-items baseline
          flex-wrap wrap
          &__display
            margin 0.5rem 0.75rem 0.5rem 0
            font-weight 600
            font-size 0.75rem
            line-height 1.375
            letter-spacing 0.08em
            text-transform uppercase
            color #CFD1E7
            flex-shrink 0
          &__labels
            display flex
            &__item
              color #cfd1e7
              line-height 1.375
              padding 0.1875rem 0.75rem
              background #282b53
              border-radius 0.875rem
              align-items center
              display flex
              text-align center
      &__inactive
        .testnets-list__item__text__top__title
          color #989BB9
        .testnets-list__item__text__top__status
          font-weight normal
      &__cta
        display flex
        justify-content flex-start
        align-items flex-end
        flex-direction row
        gap 0.5rem
        margin-top 2rem
        a
          transition transform .2s ease-out
          &:hover,
          &:focus
            transform translateY(-2px)
          &:active
            transform none
            transition-duration 0s
        &__join
          user-select none
          transition background 20ms ease-in 0s
          cursor pointer
          display inline-flex
          align-items center
          justify-content center
          white-space nowrap
          color #FFFFFF
          border none
          text-align center
          width 8.5rem
          padding 1.25rem 3rem
          background linear-gradient(92.99deg, #8D0EC0 0%, #4251FA 100%), #4251FA
          border-radius 0.375rem
          font-weight 700
          font-size 1.1875rem
          line-height 1.263
          letter-spacing -0.005em
        &__discuss
          user-select none
          transition background 20ms ease-in 0s
          cursor pointer
          display inline-flex
          align-items center
          justify-content center
          white-space nowrap
          color #40B3FF
          border none
          text-align center
          width 8.5rem
          padding 1.25rem 3rem
          background transparent
          border-radius 0.375rem
          font-weight 700
          font-size 1.1875rem
          line-height 1.263
          letter-spacing -0.005em
  .section-status
    grid-column 1 / 5
    margin-top 6rem
    &__title
      // margin-top 2rem
      grid-column 1 / span 4
      font-weight bold
      font-size 2.5rem
      line-height 120%
      letter-spacing -0.03em
      text-align start
      color #FFFFFF
  .section-list
    color #fff
    margin-top 6rem
    grid-column 6 / span 7
    &__item
      padding-top 1.875rem
      padding-bottom 1.875rem
      display flex
      flex-direction row
      justify-content space-between
      border-bottom 1px solid #282B53
      &__title
        font-weight bold
        font-size 1.4375rem
        line-height 121.7%
        letter-spacing -0.01em
        color #CCD1FF
        transition color 0.1s ease-out
      &__date
        font-size 1.1875rem
        line-height 126.3%
        text-align right
        letter-spacing -0.005em
        color #989BB9
        transition color 0.1s ease-out, transform 0.15s ease-out
      &:hover .section-list__item__title,
      &:hover .section-list__item__date
        color #FFFFFF
      &:hover .section-list__item__date
        transform translateX(3px)
  .section-tabs
    margin-top 6rem
    grid-column 6 / span 7
    &__code
      display grid
      grid-template-columns 50% 50%
      grid-template-rows 1fr
      gap 0.5rem
      margin-top 3rem
    &__text
      margin-top 3rem
      &__heading
        text-transform uppercase
        max-width 30em
        font-weight 600
        font-size 1rem
        line-height 137.5%
        letter-spacing 0.08em
        text-transform uppercase
        color #989BB9
      &__title
        margin-top 0.5rem
        max-width 30em
        font-weight bold
        font-size 1.75rem
        line-height 128.5%
        letter-spacing -0.02em
        color #FFFFFF
      &__paragraph
        margin-top 1rem
        max-width 30em
        font-size 1.1875rem
        line-height 157.9%
        letter-spacing -0.005em
        color #CFD1E7
        &__stargate
          color #40B3FF
      &__cta
        margin-top 2.25rem
        font-weight bold
        font-size 1.1875rem
        line-height 126.3%
        letter-spacing -0.005em
        color #40B3FF
  // .section-text
  //   margin-top 6rem
  //   grid-column 6 / span 7
  //   &__paragraph
  //     color var(--gray-800)

.top-box
  display flex
  flex-wrap wrap
  justify-content space-between

.btn
  margin-right var(--spacing-5)

.testnets-list__item__text__bot__labels__item + .testnets-list__item__text__bot__labels__item
  margin-left 0.75rem

.update-container
  padding 1rem 1.5rem
  background #282B53
  box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 4px 8px rgba(0, 0, 0, 0.07), 0px 10px 22px rgba(0, 3, 66, 0.1)
  border-radius 0.5rem

.update-container__title
  line-height 162.5%
  font-weight bold
  font-size 1.3125rem
  line-height 159.8%
  letter-spacing -0.007em
  color #FFFFFF

.update-container__cta
  margin-top 0.25rem
  font-size 1.3125rem
  line-height 159.8%
  letter-spacing -0.007em
  color #40B3FF

.left, .right
  border 2px solid #282B53
  box-sizing border-box
  filter drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.07)), drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.07)), drop-shadow(0px 10px 22px rgba(0, 3, 66, 0.1))
  border-radius 0.5rem
  padding 1rem 1.5rem
  height 10rem
  display flex
  flex-direction column
  justify-content space-between

.title
  font-weight 500
  font-size 0.75rem
  line-height 130.9%
  letter-spacing 0.08em
  text-transform uppercase
  color #FFFFFF

.list
  font-size 1rem
  line-height 162.5%
  color #40B3FF
  display flex
  flex-direction column

@media screen and (max-width: 1024px)
  .section .section-header
    grid-column 1 / span 12

  .section-testnets
    overflow hidden
    .section-graphics
      align-items flex-start
    .section-top
      margin-top 4rem
    .section-title
      font-size 4rem
    .testnets-list
      margin-top 3rem
    .testnets-list__item
      grid-template-columns auto
      margin 0
      padding-top 3rem
      padding-bottom 3rem
      &:first-child
        border-bottom 1px solid #282B53
      &__graphics
        left auto
        right 0
      &__cta
        flex-direction row
        justify-content flex-start
      &__text
        grid-column span 12
      &__text__top
        grid-column span 12
        text-align inherit
        display flex
        align-items baseline
        flex-wrap wrap
        &__title
          margin-right 0.75rem
          margin-bottom 0
    .section-status__title
      grid-column 1 / span 12
    .section-tabs
      margin-top 3rem
      grid-column 1 / span 12

  .section-testnets .testnets-list__item__text__top
    display flex
    align-items center
    flex-direction row

  .section-testnets .testnets-list__item__text__top__status
    margin-left 0.5rem

  .testnets-list__item__graphics
    display none

  .testnets-list__item__text__bot__labels
    flex-flow row wrap
    &__item
      margin-top 0.5rem

@media screen and (max-width: 767px)
  .section-testnets
    .section-status
      grid-column 1/12
    .section-text
      margin-top 0
      grid-column 1 / span 12

@media screen and (max-width: 576px)
  // .section-testnets .section-tabs__code
  //   grid-template-columns auto
  //   gap 1.5rem

  .section-testnets
    .section-graphics
      font-size 0.5rem
    .section-statement
      margin-top 2rem
    .section-tabs
      >>> .tabs
        margin-left -1.5rem
        margin-right -1.5rem
        ul
          padding-left 1.5rem
          padding-right 1.5rem

  img.testnets-list__item__graphics
    width 20%

@media screen and (max-width: 414px)
  .testnets-list__item__text__bot__labels__item + .testnets-list__item__text__bot__labels__item
    margin-left 0

  .section-testnets
    .testnets-list__item__text__bot__labels
      display flex
      max-width 280px
      &__item
        width fit-content
        margin-right 0.5rem
</style>
