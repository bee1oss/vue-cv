<script setup lang="ts">
interface Skill {
  name: string
  level: number
}

interface Language {
  name: string
  level: string
}

const contactInfo = {
  email: 'email@example.com',
  phone: '(555) 123 45 67',
  location: 'Şehir, Ülke'
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'UI/UX Tasarım', level: 75 }
]

const languages: Language[] = [
  { name: 'Türkçe', level: 'Ana Dil' },
  { name: 'İngilizce', level: 'İleri Seviye' },
  { name: 'Almanca', level: 'Orta Seviye' }
]

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
      <h2>Sertifikalar</h2>
      <p v-for="cert in certificates" :key="cert">
        <i class="fas fa-certificate"></i> {{ cert }}
      </p>
    </div>
  </aside>
</template>

<style scoped lang="scss">
/* Sidebar stilleri buraya */
</style>