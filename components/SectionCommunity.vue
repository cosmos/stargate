<template>
  <div class="section section-container">
    <div class="container">
      <NuxtLink to="/testnets" class="top">
        <div class="top__left">
          <graphics-dyson-sphere class="section-graphics" />
        </div>
        <div class="top__right">
          <graphics-sun class="top__sun" />
          <div class="top__cards__item__top">
            <div
              class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
            >
              Upgrade
            </div>
            <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
              Join the testnets -->
            </div>
            <div class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy">
              Prepare for the new era of Cosmos by testing your integrations
              against the Stargate testnets.
            </div>
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
          <div class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy">
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
          <div class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy">
            Join the <code>#stargate</code> channel in the Cosmos community
            Discord and chat with developers.
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
.section-graphics
  position absolute
  left -57%
  top -3%
  width 170%
  height 162%

.top
  display grid
  gap var(--spacing-7)
  grid-template-columns repeat(12, 1fr)
  grid-column 1/span 12
  position relative
  background linear-gradient(256.92deg, #120018 0%, #121435 100%)
  border-radius $border-radius-5
  overflow hidden
  hover-raise(-3px)

  &__left
    grid-column 1/span 7

  &__right
    grid-column 8/span 12
    padding 0 var(--spacing-8)

  &__sun
    position absolute
    right 0
    top 0
    z-index 1

  &__cards__item__top
    position relative
    padding var(--spacing-8) 0
    height 20rem
    color var(--white)
    position relative
    display flex
    flex-direction column
    flex-wrap nowrap
    justify-content flex-end
    color var(--white)

.cards
  margin-top var(--spacing-7)
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column 1 / span 12
  &__item
    position relative
    padding var(--spacing-8)
    height 20rem
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
    &:hover
      .cards__item__disclosure
        color var(--white)
        transform translate(2px,-2px)
      .cards__item__caption
        transform translateY(-4px)
      .cards__item__title
        transform translateY(-2px)
    &__disclosure
      position absolute
      right var(--spacing-8)
      color var(--gray-600)
      transition color .1s ease-out, transform .25s ease-out
    &__caption
      color var(--gray-600)
      transition transform .25s ease-out
    &__title
      margin-top var(--spacing-4)
      color var(--white)
      transition transform .25s ease-out
    &__description
      margin-top var(--spacing-4)
      color var(--gray-600)

@media $breakpoint-large
  .cards
    grid-template-columns 1fr 1fr

@media $breakpoint-xsmall-only
  .cards
    &__item
      height auto
      min-height 16rem
      border-radius $border-radius-4

  .top__right
    grid-column 1/span 12
</style>
