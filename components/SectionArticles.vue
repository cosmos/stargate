<template>
  <div class="section section-articles">
    <div class="section-container">
      <div class="container">
        <div class="section-title tm-rf7 tm-bold tm-lh-title tm-measure-narrow">
          Learn more about
          <span class="section-title__highlight">Stargate</span>
        </div>
        <div class="section-subtitle tm-rf2 tm-lh-copy tm-measure">
          Dive into the various resources to get up to speed with the Stargate
          upgrades.
        </div>
        <div class="section-header tm-rf3 tm-bold tm-lh-title">Articles</div>
        <a
          v-for="item in articles"
          :key="item.name"
          :href="item.url"
          target="_blank"
          rel="noreferrer noopener"
          class="articles-item"
        >
          <span class="articles-item__icon tm-rf2 tm-lh-solid">&#8599;</span>
          <div
            class="articles-item__title tm-rf1 tm-bold tm-lh-title tm-measure-narrow"
          >
            {{ item.title }}
          </div>
          <div class="articles-item__description tm-rf0 tm-lh-copy tm-measure">
            {{ item.description }}
          </div>
          <div class="articles-item__date tm-rf-1 tm-lh-title">
            {{ item.date }}
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
      articles: [
        {
          url:
            'https://figment.network/resources/cosmos-stargate-upgrade-overview',
          date: 'June 22',
          title: 'Cosmos Stargate Upgrade Overview',
          description:
            'Introducing Stargate, the largest Cosmos upgrade yet. Stargate will enable higher transaction throughput, cross-chain transactions, accelerate UI development, and so much more.',
        },
        {
          url:
            'https://medium.com/tendermint/tendermint-0-34-protocol-buffers-and-you-8c40558939ae',
          date: 'June 23',
          title: 'Tendermint 0.34, Protocol Buffers, and You',
          description:
            'The upcoming Tendermint 0.34 release contains a major change to the way we serialize and encode data. Here’s what you need to know.',
        },
        {
          url:
            'https://medium.com/tendermint/everything-you-need-to-know-about-the-tendermint-light-client-f80d03856f98',
          date: 'June 25',
          title:
            'Everything you need to know about the Tendermint Light Client',
          description: 'What is it, why it’s needed and how it works.',
        },
        {
          url: 'https://blog.cosmos.network/preparing-for-ibc-1-0-e6fe75f7b5ef',
          date: 'July 16',
          title: 'Preparing for IBC 1.0',
          description:
            'Details on the upcoming 1.0 release of the inter-blockchain communication protocol.',
        },
        {
          url:
            'https://blog.cosmos.network/how-seven-teams-collaborated-to-deliver-the-biggest-software-upgrade-in-the-cosmos-universe-2288f4f9afe8',
          date: 'Oct 14',
          title:
            'How Seven Teams Collaborated To Deliver The Biggest Software Upgrade In The Cosmos Universe',
        },
        {
          url:
            'https://blog.cosmos.network/announcing-the-big-bang-stargate-testnet-a27a7b74a903',
          date: 'Oct 16',
          title: 'Announcing the ‘Big Bang’ Stargate Testnet',
          description:
            'The goal of Big Bang is to create a multichain test environment that tests, simulates, and benchmarks the post-Stargate Cosmos.',
        },
        {
          url:
            'https://blog.cosmos.network/five-reasons-why-cosmos-validators-want-to-participate-in-the-stargate-simulated-upgrade-f817ddef1678',
          date: 'Nov 9',
          title:
            'Five Reasons Why Cosmos Validators Want to Participate in the Stargate Simulated Upgrade',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
/deep/
.section-header
  border none
  color inherit

.section-articles
  .container
    gap var(--spacing-7)
  .section-title
    color var(--white)
    grid-column 1 / span 9
    &__highlight
      background-color var(--white)
      background-image linear-gradient(90deg, #99DAFF 0%, #CCD1FF 51.56%, #E644F8 100%)
      background-size 100%
      background-clip text
      -webkit-text-fill-color transparent
      -moz-text-fill-color transparent
      padding-right 0.05em // Fix offset clipping
  .section-subtitle
    display flex
    justify-content flex-end
    flex-direction column
    grid-row 2
    grid-column 1 / span 11
    color var(--gray-800)
  .section-header
    grid-column 1 / span 11
    margin-top var(--spacing-8)
    color var(--white)
  .articles-item
    grid-column 1 / span 12
    display block
    text-align left
    padding var(--spacing-7) 0
    position relative
    &:last-child
      border-bottom 0
    &__icon
      position absolute
      right 0
      color var(--gray-600)
      transition color .1s ease-out, transform .25s ease-out
    &__title
      color var(--primary-900)
      transition color .1s ease-out
      padding-right 2rem
    &__description
      margin-top var(--spacing-4)
      color var(--gray-600)
    &__date
      margin-top var(--spacing-4)
      color var(--gray-600)
    &:hover
      .articles-item__title,
      .articles-item__icon
        color var(--white)
      .articles-item__icon
        transform translate(3px, -3px)

@media $breakpoint-small
  .section-articles
    .articles-item
      grid-column span 6

@media $breakpoint-large
  .section-articles
    .container
      gap var(--spacing-8) var(--spacing-7)
    .section-title
      grid-column 2/span 9
    .section-subtitle
      grid-column 2/span 11
    .section-header
      grid-column 2 / span 11
    .articles-item
      grid-column span 4
</style>
