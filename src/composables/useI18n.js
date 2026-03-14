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
    'hero.title1': { id: 'Sentuhan Rempah Nusantara', en: 'The Touch of Indonesian Spices' },
    'hero.title2': { id: 'untuk Ketenangan Jiwa.', en: 'for Inner Peace.' },
    'hero.subtitle': {
        id: 'Aromaterapi alami fungsional untuk meredakan stres dan insomnia.',
        en: 'Functional natural aromatherapy to relieve stress and insomnia.',
    },
    'hero.cta': { id: 'Jelajahi Koleksi', en: 'Explore Collection' },

    // ── Brand / About ────────────────────────────
    'brand.tag': { id: 'Our Philosophy', en: 'Our Philosophy' },
    'brand.title1': { id: 'Keindahan Alam', en: 'The Beauty of Nature' },
    'brand.title2': { id: 'dalam Setiap Tetes', en: 'in Every Drop' },
    'brand.p1': {
        id: '{bold} lahir dari kekayaan rempah Nusantara yang telah digunakan selama berabad-abad dalam tradisi penyembuhan alami. Kami memadukan kearifan lokal dengan riset modern untuk menciptakan aromaterapi yang benar-benar fungsional.',
        en: '{bold} is born from the richness of Indonesian spices that have been used for centuries in natural healing traditions. We blend local wisdom with modern research to create truly functional aromatherapy.',
    },
    'brand.p2': {
        id: 'Setiap produk kami diformulasikan secara khusus menggunakan bahan-bahan alami pilihan—kayu manis, cengkeh, pala, dan rempah Nusantara lainnya—untuk membantu Anda menemukan ketenangan di tengah kesibukan hidup.',
        en: 'Each of our products is specially formulated using carefully selected natural ingredients—cinnamon, cloves, nutmeg, and other Indonesian spices—to help you find tranquility amidst the bustle of life.',
    },
    'brand.stat1': { id: 'Alami', en: 'Natural' },
    'brand.stat2': { id: 'Rempah', en: 'Spices' },
    'brand.stat3': { id: 'Pelanggan', en: 'Customers' },

    // ── Products ──────────────────────────────────
    'products.tag': { id: 'Our Collection', en: 'Our Collection' },
    'products.title': { id: 'Koleksi', en: 'Curated' },
    'products.titleAccent': { id: 'Pilihan', en: 'Collection' },
    'products.subtitle': {
        id: 'Tiga varian aromaterapi yang dirancang khusus untuk memenuhi kebutuhan relaksasi Anda.',
        en: 'Three aromatherapy variants specially designed to meet your relaxation needs.',
    },
    'products.cta': { id: 'Pesan Sekarang', en: 'Order Now' },
    'products.desc.midnight': {
        id: 'Perpaduan hangat kayu manis, cengkeh, dan pala yang menenangkan pikiran di malam hari. Ideal untuk meningkatkan kualitas tidur Anda.',
        en: 'A warm blend of cinnamon, cloves, and nutmeg that calms the mind at night. Ideal for improving your sleep quality.',
    },
    'products.desc.serene': {
        id: 'Aroma cendana yang lembut berpadu dengan sentuhan melati, menghadirkan kedamaian mendalam untuk meditasi dan relaksasi.',
        en: 'The soft scent of sandalwood blended with hints of jasmine, bringing deep peace for meditation and relaxation.',
    },
    'products.desc.heritage': {
        id: 'Inspirasi dari resep warisan leluhur Nusantara. Perpaduan bunga kenanga, serai, dan jahe yang menyegarkan jiwa.',
        en: 'Inspired by ancestral Indonesian recipes. A blend of ylang-ylang, lemongrass, and ginger that refreshes the soul.',
    },
    'products.wa.midnight': {
        id: 'Halo, saya tertarik dengan Apsara Essence varian Midnight Spice. Boleh info lebih lanjut?',
        en: 'Hello, I\'m interested in the Apsara Essence Midnight Spice variant. Could you share more info?',
    },
    'products.wa.serene': {
        id: 'Halo, saya tertarik dengan Apsara Essence varian Serene Sandalwood. Boleh info lebih lanjut?',
        en: 'Hello, I\'m interested in the Apsara Essence Serene Sandalwood variant. Could you share more info?',
    },
    'products.wa.heritage': {
        id: 'Halo, saya tertarik dengan Apsara Essence varian Heritage Blossom. Boleh info lebih lanjut?',
        en: 'Hello, I\'m interested in the Apsara Essence Heritage Blossom variant. Could you share more info?',
    },

    // ── Why Us ────────────────────────────────────
    'why.tag': { id: 'Why Choose Us', en: 'Why Choose Us' },
    'why.title1': { id: 'Mengapa', en: 'Why' },
    'why.title2': { id: 'Apsara Essence?', en: 'Apsara Essence?' },
    'why.subtitle': {
        id: 'Kami menghadirkan kualitas terbaik dalam setiap produk dengan komitmen terhadap alam dan kesehatan Anda.',
        en: 'We deliver the finest quality in every product with a commitment to nature and your well-being.',
    },
    'why.f1.title': { id: '100% Natural', en: '100% Natural' },
    'why.f1.desc': {
        id: 'Seluruh bahan berasal dari alam tanpa bahan kimia sintetis. Aman untuk penggunaan harian.',
        en: 'All ingredients are sourced from nature without synthetic chemicals. Safe for daily use.',
    },
    'why.f2.title': { id: 'Rempah Lokal', en: 'Local Spices' },
    'why.f2.desc': {
        id: 'Bahan baku langsung dari petani rempah lokal Indonesia, mendukung ekonomi berkelanjutan.',
        en: 'Raw materials directly from local Indonesian spice farmers, supporting a sustainable economy.',
    },
    'why.f3.title': { id: 'Mental Wellness', en: 'Mental Wellness' },
    'why.f3.desc': {
        id: 'Diformulasikan khusus untuk membantu mengelola stres, kecemasan, dan gangguan tidur.',
        en: 'Specially formulated to help manage stress, anxiety, and sleep disorders.',
    },
    'why.f4.title': { id: 'Tahan Lama', en: 'Long-lasting' },
    'why.f4.desc': {
        id: 'Aroma yang konsisten dan tahan lama hingga 8 jam, memberikan manfaat sepanjang hari.',
        en: 'Consistent and long-lasting fragrance up to 8 hours, providing benefits throughout the day.',
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
        id: 'Ya, kami melayani pengiriman ke seluruh wilayah Indonesia melalui berbagai ekspedisi terpercaya. Pemesanan dapat dilakukan melalui WhatsApp kami.',
        en: 'Yes, we ship to all regions of Indonesia through various trusted couriers. Orders can be placed via our WhatsApp.',
    },
    'faq.q4': {
        id: 'Berapa lama ketahanan aroma setiap produk?',
        en: 'How long does the fragrance of each product last?',
    },
    'faq.a4': {
        id: 'Setiap pouch aromaterapi kami dirancang untuk bertahan 4-8 minggu dengan penggunaan normal. Intensitas aroma dapat diperkuat dengan meremas lembut pouch secara berkala.',
        en: 'Each of our aromatherapy pouches is designed to last 4–8 weeks with normal use. You can refresh the fragrance intensity by gently squeezing the pouch periodically.',
    },
    'faq.q5': {
        id: 'Apakah ada jaminan uang kembali?',
        en: 'Is there a money-back guarantee?',
    },
    'faq.a5': {
        id: 'Kami memberikan garansi kepuasan 14 hari. Jika Anda tidak puas dengan produk yang diterima, silakan hubungi kami melalui WhatsApp untuk proses pengembalian.',
        en: 'We offer a 14-day satisfaction guarantee. If you are not satisfied with the product received, please contact us via WhatsApp for the return process.',
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
