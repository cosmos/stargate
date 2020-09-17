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
    <section-roadmap />
    <section-contributors />
    <section-articles />
    <section-videos />

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
import Headroom from 'headroom.js'

export default {
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
    }
  },
  mounted() {
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

@media screen and (max-width: 1024px)
  .section .section-header
      grid-column 1 / span 12

  .section-community .cards
    grid-template-columns repeat(1, 1fr)

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

@media screen and (max-width: 375px)
  .section-container .container
    gap unset

@media screen and (max-width: 320px)
  .section-community .cards__item
    padding 1.5rem
</style>
