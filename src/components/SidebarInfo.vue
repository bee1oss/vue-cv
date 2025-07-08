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
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Typescript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'C#', level: 75 },
    { name: 'C++', level: 85 },
    { name: 'Php', level: 70 },
    { name: 'Rust', level: 65 },
    { name: 'Rust', level: 65 },
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
    { name: 'Laravel', icon: 'fas fa-terminal' }, // Pro ikon yerine alternatif
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'Go Fiber', icon: 'fas fa-feather' },
    { name: 'PHP', icon: 'fab fa-php' },
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
      <h2>Diller</h2>
      <p v-for="lang in languages" :key="lang.name">
        <i class="fas fa-language"></i> {{ lang.name }} - {{ lang.level }}
      </p>
    </div>

    <div class="info-item">
      <h2>Frameworks</h2>
      <p v-for="fram in frameworks" :key="fram.name"><i :class="fram.icon"></i> {{ fram.name }}</p>
    </div>
  </aside>
</template>

<style scoped lang="scss">
  /* Sidebar stilleri buraya */
</style>
