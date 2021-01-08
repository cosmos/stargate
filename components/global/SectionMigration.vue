<template>
  <div class="section">
    <div class="tm-section-container section-container">
      <div class="cards-container">
        <div class="cards__item cards__item__text">
          <div
            class="cards__item__text__title tm-rf3 tm-bold tm-lh-title tm-measure-narrow"
          >
            Chat
          </div>
          <p
            class="cards__item__text__paragraph tm-measure-narrow tm-rf1 tm-lh-copy"
          >
            Join the <span class="tm-bold">#{{ channel }}</span> channel on the
            Cosmos Community Discord to chat with other developers.
          </p>
          <p class="cards__item__text__cta">
            <tm-button
              to-link="external"
              href="https://discord.gg/vcExX9T"
              size="l"
              color="var(--link)"
              variant="text"
              >Join chat &#8599;</tm-button
            >
          </p>
          <p class="cards__item__text__note">
            <span class="tm-bold">Tip:</span> Select the
            {{ emojis[code] }} emoji in #join-channels
          </p>
        </div>
        <div class="cards__item cards__item__text">
          <div
            class="cards__item__text__title tm-rf3 tm-bold tm-lh-title tm-measure-narrow"
          >
            Migration guides
          </div>
          <p
            class="cards__item__text__paragraph tm-measure-narrow tm-rf1 tm-lh-copy"
          >
            Help the Cosmos ecosystem upgrade by contributing your own migration
            guides to the community.
          </p>
          <p class="cards__item__text__cta">
            <tm-button
              to-link="external"
              href="https://github.com/cosmosdevs/stargate/pulls"
              size="l"
              color="var(--link)"
              variant="text"
              >Submit a guide &#8599;</tm-button
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    channel: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      emojis: {
        bigbang: '💥',
        stargate: '🌠',
        cosmoshub: '⭐',
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.cards-container
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  position relative

.cards__item
  margin-top var(--spacing-9)
  &__code
    display grid
    grid-template-columns 50% 50%
    grid-template-rows 1fr
    gap var(--spacing-3)
    margin-top var(--spacing-8)
  &__text
    &__title
      margin-top var(--spacing-3)
      color var(--white)
    &__paragraph
      margin-top var(--spacing-5)
      color var(--gray-800)
    &__cta
      margin-top var(--spacing-4)
      color var(--link)
    &__note
      color var(--gray-600)

@media $breakpoint-medium
  .cards-container
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-xl
  .cards-container
    grid-template-columns repeat(12, 1fr)
  .cards__item
    grid-column span 5
    &:last-child
      grid-column 7 / span 5
</style>
