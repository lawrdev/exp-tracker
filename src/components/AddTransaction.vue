<script setup lang="ts">
import { reactive, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const formVlaues = reactive<{
  title: string
  amount?: number
  description: string
}>({
  title: '',
  description: ''
})

const emit = defineEmits(['transactionCreated'])

const onSubmit = () => {
  if (!formVlaues.amount || !formVlaues.title) {
    toast.error('Fields are missing!')
    return
  }

  const newTransaction = {
    amount: formVlaues.amount,
    description: formVlaues.description,
    title: formVlaues.title
  }

  emit('transactionCreated', newTransaction)

  formVlaues.amount = undefined
  formVlaues.title = ''
  formVlaues.description = ''
}
</script>

<template>
  <div>
    <h3 style="margin-bottom: 6px">Add a Transaction</h3>

    <div class="form-container">
      <form class="form" id="addTransactionForm" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            v-model="formVlaues.title"
            type="text"
            id="title"
            name="title"
            placeholder="Enter Transaction Title"
            :required="true"
          />
        </div>
        <div class="form-group">
          <label for="description">Add a description (optional)</label>
          <textarea
            v-model="formVlaues.description"
            name="description"
            id="description"
            rows="3"
            placeholder="Enter a description"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="amount">Amount <span>(negative - expense, positive - income)</span></label>
          <input
            v-model="formVlaues.amount"
            type="number"
            id="amount"
            name="amount"
            placeholder="-70.50"
            :required="true"
          />
        </div>

        <button type="submit" class="tr-btn">Add Transaction</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
input,
textarea {
  border-radius: var(--border-radius-md);
  display: block;
  font-size: 16px;
  padding: 10px 16px;
  width: 100%;

  background-color: transparent;
  border: 1px solid #414141;
  color: var(--vt-c-text-dark-2);

  resize: none;
  font-family: inherit;
}
input::placeholder,
textarea::placeholder {
  font-size: 14px !important;
  opacity: 0.6 !important;
}
input:focus,
textarea:focus {
  outline: 0 !important;
  border-color: var(--vt-c-text-dark-2);
}
.form-container {
  margin-top: 10px;
  width: 100%;
  background:
    linear-gradient(#181818, #181818) padding-box,
    linear-gradient(108deg, transparent 80%, #e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  padding: 12px 24px 62px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: var(--vt-c-text-dark-2);
  font-weight: 600;
  font-size: 12px;
}

label span {
  font-weight: 600;
  color: var(--vt-c-text-dark-2);
}

.tr-btn {
  font-size: 12px;
  padding: 14px 32px;
  width: 100%;
  max-width: 170px;
  margin: 14px 0px 10px;
  border: none;
  outline: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  /* text-transform: uppercase; */
  border: 1px solid #414141;
  background-color: var(--vt-c-black-mute);
  color: var(--vt-c-text-dark-2);
  font-weight: 500;
  transition: 0.6s;
  box-shadow: 6px 20px 40px #1f4c6520;
  -webkit-box-reflect: below 2px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
}
.tr-btn:active {
  scale: 0.92;
}
.tr-btn:hover {
  background: rgb(2, 29, 78);
  background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
  color: var(--vt-c-black);
}
</style>
