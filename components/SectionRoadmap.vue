<template>
  <div class="section section-roadmap">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
          Roadmap
        </div>
        <div class="section-video">
          <video width="879" height="493" autoplay loop muted>
            <source src="/videos/stargate-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="section-title tm-rf7 tm-bold tm-lh-title">
          <span class="percentage">100%</span> complete
        </div>
        <div class="video-text">
          <p class="section-paragraph tm-rf1 tm-lh-copy">
            The latest releases of Tendermint Core, IBC and Cosmos SDK are ready
            for Stargate. Are you?
          </p>
          <p class="section-paragraph tm-rf1 tm-lh-copy">
            Now is the time to integrate with Stargate and prepare for the
            imminent ecosystem upgrades.
          </p>
          <tm-button
            to-link="internal"
            to="/testnet"
            size="l"
            color="var(--gray-50)"
            background-color="linear-gradient(90deg, #99DAFF 0%, #FFD1FD 50%, var(--primary-900) 100%), var(--primary-900)"
            class="video-text__btn"
            >Prepare <span class="icon__right">--></span></tm-button
          >
        </div>
        <div class="section-milestones">
          <div class="section-milestones__title tm-rf3 tm-bold tm-lh-title">
            Releases
          </div>
          <div class="section-milestones__cta">
            <tm-button
              to-link="external"
              href="https://github.com/orgs/cosmosdevs/projects/1"
              color="var(--link)"
              variant="text"
              size="l"
              >View project ↗</tm-button
            >
          </div>
        </div>
        <div class="section-cards">
          <a
            v-for="item in releases"
            :key="item.name"
            :href="item.url"
            target="_blank"
            rel="noreferrer noopener"
            class="section-row"
          >
            <div
              class="meter"
              :style="{
                '--progress-bar-width': `100%`,
                '--progress-bar-background-color': `${bgColor[item.logo]}`,
              }"
            ></div>
            <div class="details">
              <div class="arrow tm-rf2 tm-lh-solid">&#8599;</div>
              <div class="icon">
                <component :is="`icon-${item.logo}`" />
              </div>
              <div class="text">
                <div class="title tm-rf1 tm-bold tm-lh-copy">
                  {{ item.name }}
                </div>
                <div class="subtitle tm-rf0 tm-lh-copy">{{ item.repo }}</div>
                <div class="version tm-rf0 tm-lh-copy tm-code">
                  {{ item.version }}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconIbc from '~/components/icons/IconIbc.vue'
import IconSdk from '~/components/icons/IconSdk.vue'
import IconCore from '~/components/icons/IconCore.vue'

export default {
  components: {
    IconIbc,
    IconSdk,
    IconCore,
  },
  data() {
    return {
      milestoneList: [],
      bgColor: {
        sdk: 'linear-gradient(95.47deg, #320B93 0%, #3B2AB7 100%)',
        core: 'linear-gradient(95.47deg, #086108 0%, #018A01 100%)',
        ibc: 'linear-gradient(95.47deg, #121435 0%, #282B53 100%)',
      },
      releases: [
        {
          url: 'https://github.com/tendermint/tendermint/releases',
          version: '0.34',
          name: 'Tendermint Core',
          repo: 'tendermint/tendermint',
          logo: 'core',
        },
        {
          url: 'https://github.com/cosmos/ics/releases/tag/v1.0.0-rc6',
          version: '1.0',
          name: 'IBC',
          repo: 'tendermint/tendermint',
          logo: 'ibc',
        },
        {
          url: 'https://github.com/cosmos/cosmos-sdk/releases',
          version: '0.40',
          name: 'Cosmos SDK',
          repo: 'cosmos/cosmos-sdk',
          logo: 'sdk',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
video
  border-radius $border-radius-6

.percentage
  background linear-gradient(to bottom right, #3fb3ff, #9010c7)
  background-clip text
  -webkit-text-fill-color transparent

.section-cards
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-column 5/span 11
  gap var(--spacing-6)
  margin-top var(--spacing-11)

.section-roadmap
  .section-header
    grid-column 1 / span 12
  .section-video
    grid-column 4 / span 12
    margin-top var(--spacing-6)
  .section-title
    grid-column 2/span 6
    margin-top -35%
    position relative
  .video-text
    grid-column 2/span 6
    margin-top var(--spacing-6)
    &__btn
      margin-top var(--spacing-8)
  .section-milestones
    margin-top var(--spacing-11)
    grid-column 1 / 5
    &__title
      color var(--white)
    &__cta
      margin-top var(--spacing-5)
  .section-row
    position relative
    background linear-gradient(258.96deg, #121435 0%, #030419 100%)
    color white
    border-radius $border-radius-5
    transition all .25s ease-out
    .meter
      position absolute
      top 0
      left 0
      bottom 0
      width var(--progress-bar-width, 0)
      background var(--progress-bar-background-color, linear-gradient(95.47deg, #121435 0%, #282B53 100%))
      border-radius $border-radius-5
      transition opacity .15s
    .details
      position relative
      grid-template-columns auto
      gap var(--spacing-9)
      padding var(--spacing-8)
      grid-column-start 2
      display grid
      align-items center
      text-align left
      .arrow
        position absolute
        top var(--spacing-7)
        right var(--spacing-7)
        color var(--white-300)
      .icon
        fill var(--white)
        margin auto
        margin-top var(--spacing-8)
        transition opacity .25s, transform .15s ease-out
      .title
        transition transform .15s ease-out
      .subtitle
        color var(--white-700)
        transition color .15s, transform .15s ease-out
      .version
        margin-top var(--spacing-5)
      .progress__wrapper
        display flex
        flex-direction column
        align-items flex-end
        .progress
          display flex
          align-items center
    &:hover
      transform translateY(-2px)
      .meter
        opacity 0.9
      .details
        .icon
          opacity 0.75
          transform translate(-2px,-2px)
        .title
          transform translateY(-3px)
        .subtitle
          color var(--white)
          transform translateY(-2px)
      &:active
        transform none
        transition-duration 0s
  .section-proposal
    grid-column 1 / 5
    margin-top var(--spacing-10)
    &__title
      margin-top var(--spacing-7)
      grid-column 1 / span 4
      color var(--white)

.proposal-card
  position relative
  margin-top var(--spacing-7)
  grid-column 5 / span 8

.proposal-item
  background linear-gradient(89.41deg, #99DAFF -0.22%, #FFD1FD 99.78%)
  box-shadow 0 0 1px rgba(0,0,0,.07), 0 8px 16px rgba(0,0,0,.05), 0 20px 44px rgba(0,3,66,.12)
  border-radius var(--spacing-4)
  padding var(--spacing-7)
  backface-visibility hidden
  transform translateZ(0)
  transition all .25s cubic-bezier(.165,.84,.44,1)
  cursor pointer
  position relative
  width 23.3125rem
  margin-top var(--spacing-10)
  grid-column 1 / span 12
  display block
  text-align left
  &__icon
    display flex
    justify-content flex-end
    color var(--gray-600)
    transition color .1s ease-out, transform .25s ease-out
  &__title
    color var(--gray-50)
    transition color .1s ease-out
    padding-right 2rem
    margin-top var(--spacing-8)
  &__date
    margin-top var(--spacing-4)
    color var(--gray-trans-400)
  &:hover
    .articles-item__title,
    .articles-item__icon
      color var(--white)
    .articles-item__icon
      transform translate(3px, -3px)

@media screen and (max-width: 1520px)
  .section-cards
    grid-template-columns repeat(3, 1fr)
    grid-column 1/span 12

  .section-video
    grid-column 1/span 12

  video
    width 100% !important
    height auto !important

@media screen and (max-width: 1024px)
  .section .section-header
    grid-column 1 / span 12

  .section-roadmap
    .section-video, .video-text
      grid-column 1 / span 12
    .section-title
      grid-column 1 / span 12
      text-align left
      margin-top var(--spacing-8)
    .proposal-card,
    .section-milestones,
    .section-proposal
      grid-column 1 / span 12

  .section-cards
    grid-template-columns repeat(2, 1fr)

@media screen and (max-width: 767px)
  .section-roadmap
    .section-title
      margin-bottom var(--spacing-5)
    .section-proposal
      margin-top var(--spacing-8)

@media screen and (max-width: 576px)
  .section-roadmap
    .section-milestones
      &__cta
        margin-top var(--spacing-3)
    .section-row
      margin-top var(--spacing-5)
      &,
      .meter
        border-radius $border-radius-4
      .details
        grid-template-columns unset
        grid-auto-flow unset

  .section-cards
    grid-template-columns repeat(1, 1fr)

@media screen and (max-width: 414px)
  .meter
    width 100%
</style>
