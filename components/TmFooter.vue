<template>
  <footer class="footer">
    <div class="tm-section-container section-container">
      <nav class="nav container" role="navigation">
        <ul class="nav__item">
          <li
            class="nav__item__title tm-rf-1 tm-medium tm-lh-title tm-overline"
          >
            Stargate
          </li>
          <li class="nav__item__item">
            <NuxtLink to="/" class="tm-rf0 tm-lh-title">Overview</NuxtLink>
          </li>
          <li class="nav__item__item">
            <NuxtLink to="/testnets" class="tm-rf0 tm-lh-title"
              >Testnets</NuxtLink
            >
          </li>
          <li class="nav__item__item">
            <NuxtLink to="/resources" class="tm-rf0 tm-lh-title"
              >Resources</NuxtLink
            >
          </li>
        </ul>
        <ul class="nav__item">
          <li
            class="nav__item__title tm-rf-1 tm-medium tm-lh-title tm-overline"
          >
            Ecosystem
          </li>
          <li class="nav__item__item">
            <a
              class="tm-rf0 tm-lh-title"
              href="https://docs.cosmos.network"
              target="blank_"
              rel="noreferrer noopener"
              >Cosmos SDK</a
            >
          </li>
          <li class="nav__item__item">
            <a
              class="tm-rf0 tm-lh-title"
              href="https://docs.tendermint.com"
              target="blank_"
              rel="noreferrer noopener"
              >Tendermint Core</a
            >
          </li>
          <li class="nav__item__item">
            <a
              class="tm-rf0 tm-lh-title"
              href="https://github.com/cosmos/ics"
              target="blank_"
              rel="noreferrer noopener"
              >Interchain Standards</a
            >
          </li>
          <li class="nav__item__item">
            <a
              class="tm-rf0 tm-lh-title"
              href="https://hub.cosmos.network"
              target="blank_"
              rel="noreferrer noopener"
              >Cosmos Hub</a
            >
          </li>
        </ul>
        <ul class="nav__item">
          <li
            class="nav__item__title tm-rf-1 tm-medium tm-lh-title tm-overline"
          >
            Community
          </li>
          <li class="nav__item__item">
            <a
              class="tm-rf0 tm-lh-title"
              href="https://discord.gg/vcExX9T"
              target="blank_"
              rel="noreferrer noopener"
              >Chat</a
            >
          </li>
          <li class="nav__item__item">
            <a
              class="tm-rf0 tm-lh-title"
              href="https://hackerone.com/tendermint?type=team"
              target="blank_"
              rel="noreferrer noopener"
              >Bug Bounty Program</a
            >
          </li>
          <li class="nav__item__item">
            <a
              class="tm-rf0 tm-lh-title"
              href="https://cosmos.network/community"
              target="blank_"
              rel="noreferrer noopener"
              >Cosmos Community</a
            >
          </li>
        </ul>
      </nav>
      <nav ref="links" class="social-icons" role="navigation">
        <a
          v-for="link in links"
          :key="url(link)"
          :href="url(link)"
          class="social-icons__item"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#616489"
          >
            <path :d="icon(link)" style="pointer-events: none"></path>
          </svg>
        </a>
      </nav>
      <div class="home-nav tm-rf-1 tm-lh-copy">
        <a
          href="http://cosmos.network"
          target="blank_"
          rel="noreferrer noopener"
          >cosmos.network</a
        >
      </div>
      <div class="smallprint tm-rf-1 tm-lh-copy">
        This website is maintained by Tendermint Inc. The contents and opinions
        of this website are those of Tendermint Inc.
      </div>
    </div>
  </footer>
</template>

<script>
const iconList = [
  [
    'blog.cosmos.network',
    'M23 0.000976563H1C0.734784 0.000976563 0.48043 0.106333 0.292893 0.29387C0.105357 0.481406 0 0.73576 0 1.00098L0 23.001C0 23.2662 0.105357 23.5205 0.292893 23.7081C0.48043 23.8956 0.734784 24.001 1 24.001H23C23.2652 24.001 23.5196 23.8956 23.7071 23.7081C23.8946 23.5205 24 23.2662 24 23.001V1.00098C24 0.73576 23.8946 0.481406 23.7071 0.29387C23.5196 0.106333 23.2652 0.000976563 23 0.000976562V0.000976563ZM19.938 5.68698L18.651 6.92098C18.5966 6.96244 18.5545 7.01798 18.5293 7.08159C18.5041 7.1452 18.4967 7.21449 18.508 7.28198V16.35C18.4967 16.4175 18.5041 16.4867 18.5293 16.5504C18.5545 16.614 18.5966 16.6695 18.651 16.711L19.908 17.945V18.216H13.586V17.945L14.886 16.681C15.014 16.553 15.014 16.515 15.014 16.32V8.99098L11.393 18.191H10.904L6.691 8.99098V15.154C6.67366 15.2818 6.68562 15.4118 6.72599 15.5343C6.76636 15.6568 6.83407 15.7685 6.924 15.861L8.618 17.915V18.186H3.818V17.915L5.509 15.861C5.5982 15.7685 5.6644 15.6563 5.70227 15.5335C5.74014 15.4107 5.74861 15.2807 5.727 15.154V8.02798C5.73727 7.93061 5.72452 7.83219 5.68978 7.74065C5.65504 7.64911 5.59929 7.56701 5.527 7.50098L4.019 5.68698V5.41598H8.693L12.306 13.34L15.482 5.41598H19.938V5.68698Z',
  ],
  [
    'twitter',
    'M24 4.60078C23.1 5.00078 22.2 5.30078 21.2 5.40078C22.2 4.80078 23 3.80078 23.4 2.70078C22.4 3.30078 21.4 3.70078 20.3 3.90078C19.4 2.90078 18.1 2.30078 16.7 2.30078C14 2.30078 11.8 4.50078 11.8 7.20078C11.8 7.60078 11.8 8.00078 11.9 8.30078C7.7 8.10078 4.1 6.10078 1.7 3.10078C1.2 3.90078 1 4.70078 1 5.60078C1 7.30078 1.9 8.80078 3.2 9.70078C2.4 9.70078 1.6 9.50078 1 9.10078C1 9.10078 1 9.10078 1 9.20078C1 11.6008 2.7 13.6008 4.9 14.0008C4.5 14.1008 4.1 14.2008 3.6 14.2008C3.3 14.2008 3 14.2008 2.7 14.1008C3.3 16.1008 5.1 17.5008 7.3 17.5008C5.6 18.8008 3.5 19.6008 1.2 19.6008C0.8 19.6008 0.4 19.6008 0 19.5008C2.2 20.9008 4.8 21.7008 7.5 21.7008C16.6 21.7008 21.5 14.2008 21.5 7.70078C21.5 7.50078 21.5 7.30078 21.5 7.10078C22.5 6.40078 23.3 5.50078 24 4.60078Z',
  ],
  [
    'linkedin',
    'M23 0.000976562H1C0.4 0.000976562 0 0.400977 0 1.00098V23.001C0 23.601 0.4 24.001 1 24.001H23C23.6 24.001 24 23.601 24 23.001V1.00098C24 0.400977 23.6 0.000976562 23 0.000976562ZM7.1 20.501H3.6V9.00098H7.2V20.501H7.1ZM5.3 7.40098C4.2 7.40098 3.2 6.50098 3.2 5.30098C3.2 4.20098 4.1 3.20098 5.3 3.20098C6.4 3.20098 7.4 4.10098 7.4 5.30098C7.4 6.50098 6.5 7.40098 5.3 7.40098ZM20.5 20.501H16.9V14.901C16.9 13.601 16.9 11.901 15.1 11.901C13.2 11.901 13 13.301 13 14.801V20.501H9.4V9.00098H12.8V10.601C13.3 9.70098 14.4 8.80098 16.2 8.80098C19.8 8.80098 20.5 11.201 20.5 14.301V20.501Z',
  ],
  [
    'reddit',
    'M24 11.8009C24 10.2009 22.7 8.90088 21.1 8.90088C20.4 8.90088 19.8 9.10088 19.3 9.50088C17.5 8.40088 15.3 7.70088 12.9 7.60088L14.1 3.70088L17.5 4.50088C17.6 5.70088 18.6 6.70088 19.9 6.70088C21.2 6.70088 22.3 5.60088 22.3 4.30088C22.3 3.00088 21.2 1.90088 19.9 1.90088C19 1.90088 18.2 2.40088 17.8 3.20088L13.8 2.30088C13.5 2.20088 13.1 2.40088 13 2.70088L11.5 7.60088C9 7.70088 6.5 8.30088 4.7 9.50088C4.2 9.10088 3.6 8.90088 2.9 8.90088C1.3 8.90088 0 10.2009 0 11.8009C0 12.8009 0.5 13.7009 1.2 14.2009C1.2 14.4009 1.2 14.7009 1.2 14.9009C1.2 16.9009 2.4 18.7009 4.5 20.1009C6.5 21.4009 9.2 22.1009 12 22.1009C14.8 22.1009 17.5 21.4009 19.5 20.1009C21.6 18.7009 22.8 16.9009 22.8 14.9009C22.8 14.7009 22.8 14.5009 22.8 14.3009C23.5 13.7009 24 12.8009 24 11.8009ZM20 3.20088C20.6 3.20088 21.1 3.70088 21.1 4.30088C21.1 4.90088 20.6 5.40088 20 5.40088C19.4 5.40088 18.9 4.90088 18.9 4.30088C18.9 3.70088 19.4 3.20088 20 3.20088ZM6.8 13.6009C6.8 12.7009 7.6 12.0009 8.4 12.0009C9.3 12.0009 10 12.8009 10 13.6009C10 14.4009 9.3 15.2009 8.4 15.2009C7.6 15.2009 6.8 14.5009 6.8 13.6009ZM16 18.3009C15.2 19.1009 13.9 19.5009 12.1 19.5009C10.3 19.5009 9 19.1009 8.2 18.3009C7.9 18.0009 7.9 17.6009 8.2 17.4009C8.5 17.1009 8.9 17.1009 9.1 17.4009C9.7 18.0009 10.7 18.3009 12.1 18.3009C13.5 18.3009 14.5 18.0009 15.1 17.4009C15.4 17.1009 15.8 17.1009 16 17.4009C16.2 17.7009 16.2 18.1009 16 18.3009ZM15.6 15.2009C14.7 15.2009 13.9 14.5009 13.9 13.6009C13.9 12.7009 14.7 12.0009 15.6 12.0009C16.5 12.0009 17.2 12.8009 17.2 13.6009C17.2 14.4009 16.5 15.2009 15.6 15.2009Z',
  ],
  [
    't.me',
    'M23.953 2.52809C23.9336 2.43947 23.8911 2.35756 23.8298 2.29065C23.7685 2.22375 23.6906 2.17422 23.604 2.14709C23.2887 2.08464 22.9624 2.10777 22.659 2.21409C22.659 2.21409 1.63003 9.77309 0.429029 10.6101C0.171029 10.7901 0.0840289 10.8951 0.0410289 11.0181C-0.166971 11.6181 0.480029 11.8761 0.480029 11.8761L5.90003 13.6421C5.99167 13.6585 6.08591 13.653 6.17503 13.6261C7.40703 12.8471 18.575 5.79209 19.224 5.55509C19.324 5.52509 19.401 5.55509 19.381 5.63009C19.123 6.53509 9.47203 15.1081 9.41903 15.1601C9.39321 15.1812 9.3731 15.2085 9.36052 15.2394C9.34795 15.2703 9.34331 15.3039 9.34703 15.3371L8.84103 20.6291C8.84103 20.6291 8.62903 22.2761 10.276 20.6291C11.444 19.4601 12.565 18.4921 13.125 18.0211C14.989 19.3081 16.994 20.7311 17.859 21.4761C18.0045 21.6169 18.1769 21.727 18.3659 21.7997C18.5549 21.8723 18.7567 21.9062 18.959 21.8991C19.2082 21.8687 19.4423 21.7632 19.63 21.5965C19.8178 21.4298 19.9503 21.2099 20.01 20.9661C20.01 20.9661 23.84 5.54309 23.968 3.47709C23.981 3.27709 23.998 3.14509 24 3.00609C24.0063 2.84536 23.9904 2.68453 23.953 2.52809Z',
  ],
  [
    'discord.gg',
    'M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z',
  ],
  [
    'youtube',
    'M23.8 7.20107C23.8 7.20107 23.6 5.50107 22.8 4.80107C21.9 3.80107 20.9 3.80107 20.4 3.80107C17 3.60107 12 3.60107 12 3.60107C12 3.60107 7 3.60107 3.6 3.80107C3.1 3.90107 2.1 3.90107 1.2 4.80107C0.5 5.50107 0.2 7.20107 0.2 7.20107C0.2 7.20107 0 9.10107 0 11.1011V12.9011C0 14.8011 0.2 16.8011 0.2 16.8011C0.2 16.8011 0.4 18.5011 1.2 19.2011C2.1 20.2011 3.3 20.1011 3.8 20.2011C5.7 20.4011 12 20.4011 12 20.4011C12 20.4011 17 20.4011 20.4 20.1011C20.9 20.0011 21.9 20.0011 22.8 19.1011C23.5 18.4011 23.8 16.7011 23.8 16.7011C23.8 16.7011 24 14.8011 24 12.8011V11.0011C24 9.10107 23.8 7.20107 23.8 7.20107ZM9.5 15.1011V8.40107L16 11.8011L9.5 15.1011Z',
  ],
]

export default {
  data() {
    return {
      links: [
        { title: 'Medium', url: 'https://blog.cosmos.network' },
        { title: 'Twitter', url: 'https://twitter.com/cosmos' },
        {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/company/tendermint/',
        },
        { title: 'Reddit', url: 'https://reddit.com/r/cosmosnetwork' },
        { title: 'Telegram', url: 'https://t.me/cosmosproject' },
        { title: 'Discord', url: 'https://discord.gg/vcExX9T' },
        { title: 'YouTube', url: 'https://www.youtube.com/c/CosmosProject' },
      ],
    }
  },
  methods: {
    url(link) {
      return link.url || link
    },
    icon(link) {
      let iconPath
      const url = link.url || link
      iconList.forEach((icon) => {
        if (link.icon && link.icon.match(icon[0])) {
          iconPath = icon[1]
        } else if (url.match(icon[0])) {
          iconPath = icon[1]
        }
      })
      return iconPath
    },
  },
}
</script>

<style lang="stylus" scoped>
.footer
  text-align center
  color var(--white)
  background linear-gradient(180deg, #000000 0%, #030419 100%)
  padding 0 0 var(--spacing-8)
  .nav
    gap var(--spacing-7)
    justify-content center
    &__item
      padding var(--spacing-6) 0
      border-radius $border-radius-2
      white-space nowrap
      color var(--gray-600)
      text-align left
      display flex
      flex-direction column
      margin 0
      list-style-type none
      grid-column span 3
      &:first-child
        grid-column 3/span 3
      &__title
        padding-bottom var(--spacing-3)
      &__item a
        display inline-block
        padding-top var(--spacing-3)
        padding-bottom var(--spacing-3)
        color var(--white)
        &:hover,
        &:focus
          opacity 0.8
        &:active
          opacity 0.6
  .social-icons
    margin-top var(--spacing-9)
    margin-bottom var(--spacing-9)
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content center
    align-items center
    text-align center
    &__item
      margin var(--spacing-4)
      svg
        transition fill .15s ease-out
      &:hover svg,
      &:focus svg
        fill var(--white)
  .home-nav
    margin-top var(--spacing-5)
    a
      color var(--gray-900)
      &:hover,
      &:focus
        color var(--white)
  .smallprint
    margin-top var(--spacing-5)
    color var(--gray-600)

@media $breakpoint-medium-max
  .footer
    .nav
      grid-template-columns repeat(2, 1fr)
      &__item,
      &__item:first-child
          grid-column span 1

@media $breakpoint-small-max
  .footer
    .nav
      grid-template-columns repeat(1, 1fr)
</style>
