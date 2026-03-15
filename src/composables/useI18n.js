import { computed, ref } from 'vue'

const locale = ref('id')

const translations = {
    // ── Navbar ────────────────────────────────────
    'nav.home': { id: 'Home', en: 'Home' },
    'nav.about': { id: 'About', en: 'About' },
    'nav.variants': { id: 'Variants', en: 'Variants' },
    'nav.whyUs': { id: 'Why Us', en: 'Why Us' },
    'nav.faq': { id: 'FAQ', en: 'FAQ' },

    // ── Hero ──────────────────────────────────────
    'hero.tag': { id: 'Natural Aromatherapy', en: 'Natural Aromatherapy' },
    'hero.title1': { id: 'Apsara Essence', en: 'Apsara Essence' },
    'hero.title2': { id: 'Pure Essence, Pure You', en: 'Pure Essence, Pure You' },
    'hero.subtitle': {
        id: 'Aromaterapi alami fungsional untuk meredakan stres dan insomnia.',
        en: 'Functional natural aromatherapy to relieve stress and insomnia.',
    },
    'hero.cta': { id: 'Jelajahi Koleksi', en: 'Explore Collection' },

    // ── Brand / About ────────────────────────────
    'brand.tag': { id: 'Our Philosophy', en: 'Our Philosophy' },
    'brand.title1': { id: 'Keindahan Alam', en: 'The Beauty of Nature' },
    'brand.title2': { id: 'dalam Setiap Aroma', en: 'in Every Scent' },
    'brand.p1': {
        id: '{bold} lahir dari kekayaan rempah Nusantara yang telah digunakan selama berabad-abad dalam tradisi penyembuhan alami. Kami memadukan kearifan lokal dengan riset modern untuk menciptakan aromaterapi yang benar-benar fungsional.',
        en: '{bold} is born from the richness of Indonesian spices that have been used for centuries in natural healing traditions. We blend local wisdom with modern research to create truly functional aromatherapy.',
    },
    'brand.p2': {
        id: 'Setiap produk kami diformulasikan secara khusus menggunakan bahan-bahan alami pilihan, seperti kayu manis, cengkeh, pala, bunga lavender, rosemary, chamomile, dan rempah Nusantara lainnya untuk membantu Anda menemukan ketenangan di tengah kesibukan hidup.',
        en: 'Each of our products is specially formulated using carefully selected natural ingredients, such as cinnamon, cloves, nutmeg, lavender, rosemary, chamomile, and other Indonesian spices to help you find tranquility amidst the bustle of life.',
    },
    'brand.stat1': { id: 'Alami', en: 'Natural' },
    'brand.stat2': { id: 'Rempah', en: 'Spices' },
    'brand.stat3': { id: 'Sintetis', en: 'Synthetic' },

    // ── Products ──────────────────────────────────
    'products.tag': { id: 'Our Collection', en: 'Our Collection' },
    'products.title': { id: 'Koleksi', en: 'Curated' },
    'products.titleAccent': { id: 'Pilihan', en: 'Collection' },
    'products.subtitle': {
        id: 'Dua varian aromaterapi yang dirancang khusus untuk memenuhi kebutuhan relaksasi Anda.',
        en: 'Two aromatherapy variants specially designed to meet your relaxation needs.',
    },
    'products.cta': { id: 'Pesan Sekarang', en: 'Order Now' },
    'products.desc.mori': {
        id: 'Diformulasikan khusus untuk meredakan ketegangan, membantu Anda mengatasi sulit tidur, mempercepat waktu terlelap, dan meningkatkan kualitas tidur agar tidak mudah terbangun di tengah malam.',
        en: 'Specially formulated to relieve tension, helping you overcome sleep difficulties, fall asleep faster, and improve sleep quality to prevent waking up in the middle of the night.',
    },
    'products.desc.hana': {
        id: 'Menghadirkan kombinasi yang lengkap untuk mencapai relaksasi total. Mampu membantu Anda terlelap lebih cepat, mengurangi risiko mimpi buruk, dan sangat cocok untuk meredakan insomnia kronis.',
        en: 'Delivers a complete combination to achieve total relaxation. Helps you fall asleep faster, reduces the risk of nightmares, and is perfectly suited for relieving chronic insomnia.',
    },
    'products.wa.mori': {
        id: 'Halo, saya tertarik dengan Apsara Essence varian Apsara Mori. Boleh info lebih lanjut?',
        en: 'Hello, I\'m interested in the Apsara Essence Apsara Mori variant. Could you share more info?',
    },
    'products.wa.hana': {
        id: 'Halo, saya tertarik dengan Apsara Essence varian Apsara Hana. Boleh info lebih lanjut?',
        en: 'Hello, I\'m interested in the Apsara Essence Apsara Hana variant. Could you share more info?',
    },

    // ── Why Us ────────────────────────────────────
    'why.tag': { id: 'Why Choose Us', en: 'Why Choose Us' },
    'why.title1': { id: 'Mengapa', en: 'Why' },
    'why.title2': { id: 'Apsara Essence?', en: 'Apsara Essence?' },
    'why.subtitle': {
        id: 'Karena Apsara Essence menawarkan:',
        en: 'Because Apsara Essence offers:',
    },
    'why.f1.title': { id: 'Alami & Herbal', en: 'Natural & Herbal' },
    'why.f1.desc': {
        id: 'Menggunakan 100% bahan alami pilihan yang kaya akan manfaat herbal untuk kesehatan pikiran Anda.',
        en: 'Uses carefully selected 100% natural ingredients rich in herbal benefits for your mental health.',
    },
    'why.f2.title': { id: 'Atasi Gangguan Tidur', en: 'Reduce Sleep Disorders' },
    'why.f2.desc': {
        id: 'Diformulasikan secara khusus sehingga efektif untuk membantu mengurangi berbagai masalah gangguan tidur.',
        en: 'Specially formulated to be highly effective in helping to reduce various sleep disorder problems.',
    },
    'why.f3.title': { id: 'Aroma Menenangkan', en: 'Calming Aromas' },
    'why.f3.desc': {
        id: 'Hadir dengan beberapa pilihan varian yang memberikan sensasi aroma yang sangat menenangkan.',
        en: 'Available in several variant choices that provide a deeply calming aroma sensation.',
    },
    'why.f4.title': { id: 'Modern & Fleksibel', en: 'Modern & Flexible' },
    'why.f4.desc': {
        id: 'Tampilan produk yang modern dan instagrammable, serta sangat fleksibel untuk diletakkan di mana saja.',
        en: 'Features a modern, instagrammable look, and is highly flexible to be placed anywhere.',
    },

    // ── FAQ ───────────────────────────────────────
    'faq.tag': { id: 'FAQ', en: 'FAQ' },
    'faq.title1': { id: 'Pertanyaan', en: 'Frequently Asked' },
    'faq.title2': { id: 'Umum', en: 'Questions' },
    'faq.q1': {
        id: 'Apakah produk Apsara Essence aman digunakan setiap hari?',
        en: 'Is Apsara Essence safe for daily use?',
    },
    'faq.a1': {
        id: 'Ya, seluruh produk kami terbuat dari bahan-bahan alami pilihan yang aman untuk penggunaan harian. Kami tidak menggunakan bahan kimia sintetis atau pengawet berbahaya.',
        en: 'Yes, all our products are made from carefully selected natural ingredients that are safe for daily use. We do not use synthetic chemicals or harmful preservatives.',
    },
    'faq.q2': {
        id: 'Bagaimana cara menggunakan aromaterapi Apsara Essence?',
        en: 'How do I use Apsara Essence aromatherapy?',
    },
    'faq.a2': {
        id: 'Anda dapat meletakkan pouch aromaterapi di samping bantal, meja kerja, atau di dalam lemari pakaian. Aroma akan keluar secara alami dan bertahan hingga 8 jam.',
        en: 'You can place the aromatherapy pouch next to your pillow, on your desk, or inside your wardrobe. The fragrance is released naturally and lasts up to 8 hours.',
    },
    'faq.q3': {
        id: 'Apakah tersedia pengiriman ke seluruh Indonesia?',
        en: 'Do you ship nationwide across Indonesia?',
    },
    'faq.a3': {
        id: 'Saat ini pengiriman baru tersedia di sekitaran daerah Denpasar saja, karena produk Apsara Essence baru saja diluncurkan.',
        en: 'Currently, delivery is only available around the Denpasar area, as Apsara Essence products have just been launched.',
    },
    'faq.q4': {
        id: 'Berapa lama ketahanan aroma setiap produk?',
        en: 'How long does the fragrance of each product last?',
    },
    'faq.a4': {
        id: 'Setiap pouch aromaterapi kami dirancang untuk bertahan 4-8 minggu dengan penggunaan normal. Intensitas aroma dapat diperkuat dengan meremas lembut pouch secara berkala.',
        en: 'Each of our aromatherapy pouches is designed to last 4–8 weeks with normal use. You can refresh the fragrance intensity by gently squeezing the pouch periodically.',
    },

    // ── Footer ────────────────────────────────────
    'footer.about': {
        id: 'Aromaterapi alami dari kekayaan rempah Nusantara. Solusi fungsional untuk ketenangan jiwa dan kesehatan mental Anda.',
        en: 'Natural aromatherapy from the richness of Indonesian spices. A functional solution for inner peace and your mental well-being.',
    },
    'footer.quickLinks': { id: 'Quick Links', en: 'Quick Links' },
    'footer.contact': { id: 'Contact Us', en: 'Contact Us' },
    'footer.copyright': {
        id: 'Apsara Essence. All rights reserved. Crafted with ❤ in Indonesia.',
        en: 'Apsara Essence. All rights reserved. Crafted with ❤ in Indonesia.',
    },

    // ── WhatsApp ──────────────────────────────────
    'wa.message': {
        id: 'Halo Apsara Essence, saya tertarik dengan produk aromaterapi Anda. Boleh info lebih lanjut?',
        en: 'Hello Apsara Essence, I\'m interested in your aromatherapy products. Could you share more info?',
    },
}

export function useI18n() {
    function t(key) {
        const entry = translations[key]
        if (!entry) return key
        return entry[locale.value] || entry['id'] || key
    }

    function setLocale(lang) {
        locale.value = lang
    }

    const currentLocale = computed(() => locale.value)

    return { t, locale: currentLocale, setLocale }
}
