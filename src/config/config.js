const config = {
  data: {
    title: "Nikita & Sajal Wedding Invitation",

    description:
      "With prayers, blessings & sacred vows, two souls embark on a lifelong journey of togetherness. We invite you to celebrate the wedding of Nikita and Sajal.",

    groomName: "Sajal",
    brideName: "Nikita",

    parentBride:
      "Smt. Ishwar Devi (W/o Late Sh. Tharia Lal)\nD/o Late Smt. Poonam & Late Sh. Kishore Kumar",

    parentGroom:
      "Mrs. Sunita & Mr. Sanjay Thakkar",

    date: "2026-03-09",

    location: "Kanak Garden (Lawn)",
    address: "NH-44, G.T. Road, Murthal, Sonipat",

    maps_url: "https://maps.app.goo.gl/YrYMDrP6VveMZkGx5",
    maps_embed:
      "https://www.google.com/maps?q=Kanak+Garden+Murthal&output=embed",

    ogImage: "/images/og-image.jpg",
    favicon: "/images/favicon.ico",

   agenda: [
  {
    slug: "ring-ceremony",
    title: "Ring Ceremony",
    date: "2026-03-07",
    startTime: "07:00 PM onwards",
    timeZone: "Asia/Kolkata",
    location: "Kanak Garden – Pool Side Banquet",
    themeTag: "A Promise of Forever",
    detail: {
      heroImage: "/images/events/ring-ceremony.jpg"
    },
    description: "An evening to celebrate the beginning of forever."
  },

  {
    slug: "sangeet",
    title: "Sangeet",
    date: "2026-03-08",
    startTime: "08:00 PM onwards",
    timeZone: "Asia/Kolkata",
    location: "Kanak Garden – Raj Kumar Banquet",
    themeTag: "Music · Dance · Joy",
    detail: {
      heroImage: "/images/events/sangeet.webp"
    },
    description: "Music, dance and joyful celebrations with loved ones."
  },

  {
    slug: "haldi",
    title: "Haldi",
    date: "2026-03-09",
    startTime: "09:00 AM onwards",
    timeZone: "Asia/Kolkata",
    location: "Kanak Garden (Lawn)",
    themeTag: "Turmeric & Blessings",
    detail: {
      heroImage: "/images/haldi.jpg"
    },
    description: "A joyful morning of haldi rituals, laughter, and family blessings."
  },

  
  {
    slug: "baraat-reception",
    title: "Reception of Baraat",
    date: "2026-03-09",
    startTime: "08:00 PM onwards",
    timeZone: "Asia/Kolkata",
    location: "Kanak Garden (Lawn)",
    themeTag: "Grand Welcome",
    detail: {
      heroImage: "/images/events/baraat.jpg"
    }
  },

  {
    slug: "dinner-day-3",
    title: "Dinner",
    date: "2026-03-09",
    startTime: "09:00 PM onwards",
    timeZone: "Asia/Kolkata",
    location: "Kanak Garden (Lawn)",
    themeTag: "Celebration Feast",
    detail: {
      heroImage: "/images/events/dinner.jpg"
    }
  },

  {
    slug: "doli",
    title: "Doli",
    date: "2026-03-09",
    startTime: "4:00 AM onwards",
    timeZone: "Asia/Kolkata",
    location: "Taron Ki Chhaon Mein",
    themeTag: "Emotional Farewell",
    detail: {
      heroImage: "/images/events/doli.jpg"
    },
    description: "A heartfelt farewell under the stars."
  }
]

,

    audio: {
      src: "/audio/song.mp3",
      title: "Wedding Shehnai",
      autoplay: true,
      loop: true,
      toastDuration: 3000
    }
  }
};

export default config;
