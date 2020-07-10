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
          <code class="bottom__countdown">T minus {{ countdownTimer }}</code>
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
      return moment('20200729', 'YYYYMMDD').fromNow()
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
      fetch(this.url, options).then((_) => {
        this.state = 'success'
      })
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
            transition all 0.3s cubic-bezier(0.325, -0.075, 0, 1.65)

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
</style>
