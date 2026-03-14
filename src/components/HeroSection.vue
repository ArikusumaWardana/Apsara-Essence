<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="/images/hero-bg.png"
        alt="Rempah Nusantara"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-big-dipper/80 via-big-dipper/60 to-big-dipper/90" />
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <!-- Decorative line -->
      <div data-aos="fade-down" data-aos-delay="100" class="flex items-center justify-center gap-4 mb-8">
        <span class="block w-12 h-px bg-marigold/60" />
        <span class="text-marigold/80 text-xs font-medium tracking-[0.3em] uppercase">{{ t('hero.tag') }}</span>
        <span class="block w-12 h-px bg-marigold/60" />
      </div>

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-star-white leading-tight mb-6"
      >
        {{ t('hero.title1') }}<br />
        <span class="text-marigold italic">{{ t('hero.title2') }}</span>
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="350"
        class="text-star-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        {{ t('hero.subtitle') }}
      </p>

      <div data-aos="fade-up" data-aos-delay="500">
        <a
          href="#variants"
          @click.prevent="scrollTo('variants')"
          class="inline-flex items-center gap-3 px-8 py-4 bg-marigold text-big-dipper font-semibold text-sm tracking-wide rounded-full hover:bg-tangerine hover:text-star-white transition-all duration-300 shadow-lg hover:shadow-marigold/30 hover:scale-105 active:scale-95"
        >
          {{ t('hero.cta') }}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 rounded-full border-2 border-star-white/30 flex items-start justify-center pt-2">
        <div class="w-1 h-2.5 bg-marigold rounded-full" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';

const { t } = useI18n()

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
