<template>
  <header style="border-bottom: 1px solid var(--vt-c-divider-dark-1)">
    <h2 class="header">Expense Tracker</h2>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  max-width: 400px;
  margin-inline: auto;
}

@media (min-width: 768px) {
  .header {
    max-width: 768px;
    text-align: start;
  }
}
@media (min-width: 1024px) {
  .header {
    max-width: 1024px;
    text-align: start;
  }
}
</style>
