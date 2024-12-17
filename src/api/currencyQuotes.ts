import axios from 'axios';

export const getCurrencyQuotes = async () => {
    try {
      const response = await axios.get(
        'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,AUD-BRL,CAD-BRL,CHF-BRL,CNY-BRL,SEK-BRL,NZD-BRL,MXN-BRL,SGD-BRL,HKD-BRL,NOK-BRL,DKK-BRL,ZAR-BRL,RUB-BRL,INR-BRL,TRY-BRL,ILS-BRL'
      );
  
      return [
        { name: 'Euro', codein: 'EUR', value: response.data.EURBRL.bid, flag: '🇪🇺' },
        { name: 'Libra Esterlina', codein: 'GBP', value: response.data.GBPBRL.bid, flag: '🇬🇧' },
        { name: 'Iene Japonês', codein: 'JPY', value: response.data.JPYBRL.bid, flag: '🇯🇵' },
        { name: 'Dólar Australiano', codein: 'AUD', value: response.data.AUDBRL.bid, flag: '🇦🇺' },
        { name: 'Dólar Canadense', codein: 'CAD', value: response.data.CADBRL.bid, flag: '🇨🇦' },
        { name: 'Franco Suíço', codein: 'CHF', value: response.data.CHFBRL.bid, flag: '🇨🇭' },
        { name: 'Yuan Chinês', codein: 'CNY', value: response.data.CNYBRL.bid, flag: '🇨🇳' },
        { name: 'Coroa Sueca', codein: 'SEK', value: response.data.SEKBRL.bid, flag: '🇸🇪' },
        { name: 'Dólar Neozelandês', codein: 'NZD', value: response.data.NZDBRL.bid, flag: '🇳🇿' },
        { name: 'Peso Mexicano', codein: 'MXN', value: response.data.MXNBRL.bid, flag: '🇲🇽' },
        { name: 'Dólar de Singapura', codein: 'SGD', value: response.data.SGDBRL.bid, flag: '🇸🇬' },
        { name: 'Dólar de Hong Kong', codein: 'HKD', value: response.data.HKDBRL.bid, flag: '🇭🇰' },
        { name: 'Coroa Norueguesa', codein: 'NOK', value: response.data.NOKBRL.bid, flag: '🇳🇴' },
        { name: 'Coroa Dinamarquesa', codein: 'DKK', value: response.data.DKKBRL.bid, flag: '🇩🇰' },
        { name: 'Rand Sul-Africano', codein: 'ZAR', value: response.data.ZARBRL.bid, flag: '🇿🇦' },
        { name: 'Rublo Russo', codein: 'RUB', value: response.data.RUBBRL.bid, flag: '🇷🇺' },
        { name: 'Rupia Indiana', codein: 'INR', value: response.data.INRBRL.bid, flag: '🇮🇳' },
        { name: 'Lira Turca', codein: 'TRY', value: response.data.TRYBRL.bid, flag: '🇹🇷' },
        { name: 'Novo Shekel Israelense', codein: 'ILS', value: response.data.ILSBRL.bid, flag: '🇮🇱' },
      ];
    } catch (error) {
      console.error('Erro ao buscar cotações:', error);
      throw new Error('Falha ao buscar as cotações. Tente novamente.');
    }
  };