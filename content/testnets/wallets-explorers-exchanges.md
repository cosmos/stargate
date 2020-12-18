---
index: 2
id: stargate-5
code: stargate
discord-channel-name: stargate-v040
title: Wallet, Explorer & Exchange testnet
desc: A persistent non-adversarial testnet that replicates a Stargate-enabled Cosmos Hub to be used for service provider integration and relayer testing.
slug: validator
explorers:
  - name: Mintscan
    url: https://testnet.mintscan.io/stargate
---

<!-- ## SAMUEL L. IPSUM

Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. -->

<section-migration :channel="discord-channel-name" :code="code"></section-migration>

<readiness-banner></readiness-banner>

<section-explorer :data="explorers"></section-explorer>