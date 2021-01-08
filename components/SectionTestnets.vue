<template>
  <div class="section section-testnets">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-status">
          <div class="section-status__title tm-rf3 tm-lh-copy">
            Not ready to upgrade?
          </div>
        </div>
        <div class="section-tabs">
          <div class="section-tabs__text">
            <div
              class="section-tabs__text__heading tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure"
            >
              Cosmos SDK
            </div>
            <div
              class="section-tabs__text__title tm-rf5 tm-bold tm-lh-title tm-measure"
            >
              Launchpad
            </div>
            <p
              class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
            >
              Stargate involves a lot of breaking changes that may make it
              difficult for you to upgrade, if you have already written a lot of
              code for Cosmos SDK 0.37/0.38.
            </p>
            <p
              class="section-tabs__text__paragraph tm-measure tm-rf1 tm-lh-copy"
            >
              The community supports an SDK 0.39 Launchpad release that includes
              backported bug fixes. The Cosmos development teams are working
              together to document a clean migration path from Launchpad to a
              stable Stargate release.
            </p>
            <p class="section-tabs__text__cta">
              <tm-button
                to-link="external"
                href="https://blog.cosmos.network/launchpad-a-pre-stargate-stable-version-of-the-cosmos-sdk-e0c58d8c4e24"
                size="l"
                color="var(--link)"
                variant="text"
                >Learn more ↗</tm-button
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
.section-testnets
  .section-status
    grid-column 1 / 5
    &__title
      grid-column 1 / span 4
      text-align start
      color var(--primary-900)
  .section-tabs
    grid-column 6 / span 7
    &__text
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

@media $breakpoint-large-max
  .section-testnets
    overflow hidden
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
    .section-status,
    .section-status__title
      grid-column 1 / span 12
    .section-tabs
      margin-top var(--spacing-8)
      grid-column 1 / span 12

  .section-testnets .testnets-list__item__text__right
    grid-column 1/12
    margin-top var(--spacing-5)

  .testnets-list__item__text__bot__labels
    flex-flow row wrap
    &__item
      margin-top var(--spacing-3)

@media $breakpoint-medium-max
  .section-testnets
    .section-text
      margin-top 0
      grid-column 1 / span 12

@media $breakpoint-small-max
  .section-testnets
    .section-statement
      margin-top var(--spacing-7)
    .section-tabs
      >>> .tabs
        margin-left calc(-1 * var(--spacing-6))
        margin-right calc(-1 * var(--spacing-6))
        ul
          padding-left var(--spacing-6)
          padding-right var(--spacing-6)

@media screen and (max-width: 414px)
  .section-testnets
    .testnets-list__item__text__bot__labels
      display flex
      &__item
        width fit-content
</style>
