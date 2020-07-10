<template>
  <div>
    <div class="section-hero">
      <div class="container">
        <Logo />
        <h1 class="title">
          stargate
        </h1>
        <p class="subtitle">The Internet of Blockchains is here.</p>
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
                  type="submit"
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
          <li class="nav__list-item">
            <a href="#intro">
              <span>What is Stargate?</span>
            </a>
          </li>
          <li class="nav__list-item">
            <a href="#features">Features</a>
          </li>
          <li class="nav__list-item">
            <a href="#prepare">Prepare</a>
          </li>
          <li class="nav__list-item">
            <a href="#roadmap">Roadmap</a>
          </li>
          <li class="nav__list-item">
            <a href="#contributors">Contributors</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- <div id="intro" class="section-intro">
      <div class="container">
        <h1 class="title">A new era for Cosmos</h1>
      </div>
    </div>

    <div id="features" class="section-features">
      <div class="container">
        <h1 class="title">What's new?</h1>
      </div>
    </div>

    <div id="prepare" class="section-prepare">
      <div class="container">
        <h1 class="title">Get set for launch</h1>
      </div>
    </div>

    <div id="roadmap" class="section-roadmap">
      <div class="container">
        <h1 class="title">85% complete</h1>
      </div>
    </div> -->

    <div id="articles" class="section-articles">
      <div class="section-title">Learn more about Stargate</div>
      <div class="section-header">3 Articles</div>
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
              Tendermint 0.34, Protocol Buffers, and You
            </div>
            <div class="articles-item__description">
              The upcoming Tendermint 0.34 release contains a major change to
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

    <div id="videos" class="section-videos">
      <div class="section-header">Videos</div>
      <div class="container">
        <div class="frame">
          <iframe
            src="https://www.youtube.com/embed/mlq5GzQTIAM?autoplay=0&controls=1&rel=0&modestbranding=1&fs=1&enablejsapi=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media;
          gyroscope; picture-in-picture"
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
              Watch on YouTube ->
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="community" class="section-community">
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
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
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
    }
  },
  computed: {
    emailInvalid() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !re.test(String(this.email))
    },
    countdownTimer() {
      const a = moment()
      const b = moment('20200729', 'YYYYMMDD')
      // return moment('20200729', 'YYYYMMDD').fromNow()
      return b.diff(a, 'days')
    },
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
  },
}
</script>

<style lang="stylus" scoped>
.section-hero
  margin 4rem 8rem
  display flex
  justify-content center
  align-items center
  text-align center
  .container
    min-height 932px
  .title
    margin-top 12.4375rem
    text-transform uppercase
    font-weight 900
    font-size 7.375rem
    line-height 108.4%
    display flex
    align-items flex-end
    text-align center
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
          -webkit-backdrop-filter blur(10px)
          backdrop-filter blur(10px)
          font-weight 400
          font-size 19px
          line-height 1.263
          letter-spacing -0.005em
          color #989BB9
          opacity 0.7
          transition all 0.15s
        &__icon
          max-width 20%
          position absolute
          right 0
          height 2rem
          fill var(--white)

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
  .nav
    display block
    margin-top 167px
    max-width 837px
    width 100%
    margin auto
    &__list
      display grid
      grid-template-columns repeat(auto-fit, minmax(120px, 1fr))
      align-items center
      text-align center
      list-style none
      &-item
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
            bottom -1em
            padding 0 0.2em
            z-index -1
            border-radius 4px
            background-color var(--link)
            visibility hidden
            transform scaleX(0)
            transition all 300ms cubic-bezier(0.325, -0.075, 0, 1.65)

.section-articles
  display grid
  grid-template-columns repeat(12,1fr)
  padding-top 224px
  text-align center
  .section-title
    font-weight 900
    font-size 3.625rem
    line-height 1.172
    letter-spacing -0.02em
    color #FFFFFF
    width 379px
    text-align left
    grid-column span 1 / 4
  .section-header
    padding-top 24px
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
  .articles-wrapper
    grid-column 6/ 12
    color wheat
    display flex
    flex-direction column
    margin-top -64px
    .articles-item
      text-align left
      padding 3rem
      background linear-gradient(249.43deg, #030419 0%, #121435 100%)
      box-shadow 0px 15px 33px rgba(0, 3, 66, 0.11), 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.07)
      border-radius 1.25rem
      margin-bottom 2rem
      position relative
      opacity 0.65
      &:hover
        opacity 1
        transition opacity 0.15s
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
  padding-top 224px
  text-align center
  .section-header
    padding-top 24px
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
    padding-top 6rem
    max-width 1184px
    width 100%
    margin auto
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
  display grid
  grid-template-columns repeat(12,1fr)
  padding-top 224px
  text-align center
  .section-header
    padding-top 24px
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
  .cards
    padding-top: 6rem;
    max-width: 1184px;
    width: 100%;
    margin: auto;
    display grid
    grid-template-columns 1fr 1fr
    gap 1.5rem
    grid-column 1/span 12
    &__item
      padding 3rem
      background linear-gradient(256.92deg, #120018 0%, #121435 100%)
      box-shadow 0px 15px 33px rgba(0, 3, 66, 0.11), 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.07)
      border-radius 1.25rem
      display flex
      flex-direction column
      color var(--white)
      text-align left
      height 338px
      &:first-child
        background: linear-gradient(256.92deg, #121435 0%, #030419 100%)
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
</style>
