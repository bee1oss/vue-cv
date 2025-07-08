<script setup lang="ts">
interface TimelineItem {
  date: string
  title: string
  company?: string
  description?: string
  items?: string[]
}

interface Project {
  title: string
  description: string
  links: {
    demo?: string
    github?: string
  }
}

const aboutText = "Merhaba, ben Begench Hajyyev. X yıldır yazılım geliştirme alanında çalışıyorum. Uzmanlık alanlarım web geliştirme ve güvenlik, ve bu alanlarda birçok başarılı projeye imza attım."

const experience: TimelineItem[] = [
  {
    date: "2020 - Günümüz",
    title: "Senior Frontend Developer",
    company: "Şirket Adı, Şehir",
    items: [
      "React tabanlı web uygulamaları geliştirme",
      "UI/UX iyileştirme çalışmaları",
      "Ekip liderliği ve mentorluk"
    ]
  },
  {
    date: "2017 - 2020",
    title: "Frontend Developer",
    company: "Başka Şirket, Şehir",
    items: [
      "Responsive web tasarımı ve geliştirme",
      "JavaScript uygulamaları oluşturma",
      "Müşteri ihtiyaç analizi"
    ]
  }
]

const education: TimelineItem[] = [
  {
    date: "2013 - 2017",
    title: "Bilgisayar Mühendisliği",
    company: "Üniversite Adı, Şehir",
    description: "Lisans Derecesi"
  },
  {
    date: "2010 - 2013",
    title: "Fen Lisesi",
    company: "Lise Adı, Şehir"
  }
]

const projects: Project[] = [
  {
    title: "E-Ticaret Platformu",
    description: "React ve Node.js kullanılarak geliştirilen modern bir e-ticaret platformu. Kullanıcı dostu arayüz ve güvenli ödeme sistemleri entegre edildi.",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Portfolyo Yönetim Sistemi",
    description: "Tasarımcılar ve sanatçılar için kişiselleştirilebilir portfolyo sitesi oluşturma aracı. Kullanıcılar kolayca içerik yönetimi yapabiliyor.",
    links: {
      demo: "#"
    }
  }
]
</script>

<template>
  <main class="main-section">
    <section>
      <h2>Hakkımda</h2>
      <p>{{ aboutText }}</p>
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
          <a v-if="project.links.demo" :href="project.links.demo">
            <i class="fas fa-external-link-alt"></i> Canlı Demo
          </a>
          <a v-if="project.links.github" :href="project.links.github">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">

</style>