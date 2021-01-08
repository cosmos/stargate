<template>
  <div class="section tm-section-container section-container">
    <div class="container">
      <NuxtLink to="/testnets" class="wide-card top">
        <div class="wide-card__left">
          <graphics-dyson-sphere class="section-graphics" />
        </div>
        <div class="wide-card__right wide-card__content">
          <graphics-sun class="top__sun" />
          <div
            class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
          >
            Upgrade
          </div>
          <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
            Join the testnets -->
          </div>
          <div
            class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
          >
            Prepare for the new era of Cosmos by testing your integrations
            against the Stargate testnets.
          </div>
        </div>
      </NuxtLink>
      <div class="cards">
        <a
          href="https://cosmos.network/community"
          rel="noreferrer noopener"
          class="cards__item"
        >
          <div
            class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
          >
            Connect
          </div>
          <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
            Join the community -->
          </div>
          <div
            class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
          >
            Learn about Cosmos, get to know the community, connect with other
            Cosmonauts and more.
          </div>
        </a>
        <a
          href="https://discord.com/channels/669268347736686612/723170066937413693"
          target="_blank"
          rel="noreferrer noopener"
          class="cards__item"
        >
          <span class="cards__item__disclosure tm-rf2 tm-lh-solid"
            >&#8599;</span
          >
          <div
            class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
          >
            Chat
          </div>
          <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
            Discuss Stargate
          </div>
          <div
            class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
          >
            Join the <code>#stargate</code> channel in the Cosmos community
            Discord and chat with developers.
          </div>
        </a>
      </div>
    </div>
    <a
      href="https://github.com/iqlusioninc/governance/tree/zaki-stargate-upgrade-proposal/proposals/2020-11-stargate-upgrade"
      target="_blank"
      rel="noreferrer noopener"
      class="wide-card bottom"
    >
      <div class="wide-card__left wide-card__content">
        <div
          class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
        >
          Proposal &middot; Draft
        </div>
        <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
          Stargate --> Cosmos Hub
        </div>
        <div
          class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
        >
          Vote on the upcoming proposal to bring the Stargate upgrades to Cosmos
          Hub.
        </div>
      </div>
      <div class="wide-card__right">
        <graphics-hub-planet class="section-graphics" />
        <span class="cards__item__disclosure tm-rf2 tm-lh-solid">&#8599;</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

.section
  overflow visible // graphics overflow
  z-index 1 // above next section

.wide-card
  display grid
  gap var(--spacing-7)
  grid-template-columns repeat(12, 1fr)
  grid-column 1/span 12
  position relative
  background linear-gradient(257deg, #120018 0%, #121435 100%)
  border-radius $border-radius-5
  overflow hidden
  hover-raise(-3px)

  &__content
    position relative
    padding var(--spacing-8)
    min-height 20rem
    color var(--white)
    position relative
    display flex
    flex-direction column
    flex-wrap nowrap
    justify-content flex-end
    color var(--white)
    z-index 1

  &__left
    grid-column 1/span 6

  &__right
    grid-column 7/span 6

  &:hover
    .cards__item__disclosure
      color var(--white)
      transform translate(2px,-2px)

.top
  &__sun
    position absolute
    right 0
    top 0
    z-index -1

  .section-graphics
    position absolute
    left -57%
    top -3%
    width 170%
    height 162%

.bottom
  overflow visible
  background linear-gradient(146deg, #05061D 13%, #121435 42%, #430A59 84%)

  .wide-card__right
    position relative
    padding var(--spacing-8)

  .section-graphics
    position absolute
    right 4%
    top -59%
    width 100%


.cards
  margin-top var(--spacing-7)
  margin-bottom var(--spacing-7)
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column 1 / span 12
  z-index 1
  position relative
  &__item
    position relative
    padding var(--spacing-8)
    color var(--white)
    position relative
    display flex
    flex-direction column
    flex-wrap nowrap
    justify-content flex-start
    color var(--white)
    background url("/top-half-graphics.svg"), linear-gradient(256.92deg, #120018 0%, #121435 100%)
    background-position bottom center
    background-size contain
    background-repeat no-repeat
    border-radius $border-radius-5
    hover-raise(-3px)
    &:first-child
      background url("/bottom-half-graphics.svg"), linear-gradient(256.92deg, #121435 0%, #030419 100%)
      justify-content flex-end
      background-position top center
      background-size contain
      background-repeat no-repeat
      padding-top var(--spacing-11)
    &:last-child
      padding-bottom var(--spacing-11)
    &:hover
      .cards__item__disclosure
        color var(--white)
        transform translate(2px,-2px)
    &__disclosure
      position absolute
      right var(--spacing-8)
      color var(--white-300)
      transition color .1s ease-out, transform .25s ease-out
    &__caption
      color var(--white-500)
    &__title
      margin-top var(--spacing-4)
      color var(--white)
    &__description
      margin-top var(--spacing-4)
      color var(--white-700)

@media $breakpoint-large
  .cards
    grid-template-columns 1fr 1fr

@media $breakpoint-xsmall-only
  .cards
    &__item
      height auto
      min-height 16rem
      border-radius $border-radius-4

  .wide-card
    gap 0

  .wide-card__left,
  .wide-card__right
    grid-column 1/span 12

  .bottom
    .wide-card__content
      min-height 0
      grid-row 2
    .wide-card__right
      position static
    .section-graphics
      top auto
      height auto
      max-width: $max-width['6']
</style>
