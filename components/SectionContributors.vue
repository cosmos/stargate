<template>
  <div id="contributors" class="section section-contributors">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header">Contributors</div>
        <div class="section-graphics">
          <consortium-graphics class="section-graphics__canvas" />
        </div>
        <div class="section-top">
          <div class="section-title">Core Developers</div>
          <div class="section-statement">
            Stargate is made possible through the hard work and coordination of
            many dedicated teams contributing to development on Cosmos SDK,
            Tendermint Core, IBC and Gaia.
          </div>
        </div>
        <div class="section-list container">
          <div class="left-half__container">
            <div
              v-for="i in contributorsList.slice(0, 3)"
              :key="i.name.toLowerCase()"
              class="left-half__container__item"
            >
              <a
                :href="i.url"
                target="_blank"
                rel="noreferrer noopener"
                class="section-list__item"
              >
                <div class="section-list__item__logo">
                  <img :src="i.logo" />
                </div>
                <div class="section-list__item__title">
                  {{ i.name }}
                  <code v-if="i.role" class="section-list__item__title__role">{{
                    i.role
                  }}</code>
                </div>
                <div class="section-list__item__date">&#8599;</div>
              </a>
            </div>
          </div>
          <div class="right-half__container">
            <div
              v-for="i in contributorsList.slice(3, contributorsList.length)"
              :key="i.name.toLowerCase()"
              class="right-half__container__item"
            >
              <a
                :href="i.url"
                target="_blank"
                rel="noreferrer noopener"
                class="section-list__item"
              >
                <div class="section-list__item__logo">
                  <img :src="i.logo" />
                </div>
                <div class="section-list__item__title">
                  {{ i.name }}
                  <code v-if="i.role" class="section-list__item__title__role">{{
                    i.role
                  }}</code>
                </div>
                <div class="section-list__item__date">&#8599;</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash'

export default {
  data() {
    return {
      contributors: [
        {
          logo: '/logos/tendermint.svg',
          name: 'Tendermint',
          url: 'http://tendermint.com',
        },
        {
          logo: '/logos/iqlusion.svg',
          name: 'Iqlusion',
          role: 'Coordinator',
          url: 'https://www.iqlusion.io',
        },
        {
          logo: '/logos/interchain-gmbh.svg',
          name: 'Interchain GmbH',
          url: 'http://interchain.berlin',
        },
        {
          logo: '/logos/informal-systems.svg',
          name: 'Informal Systems',
          url: 'https://informal.systems',
        },
        {
          logo: '/logos/regen-network.svg',
          name: 'Regen Network',
          url: 'https://www.regen.network',
        },
        {
          logo: '/logos/fission-labs.svg',
          name: 'Fission Labs',
          url: 'https://fissionlabs.io',
        },
        {
          logo: '/logos/akash-network.svg',
          name: 'Akash Network',
          url: 'https://akash.network',
        },
      ],
    }
  },
  computed: {
    contributorsList() {
      const sortedList = orderBy(this.contributors, 'name')
      return sortedList
    },
  },
}
</script>

<style lang="stylus" scoped>
.section-contributors
  .section-header
    grid-column 6 / span 7
    grid-row 1
  .section-graphics
    grid-column 7 / span 6
    grid-row 2
    position relative
    .section-graphics__canvas
      position absolute
      width 130%
      margin-left -15%
      margin-top 0
  .section-top
    grid-column 1 / span 7
    margin-top 12rem
    position relative
  .section-title
    align-self flex-start
    font-weight 900
    font-size 5.125rem
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
    max-width 6em
  .section-statement
    margin-top 3rem
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
    max-width 30em
  .section-list
    grid-column 1/span 12
    grid-auto-flow column
    width 100%
    max-width none
    position relative
    .left-half__container
      grid-column 1/span 5
      margin-top auto
    .right-half__container
      grid-column 8/span 5
    &__item
      padding-top 1.875rem
      padding-bottom 1.875rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      border-bottom 1px solid #282B53
      &__title
        font-weight bold
        font-size 1.4375rem
        line-height 121.7%
        letter-spacing -0.01em
        color #CCD1FF
        transition color .1s ease-out
        width 70%
        &__role
          font-weight normal
          font-size 1rem
          color #989BB9
          margin-left 0.5rem
          vertical-align bottom
          background #282B53
          border-radius 14px
          padding 0px 12px
      &__date
        font-size 1.4375rem
        line-height 121.3%
        text-align right
        letter-spacing -0.005em
        color #989BB9
        transition color 0.1s ease-out, transform 0.15s ease-out
      &:hover .section-list__item__title,
      &:hover .section-list__item__date
        color #FFFFFF
      &:hover .section-list__item__date
        transform translate(3px, -3px)

@media screen and (max-width: 1024px)
  // .section .section-header
  //     grid-column 1 / span 12

  .section-contributors
    .section-top
      grid-column 1/span 12
    .section-title
      font-size 4rem
    .section-list
      margin-top 4rem
      display block
      .left-half
        grid-column unset
      .right-half
        grid-column unset

@media screen and (max-width: 576px)
  .section-contributors
    .section-list__item
      padding-top 1.25rem
      padding-bottom 1.25rem
      &__title
        font-size 1rem
        line-height 1.375
      &__role,
      &__date
        font-size 0.8125rem
        line-height 1.384

  .section-contributors
    .section-graphics
      grid-column 4/span 8
      font-size 0.5rem
    .section-top
      margin-top 34%
    .section-statement,
    .section-list
      margin-top 2rem
</style>
