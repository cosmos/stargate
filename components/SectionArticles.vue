<template>
  <div id="articles" class="section section-articles">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
          {{ articles.length }} articles
        </div>
        <div class="section-title tm-rf4 tm-bold tm-lh-title">
          Learn more about Stargate
        </div>
        <div class="content">
          <a
            v-for="item in articles"
            :key="item.name"
            :href="item.url"
            target="_blank"
            rel="noreferrer noopener"
            class="articles-item"
          >
            <span class="articles-item__icon tm-rf2 tm-lh-solid">&#8599;</span>
            <div class="articles-item__date tm-rf-1 tm-lh-title">
              {{ item.date }}
            </div>
            <div
              class="articles-item__title tm-rf1 tm-bold tm-lh-title tm-measure-narrower"
            >
              {{ item.title }}
            </div>
            <div
              class="articles-item__description tm-rf0 tm-lh-copy tm-measure"
            >
              {{ item.description }}
            </div>
          </a>
        </div>
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
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-articles
  .section-header
    grid-column 6 / span 7
  .section-title
    color var(--white)
    text-align left
    grid-column 1 / 6
    grid-row 1
  .content
    grid-column 6 / span 7
    grid-row 2
    .articles-item
      display block
      text-align left
      padding var(--spacing-7) 0
      position relative
      border-bottom 1px solid #282b53
      &:last-child
        border-bottom 0
      &__icon
        position absolute
        right 0
        color var(--gray-600)
        transition color .1s ease-out, transform .25s ease-out
      &__date
        color var(--gray-600)
      &__title
        margin-top var(--spacing-4)
        color var(--primary-900)
        transition color .1s ease-out
      &__description
        margin-top var(--spacing-4)
        color var(--gray-600)
      &:hover
        .articles-item__title,
        .articles-item__icon
          color var(--white)
        .articles-item__icon
          transform translate(3px, -3px)

@media screen and (max-width: 1024px)

  .section-articles
    .section-header,
    .section-title
      grid-column 1 / span 12
    .section-header
      grid-row 1
    .section-title
      grid-row 2
      margin-top var(--spacing-4)
    .content
      grid-row 3
      grid-column 1/13
      margin-top var(--spacing-9)

@media screen and (max-width: 320px)
  .section-articles
    .section-title
      max-width $max-width['5']
</style>
