<template>
  <section id="variants" class="py-24 lg:py-32 bg-big-dipper">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-marigold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">{{ t('products.tag') }}</span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-star-white mb-4">
          {{ t('products.title') }} <span class="text-marigold italic">{{ t('products.titleAccent') }}</span>
        </h2>
        <div class="w-16 h-1 bg-marigold rounded-full mx-auto mb-6" />
        <p class="text-star-white/60 max-w-xl mx-auto text-base lg:text-lg">
          {{ t('products.subtitle') }}
        </p>
      </div>

      <!-- Product Cards -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-10">
        <div
          v-for="(product, index) in products"
          :key="product.name"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 150"
          class="group relative bg-big-dipper-light/30 rounded-2xl overflow-hidden border border-star-white/10 hover:border-marigold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-marigold/10"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-72">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-big-dipper via-transparent to-transparent opacity-60" />
            <!-- Badge -->
            <span class="absolute top-4 right-4 bg-marigold text-big-dipper text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {{ product.badge }}
            </span>
          </div>

          <!-- Content -->
          <div class="p-6 lg:p-8">
            <h3 class="font-serif text-xl lg:text-2xl font-bold text-star-white mb-3 group-hover:text-marigold transition-colors">
              {{ product.name }}
            </h3>
            <p class="text-star-white/50 text-sm leading-relaxed mb-6">
              {{ t(product.descKey) }}
            </p>
            <!-- Scent notes (not translated) -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="note in product.notes"
                :key="note"
                class="text-xs px-3 py-1 rounded-full border border-star-white/15 text-star-white/60"
              >
                {{ note }}
              </span>
            </div>
            <a
              :href="waLink(product.waKey)"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 w-full py-3 bg-marigold/10 text-marigold font-semibold text-sm rounded-xl border border-marigold/30 hover:bg-marigold hover:text-big-dipper transition-all duration-300"
            >
              {{ t('products.cta') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';

const { t } = useI18n()

function waLink(key) {
  return 'https://wa.me/?text=' + encodeURIComponent(t(key))
}

// Product names, badges, and scent notes stay the same regardless of language
const products = [
  {
    name: 'Midnight Spice',
    badge: 'Best Seller',
    image: '/images/midnight-spice.png',
    descKey: 'products.desc.midnight',
    notes: ['Kayu Manis', 'Cengkeh', 'Pala'],
    waKey: 'products.wa.midnight',
  },
  {
    name: 'Serene Sandalwood',
    badge: 'Premium',
    image: '/images/serene-sandalwood.png',
    descKey: 'products.desc.serene',
    notes: ['Cendana', 'Melati', 'Vetiver'],
    waKey: 'products.wa.serene',
  },
  {
    name: 'Heritage Blossom',
    badge: 'New',
    image: '/images/heritage-blossom.png',
    descKey: 'products.desc.heritage',
    notes: ['Kenanga', 'Serai', 'Jahe'],
    waKey: 'products.wa.heritage',
  },
]
</script>
