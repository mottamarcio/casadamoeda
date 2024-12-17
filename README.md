# Casa da Moeda 💰

## Descrição do Projeto
O **Casa da Moeda** é uma aplicação front-end desenvolvida com **Vite**, **Vue 3** e **TypeScript** para exibir a cotação em tempo real do **dólar americano** e outras moedas importantes, como **euro**, **libra** e **iene japonês**. A aplicação utiliza a **API AwesomeAPI** para obter os valores das cotações.

O projeto é responsivo e utiliza **Bootstrap 5** para estilização, garantindo uma interface moderna e amigável.


## 🚀 **Funcionalidades**
- 📈 Exibição em tempo real da cotação do **dólar americano**.
- 🌍 Tabela com cotações de outras moedas, incluindo:
  - Euro (EUR)
  - Libra Esterlina (GBP)
  - Iene Japonês (JPY)
- 🇺🇸 Exibição de **bandeiras dos países** ao lado das moedas.
- ⏳ Estado de carregamento (loading) ao buscar as cotações.
- ⚠️ Tratamento de erros em caso de falha ao acessar a API.


## 🛠️ **Tecnologias Utilizadas**
- **Vite**: Ferramenta rápida para criação de projetos front-end.
- **Vue 3**: Framework JavaScript progressivo.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Bootstrap 5**: Framework CSS para estilização.
- **Axios**: Cliente HTTP para consumir a API.


## ⚙️ **Pré-requisitos**
Antes de iniciar, você precisará ter instalado:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)


## 🚀 **Instalação e Execução**
Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/mottamarcio/casadamoeda.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd casadamoeda
   ```

3. **Instale as dependências**:
   ```bash
   yarn install
   ```

4. **Execute o projeto**:
   ```bash
   yarn dev
   ```

5. Acesse o projeto no navegador:
   ```text
   http://localhost:5173
   ```


## 📂 **Estrutura do Projeto**
A estrutura do projeto está organizada da seguinte forma:

```text
casa-da-moeda/
├── src/
│   ├── api/                  # Funções de consumo da API
│   │   └── currencyQuotes.ts
│   │   └── dollarQuote.ts
│   ├── components/           # Componentes Vue
│   │   ├── Navbar.vue
│   │   ├── QuoteDisplay.vue
│   │   └── CurrencyTable.vue
│   │   └── Footer.vue
│   ├── style.css             # Estilos globais (Bootstrap e fontes)
│   ├── App.vue               # Componente raiz
│   ├── main.ts               # Arquivo principal
├── index.html                # HTML principal
└── package.json              # Dependências e scripts
```


## 🔗 **API Utilizada**
As cotações são obtidas através da **AwesomeAPI**:  
[https://economia.awesomeapi.com.br/](https://economia.awesomeapi.com.br/)

**Exemplo de Endpoint Utilizado**:
```text
https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL
```


## 👨‍💻 **Como Contribuir**
Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um **fork** deste repositório.
2. Crie uma nova **branch**:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. Faça suas alterações e **commit**:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie suas alterações:
   ```bash
   git push origin feature/minha-feature
   ```
5. Abra um **Pull Request**.


## ❤️ **Agradecimentos**
Feito com **❤️** por Márcio Motta.


### **Licença**
Este projeto está sob a licença Apache 2.0. Sinta-se livre para usá-lo e modificá-lo.  
[Leia mais sobre a licença](https://opensource.org/license/apache-2-0).