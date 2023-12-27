<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import ViewBalance from './components/ViewBalance.vue'
import AddTransaction from './components/AddTransaction.vue'
import AppFooter from './components/AppFooter.vue'
import { ref, computed, onMounted } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const transactions = ref<{ id: number; title: string; description: string; amount: number }[]>([
  { id: 1, title: 'Bought a macbook', description: 'lorem', amount: -2200.5 },
  { id: 2, title: 'Sold my game', description: 'lorem', amount: 2200 },
  { id: 3, title: 'Allowance', description: 'lorem', amount: 800 },
  { id: 4, title: 'Christmas gift', description: 'lorem', amount: -700 }
])

function generateUniqueId() {
  return Math.floor(Math.random() * 1000000)
}
function saveToLocalstorage() {
  localStorage.setItem('et_transactions', JSON.stringify(transactions.value))
}

// get total
const totalBalance = computed(() => {
  return transactions.value?.reduce((acc, curr) => {
    acc = acc + curr.amount

    return acc
  }, 0)
})

// get income and expense
const balanceBrief = computed(() => {
  const incomes = transactions.value?.reduce((acc, curr) => {
    if (curr.amount > 0) {
      acc = acc + curr.amount
    }

    return acc
  }, 0)
  const expenses = transactions.value?.reduce((acc, curr) => {
    if (curr.amount < 0) {
      acc = acc + curr.amount
    }

    return acc
  }, 0)

  return { incomes, expenses }
})

// handle new transaction
const onCreate = (data: { title: string; description: string; amount: number }) => {
  transactions.value.push({
    ...data,
    id: generateUniqueId()
  })

  saveToLocalstorage()

  toast.success('Transaction added!')
}
// handle delete transaction
const onDelete = (id: number) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)

  saveToLocalstorage()

  toast.success('Transaction deleted!')
}

onMounted(() => {
  if (localStorage.getItem('et_transactions')) {
    const savedTransactions = JSON.parse(localStorage.getItem('et_transactions')!)
    transactions.value = savedTransactions
  }
})
</script>

<template>
  <AppHeader />

  <main class="container" style="margin-top: 36px">
    <div class="gridbox">
      <div class="tr-balance">
        <div style="margin-bottom: 20px"><ViewBalance :totalBalance="totalBalance" /></div>

        <IncomeExpenses :values="balanceBrief" />
      </div>

      <div class="tr-history">
        <TransactionList :transactions="transactions" @deleteTransaction="onDelete" />
      </div>

      <div class="add-tr"><AddTransaction @transactionCreated="onCreate" /></div>
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
    align-self: flex-start;
    grid-row-start: 2;
    grid-column: span 5 / span 5;
  }
  .tr-balance {
    height: fit-content;
    grid-column: span 5 / span 5;
  }
  .add-tr {
    grid-row: span 3 / span 3;
    grid-column: span 7 / span 7;
  }
}

/* @media (min-width: 1024px) {
  .gridbox {
    grid-template-columns: repeat(2, 1fr);
  }
} */
</style>
