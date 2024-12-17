<template>
    <div class="text-center my-auto">
        <h1 id="dollar-title">A cotação do <strong>Dólar Americano (USD)</strong> hoje é:</h1>
        <h2 v-if="loading" class="display-4 mt-3">Carregando...</h2>
        <h2 v-else class="display-4 mt-3" id="quote"><strong>{{ dollarQuote }}</strong></h2>
        <p v-if="error" class="text-danger mt-3">{{ error }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getDollarQuote } from '../api/dollarQuote';

export default defineComponent({
    name: 'QuoteDisplay',
    setup() {
        const dollarQuote = ref<string>(''); // Armazena a cotação do dólar
        const loading = ref<boolean>(true);  // Estado de carregamento
        const error = ref<string | null>(null); // Armazena mensagens de erro

        // Função para buscar a cotação
        const fetchDollarQuote = async () => {
            try {
                const quote = await getDollarQuote();
                dollarQuote.value = `R$ ${parseFloat(quote).toFixed(2).replace(".", ",")}`;
            } catch (err: any) {
                error.value = err.message;
            } finally {
                loading.value = false;
            }
        };

        // Chama a API quando o componente é montado
        onMounted(() => {
            fetchDollarQuote();
        });

        return { dollarQuote, loading, error };
    },
});
</script>