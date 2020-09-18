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
            <div class="testnets-list__item__text">
              <div class="testnets-list__item__text__top">
                <div class="testnets-list__item__text__top__title">
                  <code>stargate-1</code>
                </div>
                <div class="testnets-list__item__text__top__status">Live</div>
              </div>
              <div class="testnets-list__item__text__mid">
                <div class="testnets-list__item__text__mid__desc">
                  The first simulated upgrade of the Cosmos Hub and the primary
                  public integration testnet for Stargate-readiness.
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
            </div>
            <div class="testnets-list__item__cta">
              <tm-button
                to-link="external"
                href="https://github.com/cosmosdevs/stargate#testnet"
                size="l"
                color="#3B2AB7"
                background-color="var(--white)"
                variant="contained"
                glow
                class="testnets-list__item__cta__join"
                >Join</tm-button
              >
              <tm-button
                to-link="external"
                href="https://discord.com/channels/669268347736686612/723170066937413693"
                size="l"
                color="var(--white)"
                variant="text"
                glow
                class="testnets-list__item__cta__discuss"
                >Discuss</tm-button
              >
            </div>
          </div>
          <div class="testnets-list__item">
            <img
              src="~/assets/illustrations/bigbang-flag.svg"
              class="testnets-list__item__graphics"
            />
            <div class="testnets-list__item__text">
              <div class="testnets-list__item__text__top">
                <div class="testnets-list__item__text__top__title">
                  <code>bigbang-1</code>
                </div>
                <div class="testnets-list__item__text__top__status outline-btn">
                  Coming soon
                </div>
              </div>
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
            </div>
            <div class="testnets-list__item__cta">
              <tm-button
                size="l"
                color="#616489"
                border-color="#43466D"
                variant="outlined"
                class="testnets-list__item__cta__join"
                disabled
                >Join</tm-button
              >
              <tm-button
                to-link="external"
                href="https://discord.com/channels/669268347736686612/723170066937413693"
                size="l"
                color="var(--white)"
                variant="text"
                glow
                class="testnets-list__item__cta__discuss"
                >Discuss</tm-button
              >
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
                  Joining stargate-1
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
            </tm-tab>
            <tm-tab name="Wallets &amp; Explorers">
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph">
                  More detailed instructions and guidelines on how wallets and
                  block explorers can prepare for the upgrade will be published
                  in due course.
                </p>
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
                    >stargate-1</code
                  >
                  testnet.
                </p>
                <p class="section-tabs__text__paragraph">
                  More detailed instructions and guidelines on how exchanges can
                  prepare for the upgrade will be published in due course.
                </p>
              </div>
            </tm-tab>
            <tm-tab name="Zone Developers">
              <div class="section-tabs__text">
                <p class="section-tabs__text__paragraph">
                  More detailed instructions and guidelines on how zone
                  developers can prepare for the upgrade will be published in
                  due course.
                </p>
              </div>
              <div class="section-tabs__text">
                <div class="section-tabs__text__heading">
                  Not ready to upgrade?
                </div>
                <div class="section-tabs__text__title">
                  Launchpad
                </div>
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
            <div class="section-tabs__text__title">
              Migration guides
            </div>
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
        <div class="section-status">
          <div class="section-status__title">Testnet office hours</div>
        </div>
        <div class="section-text">
          <div class="section-text__paragraph">
            As part of the <code><strong>stargate-1</strong></code> testnet, the
            team at Iqlusion are offering live support for testnet users at the
            following times:
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
          <div class="section-text__paragraph">
            Post your questions in the
            <a
              href="https://discord.com/channels/669268347736686612/723170066937413693"
              target="_blank"
              rel="noreferrer noopener"
              ><code class="section-tabs__text__paragraph__stargate"
                >#stargate</code
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
    color var(--white)
  .section-statement
    margin-top 3rem
    max-width 30em
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    color var(--gray-800)
  .testnets-list
    grid-column 1/ span 12
    margin-top 6rem
    position relative
    &__item
      display grid
      width 100%
      grid-template-columns 10rem auto auto
      gap 1.5rem
      align-items center
      &__graphics
        width 100%
        max-width 9.875rem
      &__text
        &__top
          display flex
          align-items center
          &__title
            font-weight bold
            font-size 1.75rem
            line-height 1.571
            letter-spacing -0.015em
            color var(--white)
          &__status
            padding 0.1875rem 0.75rem
            height 1.75rem
            background #E644F8
            border-radius 0.875rem
            align-items center
            display flex
            margin-left 1rem
            font-weight bold
            font-size 0.8125rem
            line-height 1.375
            color var(--white)
        &__mid
          &__desc
            margin-top 0.25rem
            font-size 1.1875rem
            line-height 1.579
            letter-spacing -0.005em
            color var(--gray-600)
            max-width 30em
        &__bot
          margin-top 1rem
          display flex
          align-items baseline
          flex-wrap wrap
          &__display
            margin 0.5rem 0.75rem 0.5rem 0
            font-weight 600
            font-size 1rem
            line-height 1.375
            letter-spacing 0.08em
            text-transform uppercase
            color var(--gray-800)
            flex-shrink 0
          &__labels
            display flex
            &__item
              color var(--gray-800)
              line-height 1.375
              padding 0.1875rem 0.75rem
              background #282b53
              border-radius 0.875rem
              align-items center
              display flex
              text-align center
      &__cta
        display flex
        justify-content flex-end
        align-items flex-end
        flex-direction column
        gap 0.5rem
        a
          transition transform .2s ease-out
          &:hover,
          &:focus
            transform translateY(-2px)
          &:active
            transform none
            transition-duration 0s
        &__join, &__discuss
          max-width 8.5rem
          height 4rem
          font-size 1.1875rem
          line-height 1.263
          letter-spacing -0.005em
  .section-status
    grid-column 1 / 5
    margin-top 6rem
    &__title
      margin-top 2rem
      grid-column 1 / span 4
      font-weight bold
      font-size 2.5rem
      line-height 120%
      letter-spacing -0.03em
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
        font-weight bold
        font-size 1.4375rem
        line-height 121.7%
        letter-spacing -0.01em
        color var(--primary-900)
        transition color 0.1s ease-out
      &__date
        font-size 1.1875rem
        line-height 126.3%
        text-align right
        letter-spacing -0.005em
        color var(--gray-600)
        transition color 0.1s ease-out, transform 0.15s ease-out
      &:hover .section-list__item__title,
      &:hover .section-list__item__date
        color var(--white)
      &:hover .section-list__item__date
        transform translateX(3px)
  .section-tabs
    margin-top 8rem
    grid-column 6 / span 7
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
        color var(--gray-600)
      &__title
        margin-top 0.5rem
        max-width 30em
        font-weight bold
        font-size 1.75rem
        line-height 128.5%
        letter-spacing -0.02em
        color var(--white)
      &__paragraph
        margin-top 1rem
        max-width 30em
        font-size 1.1875rem
        line-height 157.9%
        letter-spacing -0.005em
        color var(--gray-800)
        &__stargate
          color var(--link)
      &__cta
        margin-top 2.25rem
        font-weight bold
        font-size 1.1875rem
        line-height 126.3%
        letter-spacing -0.005em
        color var(--link)

  .section-text
    margin-top 6rem
    grid-column 6 / span 7
    &__paragraph
      margin-top 2rem
      font-size 1.1875rem
      line-height 157.9%
      letter-spacing -0.005em
      color var(--gray-800)

.testnets-list__item__text__bot__labels__item + .testnets-list__item__text__bot__labels__item
  margin-left 0.75rem

table
  border-collapse collapse
  border-radius 0.5rem
  overflow hidden
  width 100%
  margin-top 2rem

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
  .section-testnets
    .section-graphics
      grid-column 6 / span 7
      align-items flex-start
    .section-top
      margin-top 4rem
    .testnets-list__item
      grid-auto-flow dense
      grid-template-columns auto
      padding 2rem 0
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

@media screen and (max-width: 767px)
  .section-testnets
    .section-status
      grid-column 1/12
    .section-text
      margin-top 0
      grid-column 1 / span 12

  .testnets-list__item__graphics
    display none

  .testnets-list__item__text__bot__labels
    flex-flow row wrap
    &__item
      margin-top 0.5rem

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

  th,td
    padding 0.125rem 1rem
    display block
    &:first-child
      padding-top 1rem
    &:last-child
      padding-bottom 1rem

@media screen and (max-width: 414px)
  .section-testnets
    .testnets-list__item__text__top__title
      font-size 1.4375rem
    .testnets-list__item__text__mid__desc
      font-size 0.8125rem
    .testnets-list__item__text__bot__display
      font-size 0.8125rem
    .testnets-list__item__text__bot__labels
      display flex
      max-width 280px
      &__item
        width fit-content
        margin-right 0.5rem

  .testnets-list__item__text__bot__labels__item + .testnets-list__item__text__bot__labels__item
    margin-left 0
</style>
