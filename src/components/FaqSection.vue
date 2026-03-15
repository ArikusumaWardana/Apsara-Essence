<template>
  <section id="faq" class="py-24 lg:py-32 bg-big-dipper">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-marigold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">{{ t('faq.tag') }}</span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-star-white mb-4">
          {{ t('faq.title1') }} <span class="text-marigold italic">{{ t('faq.title2') }}</span>
        </h2>
        <div class="w-16 h-1 bg-marigold rounded-full mx-auto" />
      </div>

      <!-- Accordion -->
      <div class="space-y-4" data-aos="fade-up" data-aos-delay="150">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="rounded-xl border transition-all duration-300"
          :class="openIndex === index ? 'border-marigold/40 bg-big-dipper-light/30' : 'border-star-white/10 bg-transparent hover:border-star-white/20'"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span class="font-medium text-star-white text-sm lg:text-base pr-4">{{ t(item.qKey) }}</span>
            <span
              class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              :class="openIndex === index ? 'bg-marigold text-big-dipper rotate-180' : 'bg-star-white/10 text-star-white'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-48 opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-48 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="openIndex === index" class="overflow-hidden">
              <p class="px-6 pb-5 text-star-white/50 text-sm leading-relaxed">
                {{ t(item.aKey) }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqItems = [
  { qKey: 'faq.q1', aKey: 'faq.a1' },
  { qKey: 'faq.q2', aKey: 'faq.a2' },
  { qKey: 'faq.q3', aKey: 'faq.a3' },
  { qKey: 'faq.q4', aKey: 'faq.a4' },
]
</script>
