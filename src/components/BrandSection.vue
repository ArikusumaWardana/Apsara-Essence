<template>
  <section id="about" class="py-24 lg:py-32 bg-star-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Image Column -->
        <div data-aos="fade-right" class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/brand-philosophy.png"
              alt="Apsara Essence philosophy"
              class="w-full h-[400px] lg:h-[520px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-big-dipper/30 to-transparent" />
          </div>
          <!-- Decorative element -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-marigold/30 rounded-2xl -z-10" />
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-marigold/10 rounded-2xl -z-10" />
        </div>

        <!-- Text Column -->
        <div data-aos="fade-left">
          <span class="text-marigold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">{{ t('brand.tag') }}</span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-big-dipper mb-6 leading-tight">
            {{ t('brand.title1') }}<br /><span class="text-syrah italic">{{ t('brand.title2') }}</span>
          </h2>
          <div class="w-16 h-1 bg-marigold rounded-full mb-8" />
          <p class="text-big-dipper/70 leading-relaxed mb-6 text-base lg:text-lg">
            <span class="font-semibold text-big-dipper">Apsara Essence</span> {{ brandP1 }}
          </p>
          <p class="text-big-dipper/70 leading-relaxed mb-8 text-base lg:text-lg">
            {{ t('brand.p2') }}
          </p>
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6">
            <div class="text-center p-4 rounded-xl bg-big-dipper/5">
              <span class="block font-serif text-2xl lg:text-3xl font-bold text-marigold">100%</span>
              <span class="text-xs text-big-dipper/60 font-medium tracking-wide uppercase mt-1 block">{{ t('brand.stat1') }}</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-big-dipper/5">
              <span class="block font-serif text-2xl lg:text-3xl font-bold text-marigold">15+</span>
              <span class="text-xs text-big-dipper/60 font-medium tracking-wide uppercase mt-1 block">{{ t('brand.stat2') }}</span>
            </div>
            <div class="text-center p-4 rounded-xl bg-big-dipper/5">
              <span class="block font-serif text-2xl lg:text-3xl font-bold text-marigold">5K+</span>
              <span class="text-xs text-big-dipper/60 font-medium tracking-wide uppercase mt-1 block">{{ t('brand.stat3') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t } = useI18n()

// strip the {bold} placeholder leaving just the sentence body
const brandP1 = computed(() => t('brand.p1').replace('{bold}', '').trim())
</script>
