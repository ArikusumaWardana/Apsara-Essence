<template>
  <div class="overflow-x-hidden relative">
    <Navbar />
    <main>
      <HeroSection />
      <BrandSection />
      <ProductVariants />
      <WhyUs />
      <FaqSection />
    </main>
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import BrandSection from './components/BrandSection.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'
import HeroSection from './components/HeroSection.vue'
import Navbar from './components/Navbar.vue'
import ProductVariants from './components/ProductVariants.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import WhyUs from './components/WhyUs.vue'
</script>
