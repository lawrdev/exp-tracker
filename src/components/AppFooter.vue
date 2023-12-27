<script setup lang="ts">
import IconGithubVue from './icons/IconGithub.vue'
</script>

<template>
  <footer>
    <p>
      <a href="https://github.com/lawrdev" target="_blank"><IconGithubVue /> lawrdev</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--vt-c-divider-dark-1);
  padding: 20px 20px 32px;
}
a {
  font-weight: 400;
  font-size: 14px;
}
</style>
