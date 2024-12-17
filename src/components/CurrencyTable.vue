<template>
    <div class="container mt-4">
      <h3 class="text-center mb-3" id="table-title">Cotações de outras moedas</h3>
  
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Bandeira</th>
            <th scope="col">Moeda</th>
            <th scope="col">Código</th>
            <th scope="col">Cotação (R$)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="currency in currencies" :key="currency.codein">
            <td>{{ currency.flag }}</td>
            <td>{{ currency.name }}</td>
            <td>{{ currency.codein }}</td>
            <td>{{ formatQuote(currency.value) }}</td>
          </tr>
        </tbody>
      </table>
  
      <p v-if="error" class="text-danger text-center mt-3">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { getCurrencyQuotes } from '../api/currencyQuotes';
  
  export default defineComponent({
    name: 'CurrencyTable',
    setup() {
      const currencies = ref<any[]>([]); // Lista de cotações
      const error = ref<string | null>(null);
  
      const fetchCurrencies = async () => {
        try {
          currencies.value = await getCurrencyQuotes();
        } catch (err: any) {
          error.value = err.message;
        }
      };
  
      const formatQuote = (value: string) => `R$ ${parseFloat(value).toFixed(2)}`;
  
      onMounted(() => {
        fetchCurrencies();
      });
  
      return { currencies, error, formatQuote };
    },
  });
  </script>
  