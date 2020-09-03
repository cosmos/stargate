<template>
  <component
    :is="tag"
    class="component__button"
    :style="{ '--background-color': backgroundColor }"
    v-bind="{ target, type, disabled, href }"
    :class="[`button__size__${size}`, `button__style__${buttonStyle}`]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    size: {
      /**
       * `xs` | `s` | `m` | `l` | `xl`
       */
      type: String,
      default: 'm',
    },
    /**
     * CSS color of `regular` | `danger`
     */
    backgroundColor: {
      type: String,
      default: 'rgb(80, 100, 251)',
    },
    /**
     * Disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Type
     */
    type: {
      type: String,
      default: 'submit',
    },
    /**
     * Tag
     */
    tag: {
      type: String,
      default: 'button',
    },
    /**
     * href
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * target
     */
    target: {
      type: String,
      default: null,
    },
  },
  computed: {
    buttonStyle() {
      const styles = ['regular', 'danger']
      const exists = styles.indexOf(this.background)
      if (exists >= 0) {
        return styles[exists]
      } else {
        return 'standard'
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.component__button
  border none
  font-size initial
  margin 0
  padding 0
  padding 1.25rem 3rem
  border-radius 0.625rem
  cursor pointer
  user-select none
  outline none
  transition all 0.25s
  text-align center
  // text-transform uppercase
  font-weight 500
  line-height 1.25
  letter-spacing 0.02em
  text-decoration none
  color white
  white-space nowrap

button:disabled
  opacity 0.5

.component__button:hover,
.component__button:focus
  box-shadow 0px 16px 32px rgba(0, 0, 0, 0.08),
    0px 8px 12px rgba(0, 0, 0, 0.06), 0px 1px 0px rgba(0, 0, 0, 0.05)
  opacity 0.8

.button__size__xs
  font-size 0.75rem

.button__size__s
  font-size 0.875rem

.button__size__m
  font-size 1rem

.button__size__l
  font-size 1.25rem
  font-weight bold
  line-height 126.3%
  letter-spacing -0.005em

.button__size__xl
  font-size 1.5rem
</style>
