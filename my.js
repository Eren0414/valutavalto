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
      apiKey: "fca_live_BTlzHh78DJydSlUezWZ9gkLglkl9apDbWpixnygQ",
      value: 1,
      what: "HUF",
      to: "HUF",
      total: null
    };
  },
  async mounted() {
    await this.getCurrencyExchanges();
    await this.onClickCounts();
  },
  methods: {
    async getCurrencyExchanges(){
      const response = await fetch(this.url);
      const data  = await response.json();
      this.currencyExchanges = data.data;
    },
    async onClickCounts(){
      await this.getCurrencyExchanges();
      this.total = this.value * this.currencyExchanges[this.to];
    },
  },
  computed: {
    url() {
      return `https://api.freecurrencyapi.com/v1/latest?apikey=${this.apiKey}&currencies=${this.currenciesLabel}&base_currency=${this.what}`;
    },
    
    currenciesLabel() {
      return this.currencies.map((currencies) => currencies.label).join("%2C");
    }
  },

}).mount('#app')