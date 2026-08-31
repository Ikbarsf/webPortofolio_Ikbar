export type Language = "en" | "id";

export type Project = {
  title: string;
  year: string;
  category: string;
  description: string;
  impact: string;
  image: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export const profile = {
  name: "Ikbar Saif Fadilah",
  email: "ikbarsaif@gmail.com",
  phone: "082244868467",
  location: "Jember, Jawa Timur",
  github: "https://github.com/Ikbarsf",
  linkedin: "https://www.linkedin.com/in/ikbar-saif-fadilah-0a6215220",
  instagram: "https://instagram.com/ikbarsf_fdlh",
  cvUrl: "/CV-Ikbar-Saif-Fadilah.pdf",
};

export const content = {
  en: {
    nav: ["Home", "About", "Projects", "Experience", "Contact"],
    hero: {
      eyebrow: "Web Developer · Data Engineering · Computer Vision",
      titleLine1: "Hi, I'm Ikbar.",
      titleLine2: "I build useful",
      titleLine3: "Digital experiences",
      subtitle:
        "Computer Science fresh graduate from the University of Jember with hands-on experience in responsive websites, UI/UX, API integration, data analysis, and computer vision models.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      downloadCv: "Download CV",
      available: "Open to Web Developer, Frontend Developer, Data Engineer roles, and IT Support",
    },
    stats: [
      { value: "3.73", label: "Computer Science GPA" },
      { value: "4+", label: "Featured projects" },
      { value: "3 yrs", label: "Organization experience" },
      { value: "2026", label: "Fresh graduate" },
    ],
    about: {
      label: "About Me",
      title: "A developer combining Website, Data, and Problem solving.",
      body:
        "Skilled in IT support, website development, and experienced in data analysis. Possess a strong combination of technical expertise, leadership, and teamwork, and am ready to contribute professionally.",
      highlights: [
        "Main focus on Frontend Development with React and Next.js.",
        "Experienced in company profile, personal profile, and data-driven web applications.",
        "Leadership background as Head of Human Resources at HMIF University of Jember.",
      ],
    },
    skills: {
      label: "Tech Stack",
      title: "Tools I use to build digital products.",
      groups: [
        { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
        { title: "Backend", items: ["PHP", "Laravel", "Express.js", "REST API", "MySQL"] },
        { title: "Data & AI", items: ["Python", "Data Analysis", "Machine Learning", "Computer Vision", "Image Processing"] },
        { title: "Workflow", items: ["Git", "GitHub", "Figma", "Excel", "Word", "PowerPoint"] },
      ],
    },
    projects: {
      label: "Selected Projects",
      title: "Projects that show web, data, and AI capabilities.",
      visitDemo: "Visit Project",
      visitCode: "GitHub Code",
      comingSoon: "Link Coming Soon",
      items: [
        {
          title: "Sallagri E-Learning Platform",
          year: "2026",
          category: "Web Platform",
          description:
            "An interactive e-learning platform for English lessons in the agriculture sector, including materials, quizzes, and practical exercises.",
          impact: "Combines a structured learning flow with an approachable web interface.",
          image: "/sallagri.png",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Learning Experience"],
          demoUrl: "https://sallagri.com/",
        },
        {
          title: "Oral Disease Classification",
          year: "2025",
          category: "Computer Vision",
          description:
            "An image-input oral disease classification app built from dataset processing, augmentation, model training, and web inference.",
          impact: "Compares deep learning algorithm performance through evaluation metrics to identify the best architecture.",
          image: "/oral-disease.png",
          stack: ["Python", "Deep Learning", "Image Processing", "Web App"],
          githubUrl: "https://github.com/Ikbarsf/klasifikasi-penyakit-mulut.git"
        },
        {
          title: "Azwa Architecture Company Profile",
          year: "2025",
          category: "Client Website",
          description:
            "A company profile website for an architecture client, covering requirements analysis, UI implementation, API integration, testing, and debugging.",
          impact: "Delivers a responsive brand interface aligned with client requirements.",
          image: "/azwa.png",
          stack: ["React", "API Integration", "Frontend", "UI Implementation"],
          demoUrl: "https://www.azwadesignstudio.com/",
        },
        {
          title: "Fish Classification App",
          year: "2024",
          category: "AI Application",
          description:
            "A fish classification application with frontend implementation based on Figma design and support for data training workflows.",
          impact: "Bridges machine learning models with a user-friendly interface.",
          image: "/fish.png",
          stack: ["Figma", "Frontend", "Python", "Machine Learning"],
          githubUrl: "https://github.com/aeights/Fish-Classification.git"
        },
      ] as Project[],
    },
    experience: {
      label: "Experience",
      title: "Professional and leadership experience.",
      items: [
        {
          role: "Freelance Full Stack Developer",
          org: "Sindology Multiuser",
          location: "Jember, Indonesia",
          period: "Sep 2024 - Present",
          points: [
            "Initiated and collaborated with an independent team to build end-to-end custom web solutions.",
            "Focused on responsive company/personal profile websites with engaging UI and optimized performance.",
          ],
        },
        {
          role: "Web Developer",
          org: "Datanode Naralogi Siberkarya",
          location: "Madiun, Indonesia",
          period: "Feb 2024 - Jun 2024",
          points: [
            "Performed data analysis before app development and designed intuitive UI/UX flows.",
            "Studied API documentation and developed frontend implementation aligned with design requirements.",
          ],
        },
        {
          role: "Full Stack Developer Trainee",
          org: "Binar Academy",
          location: "Jakarta, Indonesia",
          period: "Aug 2023 - Jan 2024",
          points: [
            "Studied website design, frontend development, and backend development.",
          ],
        },
        {
          role: "Head of Human Resources",
          org: "HMIF University of Jember",
          location: "Jember, Indonesia",
          period: "Jan 2024 - Dec 2024",
          points: [
            "Managed member development, performance monitoring, organizational follow-ups, and regeneration programs.",
          ],
        },
      ],
    },
    education: {
      label: "Education",
      title: "Academic foundation in computer science and AI research.",
      items: [
        {
          school: "University of Jember",
          degree: "Bachelor of Computer Science",
          period: "Aug 2021 - Jan 2026",
          detail:
            "GPA 3.73/4.00. Thesis focused on comparative analysis of deep learning algorithms for oral disease classification.",
        },
        {
          school: "SMA Negeri 4 Jember",
          degree: "Natural Sciences",
          period: "Jul 2018 - May 2021",
          detail:
            "Active in leadership as President of Karawitan Club, Secretary of Scout Extracurricular, and PIK-R volunteer.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Have a matching role or project? Let's connect.",
      body:
        "I am open to Web Developer, Frontend Developer, Data Engineer opportunities, and web/data-based project collaborations.",
      emailCta: "Send Email",
      instagramCta: "Instagram",
      githubCta: "View GitHub",
      linkedinCta: "LinkedIn",
    },
  },
  id: {
    nav: ["Beranda", "Tentang", "Project", "Pengalaman", "Kontak"],
    hero: {
      eyebrow: "Frontend-focused Web Developer · Data Engineering · Computer Vision",
      titleLine1: "Halo, saya Ikbar.",
      titleLine2: "Saya membangun",
      titleLine3: "pengalaman digital bermanfaat.",
      subtitle:
        "Fresh graduate Ilmu Komputer Universitas Jember dengan pengalaman membangun website responsif, UI/UX, integrasi API, analisis data, dan model computer vision.",
      primaryCta: "Lihat Project",
      secondaryCta: "Hubungi Saya",
      downloadCv: "Unduh CV",
      available: "Terbuka untuk Web Developer, Frontend Developer, dan Data Engineer roles",
    },
    stats: [
      { value: "3.73", label: "GPA Ilmu Komputer" },
      { value: "4+", label: "Project unggulan" },
      { value: "3 th", label: "Pengalaman organisasi" },
      { value: "2026", label: "Fresh graduate" },
    ],
    about: {
      label: "Tentang Saya",
      title: "Developer yang menggabungkan Website, Data, dan Problem solving.",
      body:
        "Terampil dalam dukungan TI, pengembangan situs web, dan berpengalaman dalam analisis data. Memiliki kombinasi yang kuat antara keahlian teknis, kepemimpinan, dan kerja tim, serta siap berkontribusi secara profesional.",
      highlights: [
        "Fokus utama pada Frontend Development dengan React dan Next.js.",
        "Berpengalaman membuat company profile, personal profile, dan aplikasi berbasis data.",
        "Memiliki latar organisasi sebagai Head of Human Resources HMIF Universitas Jember.",
      ],
    },
    skills: {
      label: "Tech Stack",
      title: "Tools yang saya gunakan untuk membangun produk digital.",
      groups: [
        { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
        { title: "Backend", items: ["PHP", "Laravel", "Express.js", "REST API", "MySQL"] },
        { title: "Data & AI", items: ["Python", "Data Analysis", "Machine Learning", "Computer Vision", "Image Processing"] },
        { title: "Workflow", items: ["Git", "GitHub", "Figma", "Excel", "Word", "PowerPoint"] },
      ],
    },
    projects: {
      label: "Project Terpilih",
      title: "Project yang menunjukkan kemampuan web, data, dan AI.",
      visitDemo: "Lihat Project",
      visitCode: "Kode GitHub",
      comingSoon: "Link Belum Tersedia",
      items: [
        {
          title: "Sallagri E-Learning Platform",
          year: "2026",
          category: "Web Platform",
          description:
            "Platform e-learning interaktif untuk pembelajaran Bahasa Inggris di sektor agrikultur, termasuk materi, quiz, dan latihan praktis.",
          impact: "Menggabungkan pengalaman belajar yang terstruktur dengan UI web yang mudah digunakan.",
          image: "/sallagri.png",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Learning Experience"],
          demoUrl: "https://sallagri.com/",
        },
        {
          title: "Oral Disease Classification",
          year: "2025",
          category: "Computer Vision",
          description:
            "Aplikasi klasifikasi penyakit mulut berbasis input gambar, dibangun dari proses pengolahan dataset, augmentasi data, training model, dan website inference.",
          impact: "Membandingkan performa algoritma deep learning melalui metrik evaluasi untuk memilih arsitektur terbaik.",
          image: "/oral-disease.png",
          stack: ["Python", "Deep Learning", "Image Processing", "Web App"],
          githubUrl: "https://github.com/Ikbarsf/klasifikasi-penyakit-mulut.git"
        },
        {
          title: "Azwa Architecture Company Profile",
          year: "2025",
          category: "Client Website",
          description:
            "Website company profile untuk klien arsitektur, mencakup analisis kebutuhan, slicing UI sesuai desain, integrasi API, testing, dan debugging.",
          impact: "Menghasilkan interface brand yang responsif dan konsisten dengan kebutuhan klien.",
          image: "/azwa.png",
          stack: ["React", "API Integration", "Frontend", "UI Implementation"],
          demoUrl: "https://www.azwadesignstudio.com/",
        },
        {
          title: "Fish Classification App",
          year: "2024",
          category: "AI Application",
          description:
            "Aplikasi klasifikasi ikan dengan frontend berdasarkan desain Figma serta dukungan proses training data.",
          impact: "Menjembatani model machine learning dengan interface yang mudah digunakan oleh pengguna.",
          image: "/fish.png",
          stack: ["Figma", "Frontend", "Python", "Machine Learning"],
          githubUrl: "https://github.com/aeights/Fish-Classification.git"
        },
      ] as Project[],
    },
    experience: {
      label: "Pengalaman",
      title: "Pengalaman profesional dan kepemimpinan.",
      items: [
        {
          role: "Freelance Full Stack Developer",
          org: "Sindology Multiuser",
          location: "Jember, Indonesia",
          period: "Sep 2024 - Sekarang",
          points: [
            "Menginisiasi dan berkolaborasi dalam tim independen untuk membangun solusi web custom end-to-end.",
            "Fokus pada website profil perusahaan/personal yang responsif dengan UI menarik dan performa optimal.",
          ],
        },
        {
          role: "Web Developer",
          org: "Datanode Naralogi Siberkarya",
          location: "Madiun, Indonesia",
          period: "Feb 2024 - Jun 2024",
          points: [
            "Melakukan analisis data sebelum pengembangan aplikasi dan merancang UI/UX yang intuitif.",
            "Mempelajari dokumentasi API dan mengembangkan frontend sesuai desain agar implementasi konsisten.",
          ],
        },
        {
          role: "Full Stack Developer Trainee",
          org: "Binar Academy",
          location: "Jakarta, Indonesia",
          period: "Aug 2023 - Jan 2024",
          points: [
            "Mempelajari desain website, pengembangan frontend, dan pengembangan backend.",
          ],
        },
        {
          role: "Head of Human Resources",
          org: "HMIF Universitas Jember",
          location: "Jember, Indonesia",
          period: "Jan 2024 - Dec 2024",
          points: [
            "Mengelola pengembangan potensi anggota, monitoring performa, tindak lanjut masalah organisasi, dan kaderisasi.",
          ],
        },
      ],
    },
    education: {
      label: "Pendidikan",
      title: "Fondasi akademik di ilmu komputer dan riset AI.",
      items: [
        {
          school: "Universitas Jember",
          degree: "Bachelor of Computer Science",
          period: "Aug 2021 - Jan 2026",
          detail:
            "GPA 3.73/4.00. Skripsi berfokus pada analisis komparatif algoritma deep learning untuk klasifikasi penyakit mulut.",
        },
        {
          school: "SMA Negeri 4 Jember",
          degree: "Natural Sciences",
          period: "Jul 2018 - May 2021",
          detail:
            "Aktif di organisasi dan kepemimpinan sebagai President Karawitan Club, Secretary Scout Extracurricular, dan volunteer PIK-R.",
        },
      ],
    },
    contact: {
      label: "Kontak",
      title: "Punya role atau project yang cocok? Mari terhubung.",
      body:
        "Saya terbuka untuk kesempatan Web Developer, Frontend Developer, Data Engineer, serta kolaborasi project berbasis web dan data.",
      emailCta: "Kirim Email",
      instagramCta: "Instagram",
      githubCta: "Lihat GitHub",
      linkedinCta: "LinkedIn",
    },
  },
} as const;
