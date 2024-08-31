---
layout: home

hero:
  name: "Wine Captain"
  text: "Your AI-powered Wine Companion 🍷"
  tagline: "Never pick the wrong wine again"
  image: 
    src: /app_icon.jpg
    style: 
      border-radius: 50%
    alt: Pascal
  actions:
    - theme: brand
      text: "Try Wine Captain Now"
      link: https://wine-captain.ch

    - theme: alt
      text: "BärnHäckt 2024"
      link: https://www.bernhackt.ch/

features:
  - title: 🔍 AI-Powered Recommendations
    details: Upload a photo of your meal, and let our multimodal AI suggest the perfect wine from our extensive dataset.
  - title: 📷 Scan and Pair
    details: Scan the barcode of your wine to receive tailored meal recommendations that will enhance your dining experience.
  - title: 🍾 Manage Your Collection
    details: Keep track of your wine collection and get insights into the best times to enjoy your bottles.
  - title: 📱 Mobile-First Design
    details: Access all features on the go with our Progressive Web App, optimized for mobile devices.

markdownStyles: false
---

<script setup lang="ts">
import { VPButton } from 'vitepress/theme';
import MusicComponent from './MusicComponent.vue';
</script>

<div class="home-content vp-doc first">

# About Wine Captain 🍷

We are thrilled to announce that Wine Captain won 3rd place 🥉 at the [BärnHäckt 2024 hackathon](https://www.bernhackt.ch/)! 🎉



![Team](img/team.jpg)


## How It Works

1. **📸 Take a Photo**: Snap a picture of your meal.
2. **🤖 Get a Recommendation**: Our AI analyzes your dish and suggests the best wine.
3. **🍽️ Enjoy Your Meal**: Delight in the perfect wine pairing.

![Hero](img/hero.png)

## Why Choose Wine Captain?

- **🎯 Accurate Pairings**: We use advanced AI to ensure you get the best match.
- **🚀 Ease of Use**: No need for complex installations – our PWA is ready to use in your browser.
- **🔄 Constantly Improving**: We refine our recommendations with each use.

<div class="home-button">
  <VPButton theme="brand" href="https://wine-captain.ch" text="Try Wine Captain Now" />
</div>

Start exploring the world of wine with Wine Captain today!

</div>

<div class="home-content">
<MusicComponent />
</div>

<div class="home-content vp-doc">

::: info
This project was created during the BärnHäckt 2024 hackathon. It is a proof of concept for an AI-powered wine recommendation system designed to enhance your dining experience by pairing the perfect wine with your meal.
:::

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
