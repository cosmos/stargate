<template>
  <div id="testnets" class="section section-testnets">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
          Testnets
        </div>
        <planets-cluster class="section-graphics" />
        <div class="section-top">
          <div class="section-title tm-rf6 tm-bold tm-lh-title">
            Get set for testnets
          </div>
          <div class="section-statement tm-rf1 tm-lh-copy tm-measure">
            Validators, wallets, block explorers, exchanges and zone developers
            are among the primary services affected by the upgrades with
            Stargate. Make sure to schedule time for integration testing on the
            various testnets.
          </div>
        </div>
        <div class="testnets-list">
          <div class="testnets-list__item">
            <img
              src="~/assets/illustrations/stargate-flag.svg"
              class="testnets-list__item__graphics"
            />
            <div class="testnets-list__item__text__top">
              <div
                class="testnets-list__item__text__top__title tm-rf3 tm-bold tm-lh-title tm-code"
              >
                stargate-3a
              </div>
              <div class="testnets-list__item__text__top__box">
                <a
                  href="https://stargate.bigdipper.live"
                  target="blank_"
                  rel="noreferrer noopener"
                  class="testnets-list__item__text__top__explorer tm-rf0 tm-medium tm-lh-solid"
                >
                  <span class="icon"><img src="/icons/eye.svg" /></span>
                  Explorer
                </a>
                <div
                  class="testnets-list__item__text__top__status tm-rf0 tm-bold tm-lh-title"
                >
                  Live
                </div>
              </div>
            </div>
            <div class="testnets-list__item__text">
              <div class="testnets-list__item__text__mid"></div>
              <p
                class="testnets-list__item__text__mid__desc tm-rf1 tm-lh-copy"
                tm-measure
              >
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
                <div
                  class="testnets-list__item__text__bot__display tm-rf-1 tm-medium tm-lh-title tm-overline"
                >
                  Recommended for
                </div>
                <div class="testnets-list__item__text__bot__labels">
                  <div
                    class="testnets-list__item__text__bot__labels__item tm-rf0 tm-lh-title"
                  >
                    Validators
                  </div>
                  <div
                    class="testnets-list__item__text__bot__labels__item tm-rf0 tm-lh-title"
                  >
                    Wallets
                  </div>
                  <div
                    class="testnets-list__item__text__bot__labels__item tm-rf0 tm-lh-title"
                  >
                    Explorers
                  </div>
                  <div
                    class="testnets-list__item__text__bot__labels__item tm-rf0 tm-lh-title"
                  >
                    Exchanges
                  </div>
                </div>
              </div>
              <div class="testnets-list__item__cta">
                <tm-button
                  to-link="external"
                  href="https://github.com/cosmosdevs/stargate#testnet"
                  size="l"
                  color="var(--white)"
                  background-color="linear-gradient(92.99deg, #8D0EC0 0%, #4251FA 100%)"
                  glow
                  class="btn"
                  >Join</tm-button
                >
                <tm-button
                  to-link="external"
                  href="https://discord.com/channels/669268347736686612/723170066937413693"
                  size="l"
                  color="var(--link)"
                  variant="text"
                  glow
                  class="btn"
                  >Discuss</tm-button
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
              <div
                class="testnets-list__item__text__top__title tm-rf3 tm-bold tm-lh-title tm-code"
              >
                bigbang-1
              </div>
              <div
                class="testnets-list__item__text__top__status outline-btn tm-rf0 tm-lh-title tm-bold"
              >
                Coming soon
              </div>
            </div>
            <div class="testnets-list__item__text">
              <div class="testnets-list__item__text__mid">
                <div
                  class="testnets-list__item__text__mid__desc tm-rf1 tm-lh-copy tm-measure"
                >
                  A community-led testnet aimed at the wider Cosmos ecosystem
                  and independent zone developers.
                </div>
              </div>
              <div class="testnets-list__item__text__bot">
                <div
                  class="testnets-list__item__text__bot__display tm-rf-1 tm-medium tm-lh-title tm-overline"
                >
                  Recommended for
                </div>
                <div class="testnets-list__item__text__bot__labels">
                  <div
                    class="testnets-list__item__text__bot__labels__item tm-rf0 tm-lh-title"
                  >
                    Validators
                  </div>
                  <div
                    class="testnets-list__item__text__bot__labels__item tm-rf0 tm-lh-title"
                  >
                    Cosmos SDK devs
                  </div>
                </div>
              </div>
              <div class="testnets-list__item__cta">
                <tm-button
                  border-color="var(--white)"
                  color="var(--white)"
                  variant="outlined"
                  size="l"
                  class="btn"
                  disabled
                  >Join</tm-button
                >
                <tm-button
                  to-link="external"
                  href="https://discord.com/channels/669268347736686612/723170066937413693"
                  size="l"
                  color="var(--link)"
                  variant="text"
                  glow
                  class="btn"
                  >Discuss</tm-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="section-status">
          <div class="section-status__title tm-rf3 tm-bold tm-lh-title">
            Preparing to upgrade
          </div>
        </div>
        <div class="section-tabs">
          <tm-tabs>
            <tm-tab name="Validators" :selected="true">
              <div class="section-tabs__text">
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  Validators of chains that will implement Stargate upgrades –
                  beginning with the Cosmos Hub – should prepare by helping run
                  the Stargate testnets above.
                </p>
              </div>
              <div class="section-tabs__text">
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  More detailed instructions and guidelines on how validators
                  can prepare for the upgrade will be published in due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div
                  class="section-tabs__text__heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-measure"
                >
                  Cosmos Hub Validators
                </div>
                <div
                  class="section-tabs__text__title tm-rf2 tm-bold tm-lh-title tm-measure"
                >
                  Joining <span class="tm-code">stargate-3a</span>
                </div>
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  Your current <strong>"operator_address"</strong> and your
                  <strong>"consensus_pubkey"</strong> are required via pull
                  request. These keys will be used to generate a genesis file
                  for the upcoming testnets.
                </p>
                <p class="section-tabs__text__cta">
                  <tm-button
                    to-link="external"
                    href="https://github.com/cosmosdevs/stargate/tree/master/validator_pub_keys"
                    size="l"
                    color="var(--link)"
                    variant="text"
                    >Submit validator key &#8594;</tm-button
                  >
                </p>
              </div>
              <div class="section-tabs__text">
                <div class="update-container">
                  <div
                    class="update-container__title tm-rf1 tm-bold tm-lh-copy"
                  >
                    Joined stargate-3a testnet?
                  </div>
                  <tm-button
                    to-link="external"
                    href="https://airtable.com/shrEr1bQD6COG9WH0"
                    size="l"
                    color="var(--link)"
                    variant="text"
                  >
                    Confirm your Stargate readiness &#8594;
                  </tm-button>
                </div>
              </div>
            </tm-tab>
            <tm-tab name="Wallets &amp; Explorers">
              <div class="section-tabs__text">
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  Wallets and Explorers should ensure they are able to use the
                  old Amino endpoints and the new Protobuf queries to get the
                  correct expected results from their queries using
                  <a
                    href="https://github.com/cosmosdevs/stargate#testnet"
                    target="_blank"
                    rel="noreferrer noopener"
                    ><span class="tm-code">stargate-3a</span></a
                  >
                  testnet.
                </p>
              </div>
              <div class="section-tabs__code">
                <div class="left">
                  <div class="title tm-rf-1 tm-medium tm-lh-title tm-overline">
                    Public RPC endpoints
                  </div>
                  <div class="list">
                    <a
                      href="http://34.123.30.100:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="tm-rf0 tm-lh-copy tm-code"
                      >34.123.30.100:26657</a
                    >
                    <a
                      href="http://174.129.101.58:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="tm-rf0 tm-lh-copy tm-code"
                      >174.129.101.58:26657</a
                    >
                    <a
                      href="http://52.200.210.219:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="tm-rf0 tm-lh-copy tm-code"
                      >52.200.210.219:26657</a
                    >
                  </div>
                </div>
                <div class="right">
                  <div class="title tm-rf-1 tm-medium tm-lh-title tm-overline">
                    Public RPC endpoints
                  </div>
                  <div class="list">
                    <a
                      href="http://34.123.30.100:1317"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="tm-rf0 tm-lh-copy tm-code"
                      >34.123.30.100:1317</a
                    >
                  </div>
                </div>
              </div>
              <div class="section-tabs__text">
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  More detailed instructions and guidelines on how wallets and
                  block explorers can prepare for the upgrade will be published
                  in due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div class="update-container">
                  <div
                    class="update-container__title tm-rf1 tm-bold tm-lh-copy"
                  >
                    Joined stargate-3a testnet?
                  </div>
                  <p class="update-container__cta">
                    <tm-button
                      to-link="external"
                      href="https://airtable.com/shrEr1bQD6COG9WH0"
                      size="l"
                      color="var(--link)"
                      variant="text"
                    >
                      Confirm your Stargate readiness &#8594;
                    </tm-button>
                  </p>
                </div>
              </div>
            </tm-tab>
            <tm-tab name="Exchanges">
              <div class="section-tabs__text">
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  Use the
                  <a
                    href="https://github.com/cosmosdevs/stargate/blob/master/ibc_readiness_matrix.md"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Stargate IBC Skill Matrix</a
                  >
                  to guide you in supporting IBC with your upgrades.
                </p>
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  Make sure your signing and querying software is ready for the
                  Stargate upgrade by testing the features and your
                  infrastructure ahead of time, using the
                  <span
                    class="section-tabs__text__paragraph tm-measure__stargate tm-rf1 tm-lh-copy tm-code"
                    >stargate-3a</span
                  >
                  testnet.
                </p>
              </div>
              <div class="section-tabs__code">
                <div class="left">
                  <div class="title tm-rf-1 tm-medium tm-lh-title tm-overline">
                    Public RPC endpoints
                  </div>
                  <div class="list">
                    <a
                      href="http://34.123.30.100:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="tm-rf0 tm-lh-copy tm-code"
                      >34.123.30.100:26657</a
                    >
                    <a
                      href="http://174.129.101.58:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="tm-rf0 tm-lh-copy tm-code"
                      >174.129.101.58:26657</a
                    >
                    <a
                      href="http://52.200.210.219:26657"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="tm-rf0 tm-lh-copy tm-code"
                      >52.200.210.219:26657</a
                    >
                  </div>
                </div>
                <div class="right">
                  <div class="title tm-rf-1 tm-medium tm-lh-title tm-overline">
                    Public RPC endpoints
                  </div>
                  <div class="list">
                    <a
                      href="http://34.123.30.100:1317"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="tm-rf0 tm-lh-copy tm-code"
                      >34.123.30.100:1317</a
                    >
                  </div>
                </div>
              </div>
              <div class="section-tabs__text">
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  More detailed instructions and guidelines on how exchanges can
                  prepare for the upgrade will be published in due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div class="update-container">
                  <div
                    class="update-container__title tm-rf1 tm-bold tm-lh-copy"
                  >
                    Joined stargate-3a testnet?
                  </div>
                  <p class="update-container__cta">
                    <tm-button
                      to-link="external"
                      href="https://airtable.com/shrEr1bQD6COG9WH0"
                      size="l"
                      color="var(--link)"
                      variant="text"
                    >
                      Confirm your Stargate readiness &#8594;
                    </tm-button>
                  </p>
                </div>
              </div>
            </tm-tab>
            <tm-tab name="Zone Developers">
              <div class="section-tabs__text">
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  More detailed instructions and guidelines on how zone
                  developers can prepare for the upgrade will be published in
                  due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div
                  class="section-tabs__text__heading tm-rf1 tm-lh-title tm-measure"
                >
                  Not ready to upgrade?
                </div>
                <div
                  class="section-tabs__text__title tm-rf2 tm-bold tm-lh-title tm-measure"
                >
                  Launchpad
                </div>
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  Stargate involves a lot of breaking changes that may make it
                  difficult for you to upgrade, if you have already written a
                  lot of code for Cosmos SDK 0.37/0.38.
                </p>
                <p
                  class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
                >
                  The community supports an SDK 0.39 Launchpad release that
                  includes backported bug fixes. The
                  <a v-scroll-to="'#contributors'">Cosmos development teams</a>
                  are working together to document a clean migration path from
                  Launchpad to a stable Stargate release.
                </p>
                <p class="section-tabs__text__cta">
                  <tm-button
                    to-link="external"
                    href="https://blog.cosmos.network/launchpad-a-pre-stargate-stable-version-of-the-cosmos-sdk-e0c58d8c4e24"
                    size="l"
                    color="var(--link)"
                    variant="text"
                  >
                    Learn more &#8594;
                  </tm-button>
                </p>
              </div>
            </tm-tab>
          </tm-tabs>
          <div class="section-tabs__text">
            <div
              class="section-tabs__text__title tm-rf2 tm-bold tm-lh-title tm-measure"
            >
              Migration guides
            </div>
            <p
              class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
            >
              Help the Cosmos ecosystem upgrade by contributing your own
              migration guides to the community.
            </p>
            <p class="section-tabs__text__cta">
              <tm-button
                to-link="external"
                href="https://github.com/cosmosdevs/stargate/pulls"
                size="l"
                color="var(--link)"
                variant="text"
                >Submit a guide &#8594;</tm-button
              >
            </p>
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
// TODO: outlined pill badge
.outline-btn
  border 2px solid #43466D !important
  background transparent !important
  color var(--gray-600) !important

.section-testnets
  position relative
  overflow hidden
  background linear-gradient(180deg, rgba(0,0,0,0) 0%, #030419 24%, #030419 69%, rgba(0,0,0,0) 100%)
  .section-header
    grid-column 6/span 7
    grid-row 1
  .section-graphics
    grid-column 8 / 13
    grid-row 2
    display flex
    align-items flex-end
  .section-top
    position relative
    grid-column 1 / span 12
    grid-row 2
    margin-top var(--spacing-10)
  .section-title
    max-width: $max-width['7']
    color var(--white)
  .section-statement
    margin-top var(--spacing-8)
    color var(--gray-800)
  .testnets-list
    grid-column 1/ span 12
    position relative
    &__item
      position relative
      display grid
      width 100%
      grid-template-columns repeat(12, 1fr)
      gap var(--spacing-6)
      align-items flex-start
      border-bottom 1px solid #282B53
      padding var(--spacing-10) 0
      &__graphics
        position absolute
        top 0
        left 0
        width 100%
        max-width 9.875rem
      &__text
        position relative
        grid-column 6 / span 7
        margin-top var(--spacing-4)
        &__top
          position relative
          grid-column 1 / span 4
          text-align right
          &__title
            color #FFD1FD
            margin-bottom var(--spacing-6)
          &__explorer
            padding var(--spacing-2) 0
            background transparent
            display inline-block
            margin-right var(--spacing-6)
            .icon
              margin-right var(--spacing-2)
          &__status
            padding var(--spacing-1) var(--spacing-4)
            background #E644F8
            border-radius $border-radius-5
            display inline-block
            color var(--white)
        &__mid
          &__desc
            color var(--gray-800)
          &__note
            margin-top var(--spacing-3)
            color var(--gray-600)
        &__bot
          margin-top var(--spacing-7)
          display flex
          align-items baseline
          flex-wrap wrap
          &__display
            margin var(--spacing-3) var(--spacing-4) var(--spacing-3) 0
            color var(--gray-800)
            flex-shrink 0
          &__labels
            display flex
            &__item
              color var(--gray-800)
              padding var(--spacing-1) var(--spacing-4)
              background #282b53
              border-radius $border-radius-4
              align-items center
              display flex
              text-align center
              margin-right var(--spacing-3)
      &__inactive
        .testnets-list__item__text__top__title
          color var(--gray-600)
        .testnets-list__item__text__top__status
          font-weight normal
      &__cta
        display flex
        justify-content flex-start
        align-items flex-end
        flex-direction row
        flex-wrap wrap
        margin-top var(--spacing-7)
  .section-status
    grid-column 1 / 5
    margin-top var(--spacing-10)
    &__title
      grid-column 1 / span 4
      text-align start
      color var(--white)
  .section-tabs
    margin-top var(--spacing-10)
    grid-column 6 / span 7
    &__code
      display grid
      grid-template-columns 50% 50%
      grid-template-rows 1fr
      gap var(--spacing-3)
      margin-top var(--spacing-8)
    &__text
      margin-top var(--spacing-8)
      &__heading
        color var(--gray-600)
      &__title
        margin-top var(--spacing-3)
        color var(--white)
      &__paragraph
        margin-top var(--spacing-5)
        color var(--gray-800)
        &__stargate
          color var(--link)
      &__cta
        margin-top var(--spacing-4)
        color var(--link)
  .section-text
    margin-top var(--spacing-10)
    grid-column 6 / span 7
    &__paragraph
      color var(--gray-800)

.btn
  margin-right var(--spacing-7)
  &:last-child
    margin-right 0

.top-box
  display flex
  flex-wrap wrap
  justify-content space-between

.update-container
  padding var(--spacing-6) var(--spacing-6) var(--spacing-3)
  background #282B53
  box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 4px 8px rgba(0, 0, 0, 0.07), 0px 10px 22px rgba(0, 3, 66, 0.1)
  border-radius $border-radius-3

.update-container__title
  color var(--white)

.update-container__cta
  color var(--link)

.left, .right
  border 2px solid #282B53
  box-sizing border-box
  filter drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.07)), drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.07)), drop-shadow(0px 10px 22px rgba(0, 3, 66, 0.1))
  border-radius var(--spacing-3)
  padding var(--spacing-5) var(--spacing-6)
  height 10rem
  display flex
  flex-direction column
  justify-content space-between

.title
  color var(--white)

.list
  color var(--link)
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
      margin-top var(--spacing-9)
    .testnets-list
      margin-top var(--spacing-8)
    .testnets-list__item
      grid-template-columns auto
      margin 0
      padding-top var(--spacing-9)
      padding-bottom var(--spacing-9)
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
        gap var(--spacing-4)
        &__title
          margin-right var(--spacing-4)
          margin-bottom 0
    .section-status__title
      grid-column 1 / span 12
    .section-tabs
      margin-top var(--spacing-8)
      grid-column 1 / span 12

  .section-testnets .testnets-list__item__text__top
    display flex
    align-items center
    flex-direction row

  .testnets-list__item__text__bot__labels
    flex-flow row wrap
    &__item
      margin-top var(--spacing-3)

@media screen and (max-width: 767px)
  .section-testnets
    .section-status
      grid-column 1/ span 12
    .section-text
      margin-top 0
      grid-column 1 / span 12

@media screen and (max-width: 576px)
  .section-testnets .section-tabs__code
    grid-template-columns auto
    gap var(--spacing-6)

  .section-testnets
    .section-graphics
      font-size var(--spacing-3)
    .section-statement
      margin-top var(--spacing-7)
    .section-tabs
      >>> .tabs
        margin-left calc(-1 * var(--spacing-6))
        margin-right calc(-1 * var(--spacing-6))
        ul
          padding-left var(--spacing-6)
          padding-right var(--spacing-6)

  img.testnets-list__item__graphics
    width 20%

@media screen and (max-width: 414px)
  .section-testnets
    .testnets-list__item__text__bot__labels
      display flex
      &__item
        width fit-content

@media screen and (max-width: 360px)
  .section-testnets .testnets-list__item__text__top
    grid-column span 12
</style>
