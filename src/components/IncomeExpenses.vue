<script setup lang="ts">
import { formatPrice } from '@/helpers/functions'
</script>

<template>
  <div class="income-expense inverse-color">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+{{ formatPrice(0) }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-{{ formatPrice(0) }}</p>
    </div>
  </div>
</template>

<style scoped>
h4 {
  font-weight: 600;
  font-size: px;
  text-transform: uppercase;
  margin-bottom: 0px;
}
.income-expense {
  display: flex;
  box-shadow: var(--box-shadow);
  padding-inline: 20px;
  padding-block: 10px;
  justify-content: space-between;
  border-radius: var(--border-radius-md);
}

.income-expense > div {
  flex: 1;
  text-align: center;
}
.income-expense > div:first-of-type {
  border-right: 1px solid var(--vt-c-divider-dark-1);
}
.money {
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}
</style>
