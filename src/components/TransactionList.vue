<script setup lang="ts">
import { formatPrice } from '@/helpers/functions'
import { defineProps, defineEmits } from 'vue'

interface TransactionProp {
  id: number
  title: string
  amount: number
  description?: string
}
const { transactions } = defineProps<{
  transactions: TransactionProp[]
}>()
const emits = defineEmits(['deleteTransaction'])

function onDeleteTransaction(id: number) {
  emits('deleteTransaction', id)
}
</script>

<template>
  <h3>Transaction History</h3>
  <p v-show="transactions.length === 0" style="color: var(--vt-c-text-dark-2)">
    No transaction to show. Please add a transaction.
  </p>
  <ul id="transaction-list" class="transaction-list" v-show="transactions.length > 0">
    <li v-for="transaction in transactions" :key="transaction.id">
      <div :class="[transaction.amount < 0 ? 'minus' : 'plus', 'list']">
        {{ transaction.title }}
        <span>{{ formatPrice(transaction.amount) }}</span>
      </div>
      <div class="list-effect">
        <button class="delete-btn" @click="onDeleteTransaction(transaction.id)">x</button>
      </div>
    </li>
  </ul>
</template>
