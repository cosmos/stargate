<template>
  <div id="documentation" class="tm-section-container section-container">
    <div class="container">
      <div class="left">
        <div class="left__title tm-rf3 tm-bold tm-lh-title">Documentation</div>
        <tm-button
          to-link="external"
          href="https://github.com/cosmosdevs/stargate/pulls"
          color="var(--primary-600)"
          variant="text"
          glow
          >Contribute your own guide<span class="icon__right"
            >&#8599;</span
          ></tm-button
        >
      </div>
      <div class="list">
        <a
          v-for="item in preps"
          :key="item.name"
          :href="item.url"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div class="list__item">
            <div class="list__item__top">
              <div class="list__item__title tm-rf1 tm-bold tm-lh-title">
                {{ item.name }}
              </div>
              <div class="list__item__arrow tm-rf2 tm-lh-solid">&#8599;</div>
            </div>
            <div class="list__item__tags">
              <div
                v-for="i in item.tags"
                :key="i"
                class="list__item__tags__item tm-rf0 tm-lh-title"
                :style="{
                  '--tag-text-color': `${tagColor[camelize(i)][0]}`,
                  '--tag-background-color': `${tagColor[camelize(i)][1]}`,
                }"
              >
                {{ i }}
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://discord.gg/vcExX9T"
          target="blank_"
          rel="noreferrer noopener"
        >
          <div class="cards__item cards__item__text">
            <div class="cards__item__top">
              <div
                class="cards__item__text__heading tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure"
              >
                chat
              </div>
              <div class="cards__item__text__arrow tm-rf2 tm-lh-solid">
                &#8599;
              </div>
            </div>
            <div
              class="cards__item__text__title tm-rf3 tm-bold tm-lh-title tm-measure-narrow"
            >
              Get developer support
            </div>
            <p
              class="cards__item__text__paragraph tm-measure-narrow tm-rf1 tm-lh-copy"
            >
              Join the <span class="tm-bold tm-code">#🌠-stargate-testnet</span>
              channel on the Cosmos Community Discord to chat with other
              developers.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preps: [
        {
          name: 'Running a Node, API and CLI',
          url: 'https://docs.cosmos.network/master/run-node',
          tags: ['All services'],
        },
        {
          name: 'gRPC, REST, and Tendermint Endpoints',
          url: 'https://docs.cosmos.network/master/core/grpc_rest.html',
          tags: ['All services'],
        },
        {
          name: 'REST Endpoints Migration',
          url: 'https://docs.cosmos.network/master/migrations/rest.html',
          tags: ['Wallets', 'Exchanges', 'Zone developers'],
        },
        {
          name: 'AminoREST and You',
          url: 'https://github.com/cosmos/stargate-launch/blob/master/audit.md',
          tags: ['Wallets'],
        },
        {
          name: 'IBC Skills Matrix',
          url:
            'https://github.com/cosmos/stargate-launch/blob/master/ibc_readiness_matrix.md',
          tags: ['Exchanges'],
        },
        {
          name: 'App and Modules Migration',
          url:
            'https://docs.cosmos.network/master/migrations/app_and_modules.html',
          tags: ['Zone developers'],
        },
        {
          name: 'Chain Upgrade Guide to v0.40',
          url:
            'https://docs.cosmos.network/master/migrations/chain-upgrade-guide-040.html',
          tags: ['Zone developers'],
        },
      ],
      tagColor: {
        // text color, background color
        allServices: [
          'rgba(0, 4, 56, 0.738)',
          'linear-gradient(89.41deg, #99DAFF -0.22%, #FFD1FD 99.78%)',
        ],
        wallets: ['var(--gray-trans-300)', 'var(--secondary-800)'],
        exchanges: ['var(--gray-trans-300)', 'var(--primary-800)'],
        zoneDevelopers: ['var(--white-700)', 'var(--primary-400)'],
      },
    }
  },
  methods: {
    camelize(str) {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase()
        })
        .replace(/\s+/g, '')
    },
  },
}
</script>

<style lang="stylus" scoped>
.cards__item
  margin-top var(--spacing-9)
  background linear-gradient(262.23deg, #120018 0%, #121435 100%)
  border-radius $border-radius-5
  overflow hidden
  hover-raise(-3px)
  padding var(--spacing-8)
  &__top
    display flex
    justify-content space-between
    align-items center
  &__code
    display grid
    grid-template-columns 50% 50%
    grid-template-rows 1fr
    gap var(--spacing-3)
    margin-top var(--spacing-8)
  &__text
    &__heading
      color var(--white-500)
    &__title
      margin-top var(--spacing-3)
      color var(--white)
    &__paragraph
      margin-top var(--spacing-5)
      color var(--white-700)
    &__arrow
      color var(--white-300)

.left
  grid-column 1 / span 4
  margin-top var(--spacing-9)
  &__title
    color var(--white)
  &__id
    margin-top var(--spacing-6)
    display flex
    flex-direction column
    &__chain
      color var(--gray-600)
    &__id
      color var(--gray-800)

.list
  margin-top var(--spacing-9)
  grid-column 6/span 7

  &__item
    padding-top var(--spacing-7)
    padding-bottom var(--spacing-7)
    border-bottom 1px solid #282b53

    &__top
      display flex
      justify-content space-between
      align-items center

    &__arrow
      color var(--gray-600)

    &__tags

      &__item
        color var(--tag-text-color)
        background var(--tag-background-color)
        border-radius 0.875rem
        padding 0.1875rem 0.75rem

  &__title
    margin-bottom var(--spacing-8)
    color var(--white)

  &__paragraph
    margin-bottom var(--spacing-8)

  &__item + &__item
    margin-top var(--spacing-9)

  &__item

    &__title
      margin-top var(--spacing-5)
      margin-bottom var(--spacing-5)
      color var(--white)

    &__paragraph
      margin-top var(--spacing-5)
      color var(--gray-800)

    &__tags
      display flex
      gap 1rem

@media screen and (max-width: 1024px)
  .left, .list
    grid-column 1 / span 12

@media screen and (max-width: 767px)
  .left
    margin-top var(--spacing-8)
</style>
