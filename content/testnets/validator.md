---
index: 0
id: cosmoshub-test-stargate-e
code: cosmoshub
discord-channel-name: stargate-testnet
title: Validator testnet
desc: A simulated upgrade of the Cosmos Hub to Stargate (Cosmos SDK v0.37 --> v0.40). Highly recommended for Cosmos Hub validators.
slug: validator
explorers:
  - name: Mintscan
    url: https://testnet.mintscan.io/stargate
  - name: The Big Dipper
    url: https://stargate.simulation.bigdipper.live/
  - name: LOOK
    url: https://look.ping.pub/#/validator?chain=cosmos-next
learn-more:
  - title: Five Reasons Why Cosmos Validators Want to Participate in the Stargate Simulated Upgrade
    desc: ""
    date: Nov 9
    url: https://blog.cosmos.network/five-reasons-why-cosmos-validators-want-to-participate-in-the-stargate-simulated-upgrade-f817ddef1678
---

<!-- ## SAMUEL L. IPSUM

Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. -->

<section-chain :id="id" :title="title" :desc="desc"></section-chain>

<section-endpoints :id="id" :code="code">
  <template #intro>
    <p>To implement the Stargate upgrades – beginning with the Cosmos Hub – validators should prepare by helping to run the various Stargate testnets. The simulated upgrade of the Cosmos Hub is the highest priority for validators at present.</p>
    <p>The future of Cosmos depends on you, Cosmonauts!</p>
    <blockquote>
      <span class="tm-rf0 tm-bold tm-lh-copy" style="color: var(--white);">Be advised</span>
      <p class="tm-rf0 tm-lh-copy" style="color: var(--gray-800);">Cosmos Hub Validators that don't participate in this testnet won't be prepared for the governance vote to upgrade Cosmos Hub to Stargate.</p>
    </blockquote>
  </template>
</section-endpoints>

<section-migration :channel="discord-channel-name" :code="code"></section-migration>

<section-explorer :data="explorers"></section-explorer>

<section-learn-more :data="learn-more"></section-learn-more>