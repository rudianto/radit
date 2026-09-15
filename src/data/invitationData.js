export const invitationData = {
  child: {
    fullName: "Raditya Putra Mulyana",
    nickname: "Radit",
    callName: "Ananda Raditya",
    tagline: "Tasyakuran & Walimatul Khitan",
    parents: {
      father: "Bpk. Mulyana",
      mother: "Ibu Ratna Pertiwi",
    },
    birthOrder: "Putra Pertama",
  },
  
  meta: {
    title: "Undangan Khitanan Raditya Putra Mulyana",
    greetingDefault: "Tamu Undangan",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  },

  quotes: {
    arabic: "اللَّهُمَّ بَارِكْ فِيهِ وَأَنْبِتْهُ نَبَاتًا حَسَنًا وَاجْعَلْهُ بَارًّا بِوَالِدَيْهِ",
    meaning: "Ya Allah, berkahilah ananda kami ini, tumbuhkanlah ia dengan pertumbuhan yang baik, dan jadikanlah ia anak yang berbakti kepada kedua orang tuanya, taat kepada agama, serta berguna bagi nusa dan bangsa.",
    source: "Doa Syukuran Khitan",
  },

  event: {
    // Target date for countdown (Year, Month index 0-11, Day, Hour, Minute)
    targetDate: "2026-10-25T09:00:00+07:00",
    formattedDate: "Minggu, 25 Oktober 2026",
    hijriDate: "14 Rabiul Akhir 1448 H",
    
    sessions: [
      {
        name: "Prosesi Doa & Tasyakuran",
        time: "08.30 - 10.00 WIB",
        description: "Pembacaan Ayat Suci Al-Qur'an, Tausiyah Singkat & Doa Bersama untuk Ananda Raditya.",
        icon: "BookOpen",
      },
      {
        name: "Ramah Tamah & Resepsi",
        time: "10.00 - 14.00 WIB",
        description: "Syukuran, santap siang bersama, ucapan selamat & foto kenangan bersama keluarga.",
        icon: "Utensils",
      }
    ],

    location: {
      venue: "Kediaman Keluarga Bpk. Mulyana (Puri Anggrek Residence)",
      subVenue: "Blok B3 No. 12, Kompleks Cendrawasih Permai",
      city: "Bandung, Jawa Barat",
      googleMapsUrl: "https://maps.google.com/?q=Bandung",
      wazeUrl: "https://waze.com/ul?q=Bandung",
      embedMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311634563855!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid",
    }
  },

  digitalEnvelope: {
    note: "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberikan tanda kasih secara cashless melalui nomor rekening berikut:",
    accounts: [
      {
        bank: "BCA",
        accountNumber: "7820394812",
        accountHolder: "MULYANA",
        color: "from-blue-600 to-blue-800",
        logoText: "BCA",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "1310019283746",
        accountHolder: "MULYANA",
        color: "from-sky-700 to-indigo-900",
        logoText: "MANDIRI",
      },
      {
        bank: "BSI (Bank Syariah)",
        accountNumber: "7128394015",
        accountHolder: "MULYANA",
        color: "from-emerald-600 to-teal-800",
        logoText: "BSI",
      },
      {
        bank: "DANA / GoPay",
        accountNumber: "081223344556",
        accountHolder: "MULYANA",
        color: "from-cyan-500 to-blue-600",
        logoText: "E-WALLET",
      }
    ],
    giftAddress: {
      recipient: "Keluarga Bpk. Mulyana (Khitanan Raditya)",
      phone: "0812-2334-4556",
      fullAddress: "Puri Anggrek Residence Blok B3 No. 12, Kompleks Cendrawasih Permai, Bandung, Jawa Barat 40152",
    }
  },

  gallery: [
    {
      id: 1,
      title: "Senyum Ceria Raditya",
      caption: "Anak yang periang, selalu membawa kehangatan dan tawa di rumah.",
      category: "Ceria",
      tag: "Pangeran Cilik",
      color: "from-blue-500 to-cyan-400",
      image: "/radit-1.jpe",
    },
    {
      id: 2,
      title: "Pemberani & Gemar Berpetualang",
      caption: "Semangat belajar hal baru dan suka menjelajahi alam terbuka.",
      category: "Aktivitas",
      tag: "Anak Tangguh",
      color: "from-sky-500 to-blue-600",
    },
    {
      id: 3,
      title: "Anak Sholeh & Berbakti",
      caption: "Rajin belajar mengaji dan mencintai sholat berjamaah.",
      category: "Ibadah",
      tag: "Calon Pemimpin",
      color: "from-amber-400 to-yellow-600",
    },
    {
      id: 4,
      title: "Momen Bahagia Bersama",
      caption: "Tumbuh besar didampingi kasih sayang kedua orang tua tercinta.",
      category: "Keluarga",
      tag: "Keluarga Bahagia",
      color: "from-royal-600 to-cerulean-600",
    }
  ],

  defaultWishes: [
    {
      id: 1,
      name: "Keluarga Besar Opa Suryana",
      attendance: "Hadir",
      pax: 3,
      message: "Selamat atas khitanan cucuku tersayang Raditya Putra Mulyana! Semoga lekas sembuh, menjadi anak yang sholeh, cerdas, berbakti kepada orang tua, dan menjadi kebanggaan kita semua. Aamiin ya Rabbal Alamin.",
      time: "1 jam yang lalu",
      likes: 12,
    },
    {
      id: 2,
      name: "Om Dimas & Tante Cindy",
      attendance: "Hadir",
      pax: 2,
      message: "Barakallahu fii umrik Raditya jagoan cilik! Hebat sekali sudah berani dikhitan. Semoga tumbuh menjadi pangeran pemberani yang berakhlak mulia. InsyaAllah kami hadir di Bandung!",
      time: "3 jam yang lalu",
      likes: 8,
    },
    {
      id: 3,
      name: "Ust. H. Fauzan & Santri",
      attendance: "Hadir",
      pax: 2,
      message: "Alhamdulillah wasysyukrulillah. Semoga Ananda Raditya diberkahi Allah SWT, dijadikan generasi qurani yang tangguh dan selamat dunia akhirat.",
      time: "5 jam yang lalu",
      likes: 15,
    },
    {
      id: 4,
      name: "Tante Maya Sekeluarga",
      attendance: "Hadir",
      pax: 4,
      message: "Selamat ya Mas Mulyana dan Mbak Ratna atas tasyakuran khitanan Raditya. Doa terbaik dari kami sekeluarga dari Jakarta. Semoga lancar berkah acaranya!",
      time: "Kemarin",
      likes: 6,
    }
  ]
};
