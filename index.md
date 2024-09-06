---
layout: home

hero:
  name: "Wine Captain"
  text: "Your AI-powered Wine Companion 🍷"
  tagline: "Never pick the wrong wine again"
  image: 
    src: /app_icon.jpg
    alt: "Wine Captain Logo"
  actions:
    - theme: brand
      text: "Try Wine Captain Now"
      link: https://wine-captain.ch

    - theme: alt
      text: "BärnHäckt 2024"
      link: https://www.bernhackt.ch/

features:
  - title: 🔍 AI-Powered Recommendations
    details: Upload a photo of your meal, and let our AI work its magic, pairing it with the perfect wine from our extensive selection.
  - title: 📷 Scan and Pair
    details: Scan your wine’s barcode, and get tailored meal suggestions to elevate your dining experience.
  - title: 🍾 Manage Your Collection
    details: Keep tabs on your wine collection and receive insights on when to pop open your favorite bottles.
  - title: 📱 Mobile-First Design
    details: Enjoy a seamless experience on the go with our mobile-optimized Progressive Web App.

markdownStyles: false
---

<script setup lang="ts">
import { VPButton } from 'vitepress/theme';
import MusicComponent from './MusicComponent.vue';
</script>

<div class="home-content vp-doc first">

## Team

We’re excited to announce that **Wine Captain** took home 3rd place 🥉 at the [BärnHäckt 2024 hackathon](https://www.bernhackt.ch/)! 🎉

![Team](img/team.jpg)

## How It Works

1. **📸 Snap a Photo**: Simply take a photo of your meal.
2. **🤖 Let AI Take Over**: Our smart AI analyzes your dish and suggests the best wine pairing.
3. **🍽️ Savor the Experience**: Enjoy the perfect wine and meal combo curated just for you!

![Hero](img/hero.png)

## Why Choose Wine Captain?

- **🎯 Pinpoint Pairings**: Our cutting-edge AI ensures your food and wine are a match made in heaven.
- **🚀 Ready to Go**: No complicated installations, just jump right in with our browser-based Progressive Web App.
- **🔄 Always Learning**: Our system gets smarter with each use, making your pairings better over time.

<div class="home-button">
  <VPButton theme="brand" href="https://wine-captain.ch" text="Try Wine Captain Now" />
</div>

Start exploring the art of wine pairing with **Wine Captain** today!

</div>

<div class="home-content">
<MusicComponent />
</div>

<div class="home-content vp-doc">

::: info
This project was developed during the **BärnHäckt 2024 hackathon** as a proof of concept for an AI-driven wine recommendation system. The goal? To elevate your dining experiences with expert wine pairings tailored to your meal.
:::


## Why is our team called RedRedWine?

You might have noticed the name *RedRedWine* in our team photo and wondered, why? Well, we’re a group of passionate wine enthusiasts on a mission to innovate within the wine industry. Our name is inspired by the classic UB40 hit "Red Red Wine"—because just like the song, we aim to keep things smooth, enjoyable, and full of good vibes. 🍷

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4uOKFydzAejjSFqYbv1XPt?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

## Media

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7233826851113107456" height="1000" width="100%" frameborder="0" allowfullscreen="" title="Embedded post from LinkedIn"></iframe>

</div>

<style scoped>
.home-content {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 640px) {
    padding: 0 48px;
  }
  padding: 0 24px;
}

.home-content.first {
  margin-top: 50px;
}

.home-button {
  margin: 20px auto;
  text-align: center;
}

.home-button a {
  text-decoration: none;
}

.home-content img {
  margin: 20px auto;
  border-radius: 10px;
}
</style>
