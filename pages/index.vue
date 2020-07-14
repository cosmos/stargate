<template>
  <div>
    <div class="section-hero section-width">
      <div class="container">
        <logo-wordmark />
        <div class="title">
          stargate
        </div>
        <div class="subtitle">
          The Internet of Blockchains is on the horizon.
        </div>
        <div class="bottom">
          <code class="bottom__countdown">T minus {{ countdownTimer }}d</code>
          <div class="bottom__get-notified">
            Get notified when testnets start
          </div>
          <div class="bottom__form">
            <form
              :action="url"
              method="POST"
              target="_blank"
              rel="noreferrer noopener"
              @submit.prevent="actionSubmitEmail"
            >
              <div class="bottom__form__input">
                <input
                  v-model="email"
                  name="CONTACT_EMAIL"
                  class="bottom__form__input__input"
                  type="email"
                  placeholder="Your email"
                />
                <icon-arrow-right
                  class="bottom__form__input__icon"
                  @click="actionSubmitEmail"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="section-nav">
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
        </ul>
      </nav>
    </div>

    <div id="intro" class="section-intro section-width">
      <div class="section-title">A new era for Cosmos</div>
      <div class="section-subtitle">
        The biggest event in the ecosystem since the launch of the Cosmos Hub.
      </div>
      <div class="section-statement">
        Stargate is a set of upgrades that complete the original roadmap laid
        out in the Cosmos Whitepaper. For the first time ever, Cosmos
        blockchains will be able to connect with each other using the first
        standardized protocol for inter-blockchain communication (IBC).
      </div>
      <div class="section-cta">
        <a
          href="https://www.youtube.com/watch?v=mlq5GzQTIAM"
          target="_blank"
          rel="noreferrer noopener"
        >
          Read more about Stargate &#8594;
        </a>
      </div>
    </div>

    <div id="features" class="section-features section-width">
      <div class="section-header">Features</div>
      <div class="section-title">What’s new?</div>
      <div class="section-statement">
        These upgrades bring significant performance improvements to blockchains
        built with Cosmos SDK. Discover all the amazing features of the Stargate
        upgrade below.
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
      <div class="ibc-item">
        <div class="ibc-item__icon">
          <icon-ibc-cropped />
        </div>
        <div class="ibc-item__title">Inter-Blockchain Communication</div>
        <div class="ibc-item__description">
          Cosmos SDK-based blockchains can incorporate the Inter-Blockchain
          Communication (IBC) Protocol to communicate with other compatible
          blockchains. The Cosmos Hub is the first blockchain to support IBC in
          production.
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
            synchronization process will be reduced from 2 days to just 30 mins
            or less.
          </div>
        </div>
        <div class="grid-item">
          <div class="grid-item__icon">
            <icon-repeat />
          </div>
          <div class="grid-item__title">Automatic upgrades</div>
          <div class="grid-item__description">
            The upgrade module facilitates the upgrade process of chains built
            with Cosmos SDK. Migration from one version to the next will take
            little to no time, as opposed to one hour or more before.
          </div>
        </div>
        <div class="grid-item">
          <div class="grid-item__icon">
            <icon-mask-oval />
          </div>
          <div class="grid-item__title">Full-featured Light Clients</div>
          <div class="grid-item__description">
            Protobuf brings performance improvements and developer acceleration
            to Cosmos SDK-based blockchains with efficiency gains of 10-100x,
            and wider language support.
          </div>
        </div>
        <div class="grid-item">
          <div class="grid-item__icon">
            <icon-speedometer />
          </div>
          <div class="grid-item__title">Transition from Amino to Protobuf</div>
          <div class="grid-item__description">
            Protobuf brings performance improvements and developer acceleration
            to Cosmos SDK-based blockchains with efficiency gains of 10-100x,
            and wider language support.
          </div>
        </div>
      </div>
    </div>

    <div id="prepare" class="section-prepare section-width">
      <div class="section-header">Prepare</div>
      <div class="section-title">Get set for testnets</div>
      <div class="section-statement">
        The following services will be affected by the upgrades with Stargate.
        Make sure to schedule time in August for integration testing on the
        testnet. More detailed instructions & guidelines on how services can
        prepare for the upgrade will be published in August.
      </div>
      <div class="grid-container">
        <div class="grid-item">
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
          <div class="grid-item__icon">
            <icon-explore />
          </div>
          <div class="grid-item__title">Wallets & Explorers</div>
          <div class="grid-item__description">
            This release will bring breaking changes to all wallets and
            explorers of chains that will implement the Stargate Upgrade
            (including Cosmos Hub).
          </div>
        </div>
        <div class="grid-item">
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
          <div class="grid-item__icon">
            <icon-sdk-hex />
          </div>
          <div class="grid-item__title">Zone Developers</div>
          <div class="grid-item__description">
            If you're developing a blockchain with Cosmos SDK, please prepare to
            join the Stargate testnet. More detailed guides to follow shortly.
          </div>
        </div>
      </div>
    </div>

    <div id="launchpad" class="section-launchpad section-width">
      <div class="section-header">a note for zone developers</div>
      <div class="section-left">
        <div class="section-left__heading">Not ready to upgrade?</div>
        <div class="section-left__title">Launchpad</div>
      </div>
      <div class="section-statement">
        <div class="section-statement__p">
          Stargate involves a lot of breaking changes that may make it difficult
          for you to upgrade, if you have already written a lot of code for
          Cosmos SDK 0.37/0.38.
        </div>
        <br />
        <div class="section-statement__p">
          The community supports an SDK 0.39 Launchpad release that includes
          backported bug fixes. The
          <a v-scroll-to="'#contributors'">Cosmos development teams</a> are
          working together to document a clean migration path from Launchpad to
          a stable Stargate release.
        </div>
        <div class="section-cta">
          <a
            href="https://www.youtube.com/watch?v=mlq5GzQTIAM"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check out the release &#8594;
          </a>
        </div>
      </div>
    </div>

    <div id="roadmap" class="section-roadmap section-width">
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
        :style="{
          '--progress-bar-background-color': `${bgColor[item.logo][0]}`,
          '--progress-bar-box-shadow': `${bgColor[item.logo][1]}`,
        }"
      >
        <div
          class="meter"
          :style="{
            '--progress-bar-width': `${item.progress}%`,
            '--progress-bar-background-color': `${bgColor[item.logo][0]}`,
          }"
        >
          <div class="icon__wrapper">
            <div class="icon">
              <component :is="`icon-${item.logo}`" />
            </div>
          </div>
          <div class="details">
            <div class="text">
              <div class="title">{{ item.title }}</div>
              <div class="subtitle">{{ item.repo }}</div>
            </div>
            <div class="indicator">
              <div v-if="item.progress" class="progress__wrapper">
                <div class="h3">{{ item.progress }}% complete</div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div class="section-status">
        <div class="section-status__title">Status updates</div>
      </div>
    </div>

    <div id="contributors" class="section-contributors section-width">
      <div class="section-header">Contributors</div>
      <div class="section-title">Core Developers</div>
      <div class="section-statement">
        Stargate is made possible through the hard work and coordination of many
        dedicated teams contributing to development on Cosmos SDK, Tendermint
        Core, IBC and Gaia.
      </div>
      <div class="team-img"></div>
    </div>

    <div id="articles" class="section-articles section-width">
      <div class="section-header">3 Articles</div>
      <div class="section-title">Learn more about Stargate</div>
      <!-- <div class="learn-more-graphics"></div> -->
      <div class="content">
        <div class="articles-wrapper">
          <a
            href="https://figment.network/resources/cosmos-stargate-upgrade-overview"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div class="articles-item">
              <span class="articles-item__icon">
                <icon-arrow-top-right />
              </span>
              <div class="articles-item__date">June 22</div>
              <div class="articles-item__title">
                Cosmos Stargate Upgrade Overview
              </div>
              <div class="articles-item__description">
                Introducing Stargate, the largest Cosmos upgrade yet. Stargate
                will enable higher transaction throughput, cross-chain
                transactions, accelerate UI development, and so much more.
              </div>
            </div>
          </a>
          <a
            href="https://medium.com/tendermint/tendermint-0-34-protocol-buffers-and-you-8c40558939ae"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div class="articles-item">
              <span class="articles-item__icon">
                <icon-arrow-top-right />
              </span>
              <div class="articles-item__date">June 23</div>
              <div class="articles-item__title">
                Tendermint Ø.34, Protocol Buffers, and You
              </div>
              <div class="articles-item__description">
                The upcoming Tendermint Ø.34 release contains a major change to
                the way we serialize and encode data. Here’s what you need to
                know.
              </div>
            </div>
          </a>
          <a
            href="https://medium.com/tendermint/everything-you-need-to-know-about-the-tendermint-light-client-f80d03856f98"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div class="articles-item">
              <span class="articles-item__icon">
                <icon-arrow-top-right />
              </span>
              <div class="articles-item__date">June 25</div>
              <div class="articles-item__title">
                Everything you need to know about the Tendermint Light Client
              </div>
              <div class="articles-item__description">
                What is it, why it’s needed and how it works.
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div id="videos" class="section-videos section-width">
      <div class="section-header">Videos</div>
      <div class="container">
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
            Stargate Q&A with Zaki Manian
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

    <div id="community" class="section-community section-width">
      <div class="section-header">Community</div>
      <div class="cards">
        <div class="cards__item">
          <div class="cards__item__caption">connect</div>
          <div class="cards__item__title">Join the community</div>
          <div class="cards__item__description">
            Learn about Cosmos, get to know the community, connect with other
            Cosmonauts and more.
          </div>
        </div>
        <div class="cards__item">
          <div class="cards__item__caption">chat</div>
          <div class="cards__item__title">Discuss Stargate</div>
          <div class="cards__item__description">
            Join the
            <a
              href="https://discord.com/channels/669268347736686612/723170066937413693"
              target="_blank"
              rel="noreferrer noopener"
            >
              <code>#stargate</code>
            </a>
            channel in the Cosmos community Discord and chat with developers.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'
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
      email: null,
      url: 'https://app.mailerlite.com/webforms/submit/d7i4g7',
      formData: {
        callback: 'jQuery1830520133881537445_1594145870016',
        'ml-submit': '1',
        ajax: '1',
        guid: '6ca22b31-4124-e926-cf4f-272ff9f44ec3',
        _: '1594145875469',
      },
      milestoneList: [],
      sources: [
        ['cosmos/cosmos-sdk', 25, 'sdk', 'Cosmos SDK 0.40'],
        ['tendermint/tendermint', 27, 'core', 'Tendermint Core 0.34'],
        ['cosmos/cosmos-sdk', 21, 'ibc', 'Cosmos SDK – IBC 1.0 Milestone'],
      ],
      // TODO: fix negative horizontal offset value
      bgColor: {
        sdk: [
          'linear-gradient(95.47deg, #320B93 0%, #3B2AB7 100%)',
          'inset -140px 0px 0px rgba(0, 8, 85, 0.405)',
        ],
        core: [
          'linear-gradient(95.47deg, #086108 0%, #018A01 100%)',
          'inset -90px 0px 0px rgba(0, 8, 85, 0.405)',
        ],
        ibc: [
          'linear-gradient(95.47deg, #121435 0%, #282B53 100%)',
          'inset -155.8px 0px 0px rgba(0, 8, 85, 0.405)',
        ],
      },
    }
  },
  computed: {
    emailInvalid() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !re.test(String(this.email))
    },
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
  },
  mounted() {
    this.sources.forEach(async (source) => {
      const milestone = await this.getMilestone.apply(null, source)
      this.milestoneList.push(milestone)
    })
  },
  methods: {
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
    },
    async getMilestone(repo, id, logo, defaultTitle, defaultProgress) {
      const url = `https://github.com/${repo}/milestone/${id}`
      try {
        const api = `https://api.github.com/repos/${repo}/milestones/${id}`
        const m = (await axios.get(api)).data
        const title = m.title
        const open = parseInt(m.open_issues)
        const closed = parseInt(m.closed_issues)
        const progress = Math.floor((100 * closed) / (open + closed)).toFixed(0)
        return { title, repo, progress, logo, url }
      } catch {
        return {
          repo,
          logo,
          url,
          title: defaultTitle,
          progress: null,
        }
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
// testing
// *
//   background: #000 !important;
//   color: #0f0 !important;
//   outline: solid #f00 1px !important;


button#op-button
  display none !important

.section-width
  display grid
  grid-template-columns repeat(12, 1fr)
  // grid-column-gap 1rem
  max-width 74rem
  width 100%
  margin 0 auto
  padding 8rem 1rem

.section-hero
  display flex
  justify-content center
  align-items center
  text-align center
  .container
    margin 0 auto
    max-width 879px
    width 100%
    .title
      margin-top 199px
      text-transform uppercase
      font-weight 900
      font-size 118px
      line-height 108.4%
      letter-spacing 0.28em
      color var(--white)
    .subtitle
      margin-top 1rem
      font-size 2rem
      line-height 150%
      letter-spacing -0.02em
      color #989BB9
    .bottom
      margin-top 11.375rem
      margin-left auto
      margin-right auto
      max-width 360px
      width 100%
      &__countdown
        font-size 19px
        line-height 1.579
        letter-spacing -0.005em
        color #CCD1FF
        border 1px solid rgba(255, 255, 255, 0.1)
        border-radius 0.5rem
        padding 0.25rem 0.75rem
      &__get-notified
        margin-top 3rem
        font-weight bold
        font-size 1rem
        line-height 1.375
        color #CFD1E7
      &__form
        margin-top 16px
        &__input
          display flex
          position relative
          align-items center
          &__icon
            max-width 20%
            position absolute
            right 0
            height 2rem
            fill var(--white)
          &__input
            outline none
            max-width 360px
            width 100%
            background rgba(255, 255, 255, 0.1)
            box-shadow 0px 20px 44px rgba(0, 3, 66, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.07)
            border none
            border-radius 10px
            padding 20px 24px
            height 64px
            -webkit-backdrop-filter saturate(180%) blur(10px)
            backdrop-filter saturate(180%) blur(10px)
            font-weight 400
            font-size 19px
            line-height 1.263
            letter-spacing -0.005em
            color #989BB9
            opacity 0.7
            transition all 0.15s

.section-intro
  .section-title
    grid-column 1 / span 5
    font-weight 900
    font-size 100px
    line-height 112%
    letter-spacing -0.03em
    color #FFFFFF
    max-width 677px
  .section-subtitle
    display flex
    justify-content flex-end
    flex-direction column
    grid-row 1
    grid-column 6 / span 12
    font-size 2rem
    line-height 125%
    letter-spacing -0.02em
    color #FFFFFF
  .section-statement
    margin-top 3rem
    grid-column 6 / span 12
    grid-row 2
    max-width 636px
    font-size 23px
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
    text-align left
  .section-cta
    grid-row 3
    margin-top 3rem
    grid-column 6 / span 12
    font-weight bold
    font-size 23px
    line-height 121.7%
    letter-spacing -0.01em
    border-radius 6px
    padding 22px 0
    a
      color #40B3FF

.section-features
  text-align left
  .section-header
    grid-row 1
    height 48px
    font-weight 600
    font-size 19px
    line-height 1.263
    letter-spacing 0.08em
    text-transform uppercase
    color #989BB9
    border-top 1px solid #282B53
    display flex
    flex-direction column
    grid-column 6 / span 12
    justify-content flex-end
  .section-title
    grid-row 2
    margin-top 2rem
    margin-bottom 2rem
    font-weight 900
    font-size 82px
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
    grid-column 6 / 12
    text-align left
  .section-statement
    grid-row 3
    grid-column 6 / 11
    max-width 677px
    font-size 23px
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
  .data-container
    grid-row 4
    margin-top 96px
    display grid
    flex-direction row
    grid-column 1/13
    grid-template-columns repeat(4, 1fr)
    gap 2rem
    .data-item
      &__overline
        margin-top 16px
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
  .ibc-item
    grid-column 9 / span 12
    grid-row 5
    margin 4rem 0
    &__icon
      width 48px
      height 48px
    &__title
      margin-top 24px
      font-weight bold
      font-size 40px
      line-height 120%
      letter-spacing -0.03em
      color #FFFFFF
    &__description
      margin-top 16px
      font-size 19px
      line-height:1.579
      letter-spacing -0.005em
      color #989BB9
  .grid-container
    margin-top 8rem
    display grid
    grid-template-columns repeat(2, 1fr)
    gap 6rem
    grid-column 4 / span 12
    grid-row 6
    color white
    .grid-item
      text-align left
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
        font-size 1rem
        line-height 162.5%
        color #989BB9

.section-prepare
  .section-header
    height 48px
    font-weight 600
    font-size 19px
    line-height 1.263
    letter-spacing 0.08em
    text-transform uppercase
    color #989BB9
    border-top 1px solid #282B53
    display flex
    flex-direction column
    grid-column 1 / span 12
    justify-content flex-end
    text-align left
  .section-title
    grid-column 1 / span 5
    margin-top 4.25rem
    font-weight 900
    font-size 82px
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
    text-align left
    max-width 677px
  .section-statement
    grid-column 5 / span 12
    grid-row 3
    max-width 636px
    font-size 23px
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
    text-align left
  .grid-container
    margin-top 136px
    display grid
    grid-template-columns repeat(2, 1fr)
    gap 6rem
    grid-column 1 / span 12
    grid-row 4
    color white
    .grid-item
      text-align left
      display grid
      &__icon
        width 48px
        height 48px
      &__title
        margin-top 24px
        font-weight bold
        font-size 40px
        line-height 120%
        letter-spacing -0.03em
        color #FFFFFF
      &__description
        margin-top 16px
        font-size 19px
        line-height:1.579
        letter-spacing -0.005em
        color #989BB9

.section-intro
  .container
    margin 8rem
    .title
      font-weight 900
      font-size 100px
      line-height 112%
      display flex
      align-items center
      letter-spacing -0.03em
      color var(--white)

.section-nav
  position sticky
  position -webkit-sticky
  top 0
  width 100%
  z-index 10
  backdrop-filter saturate(180%) blur(10px)
  -webkit-backdrop-filter saturate(180%) blur(10px)
  transition background-color 300ms ease 0s
  .nav
    overflow scroll
    white-space nowrap
    margin-left 2.5rem
    margin-right 2.5rem
    &__list
      display flex
      flex-direction row
      justify-content center
      list-style none
      &__item
        margin 2rem
        color var(--white)
        a
          position relative
          z-index 1
          &:hover:before
            visibility visible
            transform scaleX(1)
          &:before
            content ""
            position absolute
            width 100%
            height 2px
            bottom -1rem
            z-index -1
            border-radius 4px
            background-color var(--link)
            visibility hidden
            transform scaleX(0)
            transition all 300ms cubic-bezier(0.325, -0.075, 0, 1.65)

.section-launchpad
  .section-header
    height 48px
    font-weight 600
    font-size 19px
    line-height 1.263
    letter-spacing 0.08em
    text-transform uppercase
    color #989BB9
    border-top 1px solid #282B53
    display flex
    flex-direction column
    grid-column 6 / span 12
    justify-content flex-end
    text-align left
  .section-left
    grid-column 1/5
    grid-row 2
    margin-top 3rem
    &__heading
      font-size 23px
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
    grid-column 6/13
    font-size 23px
    line-height 1.565
    letter-spacing -0.01em
    color #989BB9
    display flex
    flex-direction column
    flex-wrap nowrap
    align-items flex-start
    justify-content left
    &__p
      color inherit
      a
        color #40B3FF
  .section-cta
    margin-top 2.25rem
    font-weight bold
    font-size 19px
    line-height 1.263
    letter-spacing -0.005em
    border-radius 6px
    a
      color #40B3FF

.section-roadmap
  .section-header
    height 48px
    font-weight 600
    font-size 19px
    line-height 1.263
    letter-spacing 0.08em
    text-transform uppercase
    color #989BB9
    border-top 1px solid #282B53
    display flex
    flex-direction column
    grid-column 6 / span 12
    justify-content flex-end
    text-align left
  .section-title
    margin-top 2rem
    margin-bottom 2rem
    font-weight 900
    font-size 5rem
    line-height 112%
    text-align right
    letter-spacing -0.03em
    color #FFFFFF
    grid-column 6 / span 12
    justify-content flex-end
  .section-milestones
    grid-column 1 / 2
    grid-row 3 / 6
    &__title
      margin-top 2rem
      grid-column 1 / span 4
      font-weight bold
      font-size 2.5rem
      line-height 120%
      letter-spacing -0.03em
      text-align start
      color #FFFFFF
    &__cta
      font-weight bold
      font-size 19px
      line-height 1.26
      letter-spacing -0.005em
      border-radius 0.375rem
      padding 20px 0px
      a
        color #40B3FF
  .section-row
    margin-top 2rem
    grid-column 6/span 12
    display grid
    align-items center
    box-shadow var(--progress-bar-box-shadow)
    background var(--progress-bar-background-color, linear-gradient(95.47deg, #121435 0%, #282B53 100%))
    color white
    grid-auto-flow column
    border-radius 0.5rem
    transition all .25s
    .meter
      width var(--progress-bar-width, 0)
      background var(--progress-bar-background-color, linear-gradient(95.47deg, #121435 0%, #282B53 100%))
      border-radius 0.5rem
      display inline-flex
    .icon__wrapper
      display flex
      align-items center
      .icon
        grid-column-start 1
        width 3rem
        height 3rem
        fill var(--white)
        opacity 0.32
        margin 2rem
        display flex
        align-items center
        justify-content center
        transition opacity .25s
    .details
      margin-right 2rem
      grid-column-start 2
      display grid
      grid-auto-flow column
      align-items center
      gap 1rem
      text-align left
      justify-content space-between
      width -webkit-fill-available
      width -moz-available
      .title
        font-weight 500
        font-size 1.25rem
        letter-spacing -0.01em
        display block
      .subtitle
        font-size 16px
        line-height 1.375
        color rgba(255, 255, 255, 0.75)
      .indicator
        display flex
        flex-direction row
        align-items flex-end
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
  .section-status
    grid-column 1 / 3
    grid-row 6
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

.section-contributors
  .section-header
    padding-top 1.5rem
    height 48px
    font-weight 600
    font-size 19px
    line-height 1.263
    letter-spacing 0.08em
    text-transform uppercase
    color #989BB9
    border-top 1px solid #282B53
    display flex
    flex-direction column
    grid-column 6 / span 12
  .section-title
    margin-top 3rem
    grid-column 1/4
    font-weight 900
    font-size 5.125rem
    line-height 1.121
    letter-spacing -0.025em
    color #FFFFFF
  .section-statement
    margin-top 9.625rem
    margin-left 2rem
    grid-column 7/13
    font-size 23px
    line-height 1.565
    letter-spacing -0.01em
    color #CFD1E7
    text-align initial
    max-width 576px
  // .team-img
  //   grid-row 4
  //   background-image url("/teams.svg")
  //   background-position center
  //   background-size contain
  //   background-repeat no-repeat

.section-articles
  // padding-bottom 0
  .section-header
    height 48px
    font-weight 600
    font-size 19px
    line-height 1.263
    letter-spacing 0.08em
    text-transform uppercase
    color #989BB9
    border-top 1px solid #282B53
    display flex
    flex-direction column
    grid-column 6 / span 12
    justify-content flex-end
    text-align left
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
  .learn-more-graphics
    background-image url("/learn-more-graphics.svg")
    background-position center
    background-size contain
    background-repeat no-repeat
    grid-row 2
  .content
    grid-column 6 / span 12
    grid-row 2
    margin-top -4rem
    .articles-wrapper
      .articles-item
        text-align left
        padding 3rem
        background linear-gradient(249.43deg, #030419 0%, #121435 100%)
        box-shadow 0px 15px 33px rgba(0, 3, 66, 0.11), 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.07)
        border-radius 1.25rem
        margin-top 2rem
        position relative
        &:hover
          transform translateY(-5px)
          transition all .25s ease-in-out
        &__icon
          position absolute
          width 24px
          height 24px
          top 1.5rem
          right 1.5rem
        &__date
          font-size 13px
          line-height 1.538
          letter-spacing 0.001em
          color #989BB9
        &__title
          margin-top 12px
          font-weight bold
          font-size 28px
          line-height 1.285
          letter-spacing -0.02em
          color #FFFFFF
        &__description
          margin-top 12px
          font-size 16px
          line-height 1.375
          color #989BB9

.section-videos
  display grid
  grid-template-columns repeat(12,1fr)
  text-align center
  padding-top 0
  padding-bottom 0
  .section-header
    height 48px
    font-weight 600
    font-size 19px
    line-height 1.263
    letter-spacing 0.08em
    text-transform uppercase
    color #989BB9
    border-top 1px solid #282B53
    display flex
    flex-direction column
    grid-column 6 / span 12
    justify-content flex-end
    text-align left
  .container
    margin-top 6rem
    display grid
    grid-template-columns 1fr 1fr
    gap 2rem
    grid-column 1 / span 12
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
      grid-column 9 / span 12
      position relative
      &__caption
        font-size 16px
        line-height 1.625
        color #989BB9
      &__title
        margin-top 8px
        font-weight bold
        font-size 32px
        line-height 125%
        letter-spacing -0.025em
        color #FFFFFF
      &__cta
        font-weight bold
        font-size 16px
        line-height 137.5%
        display flex
        align-items center
        text-align center
        border-radius 8px
        position absolute
        bottom 0
        right 0
        padding 13px 0px
        a
          color #40B3FF

.section-community
  .section-header
    height 48px
    font-weight 600
    font-size 19px
    line-height 1.263
    letter-spacing 0.08em
    text-transform uppercase
    color #989BB9
    border-top 1px solid #282B53
    display flex
    flex-direction column
    grid-column 6 / 13
    justify-content flex-end
    text-align left
  .cards
    margin-top 6rem
    display grid
    grid-template-columns 1fr 1fr
    gap 2rem
    grid-column 1 / 13
    &__item
      padding 3rem
      background linear-gradient(256.92deg, #120018 0%, #121435 100%)
      box-shadow 0px 15px 33px rgba(0, 3, 66, 0.11), 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.07)
      border-radius 1.25rem
      display flex
      flex-direction column
      flex-wrap nowrap
      // align-items start
      justify-content flex-start
      color var(--white)
      height 338px
      background url("/reverse-graphics.svg"), linear-gradient(256.92deg, #121435 0%, #030419 100%)
      background-position bottom center
      background-size contain
      background-repeat no-repeat
      &:first-child
        background url("/split-graphics.svg"), linear-gradient(256.92deg, #121435 0%, #030419 100%)
        justify-content flex-end
        background-position top center
        background-size contain
        background-repeat no-repeat
      &__caption
        font-weight 600
        font-size 16px
        line-height 1.375
        letter-spacing 0.08em
        text-transform uppercase
        color #989BB9
      &__title
        margin-top 12px
        font-weight bold
        font-size 32px
        line-height 125%
        letter-spacing -0.025em
        color #FFFFFF
      &__description
        margin-top 12px
        font-size 19px
        line-height 1.579
        letter-spacing -0.005em
        color #989BB9

// TODO: temp fix for moz
@supports not (backdrop-filter: none)
  .section-nav
    background-color rgba(22, 22, 26, 0.9)
    z-index 2
    filter saturate(180%)
    transition: background-color 300ms ease 0s

// @media all and (max-width: 1600px)
// @media all and (max-width: 1400px)

@media all and (max-width: 1200px)
  .section-features
    .grid-container
      grid-column 1/span 12

@media screen and (max-width: 900px)
  .section-width
    padding 3rem 2.5rem
    display block
    padding-top 5.5rem

  .section-hero
    .container
      .title
        font-size 48px

  .section-features,
  .section-launchpad,
  .section-roadmap,
  .section-contributors,
  .section-articles,
  .section-videos
    .section-header
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
        &:first-child
          padding-left 0

  .section-intro
    .section-title
      grid-row 1
      grid-column 1 / span 12
      font-size 4rem
    .section-subtitle
      margin-top 2rem
      grid-row 2
      grid-column 1 / span 12
    .section-statement
      grid-row 3
      grid-column 1 / span 12
    .section-cta
      grid-row 4
      grid-column 1 / span 12

  .section-features
    .section-title
      grid-column 1 / 12
      font-size 4rem
    .section-statement
      grid-column 1 / 12
    .ibc-item
      grid-column 1 / 12
    .grid-container
      grid-column 1 / 12

  .section-prepare
    .section-title
      grid-column 1 / 12
      font-size 4rem
    .section-statement
      grid-column 1 / 12
      margin-top 4rem
    .grid-container
      grid-template-columns repeat(1, 1fr)

  .section-roadmap
    .section-title
      grid-column 1 / span 12
      text-align left
      font-size 4rem
    .section-row
      grid-column 1 / span 12
    .section-milestones
      &__cta
        display none

  .section-contributors
    .section-title
      font-size 4rem
    .section-statement
      grid-column 1/12
      margin-top 4rem
      margin-left 0rem

  .section-articles
    .section-header
      grid-row 1
    .section-title
      grid-row 2
      margin-top 6rem
      font-size 4rem
    .content
      grid-row 3
      grid-column 1/12
      margin-top 4rem

  .section-features
    .data-container
      grid-template-columns repeat(2, 1fr)
    .grid-container
      grid-template-columns repeat(1, 1fr)

  .section-videos
    .container
      .frame
        grid-column 1/span 12
      .text
        grid-column 1/span 12
        &__cta
          display none

  .section-community .cards
    grid-template-columns repeat(1, 1fr)

@media screen and (max-width: 600px)
  .section-roadmap
    .section-row
      .icon__wrapper
        display none
      .details
        margin 2rem
</style>
