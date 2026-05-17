<template>
  <footer class="bg-syrah text-star-white/70 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
        <!-- Brand -->
        <div>
          <a href="#home" class="inline-block mb-4">
            <span class="font-serif text-2xl font-bold text-marigold">Apsara<span class="text-star-white"> Essence</span></span>
          </a>
          <p class="text-sm leading-relaxed text-star-white/50 mb-6">
            {{ t('footer.about') }}
          </p>
          <!-- Social Icons -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener"
              :aria-label="social.name"
              class="w-10 h-10 rounded-full bg-star-white/10 flex items-center justify-center hover:bg-marigold hover:text-big-dipper transition-all duration-300 group"
            >
              <component :is="social.icon" class="w-4 h-4 text-star-white/60 group-hover:text-big-dipper transition-colors" :stroke-width="1.8" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-serif text-lg font-bold text-star-white mb-5">{{ t('footer.quickLinks') }}</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.id">
              <a
                :href="'#' + link.id"
                class="text-sm hover:text-marigold transition-colors"
                @click.prevent="scrollTo(link.id)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-serif text-lg font-bold text-star-white mb-5">{{ t('footer.contact') }}</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-3">
              <Mail class="w-4 h-4 mt-0.5 text-marigold flex-shrink-0" :stroke-width="1.8" />
              <span>apsaraessence@gmail.com</span>
            </li>
            <li class="flex items-start gap-3">
              <Phone class="w-4 h-4 mt-0.5 text-marigold flex-shrink-0" :stroke-width="1.8" />
              <span>+62 8980546910</span>
            </li>
            <li class="flex items-start gap-3">
              <MapPin class="w-4 h-4 mt-0.5 text-marigold flex-shrink-0" :stroke-width="1.8" />
              <span>Denpasar, Bali, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-star-white/10 pt-8">
        <p class="text-center text-xs text-star-white/40">
          &copy; {{ new Date().getFullYear() }} {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-vue-next'
import { computed, h } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const quickLinks = computed(() => [
  { id: 'home', label: t('nav.home') },
  { id: 'about', label: t('nav.about') },
  { id: 'variants', label: t('nav.variants') },
  { id: 'why-us', label: t('nav.whyUs') },
  { id: 'faq', label: t('nav.faq') },
])

const TikTok = {
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', {
        d: 'M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.295-1.92-1.629-3.008H12v16.588a3.982 3.982 0 0 1-3.986 3.158 3.982 3.982 0 0 1-3.987-3.987 3.982 3.982 0 0 1 4.229-3.971V9.548a7.948 7.948 0 0 0-1.047-.069 7.98 7.98 0 0 0-7.98 7.98 7.98 7.98 0 0 0 7.98 7.981 7.98 7.98 0 0 0 7.979-7.98V8.708a10.158 10.158 0 0 0 5.825 1.822V10.59a6.132 6.132 0 0 1-3.142-.904 6.155 6.155 0 0 1-1.494-1.123z',
      }),
    ]),
}

const socials = [
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'TikTok', icon: TikTok, url: 'https://www.tiktok.com/@apsaraessence_' },
]
</script>
