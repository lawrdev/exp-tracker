<script setup lang="ts">
import { formatPrice } from '@/helpers/functions'
import { reactive } from 'vue'

const transactions = reactive([
  { id: 1, title: 'Bought a macbook', amount: -320000.5 },
  { id: 2, title: 'Sold my game', amount: 120000 },
  { id: 3, title: 'Allowance', amount: 20000 },
  { id: 4, title: 'Christmas gift', amount: -70000 }
])
</script>

<template>
  <h3>Transaction History</h3>
  <ul id="transaction-list" class="transaction-list">
    <li v-for="transaction in transactions" :key="transaction.id">
      <div :class="[transaction.amount < 0 ? 'minus' : 'plus', 'list']">
        {{ transaction.title }}
        <span>{{ formatPrice(transaction.amount) }}</span>
      </div>
      <div class="list-effect">
        <button class="delete-btn">x</button>
      </div>
    </li>
  </ul>
</template>
