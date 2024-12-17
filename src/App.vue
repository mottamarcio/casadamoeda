<template>
  <div id="app" class="bg-dark text-light vh-100 d-flex flex-column">
    <!-- Navbar -->
    <Navbar />

    <!-- Conteúdo Principal -->
    <div class="container my-auto">
      <QuoteDisplay />
      <CurrencyTable />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import QuoteDisplay from './components/QuoteDisplay.vue';
import CurrencyTable from './components/CurrencyTable.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    QuoteDisplay,
    CurrencyTable,
    Footer,
  },
};
</script>
