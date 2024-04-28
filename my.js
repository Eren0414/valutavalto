const { createApp } = Vue;

createApp({
  data() {
    return {
      currencyExchanges: [],
      currencies: [
          { name: "USA dollár", symbol: "$", label: "USD" },
          { name: "Magyar Forint", symbol: "Ft", label: "HUF" },
          { name: "Euró", symbol: "€", label: "EUR" },
          { name: "Orosz Rubel", symbol: "₽", label: "RUB" }
      ],
      apiKey: ""
    }
  }
}).mount('#app')