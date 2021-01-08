---
index: 1
id: bigbang-2
code: bigbang
discord-channel-name: bigbang-testnet
title: Community testnet
desc: A community-led multi-chain testnet aimed at the wider Cosmos ecosystem and independent zone developers focusing on feature testing and experimental development.
slug: community
explorers:
  - name: Aneka
    url: https://bigbang.aneka.io/
  - name: The Big Dipper
    url: https://stargate.simulation.bigdipper.live/
learn-more:
  - title: Announcing the ‘Big Bang’ Stargate Testnet
    desc: The goal of Big Bang is to create a multichain test environment that tests, simulates, and benchmarks the post-Stargate Cosmos.
    date: Oct 16
    url: https://blog.cosmos.network/announcing-the-big-bang-stargate-testnet-a27a7b74a903
---

<!-- ## SAMUEL L. IPSUM

Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. -->

<section-chain :id="id" :title="title" :desc="desc"></section-chain>

<section-endpoints :id="id" :code="code">
  <template #intro>
    <p>Start testing the new features of the Stargate upgrades, such as IBC, state sync and more with the <span class="tm-code">bigbang</span> testnet.</p>
    <p>More detailed instructions and guidelines on how zone developers can prepare for the upgrade will be published in due course.</p>
  </template>
</section-endpoints>

<section-migration :channel="discord-channel-name" :code="code"></section-migration>

<section-explorer :data="explorers"></section-explorer>

<section-learn-more :data="learn-more"></section-learn-more>