// src/i18n.ts
import { createI18n } from 'vue-i18n';

const messages = {
  tr: {
    contact: 'İletişim',
    location: 'Lefkoşa, Kıbrıs',
    skills: 'Yetenekler',
    databases: 'Veritabanları',
    frameworks: 'Frameworks',
    securityTools: 'Güvenlik Araçları',
    languagesTitle: 'Yabancı Diller',
    profileTitle: 'Yazılım Mühendisi / Bilgisayar Güvenliği',
    rights: '2025 Begench Hajyyev. Tüm hakları saklıdır.',
    aboutMeTitle: 'Hakkımda',
    experienceTitle: 'Deneyim',
    educationTitle: 'Eğitim',
    projectsTitle: 'Projeler',
    languages: [
      { name: 'Türkçe', level: 'Ana Dil' },
      { name: 'Türkmence', level: 'Ana Dil' },
      { name: 'Rusça', level: 'İleri Seviye' },
      { name: 'İngilizce', level: 'Orta Seviye' },
    ],
    aboutText: `Yazılım serüvenim, lisede Haspolat Meslek Lisesi'nde bilgisayar bölümü öğrencisiyken başladı. O dönem temel programlama dillerini öğrenmeye başladım ve bilgisayarla sadece kullanıcı olarak değil, üretici olarak da ilgilenmeye başladım. Bu ilgi, zamanla büyük bir tutkuya dönüştü.

Liseden sonra üniversite eğitimimi Belarus Devlet Üniversitesi’nde Bilgisayar Güvenliği alanında tamamladım. Üniversite yıllarımda backend geliştirmeye yoğunlaştım. Node.js, Express.js, NestJS gibi modern teknolojileri kullanarak projeler geliştirdim. Mezuniyet projemde, üniversite ders programı için tam işlevli bir otomasyon sistemi geliştirdim. Bu projede MERN Stack (MongoDB, Express.js, React.js, Node.js) teknolojilerini kullandım.

Mezuniyetin ardından mobil uygulama geliştirmeye yöneldim ve React Native ile, özellikle Expo CLI altyapısını kullanarak pratik, işlevsel mobil projeler geliştirdim. Aynı zamanda oyun geliştirmeye de ilgi duymaya başladım; Unity ile 2D roguelike oyunlar üzerine çalışıyorum. Backend, veritabanı ve sistem güvenliği konularında sağlam bir temelim var ve her geçen gün bu bilgileri yeni projelerle daha da ileri taşımaya çalışıyorum.

Yazılım dünyasındaki yolculuğumda hem yeni teknolojileri öğrenmeye hem de kendimi farklı alanlarda geliştirmeye tutkuyla devam ediyorum.

`,
    experience: [
      {
        date: '2024 - Günümüz',
        title: 'Freelance Full Stack Developer',
        company: 'Freelance – Uzaktan',
        items: [
          'NestJS ve Express.js kullanarak güvenli ve ölçeklenebilir REST API servisleri geliştirdi',
          'MongoDB ve PostgreSQL veritabanlarıyla CRUD işlemleri, şema tasarımı ve optimizasyon çalışmaları yürüttü',
          'Dano şirketi için Expo CLI tabanlı mobil fatura hesaplama uygulaması geliştirdi',
          'Uygulamada dinamik KDV ve toplam tutar hesaplamaları, veri düzenleme ve UI/UX tasarımı gerçekleştirdi',
          'Frontend, mobil ve backend geliştirme süreçlerinde tam kapsamlı rol alarak projeleri başarıyla teslim etti',
        ],
      },
      {
        date: '2022 - 2024',
        title: 'Full Stack Developer',
        company: 'Belarus Devlet Üniversitesi, Akademik Programlama Departmanı – Minsk, Belarus',
        items: [
          'Frontend ve backend geliştirme süreçlerinde aktif olarak görev aldı.',
          'Ders programı otomasyonunu sağlayan web uygulaması geliştirdi.',
          'Öğrenci ve öğretmenlerin ders bilgilerine kolay erişimini sağladı.',
          'Excel dosyalarını JSON formatına dönüştüren veri analiz sistemi tasarladı.',
        ],
      },
      {
        date: '2018 - 2019',
        title: 'Stajyer Yazılım Geliştirici',
        company: 'Innovia Digital Yazılım Şirketi – Lefkoşa, Kuzey Kıbrıs',
        items: [
          'Backend projelerinin geliştirme ve dağıtım süreçlerinde aktif rol aldı.',
          'Web sunucularına SSL sertifikası kurarak veri güvenliğini artırdı.',
          'Proje yönetimi ve ekip içi iletişimi destekleyerek verimli geliştirme süreçlerine katkı sağladı.',
        ],
      },
    ],
    education: [
      {
        date: '2020 - 2024',
        title: 'Bilgisayar Güvenliği (Radyo Fiziksel Yöntemler ve Yazılım-Donanım Teknik Araçları)',
        company:
          'Belarus Devlet Üniversitesi Radyo Fizik ve Bilgisayar Teknolojileri Fakültesi, Minsk',
        description: 'Lisans Derecesi',
      },
      {
        date: '2015 - 2019',
        title: 'Bilişim Teknolojileri Alanı ',
        company: 'Haspolat Meslek Lisesi, Lefkoşa',
      },
    ],
    projects: [
      {
        title: 'Üniversite Ders Programı Otomasyonu',
        description:
          'MERN Stack kullanılarak geliştirilen bu sistem, öğretmenler ve öğrencilerin ders programlarına hızlı erişim sağlar. Otomatik program üretimi, toplu veri ekleme ve gelişmiş filtreleme özellikleri ile eğitim planlamacılarının iş yükünü azaltır.',
        links: {
          github: 'https://github.com/bee1oss/rasp.git',
        },
      },
      {
        title: 'Emlak Web Sitesi',
        description:
          'PHP (Laravel) ile geliştirilen bu platform, kullanıcıların kriterlere göre ilan aramasını ve detaylı inceleme yapmasını sağlar. Güçlü güvenlik altyapısı, etkili veritabanı yapısı ve ölçeklenebilir mimarisi ile dikkat çeker.',
        links: {
          github: '#',
        },
      },
      {
        title: 'Fatura Hesaplama Uygulaması',
        description:
          'React Native (Expo CLI) ve TypeScript ile geliştirilen mobil uygulama, teslimat yapan kişiler için otomatik KDV ve toplam tutar hesaplamaları sunar. JSON veri yapısı sayesinde ürün yönetimi yapılabilir ve kullanıcı dostu bir arayüze sahiptir.',
        links: {
          github: '#',
        },
      },
      {
        title: 'Güvenli Cookie Tabanlı Auth REST API',
        description:
          'NestJS ve PostgreSQL kullanılarak geliştirilen bu backend projesi, httpOnly cookie ve refresh token kullanarak güvenli bir kimlik doğrulama sistemi sunar. OOP ve SOLID prensiplerine uygun şekilde yapılandırılmıştır. XSS ve CSRF saldırılarına karşı koruma sağlar. Refresh token’lar veritabanında saklanır ve oturum yönetimi tam kontrol altındadır.',
        links: {
          github: 'https://github.com/bee1oss/nest-blog.git',
        },
      },
    ],
  },
  en: {
    contact: 'Contact',
    location: 'Nicosia, Cyprus',
    skills: 'Skills',
    databases: 'Databases',
    frameworks: 'Frameworks',
    securityTools: 'Security Tools',
    languagesTitle: 'Languages',
    profileTitle: 'Software Engineer / Computer Security',
    rights: '2025 Begench Hajyyev. All rights reserved.',
    aboutMeTitle: 'About me',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    projectsTitle: 'Projects',
    languages: [
      { name: 'Turkish', level: 'Native' },
      { name: 'Turkmen', level: 'Native' },
      { name: 'Russian', level: 'Advanced' },
      { name: 'English', level: 'Intermediate' },
    ],

    aboutText: `My journey in software development began during high school, when I was a computer science student at Haspolat Vocational High School. At that time, I started learning basic programming languages and became interested in computers not just as a user, but also as a creator. This interest gradually turned into a deep passion.

After high school, I completed my university education in Computer Security at Belarusian State University. During my university years, I focused heavily on backend development. I developed projects using modern technologies such as Node.js, Express.js, and NestJS. For my graduation project, I built a fully functional automation system for managing university course schedules. In this project, I used the MERN Stack (MongoDB, Express.js, React.js, Node.js).

After graduation, I turned to mobile application development and started building practical, functional mobile projects using React Native, especially with the Expo CLI. I also developed an interest in game development and have been working on 2D roguelike games using Unity. I have a strong foundation in backend, databases, and system security, and I constantly strive to push these skills further through new projects.

On my journey in the software world, I passionately continue learning new technologies and improving myself in various fields.
`,
    experience: [
      {
        date: '2024 - Present',
        title: 'Freelance Full Stack Developer',
        company: 'Freelance – Remote',
        items: [
          'Developed secure and scalable REST API services using NestJS and Express.js',
          'Performed CRUD operations, schema design, and optimization with MongoDB and PostgreSQL databases',
          'Built a mobile invoice calculation app based on Expo CLI for the company Dano',
          'Implemented dynamic VAT and total amount calculations, data editing, and UI/UX design in the app',
          'Successfully delivered projects by taking full responsibility in frontend, mobile, and backend development processes',
        ],
      },
      {
        date: '2022 - 2024',
        title: 'Full Stack Developer',
        company: 'Belarusian State University, Academic Programming Department – Minsk, Belarus',
        items: [
          'Actively participated in both frontend and backend development processes',
          'Developed a web application for course schedule automation',
          'Enabled easy access to course information for students and teachers',
          'Designed a data analysis system that converts Excel files into JSON format',
        ],
      },
      {
        date: '2018 - 2019',
        title: 'Intern Software Developer',
        company: 'Innovia Digital Software Company – Nicosia, Northern Cyprus',
        items: [
          'Played an active role in backend development and deployment processes',
          'Increased data security by installing SSL certificates on web servers',
          'Contributed to efficient development processes by supporting project management and internal team communication',
        ],
      },
    ],
    education: [
      {
        date: '2020 - 2024',
        title: 'Computer Security (Radiophysical Methods and Software-Hardware Technical Tools)',
        company:
          'Belarusian State University, Faculty of Radiophysics and Computer Technologies, Minsk',
        description: 'Bachelor’s Degree',
      },
      {
        date: '2015 - 2019',
        title: 'Information Technologies',
        company: 'Haspolat Vocational High School, Nicosia',
      },
    ],
    projects: [
      {
        title: 'University Course Schedule Automation',
        description:
          'Developed using the MERN Stack, this system allows teachers and students to access their schedules quickly. It features automatic schedule generation, bulk data import, and advanced filtering options to ease the workload of academic planners.',
        links: {
          github: 'https://github.com/bee1oss/rasp.git',
        },
      },
      {
        title: 'Real Estate Website',
        description:
          'Built with PHP (Laravel), this platform allows users to search and browse property listings based on various criteria. It stands out with a strong security infrastructure, efficient database structure, and scalable architecture.',
        links: {
          github: '#',
        },
      },
      {
        title: 'Invoice Calculation App',
        description:
          'A mobile app developed with React Native (Expo CLI) and TypeScript, offering automatic VAT and total amount calculations for delivery personnel. It uses a JSON-based structure for product management and features a user-friendly interface.',
        links: {
          github: '#',
        },
      },
      {
        title: 'Secure Cookie-based Auth REST API',
        description:
          'This backend project, developed with NestJS and PostgreSQL, implements a secure authentication system using httpOnly cookies and refresh tokens. It follows OOP and SOLID principles, protects against XSS and CSRF attacks, and stores refresh tokens in the database with full session control.',
        links: {
          github: 'https://github.com/bee1oss/nest-blog.git',
        },
      },
    ],
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'tr',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
