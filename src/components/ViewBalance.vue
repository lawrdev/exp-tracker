<script setup lang="ts">
import { formatPrice } from '@/helpers/functions'
import { defineProps } from 'vue'

const { totalBalance } = defineProps<{
  totalBalance: number
}>()
</script>

<template>
  <div>
    <h3 style="border: none; padding-bottom: 0px; margin-bottom: 1px">YOUR BALANCE</h3>
    <p class="main-balance">{{ formatPrice(totalBalance) }}</p>
  </div>
</template>

<style scoped>
.main-balance {
  font-size: 2.4rem;
  line-height: 1;
}
</style>
