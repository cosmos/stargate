<template>
  <div id="articles" class="section section-articles">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header">{{ articles.length }} articles</div>
        <div class="section-title">Learn more about Stargate</div>
        <div class="content">
          <div
            v-for="item in articles"
            :key="item.name"
            class="articles-wrapper"
          >
            <a
              :href="item.url"
              target="_blank"
              rel="noreferrer noopener"
              class="articles-item"
            >
              <span class="articles-item__icon">
                <icon-arrow-top-right />
              </span>
              <div class="articles-item__date">{{ item.date }}</div>
              <div class="articles-item__title">
                {{ item.title }}
              </div>
              <div class="articles-item__description">
                {{ item.description }}
              </div>
            </a>
          </div>
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
    font-weight 900
    font-size 3.625rem
    line-height 1.172
    letter-spacing -0.02em
    color #FFFFFF
    width 379px
    text-align left
    grid-column 1 / 4
    grid-row 1
  .content
    grid-column 6 / span 7
    grid-row 2
    margin-top -4rem
    .articles-wrapper
      border-bottom 1px solid #282b53
      &:last-child
        border-bottom 0
      .articles-item
        display block
        text-align left
        padding 2rem 0
        border-radius 1.25rem
        margin-top 1.5rem
        position relative
        transition all .25s ease-out
        &:hover:not(:active)
          transform translateY(-2px)
          .articles-item__icon
            transform translate(3px, -3px)
        &:active
          transition-duration 0s
        &__icon
          position absolute
          width 1.5rem
          height 1.5rem
          top 1.5rem
          right 1.5rem
          transition transform .25s ease-out
        &__date
          font-size 0.8125rem
          line-height 1.538
          letter-spacing 0.001em
          color #989BB9
        &__title
          margin-top 0.75rem
          font-weight bold
          font-size 1.75rem
          line-height 1.285
          letter-spacing -0.02em
          color #CCD1FF
          max-width 20em
        &__description
          margin-top 0.75rem
          font-size 1rem
          line-height 1.375
          color #989BB9
          max-width 30em

@media screen and (max-width: 1024px)
  // .section .section-header
  //     grid-column 1 / span 12

  .section-articles
    .section-header
      grid-row 1
    .section-title
      grid-row 2
      margin-top 6rem
      font-size 4rem
    .content
      grid-row 3
      grid-column 1/13
      margin-top 4rem

@media screen and (max-width: 576px)
  .section-articles .content
    margin-top 2rem
    .articles-wrapper .articles-item
      &__title
        font-size 1.1875rem
        line-height 1.263
        letter-spacing -0.01em
      &__description
        font-size 0.8125rem
        line-height 1.384
        letter-spacing 0.001em

@media screen and (max-width: 320px)
  .section-articles
    .section-title
      max-width 17rem
</style>
