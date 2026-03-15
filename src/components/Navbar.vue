<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      scrolled
        ? 'bg-big-dipper/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2 group" @click.prevent="scrollTo('home')">
        <span class="font-serif text-xl lg:text-2xl font-bold tracking-wide text-marigold group-hover:text-tangerine transition-colors">
          Apsara<span class="text-star-white"> Essence</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-8">
        <ul class="flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="'#' + link.id"
              class="text-sm font-medium tracking-wide transition-colors duration-300 hover:text-marigold"
              :class="scrolled ? 'text-star-white/80' : 'text-star-white/90'"
              @click.prevent="scrollTo(link.id)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Language Toggle -->
        <div class="flex items-center gap-1 bg-star-white/10 rounded-full p-0.5">
          <button
            @click="setLocale('id')"
            :class="[
              'px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300',
              locale === 'id'
                ? 'bg-marigold text-big-dipper'
                : 'text-star-white/60 hover:text-star-white',
            ]"
          >
            ID
          </button>
          <button
            @click="setLocale('en')"
            :class="[
              'px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300',
              locale === 'en'
                ? 'bg-marigold text-big-dipper'
                : 'text-star-white/60 hover:text-star-white',
            ]"
          >
            EN
          </button>
        </div>
      </div>

      <!-- Mobile / Tablet Toggle -->
      <button
        class="lg:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span
          :class="[
            'block w-6 h-0.5 rounded transition-all duration-300',
            scrolled ? 'bg-star-white' : 'bg-star-white md:bg-star-white',
            mobileOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        />
        <span
          :class="[
            'block w-6 h-0.5 rounded transition-all duration-300',
             scrolled ? 'bg-star-white' : 'bg-star-white md:bg-star-white',
            mobileOpen ? 'opacity-0' : '',
          ]"
        />
        <span
          :class="[
            'block w-6 h-0.5 rounded transition-all duration-300',
             scrolled ? 'bg-star-white' : 'bg-star-white md:bg-star-white',
            mobileOpen ? '-rotate-45 -translate-y-2' : '',
          ]"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-big-dipper/95 backdrop-blur-md border-t border-star-white/10">
        <ul class="flex flex-col gap-1 px-6 py-4">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="'#' + link.id"
              class="block py-3 text-star-white/80 hover:text-marigold transition-colors text-sm font-medium tracking-wide"
              @click.prevent="scrollTo(link.id); mobileOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <!-- Mobile Language Toggle -->
        <div class="flex items-center gap-2 px-6 pb-4">
          <button
            @click="setLocale('id')"
            :class="[
              'px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300',
              locale === 'id'
                ? 'bg-marigold text-big-dipper'
                : 'bg-star-white/10 text-star-white/60',
            ]"
          >
            ID
          </button>
          <button
            @click="setLocale('en')"
            :class="[
              'px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300',
              locale === 'en'
                ? 'bg-marigold text-big-dipper'
                : 'bg-star-white/10 text-star-white/60',
            ]"
          >
            EN
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, locale, setLocale } = useI18n()

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = computed(() => [
  { id: 'home', label: t('nav.home') },
  { id: 'about', label: t('nav.about') },
  { id: 'variants', label: t('nav.variants') },
  { id: 'why-us', label: t('nav.whyUs') },
  { id: 'faq', label: t('nav.faq') },
])

function onScroll() {
  scrolled.value = window.scrollY > 60
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
