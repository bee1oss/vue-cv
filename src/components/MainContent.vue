<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { computed } from 'vue';

  const { t, tm } = useI18n();

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

  const experience = computed(() => tm('experience') as TimelineItem[]);

  const education = computed(() => tm('education') as TimelineItem[]);

  const aboutText = computed(() => t('aboutText'));

  const projects = computed(() => tm('projects') as Project[]);
</script>

<template>
  <main>
    <section class="section">
      <h2>{{ t('aboutMeTitle') }}</h2>
      <p v-html="aboutText.replace(/\n/g, '<br>')"></p>
      <br />
    </section>

    <section class="section">
      <h2>{{ t('experienceTitle') }}</h2>
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

    <section class="section">
      <h2>{{ t('educationTitle') }}</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="edu in education" :key="edu.title">
          <div class="timeline-date">{{ edu.date }}</div>
          <h3>{{ edu.title }}</h3>
          <p>{{ edu.company }}</p>
          <p v-if="edu.description">{{ edu.description }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>{{ t('projectsTitle') }}</h2>
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
