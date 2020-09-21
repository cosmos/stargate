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
          <div class="section-statement tm-rf1 tm-lh-copy">
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
                class="testnets-list__item__text__top__title tm-rf3 tm-lh-copy tm-code"
              >
                stargate-2
              </div>
              <div
                class="testnets-list__item__text__top__status tm-rf0 tm-bold tm-lh-title"
              >
                Live
              </div>
            </div>
            <div class="testnets-list__item__text">
              <div class="testnets-list__item__text__mid">
                <div class="testnets-list__item__text__mid__update">
                  <div class="top-box">
                    <div
                      class="testnets-list__item__text__mid__update-top tm-rf0 tm-bold tm-lh-copy"
                    >
                      Update
                    </div>
                    <div
                      class="testnets-list__item__text__mid__update-top__date tm-rf0 tm-lh-copy"
                    >
                      Sept 16
                    </div>
                  </div>
                  <div
                    class="testnets-list__item__text__mid__update-mid tm-rf0 tm-lh-copy"
                  >
                    This testnet will restart as
                    <span class="tm-code">stargate-3</span> upon merging PR
                    <a
                      href="https://github.com/cosmos/cosmos-sdk/pull/7285"
                      target="_blank"
                      rel="noreferrer noopener"
                      >#7285</a
                    >. Prepare to test with existing integrations, IBC, and
                    state sync in this upcoming API stable testnet.
                  </div>
                  <div
                    class="testnets-list__item__text__mid__update-bot tm-rf0 tm-lh-solid"
                  >
                    <a
                      href="https://airtable.com/shrEr1bQD6COG9WH0"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Confirm you are
                      <span class="tm-code">stargate-3</span> ready -->
                    </a>
                  </div>
                </div>
              </div>
              <p class="testnets-list__item__text__mid__desc tm-rf1 tm-lh-copy">
                The first simulated upgrade of the Cosmos Hub and the primary
                public integration testnet for Stargate-readiness.
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
                  >Discuss</tm-button
                >
              </div>
            </div>
          </div>
          <div class="testnets-list__item">
            <img
              src="~/assets/illustrations/bigbang-flag.svg"
              class="testnets-list__item__graphics"
            />
            <div class="testnets-list__item__text__top">
              <div
                class="testnets-list__item__text__top__title tm-rf3 tm-lh-copy tm-code"
              >
                bigbang-1
              </div>
              <div
                class="testnets-list__item__text__top__status outline-btn tm-rf0 tm-bold tm-lh-title"
              >
                Coming soon
              </div>
            </div>
            <div class="testnets-list__item__text">
              <div class="testnets-list__item__text__mid">
                <div
                  class="testnets-list__item__text__mid__desc tm-rf1 tm-lh-copy"
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
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  Validators of chains that will implement Stargate upgrades –
                  beginning with the Cosmos Hub – should prepare by helping run
                  the Stargate testnets above.
                </p>
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  More detailed instructions and guidelines on how validators
                  can prepare for the upgrade will be published in due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div
                  class="section-tabs__text__heading tm-rf-1 tm-medium tm-lh-title tm-overline"
                >
                  Cosmos Hub Validators
                </div>
                <div
                  class="section-tabs__text__title tm-rf2 tm-bold tm-lh-title"
                >
                  Joining stargate-2
                </div>
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  Your current <strong>"operator_address"</strong> and your
                  <strong>"consensus_pubkey"</strong> are required via pull
                  request. These keys will be used to generate a genesis file
                  for the upcoming testnets.
                </p>
                <div class="section-tabs__text__cta tm-rf1 tm-lh-solid">
                  <a
                    href="https://github.com/cosmosdevs/stargate/tree/master/validator_pub_keys"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Submit validator key &#8594;
                  </a>
                </div>
              </div>
            </tm-tab>
            <tm-tab name="Wallets &amp; Explorers">
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  More detailed instructions and guidelines on how wallets and
                  block explorers can prepare for the upgrade will be published
                  in due course.
                </p>
              </div>
            </tm-tab>
            <tm-tab name="Exchanges">
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  Use the
                  <a
                    href="https://github.com/cosmosdevs/stargate/blob/master/ibc_readiness_matrix.md"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Stargate IBC Skill Matrix</a
                  >
                  to guide you in supporting IBC with your upgrades.
                </p>
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  Make sure your signing and querying software is ready for the
                  Stargate upgrade by testing the features and your
                  infrastructure ahead of time, using the
                  <span
                    class="section-tabs__text__paragraph__stargate tm-rf1 tm-lh-copy tm-code"
                    >stargate-2</span
                  >
                  testnet.
                </p>
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  More detailed instructions and guidelines on how exchanges can
                  prepare for the upgrade will be published in due course.
                </p>
              </div>
            </tm-tab>
            <tm-tab name="Zone Developers">
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  More detailed instructions and guidelines on how zone
                  developers can prepare for the upgrade will be published in
                  due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div class="section-tabs__text__heading tm-rf1 tm-lh-title">
                  Not ready to upgrade?
                </div>
                <div
                  class="section-tabs__text__title tm-rf2 tm-bold tm-lh-title"
                >
                  Launchpad
                </div>
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  Stargate involves a lot of breaking changes that may make it
                  difficult for you to upgrade, if you have already written a
                  lot of code for Cosmos SDK 0.37/0.38.
                </p>
                <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
                  The community supports an SDK 0.39 Launchpad release that
                  includes backported bug fixes. The
                  <a v-scroll-to="'#contributors'">Cosmos development teams</a>
                  are working together to document a clean migration path from
                  Launchpad to a stable Stargate release.
                </p>
                <div class="section-tabs__text__cta tm-rf1 tm-lh-solid">
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
            <div class="section-tabs__text__title tm-rf2 tm-bold tm-lh-title">
              Migration guides
            </div>
            <p class="section-tabs__text__paragraph tm-rf1 tm-lh-copy">
              Help the Cosmos ecosystem upgrade by contributing your own
              migration guides to the community.
            </p>
            <div class="section-tabs__text__cta tm-rf1 tm-lh-solid">
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
        <div class="section-status">
          <div class="section-status__title tm-rf3 tm-bold tm-lh-title">
            Testnet office hours
          </div>
        </div>
        <div class="section-text">
          <div class="section-text__paragraph tm-rf1 tm-lh-copy">
            As part of the
            <span class="tm-code"><strong>stargate-2</strong></span> testnet,
            the team at Iqlusion are offering live support for testnet users at
            the following times:
          </div>
          <table>
            <tbody>
              <tr>
                <td>Sept 1-17</td>
                <td>Tuesdays</td>
                <td>16:00-17:00 UTC</td>
              </tr>
              <tr>
                <td>Sept 1-17</td>
                <td>Wednesdays</td>
                <td>16:00-17:00 UTC</td>
              </tr>
            </tbody>
          </table>
          <div class="section-text__paragraph tm-rf1 tm-lh-copy">
            Post your questions in the
            <a
              href="https://discord.com/channels/669268347736686612/723170066937413693"
              target="_blank"
              rel="noreferrer noopener"
              ><span class="section-tabs__text__paragraph__stargate tm-code"
                >#stargate</span
              >
            </a>
            Discord channel. Zoom call links will be provided in this channel
            weekly.
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
  .section-statement
    margin-top 3rem
    max-width 30em
    color var(--gray-800)
  .testnets-list
    grid-column 1/ span 12
    position relative
    &__item
      display grid
      width 100%
      grid-template-columns 10rem auto 38rem
      gap 1.5rem
      align-items flex-start
      border-bottom 1px solid #282B53
      padding 6rem 0
      &__graphics
        width 100%
        max-width 9.875rem
      &__text
        &__top
          display flex
          align-items flex-start
          flex-direction column
          width fit-content
          &__title
            color #FFD1FD
          &__status
            padding 0.1875rem 0.75rem
            height 1.75rem
            background #E644F8
            border-radius 0.875rem
            align-items center
            display flex
            color var(--white)
            margin-left auto
        &__mid
          &__update
            padding 1.5rem
            background #282B53
            box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 4px 8px rgba(0, 0, 0, 0.07), 0px 10px 22px rgba(0, 3, 66, 0.1)
            border-radius 0.5rem
            margin-bottom 2rem
          &__update-top
            color var(--white)
            &__date
              align-self center
              color var(--gray-600)
          &__update-mid
            margin-top 0.5rem
          &__update-bot
            margin-top 0.25rem
            padding 1rem 0
          &__desc
            color var(--gray-800)
            max-width 30em
          &__note
            margin-top 0.5rem
            color var(--gray-600)
        &__bot
          margin-top 1rem
          display flex
          align-items baseline
          flex-wrap wrap
          &__display
            margin 0.5rem 0.75rem 0.5rem 0
            color var(--gray-800)
            flex-shrink 0
          &__labels
            display flex
            &__item
              color var(--gray-800)
              padding 0.1875rem 0.75rem
              background #282b53
              border-radius 0.875rem
              align-items center
              display flex
              text-align center
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
  .section-status
    grid-column 1 / 5
    margin-top 6rem
    &__title
      grid-column 1 / span 4
      text-align start
      color var(--white)
  .section-list
    color var(--white)
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
        color var(--primary-900)
        transition color 0.1s ease-out
      &__date
        text-align right
        color var(--gray-600)
        transition color 0.1s ease-out, transform 0.15s ease-out
      &:hover .section-list__item__title,
      &:hover .section-list__item__date
        color var(--white)
      &:hover .section-list__item__date
        transform translateX(3px)
  .section-tabs
    margin-top 6rem
    grid-column 6 / span 7
    &__text
      margin-top 3rem
      &__heading
        max-width 30em
        color var(--gray-600)
      &__title
        margin-top 0.5rem
        max-width 30em
        color var(--white)
      &__paragraph
        margin-top 1rem
        max-width 30em
        color var(--gray-800)
        &__stargate
          color var(--link)
      &__cta
        margin-top 2.25rem
        color var(--link)

  .section-text
    margin-top 6rem
    grid-column 6 / span 7
    &__paragraph
      color var(--gray-800)

.top-box
  display flex
  flex-wrap wrap
  justify-content space-between

.btn
  margin-right var(--spacing-5)

.testnets-list__item__text__bot__labels__item + .testnets-list__item__text__bot__labels__item
  margin-left 0.75rem

table
  border-collapse collapse
  border-radius 0.5rem
  overflow hidden
  width 100%
  margin 2rem 0

td, th
  text-align left
  padding 1rem 2rem
  font-size 1rem
  line-height 1.5
  letter-spacing 0.02em
  color #ECEDF7

tr
  background-color #121435
  & + &
    border-top 1px solid #282B53

td
  &:nth-child(2)
    font-weight 600

@media screen and (max-width: 1024px)
  .section .section-header
    grid-column 1 / span 12

  .section-testnets
    overflow hidden
    .section-graphics
      grid-column 6 / span 7
      align-items flex-start
    .section-top
      margin-top 4rem
    .testnets-list__item
      grid-auto-flow dense
      grid-template-columns auto
      margin 0
      padding-top 3rem
      padding-bottom 3rem
      &:first-child
        border-bottom 1px solid #282B53
      &__cta
        flex-direction row
        justify-content flex-start
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
