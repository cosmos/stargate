<template>
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
          <div v-else-if="state === 'error'" key="error" class="bottom__state">
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
</template>

<script>
import querystring from 'querystring'

export default {
  data() {
    return {
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
        .then(() => {
          this.state = 'success'
        })
        .catch(() => {
          this.state = 'error'
        })
    },
  },
}
</script>

<style lang="stylus" scoped>
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

@media screen and (max-width: 576px)
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
</style>
