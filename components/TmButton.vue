<template>
  <component
    :is="tag"
<<<<<<< HEAD
    v-bind="{ target, type, disabled, href }"
    :class="[
      'button',
      styles,
      'dib',
      'lh-solid',
      'fw6',
      'bn',
      'outline-0',
      'elevation-1',
      'elevation-hover',
      'elevation-hover-8',
    ]"
=======
    class="component__button"
    :style="{ '--background-color': backgroundColor }"
    v-bind="{ target, type, disabled, href }"
    :class="[`button__size__${size}`, `button__style__${buttonStyle}`]"
>>>>>>> develop
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    size: {
      /**
<<<<<<< HEAD
       * `s` | `m` | `l` | `xl`
=======
       * `xs` | `s` | `m` | `l` | `xl`
>>>>>>> develop
       */
      type: String,
      default: 'm',
    },
    /**
<<<<<<< HEAD
=======
     * CSS color of `regular` | `danger`
     */
    backgroundColor: {
      type: String,
      default: 'rgb(80, 100, 251)',
    },
    /**
>>>>>>> develop
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
<<<<<<< HEAD
=======
     * Tag
     */
    tag: {
      type: String,
      default: 'button',
    },
    /**
>>>>>>> develop
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
<<<<<<< HEAD
    /**
     * Classes
     */
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    styles() {
      let classes = this.classes
      switch (this.size) {
        case 's':
          classes += ' rf-1 pv4 ph6'
          break
        case 'l':
          classes += ' rf1 pv6 ph8'
          break
        case 'xl':
          classes += ' rf2 pv7 ph9'
          break
        default:
          classes += ' rf0 pv5 ph7'
      }
      return classes
    },
    tag() {
      if (this.href) {
        return 'a'
      } else {
        return 'button'
=======
  },
  computed: {
    buttonStyle() {
      const styles = ['regular', 'danger']
      const exists = styles.indexOf(this.background)
      if (exists >= 0) {
        return styles[exists]
      } else {
        return 'standard'
>>>>>>> develop
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
<<<<<<< HEAD
.button
  background-color #CFD1E7
  color #000000
  border-radius 0.5em // relative border-radius
  // testing for sub-pixel rounding glitches on transform
  &:hover
    transform translateY(-2px)
  &:active
    transform none
=======
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
>>>>>>> develop
</style>
