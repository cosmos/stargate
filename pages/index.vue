<template>
  <main>
    <div
      v-observe-visibility="{
        callback: freezeNav,
      }"
    >
      <section-hero />
    </div>

    <div class="nav-container">
      <header id="section-nav">
        <section-nav />
      </header>
    </div>

    <section-intro />

    <div
      id="features"
      v-observe-visibility="{
        callback: unfreezeNav,
      }"
    >
      <section-features />
    </div>

    <section-testnets />

    <div id="roadmap" class="section section-roadmap">
      <div class="tm-section-container section-container">
        <div class="container">
          <div class="section-header">Roadmap</div>
          <div class="section-title">{{ progressTotal }}% complete</div>
          <div class="section-milestones">
            <div class="section-milestones__title">Milestones</div>
            <div class="section-milestones__cta">
              <a
                href="https://github.com/orgs/cosmosdevs/projects/1"
                target="_blank"
                rel="noreferrer noopener"
              >
                View on GitHub &#8594;
              </a>
            </div>
          </div>
          <a
            v-for="item in milestoneList"
            :key="item.url"
            :href="item.url"
            target="_blank"
            rel="noreferrer noopener"
            class="section-row"
          >
            <div
              class="meter"
              :style="{
                '--progress-bar-width': `${item.progress}%`,
                '--progress-bar-background-color': `${bgColor[item.logo]}`,
              }"
            ></div>
            <div class="details">
              <div class="icon">
                <component :is="`icon-${item.logo}`" />
              </div>
              <div class="text">
                <div class="title">{{ item.defaultTitle }}</div>
                <div class="subtitle">{{ item.repo }}</div>
              </div>
              <div class="indicator">
                <div v-if="item.progress" class="progress__wrapper">
                  <div class="h3">{{ item.progress }}% complete</div>
                </div>
              </div>
            </div>
          </a>
          <div class="section-status">
            <div class="section-status__title">Status updates</div>
          </div>
          <div class="section-list">
            <a
              v-for="item in currentUpdates"
              :key="updatesList[item - 1].title"
              :href="updatesList[item - 1].url"
              target="_blank"
              rel="noreferrer noopener"
              class="section-list__item"
            >
              <div class="section-list__item__title">
                {{ updatesList[item - 1].title }}
              </div>
              <div class="section-list__item__date">
                {{ updatesList[item - 1].date }} &#8594;
              </div>
            </a>
            <div class="section-list__bottom">
              <div
                v-if="currentUpdates != updatesList.length"
                class="section-list__bottom__cta"
                role="button"
                @click="currentUpdates = updatesList.length"
              >
                View all updates
              </div>
              <div
                v-else
                class="section-list__bottom__cta"
                role="button"
                @click="currentUpdates = 3"
              >
                View less
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
              Stargate is made possible through the hard work and coordination
              of many dedicated teams contributing to development on Cosmos SDK,
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
                    <code
                      v-if="i.role"
                      class="section-list__item__title__role"
                      >{{ i.role }}</code
                    >
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
                    <code
                      v-if="i.role"
                      class="section-list__item__title__role"
                      >{{ i.role }}</code
                    >
                  </div>
                  <div class="section-list__item__date">&#8599;</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    <div id="videos" class="section section-videos">
      <div class="tm-section-container section-container">
        <div class="container">
          <div class="section-header">Videos</div>
          <div class="frame">
            <iframe
              src="https://www.youtube.com/embed/mlq5GzQTIAM?autoplay=0&controls=1&rel=0&modestbranding=1&fs=1&enablejsapi=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <div class="text">
            <div class="text__caption">
              June 23
            </div>
            <div class="text__title">
              Stargate Q&amp;A with Zaki Manian
            </div>
            <div class="text__cta">
              <a
                href="https://www.youtube.com/watch?v=mlq5GzQTIAM"
                target="_blank"
                rel="noreferrer noopener"
              >
                Watch on YouTube &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="community" class="section section-community">
      <div class="tm-section-container section-container">
        <div class="container">
          <div class="section-header">Community</div>
          <div class="cards">
            <a
              href="https://cosmos.network/community"
              rel="noreferrer noopener"
              class="cards__item"
            >
              <div class="cards__item__caption">Connect</div>
              <div class="cards__item__title">Join the community</div>
              <div class="cards__item__description">
                Learn about Cosmos, get to know the community, connect with
                other Cosmonauts and more.
              </div>
            </a>
            <a
              href="https://discord.com/channels/669268347736686612/723170066937413693"
              target="_blank"
              rel="noreferrer noopener"
              class="cards__item"
            >
              <span class="cards__item__disclosure">
                <icon-arrow-top-right />
              </span>
              <div class="cards__item__caption">Chat</div>
              <div class="cards__item__title">Discuss Stargate</div>
              <div class="cards__item__description">
                Join the <code>#stargate</code> channel in the Cosmos community
                Discord and chat with developers.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="section-form">
      <div class="tm-section-container section-container bottom">
        <div class="container">
          <transition name="fade" mode="out-in">
            <div v-if="state === 'success'" key="success" class="bottom__state">
              <div class="bottom__get-notified">
                Almost there&hellip;
              </div>
              <div class="bottom__state__success">
                Check your inbox and confirm your email address
              </div>
            </div>
            <div
              v-else-if="state === 'error'"
              key="error"
              class="bottom__state"
            >
              <div class="bottom__get-notified">
                Something went wrong
              </div>
              <div class="bottom__state__error">
                Uh oh! Refresh the page and try again.
              </div>
            </div>
            <div v-else key="default" class="bottom__form">
              <label class="bottom__get-notified" for="field-email">
                Get Stargates updates
              </label>
              <form
                :action="url"
                method="POST"
                target="_blank"
                rel="noreferrer noopener"
                @submit.prevent="actionSubmitEmail"
              >
                <div class="bottom__form__input">
                  <input
                    id="field-email"
                    v-model="email"
                    name="fields[email]"
                    class="bottom__form__input__input"
                    type="email"
                    placeholder="Your email"
                    required="required"
                  />
                  <button type="submit" class="bottom__form__input__button">
                    <icon-arrow-right
                      class="bottom__form__input__icon"
                      @click="actionSubmitEmail"
                    />
                    <span class="sr-only">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import querystring from 'querystring'
import { orderBy } from 'lodash'
import Headroom from 'headroom.js'
import axios from 'axios'
import IconIbc from '~/components/IconIbc.vue'
import IconSdk from '~/components/IconSdk.vue'
import IconCore from '~/components/IconCore.vue'

export default {
  components: {
    IconIbc,
    IconSdk,
    IconCore,
  },
  data() {
    return {
      tabs: [],
      headroom: null,
      email: null,
      state: 'default',
      url: 'https://app.mailerlite.com/webforms/submit/l6o8i3',
      formData: {
        callback: 'jQuery1830831967939860198_1594856018285',
        'ml-submit': '1',
        ajax: '1',
        guid: '6ca22b31-4124-e926-cf4f-272ff9f44ec3',
        _: '1594856022563',
      },
      milestoneList: [],
      sources: [
        ['cosmos/cosmos-sdk', 25, 'sdk', 'Cosmos SDK 0.40'],
        ['tendermint/tendermint', 27, 'core', 'Tendermint Core 0.34'],
        ['cosmos/cosmos-sdk', 21, 'ibc', 'IBC 1.0'],
      ],
      bgColor: {
        sdk: 'linear-gradient(95.47deg, #320B93 0%, #3B2AB7 100%)',
        core: 'linear-gradient(95.47deg, #086108 0%, #018A01 100%)',
        ibc: 'linear-gradient(95.47deg, #121435 0%, #282B53 100%)',
      },
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
      currentUpdates: 3,
      updates: [
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week1.md',
          title: 'Week 1 status',
          date: 'July 02, 2020',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week2.md',
          title: 'Week 2 status',
          date: 'July 13, 2020',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week3.md',
          title: 'Week 3 status',
          date: 'July 20, 2020',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week4.md',
          title: 'Week 4 status',
          date: 'July 27, 2020',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week5.md',
          title: 'Week 5 status',
          date: 'August 07, 2020',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week6.md',
          title: 'Week 6 status',
          date: 'August 12, 2020',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week7.md',
          title: 'Week 7 status',
          date: 'August 19, 2020',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week8.md',
          title: 'Week 8 status',
          date: 'August 26, 2020',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/week-9/week9.md',
          title: 'Week 9 status',
          date: 'September 09, 2020',
        },
      ],
    }
  },
  computed: {
    progressTotal() {
      const progressSum = this.milestoneList
        .map((i) => Math.floor(i.progress))
        .reduce((a, b) => a + b, 0)
      const percentage = ((progressSum / 300) * 100).toFixed(0)
      return percentage
    },
    contributorsList() {
      const sortedList = orderBy(this.contributors, 'name')
      return sortedList
    },
    updatesList() {
      return this.updates.slice().reverse()
    },
  },
  mounted() {
    this.sources.forEach(async (source) => {
      const milestone = await this.getMilestone.apply(null, source)
      this.milestoneList.push(milestone)
    })
    this.enableHeadroom()
  },
  methods: {
    // freeze the headroom instance, no scroll events
    freezeNav(isVisible) {
      if (isVisible) {
        this.headroom.freeze()
      }
    },
    // resume scroll events
    unfreezeNav(isVisible) {
      if (isVisible) {
        this.headroom.unfreeze()
      }
    },
    enableHeadroom() {
      if (!this.headroom) {
        const header = document.getElementById('section-nav')
        this.headroom = new Headroom(header)
        this.headroom.init()
      }
    },
    actionSubmitEmail() {
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
          'fields[email]': this.email,
          ...this.formData,
        }),
      }
      fetch(this.url, options)
        .then(() => {
          this.state = 'success'
        })
        .catch(() => {
          this.state = 'error'
        })
    },
    async getMilestone(repo, id, logo, defaultTitle, defaultProgress) {
      const url = `https://github.com/${repo}/milestone/${id}`
      try {
        const api = `https://api.github.com/repos/${repo}/milestones/${id}`
        const m = (
          await axios.get(api, {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_PERSONAL_TOKEN}`,
            },
          })
        ).data
        const open = parseInt(m.open_issues)
        const closed = parseInt(m.closed_issues)
        const progress = Math.floor((100 * closed) / (open + closed)).toFixed(0)
        return { defaultTitle, repo, progress, logo, url }
      } catch {
        return {
          repo,
          logo,
          url,
          defaultTitle,
          progress: null,
        }
      }
    },
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
// TODO: outlined pill badge
.outline-btn
  border 2px solid #43466D !important
  background transparent !important
  color #989BB9 !important

.nav-container
  height 4rem

main
  overflow -webkit-paged-x

// .headroom
//   will-change transform
//   transition transform .2s ease-out

// .headroom--pinned
//   transform translateY(0%)

// .headroom--unpinned
//   transform translateY(-100%)

.fade-enter-active
  transition all .4s ease-out

.fade-leave-active
  transition all .2s ease-out

.fade-enter
  opacity 0
  transform translateY(1rem)

.fade-enter-to
  opacity 1
  transform translateY(0)

.fade-leave
  opacity 1
  transform scale(1)

.fade-leave-to
  opacity 0
  transform scale(.96)

.section-roadmap
  .section-header
    grid-column 6 / span 7
  .section-title
    margin-top 3rem
    margin-bottom 3rem
    font-weight 900
    font-size 6.25rem
    line-height 1.12
    text-align right
    letter-spacing -0.03em
    color #FFFFFF
    grid-column 1 / span 12
  .section-milestones
    grid-column 1 / 5
    grid-row 3 / 6
    &__title
      margin-top 2rem
      font-weight bold
      font-size 2.5rem
      line-height 120%
      letter-spacing -0.03em
      text-align start
      color #FFFFFF
    &__cta
      margin-top 1rem
      a
        display inline-block
        font-weight bold
        font-size 1.1875rem
        line-height 1.26
        letter-spacing -0.005em
        border-radius 0.375rem
        padding 20px 0px
  .section-row
    position relative
    margin-top 2rem
    grid-column 5 / span 8
    background linear-gradient(258.96deg, #121435 0%, #030419 100%)
    color white
    border-radius 1.25rem
    transition all .25s ease-out
    .meter
      position absolute
      top 0
      left 0
      bottom 0
      width var(--progress-bar-width, 0)
      background var(--progress-bar-background-color, linear-gradient(95.47deg, #121435 0%, #282B53 100%))
      border-radius 1.25rem
      transition opacity .15s
    .details
      position relative
      grid-template-columns auto 1fr
      gap 1.5rem
      padding 3rem
      grid-column-start 2
      display grid
      grid-auto-flow column
      align-items center
      text-align left
      justify-content space-between
      .icon
        width 3rem
        height 3rem
        fill var(--white)
        opacity 0.50
        transition opacity .25s, transform .15s ease-out
      .title
        font-weight 600
        font-size 1.4375rem
        line-height 1.217
        letter-spacing -0.01em
        transition transform .15s ease-out
      .subtitle
        font-size 1rem
        line-height 1.375
        color rgba(255, 255, 255, 0.75)
        margin-top 0.375rem
        transition color .15s, transform .15s ease-out
      .indicator
        display flex
        flex-direction row
        align-items flex-end
        background rgba(0, 0, 0, 0)
      .progress__wrapper
        display flex
        flex-direction column
        align-items flex-end
        .h3
          font-size 16px
          line-height 1.375
          display flex
          align-items center
          text-align right
          color #FFFFFF
    &:hover
      transform translateY(-2px)
      .meter
        opacity 0.9
      .details
        .icon
          opacity 0.75
          transform translate(-2px,-2px)
        .title
          transform translateY(-3px)
        .subtitle
          color #fff
          transform translateY(-2px)
      &:active
        transform none
        transition-duration 0s
  .section-status
    grid-column 1 / 5
    margin-top 6rem
    &__title
      margin-top 2rem
      grid-column 1 / span 4
      font-weight bold
      font-size 2.5rem
      line-height 120%
      letter-spacing -0.03em
      text-align start
      color #FFFFFF
  .section-list
    color #fff
    margin-top 6rem
    grid-column 6 / span 7
    &__item
      padding-top 1.875rem
      padding-bottom 1.875rem
      display flex
      flex-direction row
      justify-content space-between
      border-bottom 1px solid #282B53
      &__title
        font-weight bold
        font-size 1.4375rem
        line-height 121.7%
        letter-spacing -0.01em
        color #CCD1FF
        transition color 0.1s ease-out
      &__date
        font-size 1.1875rem
        line-height 126.3%
        text-align right
        letter-spacing -0.005em
        color #989BB9
        transition color 0.1s ease-out, transform 0.15s ease-out
      &:hover .section-list__item__title,
      &:hover .section-list__item__date
        color #FFFFFF
      &:hover .section-list__item__date
        transform translateX(3px)
    &__bottom
      text-align center
      padding 1.25rem 0
      &__cta
        font-weight bold
        font-size 1.1875rem
        line-height 126.3%
        letter-spacing -0.005em
        color #40B3FF
        cursor pointer

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

.section-videos
  padding-top 0
  padding-bottom 0
  .section-header
    grid-column 6 / span 7
    margin-bottom 4rem
  .frame
    background-color rgb(22, 25, 49)
    border-radius 0.5rem
    padding-top 1.5625rem
    padding-bottom 56.25% /* 16:9 */
    height 0
    position relative
    grid-column 1 / span 8
    iframe
      border-radius 0.5rem
      top 0
      left 0
      width 100%
      height 100%
      position absolute
  .text
    text-align left
    width 373px
    grid-column 9 / span 4
    position relative
    &__caption
      font-size 16px
      line-height 1.625
      color #989BB9
    &__title
      margin-top 8px
      font-weight bold
      font-size 2rem
      line-height 125%
      letter-spacing -0.025em
      color #FFFFFF
    &__cta
      display flex
      align-items center
      text-align center
      position absolute
      bottom 0
      right 0
      a
        font-weight bold
        font-size 1rem
        line-height 137.5%
        padding 0.8125rem 0
        border-radius 0.5rem

.section-community
  .section-header
    grid-column 6 / span 7
  .cards
    margin-top 6rem
    display grid
    grid-template-columns 1fr 1fr
    gap 2rem
    grid-column 1 / span 12
    &__item
      position relative
      padding 3rem
      height 338px
      color var(--white)
      position relative
      display flex
      flex-direction column
      flex-wrap nowrap
      justify-content flex-start
      color var(--white)
      height 338px
      background url("/top-half-graphics.svg"), linear-gradient(256.92deg, #120018 0%, #121435 100%)
      background-position bottom center
      background-size contain
      background-repeat no-repeat
      border-radius 1.25rem
      &:first-child
        background url("/bottom-half-graphics.svg"), linear-gradient(256.92deg, #121435 0%, #030419 100%)
        justify-content flex-end
        background-position top center
        background-size contain
        background-repeat no-repeat
      &:hover
        transform translateY(-3px)
        .cards__item__disclosure
          transform translate(2px,-2px)
        .cards__item__caption
          transform translateY(-4px)
        .cards__item__title
          transform translateY(-2px)
      &:active
        transform none
        transition-duration 0s
      &__disclosure
        position absolute
        top 3rem
        right 3rem
        width 1.5rem
        height 1.5rem
        transition transform .25s ease-out
      &__caption
        font-weight 600
        font-size 16px
        line-height 1.375
        letter-spacing 0.08em
        text-transform uppercase
        color #989BB9
        transition transform .25s ease-out
      &__title
        margin-top 12px
        font-weight bold
        font-size 32px
        line-height 125%
        letter-spacing -0.025em
        color #FFFFFF
        transition transform .25s ease-out
      &__description
        margin-top 12px
        font-size 19px
        line-height 1.579
        letter-spacing -0.005em
        color #989BB9

.bottom
  .container
    display flex
    justify-content center
  &__get-notified
    display block
    margin-bottom 2rem
    font-weight bold
    font-size 1.1875rem
    line-height 1.263
    color #CFD1E7
    text-align center
  &__state
    margin 2rem auto
    font-size 1rem
    line-height 1.375
    font-weight normal
    &__success
      color #989bb9
    &__error
      color #FF4C52
  &__form
    margin 2rem auto
    max-width 25rem
    width 100%
    &__input
      display flex
      position relative
      align-items center
      justify-content center
      &__button
        position absolute
        right 0
        width 4rem
        appearance none
        background none
        border none
        padding 1rem
        border-radius 0.625rem
        cursor pointer
        outline none
        &:hover,
        &:focus
          .bottom__form__input__icon
            fill #FFFFFF
            transform scale(1.05)
      &__icon
        display block
        height 2rem
        fill #989BB9
        transition fill .15s ease-out, transform .15s ease-out
      &__input
        outline none
        width 100%
        background #121435
        border none
        border-radius 0.625rem
        padding 1.25rem 4rem 1.25rem 1.5rem
        height 64px
        font-weight 350
        font-size 1.1875rem
        line-height 1.263
        letter-spacing -0.005em
        color #F8F8FD
        opacity 0.7
        transition color 0.15s ease-out, background 0.15s ease-out
        &::placeholder
          color #989BB9
          transition color 0.15s ease-out
        &:hover
          background #282B53
          &:not(:focus)::placeholder
            color #CFD1E7
        &:focus
          background #282B53
          color #FFFFFF

@media screen and (max-width: 1438px)
  .section-videos
    .container
      .frame
        grid-column 1 / 8
      .text
        grid-column 8 / span 4

@media screen and (max-width: 1024px)
  .section .section-header
      grid-column 1 / span 12

  .section-roadmap
    .section-title
      grid-column 1 / span 12
      text-align left
      font-size 4rem
    .section-row
      grid-column 1 / span 12
    .section-milestones
      grid-column 1 / 12
    .section-status
      grid-column 1 / 12
    .section-list
      margin-top 1.5rem
      grid-column 1 / span 12

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

  .section-videos
    .container
      .frame
        grid-column 1/span 12
      .text
        margin-top 2rem
        grid-column 1/span 12
        &__cta
          position unset
          text-align left

  .section-community .cards
    grid-template-columns repeat(1, 1fr)

@media screen and (max-width: 767px)
  .section-roadmap
    .section-title
      margin-bottom 1rem
    .section-status
      margin-top 3rem

@media screen and (max-width: 576px)
  .section
    .section-title
      margin-top 3rem
      font-size 2.5rem
      line-height 1.20
    .section-subtitle
      font-size 1.4375rem
      line-height 1.217
    .section-statement
      font-size 1rem
      line-height 1.625
    .section-cta
      font-size 1rem
      line-height 1.375
      margin-top 1.5rem

  .section-roadmap
    .section-milestones__title,
    .section-status__title
      font-size 1.75rem
      line-height 1.285
      letter-spacing -0.02em
    .section-milestones
      &__cta
        margin-top 0.5rem
        a
          font-size 1rem
          line-height 1.375
          padding 0.8125rem 0
    .section-row
      margin-top 1rem
      &,
      .meter
        border-radius 0.75rem
      .details
        padding 1.5rem
        grid-template-columns unset
        grid-auto-flow unset
        .title
          font-size 1.4375rem
          line-height 1.217
          letter-spacing -0.01em
        .subtitle
          font-size 0.8125rem
          line-height 1.384
        .progress__wrapper .h3
          font-size 1rem
          line-height 1.375
  .section-roadmap,
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

  .section-videos
    .section-header
      margin-bottom 2rem
    .container .text
      width auto
      margin-top 0.5rem
      &__caption
        font-size 0.8125rem
        line-height 1.384
        letter-spacing 0.001em
      &__title
        font-size 1.1875rem
        line-height 1.263
        letter-spacing -0.01em

  .section-community
    .cards
      margin-top 2rem
      &__item
        height auto
        min-height 18rem
        border-radius 0.75rem
        &__caption
          font-size 0.8125rem
          line-height 1.384
        &__title
          font-size 1.4375rem
          line-height 1.217
          letter-spacing -0.01em
        &__description
          font-size 1rem
          line-height 1.375
          letter-spacing 0
        &__disclosure
          top 1rem
          right 1rem

  .bottom
    &__form
      &__input
        &__input
          font-size 1rem
          line-height 1.375
          letter-spacing 0
          height 3rem
          padding 0.8125rem 3rem 0.8125rem 1rem
        &__button
          width 3rem
          padding 0.75rem
        &__icon
          height 1.5rem

@media screen and (max-width: 414px)
  main
    overflow-x hidden

  .section-roadmap .section-row .meter
    width 100%

@media screen and (max-width: 375px)
  .section-container .container
    gap unset

@media screen and (max-width: 320px)
  .section-articles
    .section-title
      max-width 17rem

  .section-community .cards__item
    padding 1.5rem
</style>
