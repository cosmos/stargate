<template>
  <div class="section tm-section-container section-container">
    <div class="container">
      <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
        Participation
      </div>
      <div class="section-title tm-rf6 tm-bold tm-lh-title">Get involved</div>
      <div class="section-statement tm-rf1 tm-lh-copy tm-measure">
        You can help bring the Cosmos ecosystem to the next level, by
        participating in the testnets, community discussions, spreading
        awareness on socials, and voting on governance proposals.
      </div>

      <div class="subsection-title tm-rf4 tm-bold tm-lh-title">Proposals</div>
      <div class="cards">
        <graphics-hub-zone class="section-graphics-zone" />
        <a
          class="cards__item cards__item__top-left"
          href="https://www.mintscan.io/cosmos/proposals/37"
          target="blank_"
          rel="noreferrer noopener"
        >
          <span class="cards__item__disclosure tm-rf2 tm-lh-solid"
            >&#8599;</span
          >
          <div
            class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
          >
            Proposal #37 &middot; <span class="cards__item__chip">Passed</span>
          </div>
          <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
            Stargate --> Cosmos Hub
          </div>
          <div
            class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
          >
            Stargate upgrades are coming to the Cosmos Hub on Feb 18th
          </div>
        </a>
        <div class="cards__item cards__item__top-right disabled">
          <!-- <span class="cards__item__disclosure tm-rf2 tm-lh-solid"
            >&#8599;</span
          > -->
          <div
            class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
          >
            Proposal · coming soon
          </div>
          <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
            IBC --> Cosmos Hub
          </div>
          <div
            class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
          >
            Enable IBC transactions on the Cosmos Hub.
          </div>
        </div>
      </div>

      <div class="subsection-title__right tm-rf4 tm-bold tm-lh-title">
        Calling all developers
      </div>
      <NuxtLink to="/testnet" class="wide-card top">
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
            Prepare for Stargate -->
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
          href="https://discord.com/channels/669268347736686612/775776691213041674"
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
            Get developer support
          </div>
          <div
            class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
          >
            Join the <code>#🌠-stargate-testnet</code> channel in the Cosmos
            community Discord and chat with developers.
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

.section
  overflow visible // graphics overflow
  z-index 1 // above next section

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
  margin-bottom var(--spacing-10)

.section-graphics-zone
  position absolute
  z-index 1
  top 50%
  left 50%
  transform translate(-50%, 0)
  user-select none
  pointer-events none

.wide-card
  margin-top var(--spacing-7)
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
    width 150%

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

.subsection-title
  margin-top var(--spacing-7)
  margin-bottom var(--spacing-7)
  grid-column 1 / span 12
  z-index 1
  position relative
  color var(--white)

  &__right
    margin-top var(--spacing-11)
    margin-bottom var(--spacing-7)
    grid-column 8/span 5
    color var(--white)
    text-align right

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
    a&
      hover-raise(-3px)
    &__top-left
      height 21.3125rem
      background-image url("/top-surface-graphics.svg"), linear-gradient(256.92deg, #120018 0%, #121435 100%)
      background-position 70%
    &__top-right
      height 21.3125rem
      background-image url("/bottom-half-right-graphics.svg"), linear-gradient(256.92deg, #121435 0%, #030419 100%)
      background-position bottom right
      background-size auto
    &:first-child
      background-image url("/bottom-half-graphics.svg"), linear-gradient(256.92deg, #121435 0%, #030419 100%)
      justify-content flex-end
      background-position top center
      padding-top var(--spacing-11)
    &:last-child
      padding-bottom var(--spacing-11)
    &:hover
      .cards__item__disclosure
        color var(--white)
        transform translate(2px,-2px)
    &__disclosure
      position absolute
      top var(--spacing-8)
      right var(--spacing-8)
      color var(--white-300)
      transition color .1s ease-out, transform .25s ease-out
    &__caption
      color var(--white-500)
    &__chip
      display inline-block
      padding var(--spacing-1) var(--spacing-3)
      background var(--white)
      color var(--black)
      border-radius $border-radius-2
    &__title
      margin-top var(--spacing-4)
      color var(--white)
    &__description
      margin-top var(--spacing-4)
      color var(--white-700)
    &.disabled
      opacity 0.7

@media $breakpoint-medium
  .cards
    grid-template-columns 1fr 1fr

  .top
      .section-graphics
          width 170%

@media $breakpoint-xsmall-only
  .cards
    &__item,
      height auto
      min-height 16rem
      border-radius $border-radius-4

  .wide-card
    gap 0

  .wide-card__left,
  .wide-card__right,
  .section-header,
  .section-title,
  .section-statement,
  .subsection-title,
  .subsection-title__right
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

@media screen and (max-width: 1024px)
  .section-header,
  .section-title,
  .section-statement,
  .subsection-title__right
    grid-column 1 / span 12

@media screen and (max-width: 900px)
  .section-graphics-zone
    display none
</style>
