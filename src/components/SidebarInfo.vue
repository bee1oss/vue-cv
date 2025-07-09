<script setup lang="ts">
  interface Skill {
    name: string;
    level: number;
  }

  interface Language {
    name: string;
    level: string;
  }

  const contactInfo = {
    email: 'begahaciyew@gmail.com',
    phone: '+90 548 825 35 27',
    location: 'Lefkoşa, Kıbrıs',
  };

  const skills: Skill[] = [
    { name: 'Linux', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node Js', level: 90 },
    { name: 'React', level: 80 },
    { name: 'Typescript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'C#', level: 75 },
    { name: 'C++', level: 85 },
    { name: 'Php', level: 80 },
    { name: 'Rust', level: 65 },
    { name: 'Go', level: 70 },
    { name: 'HTML/CSS', level: 90 },
  ];

  const languages: Language[] = [
    { name: 'Türkçe', level: 'Ana Dil' },
    { name: 'Türkmence', level: 'Ana Dil' },
    { name: 'Rusca', level: 'İleri Seviye' },
    { name: 'İngilizce', level: 'Orta Seviye' },
  ];
  const frameworks = [
    { name: 'Vue.js', icon: 'fab fa-vuejs' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'React Native (Expo)', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Express.js', icon: 'fas fa-server' },
    { name: 'NestJS', icon: 'fas fa-cubes' },
    { name: 'Laravel', icon: 'fas fa-terminal' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'Go Fiber', icon: 'fas fa-feather' },
  ];

  const websec = [
    { name: 'Burp Suite', icon: 'fas fa-bug' },
    { name: 'OWASP ZAP', icon: 'fas fa-shield-alt' },
    { name: 'Nikto', icon: 'fas fa-search' },
    { name: 'Nmap', icon: 'fas fa-network-wired' },
    { name: 'SQLMap', icon: 'fas fa-database' },
    { name: 'XSStrike', icon: 'fas fa-exclamation-triangle' },
    { name: 'Hydra', icon: 'fas fa-user-secret' },
    { name: 'Postman', icon: 'fas fa-paper-plane' },
    { name: 'Gobuster', icon: 'fas fa-folder-open' },
  ];

  const databases = [
    { name: 'MongoDB', icon: 'fas fa-database' }, // NoSQL
    { name: 'PostgreSQL', icon: 'fas fa-database' }, // SQL
    { name: 'MySQL', icon: 'fas fa-database' },
  ];
</script>

<template>
  <aside class="sidebar">
    <div class="info-item">
      <h2>İletişim</h2>
      <p><i class="fas fa-envelope"></i> {{ contactInfo.email }}</p>
      <p><i class="fas fa-phone"></i> {{ contactInfo.phone }}</p>
      <p><i class="fas fa-map-marker-alt"></i> {{ contactInfo.location }}</p>
    </div>

    <div class="info-item">
      <h2>Yetenekler</h2>
      <div class="skill-item" v-for="skill in skills" :key="skill.name">
        <div class="skill-name">
          <span>{{ skill.name }}</span>
          <span>{{ skill.level }}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" :style="{ width: `${skill.level}%` }"></div>
        </div>
      </div>
    </div>
    <div class="info-item">
      <h2>Veritabanları</h2>
      <p v-for="db in databases" :key="db.name"><i :class="db.icon"></i> {{ db.name }}</p>
    </div>

    <div class="info-item">
      <h2>Frameworks</h2>
      <p v-for="fram in frameworks" :key="fram.name"><i :class="fram.icon"></i> {{ fram.name }}</p>
    </div>

    <div class="info-item">
      <h2>Güvenlik Araçları</h2>
      <p v-for="sec in websec" :key="sec.name"><i :class="sec.icon"></i> {{ sec.name }}</p>
    </div>

    <div class="info-item">
      <h2>Yabancı Diller</h2>
      <p v-for="lang in languages" :key="lang.name">
        <i class="fas fa-language"></i> {{ lang.name }} - {{ lang.level }}
      </p>
    </div>
  </aside>
</template>

<style scoped lang="scss">
  /* Sidebar stilleri buraya */
</style>
