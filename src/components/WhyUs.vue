<template>
  <section id="why-us" class="py-24 lg:py-32 bg-star-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-marigold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">{{ t('why.tag') }}</span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-big-dipper mb-4">
          {{ t('why.title1') }} <span class="text-syrah italic">{{ t('why.title2') }}</span>
        </h2>
        <div class="w-16 h-1 bg-marigold rounded-full mx-auto mb-6" />
        <p class="text-big-dipper/60 max-w-xl mx-auto text-base lg:text-lg">
          {{ t('why.subtitle') }}
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.titleKey"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
          class="group text-center p-8 rounded-2xl bg-white/60 border border-big-dipper/5 hover:border-marigold/30 hover:shadow-xl hover:shadow-marigold/5 transition-all duration-500 hover:-translate-y-1"
        >
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-marigold/10 flex items-center justify-center group-hover:bg-marigold/20 group-hover:scale-110 transition-all duration-300">
            <component :is="feature.icon" class="w-7 h-7 text-marigold" :stroke-width="1.5" />
          </div>
          <h3 class="font-serif text-lg font-bold text-big-dipper mb-3 group-hover:text-syrah transition-colors">
            {{ t(feature.titleKey) }}
          </h3>
          <p class="text-big-dipper/55 text-sm leading-relaxed">
            {{ t(feature.descKey) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Leaf, Moon, Wind, Sparkles } from 'lucide-vue-next';
import { useI18n } from '../composables/useI18n';

const { t } = useI18n()

const features = [
  { icon: Leaf, titleKey: 'why.f1.title', descKey: 'why.f1.desc' },
  { icon: Moon, titleKey: 'why.f2.title', descKey: 'why.f2.desc' },
  { icon: Wind, titleKey: 'why.f3.title', descKey: 'why.f3.desc' },
  { icon: Sparkles, titleKey: 'why.f4.title', descKey: 'why.f4.desc' },
]
</script>
