<script setup lang="ts">
  interface TimelineItem {
    date: string;
    title: string;
    company?: string;
    description?: string;
    items?: string[];
  }

  interface Project {
    title: string;
    description: string;
    links: {
      demo?: string;
      github?: string;
    };
  }

  const aboutText = `Yazılım serüvenim, lisede Haspolat Meslek Lisesi'nde bilgisayar bölümü öğrencisiyken başladı. O dönem temel programlama dillerini öğrenmeye başladım ve bilgisayarla sadece kullanıcı olarak değil, üretici olarak da ilgilenmeye başladım. Bu ilgi, zamanla büyük bir tutkuya dönüştü.

Liseden sonra üniversite eğitimimi Belarus Devlet Üniversitesi’nde Bilgisayar Güvenliği alanında tamamladım. Üniversite yıllarımda backend geliştirmeye yoğunlaştım. Node.js, Express.js, NestJS gibi modern teknolojileri kullanarak projeler geliştirdim. Mezuniyet projemde, üniversite ders programı için tam işlevli bir otomasyon sistemi geliştirdim. Bu projede MERN Stack (MongoDB, Express.js, React.js, Node.js) teknolojilerini kullandım.

Mezuniyetin ardından mobil uygulama geliştirmeye yöneldim ve React Native ile, özellikle Expo CLI altyapısını kullanarak pratik, işlevsel mobil projeler geliştirdim. Aynı zamanda oyun geliştirmeye de ilgi duymaya başladım; Unity ile 2D roguelike oyunlar üzerine çalışıyorum. Backend, veritabanı ve sistem güvenliği konularında sağlam bir temelim var ve her geçen gün bu bilgileri yeni projelerle daha da ileri taşımaya çalışıyorum.

Yazılım dünyasındaki yolculuğumda hem yeni teknolojileri öğrenmeye hem de kendimi farklı alanlarda geliştirmeye tutkuyla devam ediyorum.`;

  const experience: TimelineItem[] = [
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
  ];

  const education: TimelineItem[] = [
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
  ];

  const projects: Project[] = [
    {
      title: 'Üniversite Ders Programı Otomasyonu',
      description:
        'MERN Stack kullanılarak geliştirilen bu sistem, öğretmenler ve öğrencilerin ders programlarına hızlı erişim sağlar. Otomatik program üretimi, toplu veri ekleme ve gelişmiş filtreleme özellikleri ile eğitim planlamacılarının iş yükünü azaltır.',
      links: {
        github: '#',
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
        'React Native (Expo CLI) ve TypeScript ile geliştirilen mobil uygulama, teslimat yapan kişiler için otomatik KDV ve toplam hesaplama sunar. JSON veri yapısıyla ürün yönetimi yapılabilir ve kullanıcı dostu arayüz içerir.',
      links: {
        github: '#',
      },
    },
    /*{
      title: 'E-Ticaret Platformu',
      description:
        'React ve Node.js kullanılarak geliştirilen tam donanımlı bir e-ticaret sistemi. Güvenli ödeme entegrasyonu, kullanıcı yönetimi ve performans optimizasyonu ile hazır ticari çözümler sunar.',
      links: {
        github: '#',
      },
    },
    {
      title: 'Portföy Yönetim Sistemi',
      description:
        'Sanatçılar ve geliştiriciler için içerik yönetimi kolaylığı sağlayan kişiselleştirilebilir portföy oluşturma aracı. Modern tasarımı ve kolay kullanımıyla öne çıkar.',
      links: {
        github: '#',
      },
    },
    {
      title: 'API Tabanlı Görev Yönetim Paneli',
      description:
        'NestJS ve MongoDB kullanılarak geliştirilen bu uygulama, ekip içi görev takibini kolaylaştırır. JWT ile kimlik doğrulama, rol bazlı yetkilendirme ve temiz kod mimarisi ile dikkat çeker.',
      links: {
        github: '#',
      },
    },*/
  ];
</script>

<template>
  <main class="main-section">
    <section>
      <h2>Hakkımda</h2>
      <p v-html="aboutText.replace(/\n/g, '<br>')"></p>
      <br />
    </section>

    <section>
      <h2>Deneyim</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="exp in experience" :key="exp.title">
          <div class="timeline-date">{{ exp.date }}</div>
          <h3>{{ exp.title }}</h3>
          <p>{{ exp.company }}</p>
          <ul v-if="exp.items">
            <li v-for="(item, index) in exp.items" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>Eğitim</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="edu in education" :key="edu.title">
          <div class="timeline-date">{{ edu.date }}</div>
          <h3>{{ edu.title }}</h3>
          <p>{{ edu.company }}</p>
          <p v-if="edu.description">{{ edu.description }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Projeler</h2>
      <div class="project-card" v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="project-links">
          <a
            v-if="project.links.demo"
            :href="project.links.demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-external-link-alt"></i> Canlı Demo
          </a>

          <a
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
