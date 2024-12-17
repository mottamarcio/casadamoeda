import axios from 'axios';

export const getDollarQuote = async () => {
  try {
    const response = await axios.get(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL'
    );
    return response.data.USDBRL.bid; // Retorna o valor da cotação
  } catch (error) {
    console.error('Erro ao buscar a cotação do dólar:', error);
    throw new Error('Falha ao buscar a cotação. Tente novamente mais tarde.');
  }
};