<template>
  <main>
    <div
      v-observe-visibility="{
        callback: freezeNav,
      }"
      class="section-hero"
    >
      <div class="section-container">
        <div class="hero-graphics">
          <span class="hero-graphics__star"></span>
          <span class="hero-graphics__gate"></span>
          <gate-notches class="hero-graphics__gate-notches" />
          <span class="hero-graphics__planet"></span>
        </div>
        <div class="container">
          <nav class="nav-primary">
            <ul>
              <li>
                <a href="https://cosmos.network">
                  <span class="text">← Cosmos Network</span>
                  <icon-arrow-right class="icon" />
                </a>
              </li>
              <li>
                <logo-wordmark class="logo" /><span class="sr-only"
                  >Cosmos</span
                >
              </li>
            </ul>
          </nav>
          <div class="headings">
            <h1 class="title">
              <wordmark-stargate />
              <span class="sr-only">Stargate</span>
            </h1>
            <div class="subtitle">
              The Internet of Blockchains is on the horizon.
            </div>
          </div>
          <div class="bottom">
            <!-- <code class="bottom__countdown">T minus {{ countdownTimer }}d</code> -->
            <transition name="fade" mode="out-in">
              <div
                v-if="state === 'success'"
                key="success"
                class="bottom__state"
              >
                <div class="bottom__get-notified">
                  Almost there&hellip;
                </div>
                <h2 class="bottom__state__success">
                  Check your inbox and confirm your email address
                </h2>
              </div>
              <div
                v-else-if="state === 'error'"
                key="error"
                class="bottom__state"
              >
                <div class="bottom__get-notified">
                  Something went wrong
                </div>
                <h2 class="bottom__state__error">
                  Uh oh! Refresh the page and try again.
                </h2>
              </div>
              <div v-else key="default" class="bottom__form">
                <label class="bottom__get-notified" for="field-email">
                  Get notified when testnets start
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
    </div>

    <header class="headroom section-nav">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__list__item">
            <a v-scroll-to="'#intro'">What is Stargate?</a>
          </li>
          <li class="nav__list__item">
            <a v-scroll-to="'#features'">Features</a>
          </li>
          <li class="nav__list__item">
            <a v-scroll-to="'#prepare'">Prepare</a>
          </li>
          <li class="nav__list__item">
            <a v-scroll-to="'#roadmap'">Roadmap</a>
          </li>
          <li class="nav__list__item">
            <a v-scroll-to="'#contributors'">Contributors</a>
          </li>
          <li class="nav__list__item">
            <a v-scroll-to="'#articles'">Resources</a>
          </li>
        </ul>
      </nav>
    </header>

    <div id="intro" class="section section-intro">
      <div class="section-container">
        <div class="container">
          <div class="section-title">A new era for Cosmos</div>
          <div class="section-subtitle">
            The biggest event in the ecosystem since the launch of the Cosmos
            Hub.
          </div>
          <eclipsed-planet class="section-graphics" />
          <div class="section-statement">
            <p>
              Stargate is a set of upgrades that complete the original roadmap
              laid out in the Cosmos Whitepaper. For the first time ever, Cosmos
              blockchains will be able to connect with each other using the
              first standardized protocol for inter-blockchain communication
              (IBC).
            </p>
            <div class="section-cta">
              <a
                href="https://blog.cosmos.network/cosmos-stargate-upgrade-overview-8939475fe673"
                target="_blank"
                rel="noreferrer noopener"
              >
                Read more about Stargate &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="features"
      v-observe-visibility="{
        callback: unfreezeNav,
      }"
      class="section section-features"
    >
      <div class="section-container">
        <div class="container">
          <div class="section-header">Features</div>
          <div class="section-title">What’s new?</div>
          <div class="section-statement">
            These upgrades bring significant performance improvements to
            blockchains built with Cosmos SDK. Discover all the amazing features
            of the Stargate upgrade below.
          </div>
          <div class="data-container">
            <div class="data-item">
              <div class="data-item__overline">Enabling</div>
              <div class="data-item__heading">IBC</div>
            </div>
            <div class="data-item">
              <div class="data-item__overline">Efficiency gains up to</div>
              <div class="data-item__heading">100x</div>
            </div>
            <div class="data-item">
              <div class="data-item__overline">Faster full node sync</div>
              <div class="data-item__heading">96x</div>
            </div>
            <div class="data-item">
              <div class="data-item__overline">Faster upgrades</div>
              <div class="data-item__heading">20x</div>
            </div>
          </div>
          <div class="features-graphics">
            <interoperable-planets />
          </div>
          <div class="ibc-item">
            <div class="ibc-item__icon">
              <icon-ibc-cropped />
            </div>
            <div class="ibc-item__title">Inter-Blockchain Communication</div>
            <div class="ibc-item__description">
              Cosmos SDK-based blockchains can incorporate the Inter-Blockchain
              Communication (IBC) Protocol to communicate with other compatible
              blockchains. The Cosmos Hub is the first blockchain to support IBC
              in production.
            </div>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              <div class="grid-item__icon">
                <icon-countdown />
              </div>
              <div class="grid-item__title">State Sync</div>
              <div class="grid-item__description">
                For blockchains built on top of Tendermint Core, the full-node
                synchronization process will be reduced from 2 days to just 30
                mins or less.
              </div>
            </div>
            <div class="grid-item">
              <div class="grid-item__icon">
                <icon-repeat />
              </div>
              <div class="grid-item__title">Automatic upgrades</div>
              <div class="grid-item__description">
                The upgrade module facilitates the upgrade process of chains
                built with Cosmos SDK. Migration from one version to the next
                will take little to no time, as opposed to one hour or more
                before.
              </div>
            </div>
            <div class="grid-item">
              <div class="grid-item__icon">
                <icon-mask-oval />
              </div>
              <div class="grid-item__title">Full-featured Light Clients</div>
              <div class="grid-item__description">
                Light clients are lightweight alternatives to a full node,
                allowing a wide range of devices to safely and efficiently
                receive blockchain data for new network nodes and
                inter-blockchain communication.
              </div>
            </div>
            <div class="grid-item">
              <div class="grid-item__icon">
                <icon-speedometer />
              </div>
              <div class="grid-item__title">
                Transition from Amino to Protobuf
              </div>
              <div class="grid-item__description">
                Protobuf brings performance improvements and developer
                acceleration to Cosmos SDK-based blockchains with efficiency
                gains of 10-100x, and wider language support.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="prepare" class="section section-prepare">
      <div class="section-container">
        <div class="container">
          <div class="section-header">Prepare</div>
          <div class="section-title">Get set for testnets</div>
          <div class="section-statement">
            <p>
              The following services will be affected by the upgrades with
              Stargate. Make sure to schedule time in August for integration
              testing on the testnet.
            </p>
            <p>
              More detailed instructions and guidelines on how services can
              prepare for the upgrade will be published in August.
            </p>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              <prepare-hex-bg class="grid-item__hex" />
              <div class="grid-item__icon">
                <icon-validator />
              </div>
              <div class="grid-item__title">Validators</div>
              <div class="grid-item__description">
                Validators of chains that will implement Stargate upgrades -
                beginning with the Cosmos Hub - should prepare by helping run
                Stargate testnets in the coming weeks.
              </div>
            </div>
            <div class="grid-item">
              <prepare-hex-bg class="grid-item__hex" />
              <div class="grid-item__icon">
                <icon-explore />
              </div>
              <div class="grid-item__title">Wallets &amp; Explorers</div>
              <div class="grid-item__description">
                This release will bring breaking changes to all wallets and
                explorers of chains that will implement the Stargate Upgrade
                (including Cosmos Hub).
              </div>
            </div>
            <div class="grid-item">
              <prepare-hex-bg class="grid-item__hex" />
              <div class="grid-item__icon">
                <icon-exchanges />
              </div>
              <div class="grid-item__title">Exchanges</div>
              <div class="grid-item__description">
                Make sure your signing and querying software is ready for the
                Stargate upgrade by testing the features and your infrastructure
                ahead of time, using the testnet.
              </div>
            </div>
            <div class="grid-item">
              <prepare-hex-bg class="grid-item__hex" />
              <div class="grid-item__icon">
                <icon-sdk-hex />
              </div>
              <div class="grid-item__title">Zone Developers</div>
              <div class="grid-item__description">
                If you're developing a blockchain with Cosmos SDK, please
                prepare to join the Stargate testnet. More detailed guides to
                follow shortly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="launchpad" class="section section-launchpad">
      <div class="section-container">
        <div class="container">
          <div class="section-header">a note for zone developers</div>
          <div class="section-left">
            <div class="section-left__heading">Not ready to upgrade?</div>
            <div class="section-left__title">Launchpad</div>
          </div>
          <div class="section-statement">
            <div class="section-statement__p">
              Stargate involves a lot of breaking changes that may make it
              difficult for you to upgrade, if you have already written a lot of
              code for Cosmos SDK 0.37/0.38.
            </div>
            <br />
            <div class="section-statement__p">
              The community supports an
              <a
                href="https://github.com/cosmos/cosmos-sdk/releases/tag/v0.39.0"
                target="_blank"
                rel="noreferrer noopener"
                >SDK 0.39 Launchpad release</a
              >
              that includes backported bug fixes. The
              <a v-scroll-to="'#contributors'">Cosmos development teams</a> are
              working together to document a clean migration path from Launchpad
              to a stable Stargate release.
            </div>
            <div class="section-cta">
              <a
                href="https://blog.cosmos.network/launchpad-a-pre-stargate-stable-version-of-the-cosmos-sdk-e0c58d8c4e24"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn more &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="roadmap" class="section section-roadmap">
      <div class="section-container">
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
              v-for="item in updates"
              :key="item.title"
              :href="item.url"
              target="_blank"
              rel="noreferrer noopener"
              class="section-list__item"
            >
              <div class="section-list__item__title">{{ item.title }}</div>
              <div class="section-list__item__date">
                {{ item.date }} &#8594;
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="contributors" class="section section-contributors">
      <div class="section-container">
        <div class="container">
          <div class="section-header">Contributors</div>
          <div class="section-title">Core Developers</div>
          <div class="section-statement">
            Stargate is made possible through the hard work and coordination of
            many dedicated teams contributing to development on Cosmos SDK,
            Tendermint Core, IBC and Gaia.
          </div>
          <div
            v-for="i in contributorsList"
            :key="i.name.toLowerCase()"
            class="section-list"
          >
            <a
              :href="i.url"
              target="_blank"
              rel="noreferrer noopener"
              class="section-list__item"
            >
              <div class="section-list__item__title">
                {{ i.name }}
                <code v-if="i.role" class="section-list__item__title__role"
                  >({{ i.role }})</code
                >
              </div>
              <div class="section-list__item__date">&#8594;</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="articles" class="section section-articles">
      <div class="section-container">
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
      <div class="section-container">
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
      <div class="section-container">
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
  </main>
</template>

<script>
import querystring from 'querystring'
import { orderBy } from 'lodash'
import Headroom from 'headroom.js'
import moment from 'moment'
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
          name: 'Tendermint',
          url: 'http://tendermint.com',
        },
        {
          name: 'Iqlusion',
          role: 'Coordinator',
          url: 'https://www.iqlusion.io',
        },
        {
          name: 'Interchain GmbH',
          url: 'http://interchain.berlin',
        },
        {
          name: 'Informal Systems',
          url: 'https://informal.systems',
        },
        {
          name: 'Regen Network',
          url: 'https://www.regen.network',
        },
        {
          name: 'Fission Labs',
          url: 'https://fissionlabs.io',
        },
        {
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
      updates: [
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week1.md',
          title: 'Week 1 status',
          date: 'July 2, 2020',
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
      ],
    }
  },
  computed: {
    countdownTimer() {
      return moment('20200729', 'YYYYMMDD').diff(moment(), 'days')
    },
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
        const header = document.querySelector('header')
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
        const m = (await axios.get(api)).data
        // const title = m.title
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
  },
}
</script>

<style lang="stylus" scoped>
main
  overflow -webkit-paged-x

.headroom
  will-change transform
  transition transform 200ms linear

.headroom--pinned
  transform translateY(0%)

.headroom--unpinned
  transform translateY(-100%)

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

// Accessible/SEO friendly CSS hiding
.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

.section
  position relative
  padding-top 6rem
  padding-bottom 6rem

.section-container
  position relative
  padding-left 1rem
  padding-right 1rem
  max-width 96rem
  margin 0 auto
  .container
    display grid
    grid-template-columns repeat(12, 1fr)
    gap 0 2rem
    max-width var(--container-mw-lg)
    margin 0 auto

.section-header
  padding-top 1rem
  min-height 3rem
  font-weight 600
  font-size 1.1875rem
  line-height 1.263
  letter-spacing 0.08em
  text-transform uppercase
  color #989BB9
  border-top 1px solid #282B53

.nav-primary
  ul
    display grid
    grid-template-columns repeat(3, 1fr)
    align-items center
    padding 0
  li
    list-style-type none
    &:first-child
      text-align left
  .logo
    display block
    margin 0 auto
  a
    display inline-block
    font-size 1rem
    line-height 1.375
    padding 0.8125rem 0
    color #989BB9
    border-radius 0.375rem
    &:hover,
    &:focus
      color #CFD1E7
    .icon
      display none
      fill #CFD1E7
      transform rotate(180deg)
      width 1.5rem

.section-hero
  position relative
  height 100vh
  min-height 52rem
  max-height 64rem
  margin-bottom 6rem
  display flex
  justify-content stretch
  align-items stretch
  text-align center
  background radial-gradient(60.92% 51.1% at 50% 57.31%, #21255F 26.56%, #030419 80.73%, #000000 100%)
  .section-container
    display flex
    align-items stretch
    width 100%
    padding-top 4rem
    padding-bottom 6rem
  .container
    position relative
    display flex
    width 100%
    flex-direction column
    align-items normal
    justify-content space-between
    .nav-primary
      margin-bottom 5%
    .headings
      width 100%
      .title
        margin 0
        svg
          width 100%
          height auto
          max-height 5.5rem
      .subtitle
        margin-top 3rem
        font-size 2rem
        line-height 150%
        letter-spacing -0.02em
        color #989BB9
    .bottom
      margin-top 15%
      width 100%
      &__countdown
        font-size 19px
        line-height 1.579
        letter-spacing -0.005em
        color #CCD1FF
        border 1px solid rgba(255, 255, 255, 0.1)
        border-radius 0.5rem
        padding 0.25rem 0.75rem
      &__countdown + .bottom__form
        margin 3rem auto 0
      &__get-notified
        display block
        margin 3rem auto 1rem
        font-weight bold
        font-size 1rem
        line-height 1.375
        color #CFD1E7
      &__state
        padding-bottom 2.3125rem
        h2
          margin-top 1.3125rem
          font-size 1rem
          line-height 1.375
          font-weight normal
        &__success
          color #989bb9
        &__error
          color #FF4C52
      &__form
        margin 3.5rem auto
        max-width 25rem
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
            background rgba(255, 255, 255, 0.1)
            box-shadow 0px 20px 44px rgba(0, 3, 66, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.07)
            border none
            border-radius 0.625rem
            padding 1.25rem 4rem 1.25rem 1.5rem
            height 64px
            -webkit-backdrop-filter blur(10px)
            backdrop-filter blur(10px)
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
              background rgba(255, 255, 255, 0.15)
              &:not(:focus)::placeholder
                color #CFD1E7
            &:focus
              background rgba(255, 255, 255, 0.2)
              color #FFFFFF
  .hero-graphics
    position absolute
    top 10%
    left 0
    bottom -100%
    padding-top 50%
    width 100%
    overflow hidden
    &__gate,
    &__gate-notches
      position absolute
      width 78%
      left 11%
      top 9.3%
    &__gate
      padding-bottom 78%
      border-radius 50%
      box-shadow inset 0 0.1875em 0.0625em 0 rgba(255, 255, 255, 0.3)
      border 1px solid rgba(255, 255, 255, 0.1)
      box-sizing content-box
      animation 3s gate infinite linear
      &:after
        content ""
        position absolute
        top 3.2%
        left 3.2%
        right 3.2%
        bottom 3.2%
        border-radius 50%
        box-shadow inset 0 -0.1875em 0.0625em 0 rgba(255, 255, 255, 0.3)
        border 1px solid rgba(255, 255, 255, 0.1)
        animation 1.4s gate infinite linear reverse
    &__gate-notches
      height auto
      animation 40s gate infinite linear
    &__star
      position absolute
      width 42%
      padding-bottom 42%
      left 29%
      top 20%
      // top 60vh
      border-radius 50%
      background #FFFFFF
      box-shadow 0px 0px 2.5em #263CFF, 0px 0px 8em #2D74FF
    &__planet
      position absolute
      width 126%
      padding-bottom 126%
      left -13%
      top 23.5%
      // top 68vh
      border-radius 50%
      background radial-gradient(84.49% 66.22% at 50% 59.94%, #000000 5.73%, #030419 71.48%, #0E1247 81.25%, #36299B 91.15%)
      box-shadow 0px -4.5em 4em rgba(28, 0, 238, 0.17), 0px -0.625em 0.5em rgba(92, 70, 255, 0.11), inset 0px 3.5em 3.5em rgba(48, 44, 245, 0.17), inset 0px 0.375em 0.75em rgba(104, 67, 252, 0.23)

@keyframes gate
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)

.section-intro
  position relative
  .section-title
    grid-column 1 / span 12
    grid-row 1 / 2
    font-weight 900
    font-size 100px
    line-height 112%
    letter-spacing -0.03em
    color #FFFFFF
    max-width 50rem
  .section-subtitle
    display flex
    justify-content flex-end
    flex-direction column
    margin-top -1.5em
    grid-row 2
    grid-column 6 / span 7
    font-size 2rem
    line-height 1.25
    letter-spacing -0.02em
    color #FFFFFF
  .section-graphics
    grid-row 3
    grid-column 1 / span 6
    position relative
    // font-size 1rem
  .section-statement
    position relative
    margin-top 3rem
    grid-column 6 / span 7
    grid-row 3
    max-width 30em
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    text-align left
    p
      color #CFD1E7
  .section-cta
    margin-top 3rem
    a
      display inline-block
      font-weight bold
      font-size 1.4375rem
      line-height 1.217
      letter-spacing -0.01em
      border-radius 6px
      padding 22px 0
      &:hover
        color inherit
  .title
    font-weight 900
    font-size 100px
    line-height 112%
    display flex
    align-items center
    letter-spacing -0.03em
    color var(--white)

.section-features
  position relative
  text-align left
  background linear-gradient(180deg, rgba(0,0,0,0) 0%, #030419 24%, #030419 69%, rgba(0,0,0,0) 100%)
  .section-header
    grid-row 1
    grid-column 6 / span 7
  .section-title
    grid-row 2
    margin-top 3rem
    margin-bottom 3rem
    font-weight 900
    font-size 5.125rem
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
    grid-column 6 / span 7
    text-align left
  .section-statement
    grid-row 3
    grid-column 6 / span 7
    max-width 30em
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
  .data-container
    position relative
    z-index 1
    grid-row 4
    margin-top 6rem
    display grid
    flex-direction row
    grid-column 1/ span 12
    grid-template-columns repeat(4, 1fr)
    gap 2rem
    .data-item
      border-top 1px dashed #282B53
      &__overline
        margin-top 1rem
        font-weight 600
        font-size 16px
        line-height 137.5%
        letter-spacing 0.08em
        text-transform uppercase
        color #989BB9
      &__heading
        margin-top 16px
        font-weight bold
        font-size 58px
        line-height 117.2%
        letter-spacing -0.03em
        color #CCD1FF
  .features-graphics
    grid-column 1 / span 8
    grid-row 5
    position relative
    font-size 1.5rem
  .ibc-item
    position relative
    grid-column 9 / span 4
    grid-row 5
    align-self center
    max-width 24em
    font-size 1rem
    line-height 1.625
    color #989BB9
    &__icon
      width 3em
      height 3em
    &__title
      margin-top 1.5rem
      font-weight bold
      font-size 1.75rem
      line-height 1.285
      letter-spacing -0.02em
      color #FFFFFF
    &__description
      margin-top 1rem
  .grid-container
    margin-top 20%
    display grid
    grid-template-columns repeat(9, 1fr)
    gap 6rem 2rem
    grid-column 4 / span 9
    grid-row 6
    color white
    .grid-item
      grid-column 1 / span 4
      max-width 24em
      font-size 1rem
      line-height 1.625
      color #989BB9
      &:nth-child(even)
        grid-column 6 / span 4
      &__icon
        width 3rem
        height 3rem
      &__title
        margin-top 1.5rem
        font-weight bold
        font-size 1.75rem
        line-height 1.285
        letter-spacing -0.02em
        color #FFFFFF
      &__description
        margin-top 1rem

.section-prepare
  .section-header
    grid-column 1 / span 12
    grid-row 1
  .section-title
    grid-column 1 / span 5
    grid-row 2 / 3
    margin-top 3rem
    font-weight 900
    font-size 5.125rem
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
    text-align left
    max-width 50rem
  .section-statement
    position relative
    z-index 1
    grid-column 6 / span 7
    grid-row 3
    margin-top -2.5rem
    max-width 30em
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
    text-align left
  .grid-container
    margin-top 8rem
    display grid
    grid-template-columns repeat(12, 1fr)
    gap 6rem 2rem
    grid-column 1 / span 12
    grid-row 4
    font-size 1.1875rem
    line-height 1.579
    letter-spacing -0.005em
    color #989BB9
    justify-items center
    .grid-item
      position relative
      text-align center
      max-width 24em
      padding-top 1.5rem
      grid-column-end span 5
      display flex
      flex-direction column
      &:nth-child(even)
        grid-column-start 8
      &:before,
      &:after
        content ""
        position absolute
        top 0
        width 3rem
        border-top 1px dashed #282B53
      &:before
        left 0
      &:after
        right 0
      &__hex
        position absolute
        bottom -3rem
        left 30%
        width 130%
      &__icon
        position relative
        width 48px
        height 48px
        margin 0 auto
      &__title
        position relative
        margin-top 1.5rem
        font-weight bold
        font-size 2.5rem
        line-height 1.2
        letter-spacing -0.03em
        color #FFFFFF
      &__description
        position relative
        margin-top 1rem
        font-size 19px
        line-height 1.579
        letter-spacing -0.005em
        color #989BB9

.section-nav
  position sticky
  position -webkit-sticky
  top -1px
  width 100%
  z-index 10
  backdrop-filter blur(30px)
  // &.headroom--not-top
  //   backdrop-filter blur(30px)
  .nav
    overflow scroll
    white-space nowrap
    font-size 1.1875rem
    line-height 1.263
    letter-spacing -0.005em
    &__list
      display flex
      flex-direction row
      justify-content center
      list-style none
      padding-left 1.5rem
      padding-right 1.5rem
      &__item
        + .nav__list__item
          margin-left 2rem
        a
          display inline-block
          padding 1.25rem 0
          position relative
          z-index 1
          color #989BB9
          &:hover,
          &:focus
            color #ECEDF7
          &:hover:before
            visibility visible
            transform scaleX(1)
          &:before
            content ""
            position absolute
            width 100%
            height 2px
            bottom 2px
            z-index -1
            border-radius 4px
            background-color #3B2AB7
            visibility hidden
            transform scaleX(0)
            transition all 300ms cubic-bezier(0.325, -0.075, 0, 1.65)

.section-launchpad
  .section-header
    grid-column 6 / span 7
  .section-left
    grid-column 1/5
    grid-row 2
    margin-top 3rem
    &__heading
      font-size 1.4375rem
      line-height 121.7%
      letter-spacing -0.01em
      color #989BB9
    &__title
      margin-top 8px
      font-weight bold
      font-size 40px
      line-height 120%
      letter-spacing -0.03em
      color #FFFFFF
      text-align start
  .section-statement
    margin-top 3rem
    grid-column 6/12
    max-width 30em
    font-size 1.1875rem
    line-height 1.579
    letter-spacing -0.01em
    color #989BB9
    display flex
    flex-direction column
    flex-wrap nowrap
    align-items flex-start
    justify-content left
    &__p
      color inherit
  .section-cta
    margin-top 2.25rem
    a
      display inline-block
      font-weight bold
      font-size 19px
      line-height 1.263
      letter-spacing -0.005em
      border-radius 6px

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
    grid-column 5 / span 8
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

.section-contributors
  .section-header
    grid-column 6 / span 7
  .section-title
    margin-top 3rem
    grid-column 1/7
    font-weight 900
    font-size 5.125rem
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
  .section-statement
    align-self end
    grid-column 6 / span 7
    font-size 1.4375rem
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
    max-width 30em
    margin-bottom 3rem
  .section-list
    color #fff
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
        transition color .1s ease-out
        &__role
          font-weight normal
          font-size 1rem
          color #989BB9
          padding-left 0.5rem
          vertical-align bottom
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
        transform translateX(3px)


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
      .articles-item
        display block
        text-align left
        padding 2rem
        background linear-gradient(249.43deg, #030419 0%, #121435 100%)
        box-shadow 0px 15px 33px rgba(0, 3, 66, 0.11), 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.07)
        border-radius 1.25rem
        margin-top 1.5rem
        position relative
        transition all .25s ease-out
        &:hover:not(:active)
          background linear-gradient(246.27deg, #121435 0%, #121435 100%)
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
          color #FFFFFF
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
      box-shadow 0px 15px 33px rgba(0, 3, 66, 0.11), 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.07)
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

// TODO: temp fix for moz
@supports not (backdrop-filter: none)
  .section-nav.headroom--not-top
    background linear-gradient(to bottom, rgb(0,0,0) 30%, rgba(0,0,0,0) 100%)
    filter saturate(180%)

@media screen and (max-width: 1919px)
  .section-container
    padding-left 8rem
    padding-right 8rem

@media screen and (max-width: 1438px)
  .section-videos
    .container
      .frame
        grid-column 1 / 8
      .text
        grid-column 8 / span 4

@media screen and (max-width: 1279px)
  .section
    padding-top 6rem
    padding-bottom 6rem

  .section-container
    padding-left 6rem
    padding-right 6rem

  .section-features
    .features-graphics
      font-size 1.25rem
    .grid-container
      grid-column 1/span 12

@media screen and (max-width: 1024px)
  .section
    padding-top 4rem
    padding-bottom 4rem

  .section-container
    padding-left 4rem
    padding-right 4rem
    display block

  .section-hero
    display grid
    .container
      .headings
        .subtitle
          font-size 1.75rem
          line-height 1.571
          letter-spacing -0.015em
          margin-top 2rem

  .section .section-header
      grid-column 1 / span 12

  .section-nav
    .nav
      &::-webkit-scrollbar
        display none
      &__list
        display flex
        flex-direction row
        justify-content space-between
        transition transform 200ms ease 0s
        overflow-x scroll
        overflow-y hidden
        white-space nowrap
        width fit-content
        -webkit-overflow-scrolling touch

  .section-intro
    .section-title
      grid-row 1
      grid-column 1 / span 12
      font-size 4rem
    .section-subtitle
      margin-top 2rem
      grid-row 2
      grid-column 1 / span 12
    .section-graphics
      grid-row 3
      grid-column 2 / span 8
    .section-statement
      grid-row 4
      grid-column 1 / span 12

  .section-features
    overflow hidden
    .section-title
      grid-column 1 / 12
      font-size 4rem
    .section-statement
      grid-column 1 / 12
    .data-container
      grid-template-columns repeat(2, 1fr)
    .features-graphics
      grid-column 1 / span 10
    .ibc-item
      grid-row 6
      grid-column 1 / 12
      margin-top 2rem
    .grid-container
      grid-row 7

  .section-prepare
    overflow hidden
    .section-title
      grid-column 1 / 12
      font-size 4rem
    .section-statement
      grid-column 1 / 12
      margin-top 4rem
    .grid-container
      .grid-item
        &:nth-child(even),
        &:nth-child(odd)
          grid-column 1/12

  .section-launchpad
    .section-left,
    .section-statement
      grid-column 1 / 12

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
    .section-title
      font-size 4rem
    .section-statement
      grid-column 1/12
      margin-top 4rem
      margin-left 0rem
    .section-list
      margin-top 0
      grid-column 1 / span 12

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
  .section
    .section-header
      font-size 1rem
      line-height 1.375

  .section-container
    padding-left 1.5rem
    padding-right 1.5rem
    padding-top 1.5rem

  .section-hero
    .hero-graphics
      font-size 0.5rem

  .section-intro
    .section-graphics
      font-size 0.75rem
    .section-statement
      margin-top 1rem

  .section-features
    .features-graphics
      font-size 1rem

  .section-prepare
    .grid-container
      gap 3rem 2rem
      margin-top 4rem
      .grid-item
        &__title
          font-size 1.4375rem
          line-height 1.217
          letter-spacing -0.01em
        &__description
          font-size 1rem
          line-height 1.625
          letter-spacing 0

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

  .nav-primary
    .logo
      height 1.25rem
    a
      padding 0.75rem
      .text
        display none
      .icon
        display block

  .section-hero
    min-height 32rem
    max-height 42rem
    margin-bottom 3rem
    .section-container
      padding-top 0.75rem
      padding-bottom 2rem
    .container
      .nav-primary
        margin-bottom 3rem
      .headings
        .title
          padding-left 1rem
          padding-right 1rem
        .subtitle
          font-size 1.1875rem
          line-height 1.579
          letter-spacing -0.005em
          margin-top 1.5rem
      .bottom
        margin-top 45%
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
    .hero-graphics
      font-size 0.36rem

  .section-nav
    .nav
      font-size 1rem
      line-height 1.375
      letter-spacing 0
      &__list__item a
        padding 0.8125rem 0

  .section-intro
    .section-graphics
      grid-column 1 / span 10
      font-size 0.5rem
    .section-cta a
      font-size 1rem
      line-height 1.375
      letter-spacing 0
      padding 0.8125rem 0

  .section-features
    .data-container
      margin-top 3rem
      .data-item
        &__overline
          font-size 0.8125rem
          line-height 1.384
        &__heading
          font-size 2.5rem
          line-height 1.2
    .features-graphics
      font-size 0.5rem
    .grid-container
      margin-top 3rem
      gap 3rem 2rem
      .grid-item
        &:nth-child(even),
        &:nth-child(odd)
          grid-column 1/span 12
          grid-template-columns repeat(1, 1fr)

    .ibc-item__title,
    .grid-container .grid-item__title
      font-size 1.4375rem
      line-height 1.217
      letter-spacing -0.01em

  .section-prepare
    .section-statement
      margin-top 2rem

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
    .section-statement
      margin-top 2rem

  .section-articles .content
    margin-top 2rem
    .articles-wrapper .articles-item
      padding 1.5rem
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



@media screen and (max-width: 414px)
  main
    overflow-x hidden

  .section-roadmap .section-row .meter
    width 100%

@media screen and (max-width: 375px)
  .section-container .container
    grid-gap unset
    gap unset

  .section-features .grid-container .grid-item
    max-width 20em

@media screen and (max-width: 320px)
  .section-features
    .grid-container
      .grid-item
        &:nth-child(even),
        &:nth-child(odd)
          grid-column 1/span 9

  .section-prepare
    .grid-container
      .grid-item
        &:nth-child(even),
        &:nth-child(odd)
          grid-column 1/span 9

  .section-articles
    .section-title
      max-width 17rem

  .section-community .cards__item
    padding 1.5rem

@media screen and (min-width: 1536px)
  .section-hero
    .hero-graphics
      overflow visible

@media screen and (min-width: 1920px)
  .section
    padding-top 8rem
    padding-bottom 8rem

  .section-container
    padding-left 12rem
    padding-right 12rem
</style>
