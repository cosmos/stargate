<template>
  <!-- INTERNAL -->
  <nuxt-link
    v-if="toLink === 'internal'"
    :to="to"
    v-bind="{ type, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      styles,
    ]"
    :style="{
      '--background-color': backgroundColor,
      '--border-color': borderColor,
      '--color': color,
    }"
  >
    <span class="tm-button__content">
      <slot />
    </span>
  </nuxt-link>
  <!-- EXTERNAL -->
  <a
    v-else-if="toLink === 'external'"
    :href="href"
    target="_blank"
    rel="noreferrer noopener"
    v-bind="{ type, target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      styles,
    ]"
    :style="{
      '--background-color': backgroundColor,
      '--border-color': borderColor,
      '--color': color,
    }"
  >
    <span class="tm-button__content">
      <slot />
    </span>
  </a>
  <!-- DISABLED -->
  <button
    v-else-if="disabled"
    v-bind="{ type, target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      styles,
    ]"
    :style="{
      '--background-color': backgroundColor,
      '--border-color': borderColor,
      '--color': color,
    }"
    aria-disabled="true"
  >
    <span class="tm-button__content">
      <slot />
    </span>
  </button>

  <!-- DEFAULT -->
  <button
    v-else
    v-bind="{ type, target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      styles,
    ]"
    :style="{
      '--background-color': backgroundColor,
      '--border-color': borderColor,
      '--color': color,
    }"
  >
    <span class="tm-button__content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      /**
       * `s` | `m` | `l` | `xl`
       */
      type: String,
      default: 'm',
    },
    /**
     * Variant: `text` | `outlined` | `contained`
     */
    variant: {
      type: String,
      default: 'contained',
    },
    /**
     * CSS color of background
     */
    backgroundColor: {
      type: String,
      default: 'rgb(80, 100, 251)', // TODO: use a color variable
    },
    /**
     * CSS color of border
     */
    borderColor: {
      type: String,
      default: 'rgb(80, 100, 251)', // TODO: use a color variable
    },
    /**
     * CSS color of border
     */
    color: {
      type: String,
      default: 'var(--white)',
    },
    /**
     * Glow style
     */
    glow: {
      type: Boolean,
      default: false,
    },
    /**
     * Disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Type: `submit`
     */
    type: {
      type: String,
      default: 'submit',
    },
    /**
     * toLink: `anchor` | `internal` | `external`
     */
    toLink: {
      type: String,
      default: null,
    },
    /**
     * to
     */
    to: {
      type: String,
      default: null,
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
    /**
     * rel
     */
    rel: {
      type: String,
      default: null,
    },
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
          classes += ' tm-rf-1 tm-rf0-l-up'
          break
        case 'l':
          classes += ' tm-rf1'
          break
        case 'xl':
          classes += ' tm-rf2'
          break
        default:
          classes += ' tm-rf0'
      }
      return classes
    },
  },
}
</script>

<style lang="stylus" scoped>
.tm-button
  // resets
  appearance none
  padding 0
  text-rendering inherit
  font-family inherit
  background none
  border none
  outline 0
  cursor pointer
  user-select none
  text-decoration none
  &::-moz-focus-inner
    border 0
    padding 0

  // base
  position relative
  display inline-flex
  align-items center
  justify-content center
  text-align inherit
  color var(--color)
  border-radius 0.35em // relative border-radius
  transition all .25s $ease-out
  &:active
    opacity 0.88
    transition-duration .05s

  /* glow styling (optional) */
  &__glow
    &::before
      content ''
      position absolute
      border-radius inherit
      transform translateZ(0)
      z-index -1
      opacity 0.4
      transition background-position .4s $ease-out, opacity .5s $ease-out
    &:hover,
    &:focus
      &,
      &::before
        background-position right bottom
      &::before
        transition-duration .2s
        opacity 0.5

  /* text variant */
  &__variant__text
    &:hover,
    &:focus
      opacity 0.8
    &:active
      opacity 0.6

  /* outlined variant */
  &__variant__outlined
    &::after,
    &.tm-button__glow::before
      border 0.0625rem solid var(--border-color)
    &::after // border
      content ''
      position absolute
      trbl 0
      border-radius inherit
      opacity 0.2
      transition opacity .25s $ease-out
    &.tm-button__glow::before // glow
      trbl -0.0625em
      filter blur(0.4rem)
    &:hover,
    &:focus
      &::after
        opacity 1

  /* contained variant */
  &__variant__contained
    background var(--background-color)
    background-size 200% auto
    box-shadow var(--elevation-4)
    hover-raise -1px
    hover-elevation(16, $active-opacity:0.4)
    &::before // glow
      trbl 0.125em 1em 0
      background inherit
      filter blur(1.25rem) brightness(1.5)

  /* disabled state */
  &[disabled]
    cursor not-allowed !important
    opacity 0.65 !important
    // re-enable to remove cursor
    // pointer-events none

  // sizes
  &__size__s
    padding-top var(--spacing-4)
    padding-bottom var(--spacing-4)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined
       padding-left var(--spacing-6)
       padding-right var(--spacing-6)
  &__size__m
    padding-top var(--spacing-5)
    padding-bottom var(--spacing-5)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined
       padding-left var(--spacing-8)
       padding-right var(--spacing-8)
  &__size__l
    padding-top var(--spacing-6)
    padding-bottom var(--spacing-6)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined
       padding-left var(--spacing-9)
       padding-right var(--spacing-9)
  &__size__xl
    padding-top var(--spacing-6)
    padding-bottom var(--spacing-6)

  &__content
    display flex
    flex-wrap wrap

  /* icons */
  >>> .icon__right
  >>> .icon__left
    transform-fix()
    transition transform 0.25s $ease-out
  >>> .icon__left
    margin-right 0.5em
  >>> .icon__right
    margin-left 0.5em
  &:hover,
  &:focus
    >>> .icon__right
      transform translateX(0.25rem)
    >>> .icon__left
      transform translateX(-0.25rem)
</style>
