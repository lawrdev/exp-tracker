<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import ViewBalance from './components/ViewBalance.vue'
import AddTransaction from './components/AddTransaction.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main class="container" style="margin-top: 36px">
    <div class="gridbox">
      <div class="tr-balance">
        <div style="margin-bottom: 20px"><ViewBalance /></div>

        <IncomeExpenses />
      </div>

      <div class="tr-history">
        <TransactionList />
      </div>

      <div class="add-tr"><AddTransaction /></div>
    </div>
  </main>

  <AppFooter />
</template>

<style scoped>
.gridbox {
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  gap: 32px;
}

@media (min-width: 768px) {
  .gridbox {
    grid-template-columns: repeat(12, 1fr);
    column-gap: 42px;
    row-gap: 46px;
  }
  .tr-history {
    grid-row-start: 2;
    grid-column: span 5 / span 5;
  }
  .tr-balance {
    grid-column: span 5 / span 5;
  }
  .add-tr {
    grid-row: span 2 / span 2;
    grid-column: span 7 / span 7;
  }
}

/* @media (min-width: 1024px) {
  .gridbox {
    grid-template-columns: repeat(2, 1fr);
  }
} */
</style>
