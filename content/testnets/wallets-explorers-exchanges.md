---
index: 2
id: stargate-6
code: stargate
discord-channel-name: stargate-v040
title: Wallet, Explorer & Exchange testnet
desc: A persistent non-adversarial testnet that replicates a Stargate-enabled Cosmos Hub to be used for service provider integration and relayer testing.
slug: wallets-explorers-exchanges
explorers:
  - name: Mintscan
    url: https://testnet.mintscan.io/stargate/validators
---

<!-- ## SAMUEL L. IPSUM

Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. -->

<section-chain :id="id" :title="title" :desc="desc"></section-chain>

<section-endpoints :id="id" :code="code">
  <template #intro>
    <p><span class="tm-bold">Wallets</span> and <span class="tm-bold">Explorers</span> should test to ensure that the legacy Amino endpoints provided on the new chains are compatible with existing services. It is highly recommended to start planning a transition to Protobuf endpoints as Amino support is expected to be discontinued in the future.</p>
    <p><span class="tm-bold">Exchanges</span> should ensure their signing and querying software is ready by testing the new features against their infrastructure ahead of the Stargate upgrade.</p>
  </template>
</section-endpoints>

<section-migration :channel="discord-channel-name" :code="code"></section-migration>

<readiness-banner></readiness-banner>

<section-explorer :data="explorers"></section-explorer>
